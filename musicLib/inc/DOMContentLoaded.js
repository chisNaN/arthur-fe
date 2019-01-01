document.addEventListener('DOMContentLoaded', async _ => {
  await musicLib.loadJson(); // we dont use the response after
  document.querySelector('#numArtists').innerHTML = musicLib.artists.length - 1; // to exclude VA (various artists is not an artist)
  document.querySelector('#search').style.display = 'block';
  let html = '';
  for(let alpha=64; ++alpha<91;) {
      html += `&nbsp;<a href="#">${String.fromCharCode(alpha)}</a>`;
  }
  document.querySelector('#letters').innerHTML = `<a href="#">#</a>${html}`;
  // listeners on letters
  document.querySelectorAll('#letters a').forEach(v => {
    v.addEventListener('click', () => {
      const html = musicLib.displayArtistsByLetter(v.textContent).map(v => `<a href="#" onclick="displayAlbums('${v.replace(/'/g, "\\'")}');">${v.substr(0, 20)}</a>`).join('');
      document.querySelector('#artists').innerHTML = html;
    });
  });// end foreach letters a
  // listeners on search by artist
  document.querySelector('#searchByArtist').addEventListener('click', () => {
    const search = document.querySelector('#track').value.trim();
    if(search.length > 2) {
      const results = musicLib.searchArtist(search.toLowerCase());
      if(results.length > 0) {
        document.querySelector('#artists').innerHTML = results.map(v => `<a href="#" onclick="displayAlbums('${v.replace(/'/g, "\\'")}')">${v.substr(0, 20)}</a>`).join('');
      }else document.querySelector('#albums').innerHTML = 'Oups, it seems your search did not yield any results!';
    }
  });
  // search by track section
  document.querySelector('#searchByTrack').addEventListener('click', () => {
    const search = document.querySelector('#track').value.trim();
    if(search.length > 2) {
      const results = musicLib.getTracks(search.toLowerCase());
      if(results.length > 0) {
        document.querySelector('#albums').innerHTML = results.map(v => `<span>${v}</span>`).join('');
      }else document.querySelector('#albums').innerHTML = 'Oups, it seems your search did not yield any results!';
    }
  });
}); // end DOMContentLoaded
