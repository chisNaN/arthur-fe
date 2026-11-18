function doGet() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = ss.getSheets()[0];
  const range = sheet.getRange(2, 1, sheet.getLastRow() -1, 4);
  const values = range.getValues()
  Logger.log(values)
  return ContentService
          .createTextOutput(JSON.stringify(values))
          .setMimeType(ContentService.MimeType.JSON);
}
function doPost(e) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = ss.getSheets()[0];
  const range = sheet.getRange(2, 1, sheet.getLastRow() -1, 4);
  const values = range.getValues()
  Logger.log(values)
  return ContentService
          .createTextOutput(JSON.stringify(values))
          .setMimeType(ContentService.MimeType.JSON);
}
