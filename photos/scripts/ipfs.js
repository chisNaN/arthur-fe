const ipfs = IpfsHttpClient('ipfs.infura.io', '5001', { protocol: 'https' });
function addFromBuffer() {
  const files = document.querySelector('input[type=file]').files;
  if(files.length > 0) {
    console.clear();
    return Promise.all(Array.from(files).map(file => {
        const reader2 = new FileReader();
        reader2.readAsArrayBuffer(file);
        return new Promise((resolve, reject) => {
          reader2.addEventListener('load', async () => {
            try{
              const buffer = IpfsHttpClient.Buffer.from(reader2.result);
              const infura = await ipfs.add(buffer);
              resolve(infura[0].hash);
            }catch(e){
              console.warn(e);
              // reject here will just return undefined
              // and send the file in error to the catch block
              reject(file.name);
            }
          }, false); // end reader load
        }).catch(e => {
          console.warn(e);
          // ATTENTION: THIS line is THE TRICK to be able to retrieve the filename in error
          // and to merge it with others successful image uploaded to IPFS
          return file.name;
        }); // end new promise
    })); // end Promise all
  } // end if
}
function hashsUploadedState(hashs) {
  /*
  this part is to sort hashs from potential image that had an error and were not uploaded to IPFS
  mixedOutput = { hashs: ['QmY5whtMc8QgQ6ARZEUNWj3mNsEvvgsQecgDXYubpZXVWL'], picsError: ['img.jpg'] }
  */
  return hashs.reduce((acc, curr) => {
    if(curr.length !== 46 && curr.substr(0, 2) !== 'Qm') { // ipfs hash are always 46 length starting Qm
      let picsError;
      if(Array.isArray(acc.picsError)) {
       picsError = acc.picsError.concat(curr);
      }else{
        picsError = [curr];
      }
      return Object.assign(acc, { picsError });
    }else {
      let hashs;
      if(Array.isArray(acc.hashs)) {
       hashs = acc.hashs.concat(curr);
      }else{
        hashs = [curr];
      }
      return Object.assign(acc, { hashs });
    }
  }, {}); // end reduce
}
async function addFromBufferRecursive(inc = 0, files = null, ipfsHashs = []) {
  if(inc === 0) {
    files = document.querySelector('input[type=file]').files;
  }
  if(files.length > 0) {
    try {
      const file = files[inc];
      console.log('file', file);
      console.log('files.length === inc', `${files.length} === ${inc}`);
      const reader = new FileReader();
      reader.readAsArrayBuffer(file);
      const P = await new Promise((resolve, reject) => {
        reader.addEventListener('load', async _ => {
          try{
            const buffer = IpfsHttpClient.Buffer.from(reader.result);
            const infura = await ipfs.add(buffer);
            resolve(infura[0].hash);
          }catch(e){
            console.warn('inside reader load', e);
            // reject here will just return undefined
            // and send the file in error to the catch block
            reject(file);
          }
        }, false); // end reader load
      }).catch(e => {
        console.warn('inside promise catch', e);
        // ATTENTION: THIS line is THE TRICK to be able to retrieve the filename in error
        // and to merge it with others successful image uploaded to IPFS
        return file;
      });
      if(typeof P === 'string') { // ipfs hash like  QmTyvZVHV9gnfhgfPxEEqTSer19LRAbgumFvUrY6pNgBBK
        console.log('P', P);
        ipfsHashs.push(P);
         if(++inc < files.length) { // incrementing to fetch next file
          return addFromBufferRecursive(inc, files, ipfsHashs);
         }
      }else {
        // just retry on same file;
        console.warn(`Could not upload ${P.name} to IPFS, retry...`);
        return addFromBufferRecursive(inc, files, ipfsHashs);
      }
    }catch(e){
      console.warn('global UNCAUGHT error in addFromBuffer', e);
    }finally{
      if(ipfsHashs.length === files.length) {
        console.log('i will give ALL ipfsHashs during last recursive call => ');
        return ipfsHashs; // now we should be able to return from inside to outside all hashs
      }
    }
  }else{
    console.warn('no files');
    return 'no files';
  }
}
document.addEventListener('DOMContentLoaded', async _ => {
  const URL = 'https://sleepy-bartik-4640.arukascloud.io/galleries';
  const remoteDB = new PouchDB(URL, { skip_setup: true });
  const galNames = await remoteDB.allDocs();
  with(document.querySelector('#chosenGal')){
    innerHTML = galNames.rows.map(v => `<option value="${v.id}">${v.id}</option>`).join('');
    style.display = 'block';
  }

  document.querySelector('#createGal').addEventListener('click', () => {
    const _id = document.querySelector('#galName').value.trim();
    if(_id !== '') {
      document.querySelector('#createGal').style.display = 'none';
      document.querySelector('#output').innerHTML = '';
      addFromBuffer().then(hashs => {
        const ipfsHashsUploadedState = hashsUploadedState(hashs);
        if(ipfsHashsUploadedState.picsError) {
          document.querySelector('#output').innerHTML = 'The following pictures were not uploaded: ';
          document.querySelector('#output').innerHTML += ipfsHashsUploadedState.picsError.join();
        }
        if(ipfsHashsUploadedState.hashs) {
          if(!ipfsHashsUploadedState.picsError) {
            document.querySelector('#output').innerHTML = 'All pictures uploaded to IPFS<br>';
          }
          remoteDB.put({ _id, hashs: ipfsHashsUploadedState.hashs }).then(r => {
            console.log(r);
            document.querySelector('#output').innerHTML += '<br>Database insertion OK';
          }).catch(e => {
            console.warn(e);
            document.querySelector('#output').innerHTML += 'error database insertion (watch the console)';
          }).finally(document.querySelector('#createGal').style.display = 'block');
        }
      }).catch(console.warn); // end addFromBuffer
    } // end if
  });
  document.querySelector('#updateGal').addEventListener('click', async _ => {
    const updateGalName = document.querySelector('#chosenGal').value.trim();
    if(updateGalName !== '') {
      console.clear();
      try {
        document.querySelector('#updateGal').style.display = 'none';
        document.querySelector('#output').innerHTML = 'Please wait while images are being uploaded...';
        // we make sure we can retrieve the previous db state before trying to upload pics
        const gal = await remoteDB.get(updateGalName, { conflicts: true });
        console.log('gal ', gal);
        const ipfsHashsUploaded = await addFromBufferRecursive();
        // in case a previous update had uploads failed
        const onlyNewHashs = ipfsHashsUploaded.reduce((acc, curr) => {
          if(!gal.hashs.includes(curr)) {
            return  [...acc, curr]; // acc.concat(curr);
          }else{
            return acc;
          }
        }, []);
        gal.hashs.push(...onlyNewHashs);
        const result = await remoteDB.put(gal);
        console.log(result);
        document.querySelector('#output').innerHTML = 'All pictures uploaded to IPFS and database insertion OK';
      }catch(e) {
        console.warn(e);
        document.querySelector('#output').innerHTML += e;
      }finally{
        document.querySelector('#updateGal').style.display = 'block';
      }
    }
  });

  document.querySelector('#loginForm').addEventListener('submit', event => {
    event.preventDefault();
    const datasForm = new FormData(event.target);
    remoteDB.login(datasForm.get('email'), datasForm.get('password')).then((infos) => {
      console.log(infos);
      document.querySelector('#msgLogin').innerHTML = "You're logged in!";
    }).catch(e => {
      console.warn(e);
      document.querySelector('#msgLogin').innerHTML = e.message;
    }); // end pouch login
  }) // end submit form
}); // end DOMContentLoaded
