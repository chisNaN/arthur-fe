var i_counter = 0;
var b_is_diapo_launched = false;
var s_popup_width = '1050px';
var s_popup_height = '800px';
var s_a4_format_img_w = '1024px';
var s_a4_format_img_h = '768px';

function centerPopup2(p3_s_what_event, galName, switchOrder) {

    if(!b_is_diapo_launched && p3_s_what_event == 'onresize')
    {

    }else if(b_is_diapo_launched && p3_s_what_event == 'onresize')
    {
        document.getElementById('popup').style.visibility = 'visible';
        document.getElementById('popup').innerHTML = '<a href="#" onclick="document.getElementById(\'popup\').style.visibility = \'hidden\';">Close</a><br/>';
        document.getElementById('popup').innerHTML += '<img src="'+a_pics[i_counter]+'" style="cursor: pointer; border: 1px solid #ccc; border-radius: 5px; padding: 5px;" onclick="showNext();" />';

    }else if( p3_s_what_event === 'onload') // s3 treatment
    {

        var decodedGalName = decodeURI(galName);
        var prefix = 'photos/'+decodedGalName+'/LQ/';
        var bucketName = 'agreg0ire';
        var bucket = new AWS.S3({params: {Bucket: bucketName, Delimiter: '/', Prefix: prefix }});
        var html = '';
        var a = [];
        var a2 = [];
        var mediaRss = '<?xml version="1.0" encoding="utf-8" standalone="yes"?>\n';
        mediaRss += '<rss version="2.0" xmlns:media="http://search.yahoo.com/mrss/" xmlns:atom="http://www.w3.org/2005/Atom">\n';
        mediaRss += '    <channel>\n';
        mediaRss += '        <title>'+decodedGalName+'</title>\n';
        mediaRss += '        <description>'+decodedGalName+'</description>\n';

        if(localStorage[decodedGalName]) {
            var J = JSON.parse(localStorage[decodedGalName]);
            var numObjects = J.length;

            if(switchOrder === 'switchOrder') {
                if(J[0]['id'] === 1){
                    J.sort(function (a, b) {
                        if (a.id < b.id)
                            return 1;
                        if (a.id > b.id)
                            return -1;
                        // a doit être égale à b
                        return 0;
                    });
                }else{
                    J.sort(function (a, b) {
                        if (a.id > b.id)
                            return 1;
                        if (a.id < b.id)
                            return -1;
                        // a doit être égale à b
                        return 0;
                    });
                }
            }

            for (var p in J) {
                var picName = J[p]['photo'];
                var urlLQ = 'https://s3-us-west-2.amazonaws.com/'+bucketName+'/'+prefix+picName;
                var urlHQ = 'https://s3-us-west-2.amazonaws.com/'+bucketName+'/photos/'+decodedGalName+'/HQ/'+picName;

                mediaRss += '        <item>\n';
                mediaRss += '            <title>Picture '+(parseInt(p)+1)+'</title>\n';
                mediaRss += '            <link>'+urlHQ+'</link>\n';
                mediaRss += '            <media:thumbnail url="'+urlLQ+'" />\n';
                mediaRss += '            <media:content url="'+urlHQ+'" />\n';
                mediaRss += '        </item>\n';

                html += '<div class="containerPic"><a href="'+urlHQ+'" target="_blank" ><img src="'+urlLQ+'" /></a></div>';

                //+1 because first prefix in s3 bucket is for parent folder
                a.push({ id: J[p]['id'], photo: picName });
                a2.push(picName);
            }

            document.getElementById('h').innerHTML = decodedGalName+' ('+numObjects+' images)';
            document.getElementById('main').innerHTML = html;
            document.title = decodedGalName;
            // document.getElementById('downloadLink').href = 'https://s3-us-west-2.amazonaws.com/'+bucketName+'/photos/'+galName+'/'+decodedGalName.replace(/ /g, '_')+'.zip';

            localStorage[decodedGalName] = JSON.stringify(a);
            document.getElementById('containerLinkSwitch').style.display = 'flex';

            //first is a string!!!
            if(navigator.userAgent.includes('Chrome')) {
              if(parseInt(p) === (numObjects -1)) {
                  mediaRss += '  </channel>\n';
                  mediaRss += '</rss>';
                  const params = {Key: 'media.rss', ContentType: 'text/xml', Body: mediaRss, ACL: 'public-read'};
                  bucket.upload(params, (err, data) => {
                      document.getElementById('containerLinkDiapo').style.display = 'flex';
                      if(err){
                          document.getElementById('containerLinkDiapo').innerHTML = '<font color="red">Error upload rss</font>';
                      }
                  });
                }
            }
        } else {
            bucket.listObjects((err, data) => {
                if (err) {
                    document.getElementById('main').innerHTML = 'Could not load objects from S3';
                } else {

                    var numObjects = data.Contents.length;

                    for (var i = 0; ++i < numObjects;) {
                        var afterSlash = data.Contents[i].Key.substr(data.Contents[i].Key.lastIndexOf('/') + 1);
                        var urlLQ = 'https://s3-us-west-2.amazonaws.com/'+bucketName+'/'+prefix+afterSlash;
                        var urlHQ = 'https://s3-us-west-2.amazonaws.com/'+bucketName+'/photos/'+decodedGalName+'/HQ/'+afterSlash;

                        mediaRss += '        <item>\n';
                        mediaRss += '            <title>Picture '+i+'</title>\n';
                        mediaRss += '            <link>'+urlHQ+'</link>\n';
                        mediaRss += '            <media:thumbnail url="'+urlLQ+'" />\n';
                        mediaRss += '            <media:content url="'+urlHQ+'" />\n';
                        mediaRss += '        </item>\n';
                        html += '<div class="containerPic"><a href="'+urlHQ+'" target="_blank" ><img src="'+urlLQ+'" /></a></div>';
                        a.push({ id: i, photo: afterSlash });
                        a2.push(afterSlash);
                    }

                    document.getElementById('h').innerHTML = decodedGalName+' ('+(numObjects - 1)+' images)';
                    document.getElementById('main').innerHTML = html;
                    document.title = decodedGalName;
                    // document.getElementById('downloadLink').href = 'https://s3-us-west-2.amazonaws.com/'+bucketName+'/photos/'+galName+'/'+decodedGalName.replace(/ /g, '_')+'.zip';
                }
                localStorage[decodedGalName] = JSON.stringify(a);
                document.getElementById('containerLinkSwitch').style.display = 'flex';
                /*FINALLY ajax to write the media.rss
                 note that further on we will upload the media rss to a s3 bucket
                 adding put * to s3 policy
                 */
                if(navigator.userAgent.includes('Chrome')) {
                  console.log(i+' === '+data.Contents.length);

                  if(i === data.Contents.length) {
                      mediaRss += '  </channel>\n';
                      mediaRss += '</rss>';
                      //or uploading thru s3 js sdk
                      const params = {Key: 'media.rss', ContentType: 'text/xml', Body: mediaRss, ACL: 'public-read'};
                      bucket.upload(params, (err, data) => {
                          document.getElementById('containerLinkDiapo').style.display = 'flex';
                          if(err) {
                              document.getElementById('containerLinkDiapo').innerHTML = '<font color="red">Error upload rss</font>';
                          }
                      });
                  }
                }
            });
        }
    }else if(p3_s_what_event == 'onclick')
    {
        b_is_diapo_launched = true;

        document.getElementById('popup').style.visibility = 'visible';
        document.getElementById('popup').innerHTML = '<a href="#"  onclick="document.getElementById(\'popup\').style.visibility = \'hidden\';">Close</a> (1/'+i_numfiles+')<br/>';
        document.getElementById('popup').innerHTML += '<img src="'+a_pics[i_counter]+'" style="cursor: pointer; border: 1px solid #ccc; border-radius: 5px; padding: 5px;" onclick="showNext();" />';

    }

}

function showNext()
{
    i_counter++;

    if(i_counter >= i_numfiles) i_counter = 0;

    document.getElementById('popup').innerHTML = '<a href="#" onclick="document.getElementById(\'popup\').style.visibility = \'hidden\';">Close</a> ('+(i_counter+1)+'/'+i_numfiles+') <br/>';
    document.getElementById('popup').innerHTML += '<img src="'+a_pics[i_counter]+'" style="cursor: pointer; border: 1px solid #ccc; border-radius: 5px; padding: 5px;" onclick="showNext();" />';

}

function showPrev()
{

    i_counter--;

    if(i_counter < 0) i_counter = i_numfiles - 1;

    document.getElementById('popup').innerHTML = '<a href="#" onclick="document.getElementById(\'popup\').style.visibility = \'hidden\';">Close</a> ('+(i_counter+1)+'/'+i_numfiles+') <br/>';
    document.getElementById('popup').innerHTML +='<img src="'+a_pics[i_counter]+'" style="cursor: pointer; border: 1px solid #ccc; border-radius: 5px; padding: 5px;" onclick="showNext();" />';

}

function fullTheBody()
{
    with(document.getElementById('popup').style)
    {
        height = window.innerHeight+document.body.scrollTop+'px';
        //width = window.innerWidth+document.body.scrollLeft+'px';

    }
}

function downloadZip()
{
    document.getElementById('zip_all_pic').submit();

    with(document.getElementById('link_dl_pics'))
    {
        innerHTML = 'Please wait (creating ZipArchive)';
        onclick = function (){};
        style.cursor = 'default';
    }
}
