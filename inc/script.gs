function readRows() {
  var sheet = SpreadsheetApp.getActiveSheet();
  var rows = sheet.getDataRange();
  var numRows = rows.getNumRows();
  var values = rows.getValues();
  var rowsDeleted = 0;

  for (var i = -1; ++i < numRows;) {
    var row = values[i];

    if (!!~row[2].toLowerCase().indexOf('linux')) {
      // sheet.deleteRow((parseInt(i)+1) - rowsDeleted);
        Logger.log((parseInt(i)+1) - rowsDeleted);

      rowsDeleted++;
      // break; // to test before
     }
  }
}

function addRow() {
  var sheet = SpreadsheetApp.getActiveSheet();
  sheet.appendRow([new Date().toString(), '[::1]', 'chrome']);
}

function doPost(event) {
  try {

    var parsedPayload = JSON.parse(event.postData.contents);
    var sheet = SpreadsheetApp.getActiveSheet();
    sheet.appendRow(parsedPayload.payload);
    return ContentService.createTextOutput(JSON.stringify({ output: 'Datas were inserted in the spreadsheet' })).setMimeType(ContentService.MimeType.JSON);

    } catch (e) {

     return ContentService
          .createTextOutput(JSON.stringify({ error: e }))
          .setMimeType(ContentService.MimeType.JSON);
     }
}
