(function($) {
  const urlS3 = 'https://s3-us-west-2.amazonaws.com/agreg0ire/website-datas/images/flipBooks/chez-moi/';
  const html = Array(37).fill().map((v, k) => `<div><img src="${urlS3}bd-chez-moi ${k}.jpeg" /></div>`).join('');
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
