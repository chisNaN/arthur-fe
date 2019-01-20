/*
- This is the script that will send the email to your box received by the crossdomain ajax.
- Set your email in the "to" value
- Links for more informations
https://developers.google.com/apps-script/reference/mail/mail-app#sendemailrecipient-subject-body
https://developers.google.com/apps-script/guides/web#url_parameters
*/

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
    }
      return ContentService
      .createTextOutput(JSON.stringify(isEmptyField ? LanguageApp.translate('All fields are mandatory!', 'en', e.parameter.lang) : LanguageApp.translate('Thanks for contacting me.', 'en', e.parameter.lang)))
      .setMimeType(ContentService.MimeType.JSON);

  } catch(error) { // if error return this
    Logger.log(error);
     return ContentService
          .createTextOutput(JSON.stringify({ "error": e }))
          .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(){
return ContentService
          .createTextOutput(JSON.stringify({ "get request": "hello world" }))
          .setMimeType(ContentService.MimeType.JSON);}
