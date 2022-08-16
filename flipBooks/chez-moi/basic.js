(function($) {
  const ipfsHashs = [
    "Qmaqx3iAhdJ74FjjzwDXjfizUUiaRTaTaqpXUh5fa3Pvu3",
    "QmeUKVpk2jaHcGTPF9ZZ12Fc5MtkAVXnY9bCqKcX2kt9sX",
    "QmX6kjhXpq9TDaQRUvfdMUpWuiydHic6bCbTqFKuVMQA4w",
    "QmTgWm1GXH6JMxNoT7zg6qjHHyjR1ZNEr75NTePHyNQhuZ",
    "QmQYg5dh8VA4YC8QLq5c5akjwFUbHDBbAvYvw6Rj9nqDzC",
    "QmURFaFrkkp85LpLxKVShevqyXCg9ADtJUsxTrMs7JKeBv",
    "QmTxdAMSTji75CEhSDLHpmuakiKh4ScdQqnipi1qDPACqt",
    "QmYE5ndozb2LjhN3Kc7He9ykSgpSQmYiQi8gJY9ea6n9DZ",
    "QmZNzzLVZza54PqvL1kzJBi1747oS1uYMuvTb97d138vFV",
    "Qmf7DnzKVvgrTu9UnPo7WchPU1FsT11pUvbLzoFpi56MCM",
    "QmPBqie6kXjxFcgUhws5h5U1yyjPnHyN74LLY3wp6qZsF4",
    "QmNbfcgjDUb7DRi2LzEmvkL9yVSuptPHbEFdXZfADGtDWH",
    "QmQthrBbwJRHnGdoEMkgJ5PqedK3ns9b3iwXGEmhjiQAi8",
    "QmQsMido8uZEZbYxd3jKvJFHXnVUZtqAsQseyRpKP1JGtL",
    "QmcV1uDW8F2PCa13Vu1o284MAqjLpeLeZsjcy2Fp8F1NYP",
    "QmPTz4y9MLg75DJnyxdgE2L8W9eHircJs9UTtTaNN84x6h",
    "QmNQaNy6vDoRTvWKLw8cpnKgYtXHimnNrqXAFM5NhyjfAv",
    "QmVXTEjendUNrxfbTSBA38uzUf48eYfXMGecZ26S2C7cFo",
    "QmURL9k9AhbrMVkeWJdaBGKvbeYpnRpBVuyus5ro1sx6Sa",
    "QmbvmEfdjvRckEKKKVRnGUDxXtHE517Wo6WScqHMwnYQdN",
    "QmVxhab1ypK3sCkvH1bDJnLrHnMAsmnJppk8ePWwj9d4TR",
    "QmcvbpsvyrrprTa2zcAjz18mF7Jn8R65nk8rj2jYmH5QX8",
    "QmbzYS7rHwQ7THz7XQ9PYsV3ppzCodzmGFTnJnfBFyfobq",
    "QmPHFE1ZsocreRyPJzz8KxHmngKYxGA8qsDJxbAcyNf7Rt",
    "QmXaAwjMcgZmPAhrKdRecggAYhDREoa7ZyDbxDaVkFzAuh",
    "QmXtpLj9sBzSvHUkZBGTPZmPTWn15hUkaxFJre6AqJH7oS",
    "QmdpyKqVDXVRmzgL9TmoVSEabUYMagvfue3CZgmoWVHA6Q",
    "Qma9F7L42kRx23K61KfCePmz2hcHMM3bhEKDDHknzwSNy6",
    "QmdwNkjFpy71NZWtrAd2jQgkbVuZ1teyD4f4tU9LCwFyK1",
    "QmbXFK9oLzheX4KHhZ7YriQw5eyppsbNMGBM3yYfXfjxmT",
    "QmPvCHtizZhUxbD3KJfuHRBKdvCGXvm9jtf993sE4A4HMB",
    "Qmb15PYYDWvdrifydHUHCRNUzfF1sLxnLN2jptUof4c8Lw",
    "QmPbWYPupxC5w6cyB8opEhbx1ZmEW4x3xJPcWVbchj4wa3",
    "QmZa5wYJqweXnp1jwDsrdR6UjkznP3XhtbJKNPVcKe9ASx",
    "QmPyyaWb5mkDWKC4bw15bUg2JHhWkcbFQQpLuMB6Kbpt6Q",
    "Qmdom8Ud1gxwTWEtJEo1wRbVToREMhjV2BbPrfbUceVEt7",
    "QmYfnPGEpsLS7AF3nLs6KZpep8CUbPJKMa2w67kzwMWaWK"
  ]
  const html = ipfsHashs.map(v => `<div><img src="https://chisnan.infura-ipfs.io/ipfs/${v}" /></div>`).join('');
  const container = $('<div />', {css: {margin: 'auto', width: 1575, height: '100%'} }).appendTo($('#sample-viewer'));

  $('<div />', {'class': 'sample-flipbook'}).appendTo(container).html(html);

  $('.sample-flipbook').turn({
  	width: 1575,
  	height: '100%',
  	autoCenter: true,
  	shadows: $.isTouch,
  	acceleration: $.isTouch
  });
})(jQuery);
