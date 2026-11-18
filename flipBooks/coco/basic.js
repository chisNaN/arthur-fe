(function($) {
const ipfsUrl = 'https://arturo.infura-ipfs.io/ipfs/'
const s_p_1 = `<p>​¿<span class='coco'>Có</span>mo <span class='coco'>co</span>municarte mi <span class='coco'>co</span>mpasión?</p>`;

const s_p_2 = `<p>​Te en<span class='coco'>co</span>ntré en una de las màs maravillosas <span class='coco'>co</span>linas de <span class='coco'>Co</span>lombia.</p>`;

const s_p_3 = `<p>​Creo que eso no era una <span class='coco'>co</span>incidencia.</p>`;

const s_p_4 = `<p>​Te agradez<span class='coco'>co</span> todas las <span class='coco'>co</span>sas que pude compartir '<span class='coco'>co</span>nti<span class='coco'>co</span>'.</p>`;

const s_p_5 = `<p>​Te dije un día que 'siempre quiero un beso de <span class='coco'>coco</span>'.</p>`;

const s_p_6 = `<p>​En hecho nunca podré olvidar esa boca de <span class='coco'>co</span>lor '<span class='coco'>co</span>queli<span class='coco'>co</span>t'!</p>`;

const s_p_7 = `<p>​Nuestro camino de vida no era siempre <span class='coco'>có</span>mi<span class='coco'>co</span> pero de lo màs ri<span class='coco'>co</span> y lo<span class='coco'>co</span>.</p>`;

const s_p_8 = `<p>​​Quizàs, necesario para <span class='coco'>co</span>mprender el sentido <span class='coco'>co</span>mpleto del <span class='coco'>co</span>-existir.</p>`;

const s_p_9 = `<p>​Si eres tuerta, no sé por cual tru<span class='coco'>co</span> màgi<span class='coco'>co</span> me sentí totalmente ciego y perder mis medios a tu lado.</p>`;

const s_p_10 = `<p>​Recibes este <span class='coco'>co</span>rreo <span class='coco'>co</span>mo una ùltima <span class='coco'>co</span>munión, un e<span class='coco'>co</span> de un amor perdido.</p>`;

const s_p_11 = `<p>​Te <span class='coco'>co</span>lo<span class='coco'>co</span> a dentro de un ùni<span class='coco'>co</span> '<span class='coco'>cô</span>té' de mi <span class='coco'>co</span>razón.</p>`;

const container = $('<div />', {css: {margin: 'auto', width: 1300, height: 660} }).appendTo($('#sample-viewer'));

	$('<div />', {'class': 'sample-flipbook'})
		.appendTo(container)
		.html(`<div><p style="font-size: 50px; margin-top: 10%; margin-bottom: 30px;">Coco</p><p style="margin-top: 20px;"><br><a onclick="goToLastPage();">(Aller à la dernière page)</a></p><p>
          <img src="https://arturo.infura-ipfs.io/ipfs/QmNqJue3ZH1Sjf6xDhPyAV4pZxDtjYvSDbGDmbe3Ef91Gk" style="border: none; width: 600px;"/></p>
          </div>
            <div>${s_p_1}${s_p_2}${s_p_3}${s_p_4}${s_p_5}${s_p_6}${s_p_7}${s_p_8}${s_p_9}${s_p_10}${s_p_11}
			           <p><audio style="margin-bottom: 15px;" src="${ipfsUrl + 'QmbnWD3RaDWt6kPzcFoac7ZFVefgpXkrLFcujJxEgasQSS'}" preload="none" type="audio/mp3" controls title="Nomad (Reprise)" /><br>Lars Bartkuhn, Nomad (Reprise)</p>
          </div>
            <div><p><a href="#" onclick="goToFirstPage();">(Retourner à la première page.)</a></p>
			<p><img src="${ipfsUrl + 'QmUJCupQ6jKb7VCF9o2zXRdPMJtpr6nh9preqCsy5yePkn'}" style="width: 400px; border: 1px solid #ccc; border-radius: 2px; padding: 5px;" /></p>
    </div>`);

// Wait until it renders

$('.sample-flipbook').turn({
	width: 1300,
	height: 660,
	autoCenter: true,
	shadows: $.isTouch,
	acceleration: $.isTouch
});

})(jQuery);
