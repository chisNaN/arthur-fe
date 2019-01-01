(function($) {

var if_you_should_be = "<p class='t'><u>Si vous deviez être...</u></p><p>Un musicien: <a href='https://en.wikipedia.org/wiki/Mizell_Brothers' target='_blank'>The Mizell Brothers</a></p><p>Un lieu: <a href='https://www.google.fr/maps/place/Reserva+Natural+Tanimboca/@-4.1179155,-69.9525982,12z/data=!4m5!3m4!1s0x0:0x605077e25303b603!8m2!3d-4.1179155!4d-69.9525982' target='_blank'>Kilómetro 11 de Leticia</a></p><p>Un film: <a href='https://en.wikipedia.org/wiki/One_Flew_Over_the_Cuckoo%27s_Nest_(film)' target='_blank'>One flew over the cuckoo's nest</a></p><p>Un livre: <a href='https://fr.wikipedia.org/wiki/Les_Mains_du_miracle' target='_blank'>Les mains du miracle</a></p><p>Une citation: <br>'​Les souffrances doivent nous être supportables par la raison que c’est nous-même qui nous les infligeons et que nous souffrons que dans la mesure où nous coopérons à nos souffrances. (Novalis)'</p>";
    var container = $('<div />', {css: {margin: 'auto', width: 1300, height: '95%'} }).appendTo($('#sample-viewer'));

	$('<div />', {'class': 'sample-flipbook'})
		.appendTo(container)
		.html('<div><p style="font-size: 50px; margin-top: 10%; margin-bottom: 30px;">Si vous deviez être...</p><br><p><br><a onclick="goToLastPage();">(Aller à la dernière page)</a></p></div>'+
            '<div>'+if_you_should_be+'</div>');

// Wait until it renders

$('.sample-flipbook').turn({
	width: 1300,
	height: '95%',
	autoCenter: true,
	shadows: $.isTouch,
	acceleration: $.isTouch
});

})(jQuery);
