function numArtists()
{
    var oReq = new XMLHttpRequest();
    document.getElementById('containerProgress').innerHTML = '<img src="../images/spinner.gif" border="none"/>';

    oReq.open('GET', 'xml/music-lib.xml', true);
    // oReq.addEventListener("progress", updateProgress, false);
    // oReq.addEventListener("load", transferComplete);
    // oReq.addEventListener("error", transferFailed);
    // oReq.addEventListener("abort", transferCanceled);
    oReq.onload = function(oEvent)
    {
        if (oReq.status == 200)
        {
            var xml = oReq.responseXML;
            var numArtists = 0;

            try{

              for(var i = 0; i < xml.firstChild.children.length; i++){

                  numArtists += xml.firstChild.children[i].children.length;
              }
              document.getElementById('containerProgress').innerHTML = '';
              document.getElementById('numArtists').innerHTML = numArtists.toString();
              document.getElementById('top').style.display = 'flex';
              document.getElementById('subSections').style.display = 'flex';
            }catch(e) {
              document.getElementById('numArtists').innerHTML = 'Error ' + e.toString();
            }

        }else {
          document.getElementById('containerProgress').innerHTML = '';
          document.getElementById('numArtists').innerHTML = 'Error ' + oReq.status;
        }
    };
    oReq.send();
}

function updateProgress (oEvent) {

    if (oEvent.lengthComputable) {

      var percent = Math.round((oEvent.loaded / oEvent.total) * 100)
      document.getElementById('progress').value = percent;
      document.getElementById('percent').innerHTML = `${percent} %`;

                // ...
    } else {
        // Unable to compute progress information since the total size is unknown
    }
}


function transferComplete(evt) {
    document.getElementById('containerProgress').innerHTML = '';
}

function transferFailed(evt) {
    document.getElementById('containerProgress').innerHTML = 'An error occurred while transferring the file.';
}

function transferCanceled(evt) {
    console.log("The transfer has been canceled by the user.");
}

function displayArtists(xmlTag, divOutput){

    document.getElementById('albums').style.display = 'none';
    document.getElementById('tracks').style.display = 'none';

    var oReq = new XMLHttpRequest();

    oReq.open('GET', 'xml/music-lib.xml', true);
    oReq.onload = function(oEvent)
    {
        if (oReq.status == 200)
        {
            var xml = oReq.responseXML;
            //console.log(xml.childNodes.length);

            var subNode = xml.getElementsByTagName(xmlTag).length > 1 ? xml.getElementsByTagName(xmlTag)[1] : xml.getElementsByTagName(xmlTag)[0];

            //console.log(xml.getElementsByTagName(xmlTag).length);
            var html = '';

            for(var i = 0; i < subNode.children.length; i++){

                var artistName = subNode.children[i].getAttribute('name').replace('AMPERSAND', '&');

                if(artistName.length > 22){

                    artistName = artistName.substr(0, 22)+'...';
                }

                html += '<a href="#" onclick="displayAlbums(\''+xmlTag+'\', \''+subNode.children[i].tagName+'\', \'albums\');" >'+artistName+'</a>';

            }
            document.getElementById(divOutput).innerHTML = html;
            //this part is just to log data json return from google app (you can comment it)

        }else
        {
            document.getElementById(divOutput).innerHTML = 'Error ' + oReq.status;
        }
    };
    oReq.send();
}

//this could be recursive as we do almost same thing as previously
function displayAlbums(letter, p2ArtistNode, divOutput)
{

    document.getElementById('tracks').style.display = 'none';

    var oReq = new XMLHttpRequest();

    oReq.open('GET', 'xml/music-lib.xml', true);
    oReq.onload = function(oEvent)
    {
        if (oReq.status == 200)
        {
            var xml = oReq.responseXML;
            var subNode = xml.getElementsByTagName(letter).length > 1 ? xml.getElementsByTagName(letter)[1] : xml.getElementsByTagName(letter)[0];
            var html ='';

            for(var i = 0; i < subNode.children.length; i++)
            {

                var artistNode = subNode.children[i];

                if(artistNode.tagName === p2ArtistNode){

                    /* here we to store xml part into localStorage
                     because we judge the remaining data to display should not be so big
                     (taken into account that other pages in the site like photos, tips make use of LS)
                     */

                    var oSerializer = new XMLSerializer();
                    localStorage['musicLib'] = oSerializer.serializeToString(artistNode);

                    //console.log('--- LS from displayAlbum');
                    //console.log(localStorage['musicLib']);


                    for(var j = 0; j < artistNode.children.length; j++){

                        if(artistNode.children[j].getAttribute('name')) { //because there can be a file (then path tag) in the albums dir

                            var albumName = artistNode.children[j].getAttribute('name').replace('AMPERSAND', '&');
                            html += '<a href="#" onclick="displayTracks(\''+p2ArtistNode+'\', \''+artistNode.children[j].tagName+'\');" >'+albumName+'</a>';

                        }
                    }

                    break; //please really important
                }
            }

            document.getElementById(divOutput).innerHTML = html;
            document.getElementById(divOutput).style.display = 'flex';

        }else
        {
            document.getElementById(divOutput).innerHTML = 'Error ' + oReq.status;
        }
    };
    oReq.send();
}

function displayTracks(artistTag, whichAlbum){

    try{

        var albums = localStorage['musicLib'];
        //console.log(albums);

        //https://developer.mozilla.org/en-US/docs/Web/Guide/Parsing_and_serializing_XML
        var oParser = new DOMParser();
        var oDOM = oParser.parseFromString(albums, "text/xml");
        var oSerializer = new XMLSerializer();
        var html = '';
        var artistNode = oDOM.getElementsByTagName(artistTag)[0];
        var lastSlashPos;
        var trackName = '';

        for(var i = 0; i < artistNode.children.length; i++)
        {

            if(whichAlbum !== '')//an album was specified
            {
                if(artistNode.children[i].tagName === whichAlbum)
                {
                    //ATTENTION!!! here we hardly check if the first [0] element is a file
                    //but there could also be other folders inside (typically covers, artworks)

                    if(artistNode.children[i].children[0].tagName === 'path') {

                        for(var j = 0; j < artistNode.children[i].children.length; j++){

                            if(artistNode.children[i].children[j].tagName === 'path'){

                                trackName = artistNode.children[i].children[j].textContent;
                                lastSlashPos = trackName.lastIndexOf('/');
                                html += trackName.substr(lastSlashPos + 1)+'<br>';

                            }else{

                                html += '<a href="#" onclick="displayTracks(\''+artistNode.children[i].tagName+'\', \''+artistNode.children[i].children[j].tagName+'\')">'+artistNode.children[i].children[j].getAttribute('name')+'</a>';
                            }
                        }

                        document.getElementById('tracks').innerHTML = html;
                        document.getElementById('tracks').style.display = 'flex';

                    }else{//need to serialize again and to store in LS

                        localStorage['musicLib'] = oSerializer.serializeToString(artistNode.children[i]);
                        displayTracks(whichAlbum, '');
                    }
                    break;
                }

            }else{//we decide recursive when empty

                //because there could be a "lost file" (generally a cover, cue or log) between folders...
                //otherwise it will render null!
                if(artistNode.children[i].tagName === 'path'){

                    var fileName = artistNode.children[i].textContent;
                    lastSlashPos = fileName.lastIndexOf('/');
                    html += fileName.substr(lastSlashPos + 1)+'<br>';

                }else{

                    html += '<a href="#" onclick="displayTracks(\''+artistTag+'\', \''+artistNode.children[i].tagName+'\');" >'+artistNode.children[i].getAttribute('name')+'</a>';

                }

                //dont forget we are in a loop
                //console.log(i+' === '+artistNode.children.length);

                if(i === artistNode.children.length -1){

                    document.getElementById('albums').innerHTML = html;
                }
            }

        }

        if(html === '') // in case first attempt did not ouptut any html
        {
        //second loop for EPONYM albums
          for(var i = 0; i < artistNode.children.length; i++) {

                console.log('artistTag '+artistTag);
                console.log('artistNode.tagName  '+artistNode.tagName);
                console.log('artistNode.children[i].tagName+  '+artistNode.children[i].tagName);
                //EPONYM album gestion if the three of
                if(artistTag === artistNode.tagName && artistTag === artistNode.children[i].tagName) {
                    console.warn('click from within an EPONYM named album');

                    for (var j = 0; j < artistNode.children[i].children.length; j++) {

                        for (var k = 0; k < artistNode.children[i].children[j].children.length; k++) {
                            console.log(artistNode.children[i].children[j].children[k]);

                            if(artistNode.children[i].children[j].children[k].tagName === 'path') {

                                trackName = artistNode.children[i].children[j].children[k].textContent;
                                lastSlashPos = trackName.lastIndexOf('/');
                                html += trackName.substr(lastSlashPos + 1)+'<br>';

                            }else{

                                html += '<a href="#" onclick="displayTracks(\''+artistNode.children[i].children[j].tagName+'\', \''+artistNode.children[i].children[j].children[k].tagName+'\')">'+artistNode.children[i].children[j].children[k].getAttribute('name')+'</a>';
                            }
                        }

                    }
                }

              }//end first for

              //outside loops
              document.getElementById('tracks').innerHTML = html;
              document.getElementById('tracks').style.display = 'flex';
            }

    }catch(e){

        console.log(e.toString());
        alert('This folder seems to be empty!');
    }
}

var count2 = 0;
function searchTracks(search, nextNode)
{

    if(search !== '')
    {
      count2++;

        if(nextNode === '')
        {
            //need to empty before everything
            document.getElementById('tracks').style.display = 'flex';
            document.getElementById('tracks').innerHTML = '<p><img src="../images/spinner.gif" border="none" /></p>';

            var oReq = new XMLHttpRequest();

            oReq.open('GET', 'xml/music-lib.xml', true);
            oReq.onload = function(oEvent)
            {
                if (oReq.status == 200)
                {
                    var xml = oReq.responseXML;

                    //letters
                    for(var i = 0; i < xml.firstChild.children.length; i++){

                        if(xml.firstChild.children[i].tagName !== 'path'){

                            searchTracks(search, xml.firstChild.children[i]);

                        }//this should never happen
                    }

                }else {
                    document.getElementById('numArtists').innerHTML = 'Error ' + oReq.status;

                }
            };

            oReq.send();

        }else{

            for(var i = 0; i < nextNode.children.length; i++){

                if(nextNode.children[i].tagName !== 'path'){

                    searchTracks(search, nextNode.children[i]);

                }else{

                    //we only search in tracks
                    var lastSlashPos = nextNode.children[i].textContent.lastIndexOf('/');
                    var trackName = nextNode.children[i].textContent.substr(lastSlashPos + 1);

                    //finally does it match?
                    if(trackName.toLowerCase().indexOf(search.toLowerCase()) !== -1){

                        if(document.getElementById('tracks').innerHTML.indexOf('spinner.gif') !== -1) {

                            document.getElementById('tracks').innerHTML = '';
                        }

                        document.getElementById('tracks').innerHTML += nextNode.children[i].textContent.substr(lastSlashPos+1)+'<br>';
                    }

                }

            }
        }

        count2--;//just simple decrement after

        if(count2 === 0 && nextNode.tagName === 'Z'){ //check if we are in last alphabetical node
          if(~document.getElementById('tracks').innerHTML.indexOf('spinner.gif')) {
            document.getElementById('tracks').innerHTML = 'Oups, it seems your search did not yield any results!';
          }
          console.log('END of search');
        }

    }
}

function searchArtist(search) {

  if(search) {
    var found = false;
    var artistsFound = '';
    //need to empty before everything
    document.getElementById('tracks').style.display = 'flex';
    document.getElementById('tracks').innerHTML = '<p><img src="../images/spinner.gif" border="none" /></p>';

    var oReq = new XMLHttpRequest();
    oReq.open('GET', 'xml/music-lib.xml', true);
    oReq.onload = function(oEvent)
    {
        if (oReq.status == 200) {
            var xml = oReq.responseXML;
            //letters
            for(var i = -1; ++i < xml.firstChild.children.length;){

                if(xml.firstChild.children[i].tagName !== 'path'){
                  //console.log(xml.firstChild.children[i].tagName);
                    for(var j = -1; ++j < xml.firstChild.children[i].children.length;) {
                      var artistName = xml.firstChild.children[i].children[j].attributes.name.value.replace('AMPERSAND', '&');

                      if(~artistName.toLowerCase().indexOf(search.toLowerCase())) {
                        artistsFound += '<a href="#" onclick="displayAlbums(\''+xml.firstChild.children[i].tagName+'\', \''+xml.firstChild.children[i].children[j].tagName+'\', \'albums\')">'+artistName+'<br>';
                        found = true;
                      }
                    }

                }//this should never happen
            }

            if(found) {
              document.getElementById('artists').innerHTML = artistsFound;
              document.getElementById('tracks').innerHTML = '';
            }else{
              document.getElementById('tracks').innerHTML = 'Oups, it seems your search did not yield any results!';
            }
        }else {
            document.getElementById('numArtists').innerHTML = 'Error ' + oReq.status;

        }
    };
    oReq.send(); // lol
  }
}
