const googlePrefix = 'https://drive.google.com/uc?id='
// const googlePostfix = '&export=download'
document.addEventListener('DOMContentLoaded', async _ => {
  try {
    let notSplicedTracks = null
    let library = localStorage.getItem('lib')
    const audio = document.querySelector('audio')
    const urlMacro = 'https://script.google.com/macros/s/AKfycbwYug5msnkvOt67uGxYaE3EVpxGq50dX4V-9WheJt08wqECIRy3/exec'
    let currentTrackIndex = 0
    const loadTrack = async () => {
      try {
        document.querySelector('#output').innerHTML = ''
        currentTrackIndex = ~~(Math.random() * library.length)
        audio.src = googlePrefix + Object.values(library[currentTrackIndex])[0]
        audio.load()
        audio.play()
        const trackName = Object.keys(library[currentTrackIndex])[0]
        document.querySelector('marquee').innerHTML = trackName
        document.title = trackName
        library.splice(currentTrackIndex, 1) // so we cannot repeat a track...
        console.warn(library[currentTrackIndex]) // to check if its a diff trick
      } catch (e) {
        console.warn(e)
      }
    } // end loadTrack
    const loadTrack2 = async index => {
      document.querySelector('#output').innerHTML = ''
      document.querySelector('marquee').innerHTML = 'Wait please...'
      audio.src = googlePrefix + Object.values(notSplicedTracks[index])[0]
      audio.load()
      audio.play()
      const trackName = Object.keys(notSplicedTracks[index])[0]
      document.querySelector('marquee').innerHTML = trackName
      document.title = trackName
    } // end loadTrack2
    if (!library) {
      document.querySelector('h1').innerHTML = 'Please wait for the library to load...'
      const response = await fetch(urlMacro)
      library = await response.json()
      document.querySelector('h1').innerHTML = 'Library successfully loaded!'
      console.log(library)
      localStorage.setItem('lib', JSON.stringify(library))
      // ------ need to make a REAL CLONE of all lib
      notSplicedTracks = [...library]
      loadTrack()
    } else {
      console.log('library already in cache you can check localStorage')
      library = JSON.parse(library)
      // ------ need to make a REAL CLONE of all lib
      notSplicedTracks = [...library]
      loadTrack()
      fetch(urlMacro).then(r => r.json())
      .then(lib2 => {
        if (lib2.length !== notSplicedTracks.length) {
        document.querySelector('font').style.display = 'block'
        }
      })
      .catch(console.warn)
    }
    // _______________
    document.querySelector('h1').innerHTML = `${notSplicedTracks.length} tracks`
    document.querySelector('#player').style.display = 'block'
    const options = notSplicedTracks.map((v, k) => {
      const trackName = Object.keys(v)[0].length > 50 ? Object.keys(v)[0].substr(0, 50) : Object.keys(v)[0]
      return `<option>${trackName}</option>`
    }).join('')
    document.querySelector('datalist').innerHTML = options
    const { matches } = window.matchMedia("(min-width: 1000px)")
    if (matches) {
      document.querySelector('form').insertAdjacentHTML('beforeend', '<select multiple></select>')
      document.querySelector('select').innerHTML = options
    } else {
      document.querySelector('#left').style.width = '50%'
      document.querySelector('#right').style.width = '50%'
    }
    // --------- --------- audio LISTENERS --------- ---------
    audio.addEventListener('ended', async _ => {
      try {
        console.warn('song ended')
        await loadTrack()
      } catch (e) {
        console.warn(e)
      }
    }) // end ended
    audio.addEventListener('play', e => {
      try {
        const jacket = document.querySelector('.jacket')
        if (jacket) {
          jacket.style.animationPlayState = "running"
        }
      } catch (e) {
        console.warn(e)
      }
    })
    audio.addEventListener('pause', e => {
      try {
        const jacket = document.querySelector('.jacket')
        if (jacket) {
          jacket.style.animationPlayState = "paused"
        }
      } catch (e) {
        console.warn(e)
      }
    })
    document.querySelector('a').addEventListener('click', async e => {
      try {
        document.querySelector('marquee').innerHTML = 'Wait please...'
        e.currentTarget.style.display = 'none'
        console.warn('click next track')
        await loadTrack()
        document.querySelector('a').style.display = 'inline'
      } catch (e) {
        console.warn(e)
      }
    }) // end click
    document.addEventListener('keyup', async e => {
      try {
        if (e.keyCode === 39) {
          document.querySelector('a').style.display = 'none'
          document.querySelector('marquee').innerHTML = 'Wait please...'
          console.log('keycode', e.keyCode)
          await loadTrack()
          document.querySelector('a').style.display = 'inline'
        }
      } catch (e) {
        console.warn(e)
      }
    }) // end keyup
    // this function SHOULD play a track from ALL copied library
    if (matches) {
      document.querySelector('select').addEventListener('click', async e => {
        try {
          await loadTrack2(e.currentTarget.selectedIndex)
        } catch (e) {
          console.warn(e)
        }
      }) // end change
    }
    document.querySelector('form').addEventListener('submit', async e => {
      try {
        e.preventDefault()
        const inputVal = document.querySelector('input[type=search]').value.trim()
        console.log('inputVal', inputVal);
        if (inputVal.length > 2) {
          const datalist = document.querySelector('datalist')
          let i = -1
          for (i; ++i < datalist.options.length;) {
            // the upload track name can have lef and/or right blank spaces so we need to trim also there
            if (inputVal === datalist.options[i].innerText.trim()) {
              break
            }
          }
          if (i !== notSplicedTracks.length) {
            await loadTrack2(i)
          } else {
            alert('NO RESULTS')
          }
        }
      } catch (e) {
        console.warn(e)
      }
    }) // end submit
    document.querySelector('button').addEventListener('click', async _ => {
      try {
        const token = document.querySelector('#token').value.trim()
        if (token.length) {
          document.querySelector('button').style.display = 'none'
          const body = new FormData
          const idTrack = audio.src.substring(audio.src.indexOf('=') + 1, audio.src.indexOf('&'))
          body.append('idTrack', idTrack)
          body.append('token', token)
          const r = await fetch(urlMacro, { method: 'post', body })
          const json = await r.json()
          console.log(json);
          if (json.status === 'success' && json.result) {
            let html = ''
            for (const [k, v] of Object.entries(json.result)) {
              if (typeof v === 'string') {
                if (k === 'song_link' && v.match(/HTTP/i)) {
                  html += `<u>${k}</u>&nbsp;<a href="${v}" target="_blank">${v}</a><br>`
                } else {
                  html += `<u>${k}</u>&nbsp;${v}<br>`
                }
              } else {
                /*if (k === 'apple_music') {
                  html += ``
                  break;
                } else */if (k === 'deezer') {
                  html += `<img class="jacket" src="${v.album.cover_medium}" />`
                  break
                } else if (k === 'spotify') {
                  html += `<img class="jacket" src="${v.album.images[1].url}" />`
                }
              }
            }
            document.querySelector('#output').innerHTML = html
            if (document.querySelector('audio').paused) {
              document.querySelector('.jacket').style.animationPlayState = "paused"
            }
          } else {
            document.querySelector('#output').innerHTML = '<h2 style="color: red;">Could not find results!</h2>'
          }
        } else{
          console.warn('no token provided');
        }
      } catch (e) {
        console.warn(e)
      } finally {
        document.querySelector('button').style.display = 'block'
      }
    }) // end click
  } catch (e) {
    console.warn(e)
    if (e.toString().includes('localStorage')) {
      document.querySelector('h1').innerHTML = 'Cannot read localStorage: do you use BRAVE navigator and enabled all cookies?'
    } else {
      document.querySelector('h1').innerHTML = e.toString()
    }
  }
}) // end DOMContentLoaded
