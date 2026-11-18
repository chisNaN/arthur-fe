try {
  fetch('https://api.ipify.org?format=text').then(r => r.text())
  .then(r => {
    const payload = [new Date().toJSON(), 'https://tools.keycdn.com/geo?host='+r, window.navigator.userAgent, document.referrer ];
    const headers = { method: 'POST', headers: {'Content-type': 'text/plain'}, body: JSON.stringify({ payload }) }
    return fetch('https://script.google.com/macros/s/AKfycbzwmw3enchmk0hXOH17jN1HqCoWgEJISo51_7z4rx-ckFTSjJ0j/exec', headers)
  }).then(r2 => r2.json()).then(console.log).catch(Raven.captureException);
} catch(e) {
  console.warn(e);
  Raven.captureException(e);
}
