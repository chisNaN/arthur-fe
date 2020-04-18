class MusicLib {

  constructor() {
    this.json = null;
    this.currentArtists = null;
    this.currentAlbums = null;
    this.currentTracks = null;
  }

  async loadJson() {
    try{
      let library = localStorage.getItem('musicLib')
      if (library) {
        library = JSON.parse(library)
      } else {
        const url = 'https://ipfs.infura.io/ipfs/QmYjHzawvLrk3rbeFbMg9sgkNBxFBqkMcyV3ab6BThiQuj'
        library = await (await fetch(url)).json()
        localStorage.setItem('musicLib', JSON.stringify(library))
      }
      return this.json = library
    }catch(e){
     console.warn(e);
     document.querySelector('top').innerHTML = e.toString()
    }
  }

  displayArtistsByLetter(currentLetter) {
    const [, json] = Object.entries(this.json).filter(v => v[0] === currentLetter)[0];
    this.currentArtists = json;
    return Object.keys(json);
  }

  displayAlbum(whichArtist) {
    this.currentAlbums = this.currentArtists[whichArtist];
    return Object.keys(this.currentAlbums);
  }

  displayTracks(whichAlbum) {
    if(this.currentAlbums[whichAlbum]) {
      this.currentTracks = this.currentAlbums[whichAlbum];
    }else{
      if(Array.isArray(this.currentTracks)) {
        const tracksOneAlbum = this.currentTracks.filter(v =>  v[whichAlbum])[0];
        this.currentTracks = Object.values(tracksOneAlbum)[0];
      }else{
        // Brian eno -> no pussyfooting
        this.currentTracks = this.currentTracks[whichAlbum];
      }
    }
    if(Array.isArray(this.currentTracks)) {
      return Object.values(this.currentTracks).map(v => {
        if(typeof v != 'string') {
          return Object.keys(v);
        }else{
          return v;
        }
      });
    }else { // case Air -> albums
      return Object.keys(this.currentTracks).map(v => [v]); // return object keys into an array
    }
  }

  get artists() {
    return Object.values(this.json).map(v => v).reduce((acc, curr) => [...acc, ...Object.entries(curr)], []);
  }

  searchArtist(artist) {
    this.currentArtists = this.artists.filter(v => v[0].toLowerCase().includes(artist)).reduce((acc, curr) => {
      return Object.assign(acc, { [curr[0]]: curr[1] });
    }, {});
    return Object.keys(this.currentArtists);
  }

  getTracks(searchedTrack = '', jsonSection = this.json) {
    return Object.values(jsonSection).reduce((acc, curr) => {
      if(typeof curr == 'string') {
        if(/flac|wav|ape|aif|dsf/i.test(curr)) {
          if(curr.toLowerCase().includes(searchedTrack)) { // will return true for empty string
            return acc.concat(curr);
            //return [...acc, curr];
          }else {
            return acc;
          }
        }else{
          return acc; // must return accumulator otherwise
        }
      }else{
        return acc.concat(this.getTracks(searchedTrack, curr));
        //return [...acc, this.getTracks(searchedTrack, curr)];
      }
    }, []);
  }

} // end of class
