const fs = require('fs');
const ds = require('path').sep;
const eol = require('os').EOL;
const ws = fs.createWriteStream('/Users/art/Documents/arthur-fe/musicLib/lib.json');
let jsonOutput = '';

function R(srcDir = '/Users/art/Documents/HQ Music', indent = -1) {
  indent++;
  const [ fd, totalFilesBefore, totalDirBefore ] = sortElements(srcDir);
  //console.log('fd.length ',fd.length, 'totalFilesBefore '+totalFilesBefore, 'totalDirBefore '+ totalDirBefore);
  if (Array.isArray(fd)) {
      let k2;
      /*
      * PROBLEM is located on how is handle numDirs at line 53 in if (stat.isDirectory(fullPath))
      * it does not open enough curly bracets when severals files mixed between several directories
      */
      let numDirs = 0;

      if (totalFilesBefore > 0) { // added for cases like VA - Kiko Navarro
        jsonOutput += `${'   '.repeat(indent)}[`;
      }

      fd.forEach((v, k) => {
          const fullPath = srcDir+ds+v;
          const stat = fs.statSync(fullPath);
          let emptyFolder = ''
          if (stat.isDirectory(fullPath)) {
            const fd2 = sortElements(fullPath)[0];
            if(fd2.length === 0) {
              emptyFolder = v;
            }
          }
            k2 = k + 1;
            let v2;
            if (v.includes('"')) {
              v2 = v.replace(/"/g, '\\"'); // need to replace double quotes
            }else if(v.includes('\\')){
              v2 = v.replace(/\\/g, '\\\\'); // need to replace backslash also
            } else {
              v2 = v;
            }

            if(stat.isFile(fullPath)) {
              if (k2 === totalFilesBefore) {
                jsonOutput += `"${v2}"`;
              } else {
                // for file separation
                jsonOutput += `"${v2}", `;
              }
            }
            if (stat.isDirectory(fullPath)) {
              numDirs++;
              if (numDirs === 1) { // first dir of each level
                if (totalFilesBefore === 0) {
                  // opening dir containing only 1 or more dirs
                  if(v === emptyFolder){
                    jsonOutput += `${'   '.repeat(indent)}{ "${v2}": "NO DATAS"`;
                  }else {
                    jsonOutput += `${'  '.repeat(indent)}{ "${v2}":${eol}`;
                  }
                } else {
                  if(v === emptyFolder) {
                    jsonOutput += `,${eol}${'   '.repeat(indent)} { "${v2}": "NO DATAS"`;
                  }else {
                    jsonOutput += `,${eol}${'   '.repeat(indent)} { "${v2}":${eol}`;
                  }
                }
              } else { // if more than 1 dir in current dir
                if(totalFilesBefore === 0) {
                  if(v === emptyFolder) {
                    jsonOutput += `${'   '.repeat(indent)} "${v2}": "NO DATAS"`;
                  } else {
                    jsonOutput += `${'   '.repeat(indent)} "${v2}":${eol}`;
                  }
                } else {
                  if(v === emptyFolder) {
                    jsonOutput += `${'   '.repeat(indent)} { "${v2}": "NO DATAS"`;
                  } else {
                    jsonOutput += `${'   '.repeat(indent)} { "${v2}":${eol}`;
                  }
                }
              }
              // --------------- recursive call
              R(fullPath, indent);
              // --------------- recursive call
              // closing library -> letter -> artist -> album
              if (k2 === totalDirBefore + totalFilesBefore) {
                  jsonOutput += `${eol}${'   '.repeat(indent)}}`;
              } else {
                // WILL CLOSE all array (except last of object) and all objects except last ones
                if(totalFilesBefore === 0){
                  jsonOutput += `,${eol}`;
                }else {
                  if(v === emptyFolder){
                    jsonOutput += `},${eol}`;
                  }else {
                    jsonOutput += `${eol}${'   '.repeat(indent)} },${eol}`;
                  }
                }
              }
            } // END IS DIRECTORY !!!!
            // finally closing brackets which is array that could contain files AND DISS
            if (totalFilesBefore > 0 && k2 === totalFilesBefore + totalDirBefore) { // if there's at least 1 file before and no EMPTY DIRS
              jsonOutput += ']';
            }

      }); // end foreach
    indent--;
    if(indent === -1) {
      return jsonOutput;
    }
  } // end if is array

}
const json = R('/Volumes/G-DRIVE/Music/HQ Music');
ws.write(json);
ws.end();

// will sort by filenames and dirnames and put all dirs at the end of array
function sortElements(srcDir) {
  const fd = fs.readdirSync(srcDir);
  if (Array.isArray(fd)) {
    const dirs = fd.filter(v => {
      if(fs.statSync(srcDir+ds+v).isDirectory(srcDir+ds+v)) {
        return v !== '.git';
      }
    }).sort();
    
    const files = fd.filter(v => {
        if (fs.statSync(srcDir+ds+v).isFile(srcDir+ds+v)) {
          return !v.includes('DS_Store') && !v.startsWith('._') && !v.startsWith('~BitTorrent') && !v.startsWith('~uTorrent') && v !== 'Thumbs.db' && v !== 'Desktop.ini';
        }
    }).sort();

    if(dirs.length > 0 && files.length > 0) {
       return [files.concat(dirs), files.length, dirs.length];
    }else if(dirs.length === 0 ^ files.length === 0) {
      return dirs.length > 0 ? [dirs, 0, dirs.length] : [files, files.length, 0];
    }else{ // this is required for inside the forEach loop
      return [[], 0, 0];
    }
  }else{
    return false;
  }
}
