function doPost(e) {

  try {
    Logger.log(e); // the Google Script version of console.log see: Class Logger
    // var parsedPayload = JSON.parse(e.postData.contents);
    var htmlBody = '<h3>Daily Email Quota Remaining: '+MailApp.getRemainingDailyQuota()+'</h3>';
    var isEmptyField = false;

    for(var prop in e.parameter){
      if (e.parameter[prop].trim() == '') {
        isEmptyField = true;
        break;
      } else {
      htmlBody += '<b>'+prop+'</b>&nbsp;<span style="color: cornflowerblue;">'+e.parameter[prop]+'</span><br>';
      }
    }

    if(!isEmptyField) {
    MailApp.sendEmail({to: 'artgreg@outlook.fr',
                       subject: 'My website Contact form',
                       htmlBody: htmlBody
                      });

      return ContentService.createTextOutput(JSON.stringify({ msg: "Mail sent thanks :~)" })).setMimeType(ContentService.MimeType.JSON);

    }else{
      return ContentService
          .createTextOutput(JSON.stringify({ "error": "There was an empty field in the form!" }))
          .setMimeType(ContentService.MimeType.JSON);
    }

  } catch(error) { // if error return this
    Logger.log(error);
     return ContentService
          .createTextOutput(JSON.stringify({ "error": e }))
          .setMimeType(ContentService.MimeType.JSON);
  }
}
