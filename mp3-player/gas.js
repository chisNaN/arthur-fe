function doGet(e) {
  const files = DriveApp.getFiles()
  const mp3 = []
  while (files.hasNext()) {
    const file = files.next()
    const fileName = file.getName()
    if (fileName.endsWith('mp3')) {
      const dlUrl = file.getDownloadUrl()
      const idMp3 = dlUrl.substr(dlUrl.indexOf('=') + 1)
      mp3.push({ [fileName.substr(0, fileName.lastIndexOf('.'))]: idMp3 })
    }
  }
  return ContentService.createTextOutput(JSON.stringify(mp3)).setMimeType(ContentService.MimeType.JSON)   
}

function doPost(e) {
  const api_token = e.parameter.token.trim()
  const f = DriveApp.getFileById(e.parameter.idTrack)
  const blob = f.getBlob()
  const expo = 1e5
  // ATTENTION, need to cut from the half of the track
  // because often the beginning or the end of a track
  // can be silent or very similar to many other tracks...
  // e.g: Patterns of jonas munk & Nicklas Sorensen
  const file = blob.setBytes(blob.getBytes().splice(blob.getBytes().length / 2, expo))
  const payload = { api_token, file, 'return': 'timecode,apple_music,deezer,spotify' }
  const response = UrlFetchApp.fetch('https://api.audd.io/', { method: 'post', payload })
  // Logger.log(response.getContentText())
  return ContentService.createTextOutput(response.getContentText()).setMimeType(ContentService.MimeType.JSON)
}
