(function($) {

var if_you_should_be = `<p class='t'><u>Si vous deviez être...</u></p><p>Un musicien: <a href='https://shop.hammockmusic.com' target='_blank'>Hammock</a></p>
<p>Un lieu: <a href='https://www.google.com/maps/dir//Thekkady,+Kumily,+Kerala,+Inde/@9.6093969,77.1605009,14z/data=!4m17!1m7!3m6!1s0x3b06f8812df2a199:0x468af17958c54ae8!2sThekkady,+Kumily,+Kerala,+Inde!3b1!8m2!3d9.6031088!4d77.161458!4m8!1m0!1m5!1m1!1s0x3b06f8812df2a199:0x468af17958c54ae8!2m2!1d77.161458!2d9.6031088!3e2?hl=fr' target='_blank'>Thekkady</a></p>
<p>Un film: <a href='https://en.wikipedia.org/wiki/Donnie_Darko' target='_blank'>Donnie Darko</a></p>
<p>Un livre: <a href='https://books.google.fr/books/about/Corps_et_%C3%A2me_L_enfant_prodige.html?id=E4dCDwAAQBAJ&source=kp_book_description&redir_esc=y' target='_blank'>Corps et âme (l'enfant prodige)</a></p><p>Une citation: <br>'​Les souffrances doivent nous être supportables par la raison que c’est nous-même qui nous les infligeons et que nous souffrons que dans la mesure où nous coopérons à nos souffrances. (Novalis)'</p>`;
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
