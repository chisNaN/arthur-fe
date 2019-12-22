(function($) {

const p1 = `<p>La mort nous donne cette sensation vertigineuse en ce que c’est la seule chose dont on est certain qu’on le sera (mort) mais c'est une des rares choses qu'on ne peut être conscient de l'ÊTRE.</p>
<p>L'idée n'est pas de savoir "quand on va mourir" et quand on sera mort au sens temporel, car chacun peut parier avec un fort degré de certitude que même avec l'évolution de la médecine et technologie, sera mort, par exemple 10 mille ans après la date de sa naissance </p>
<p>L'idée est plutôt de constater que c'est toujours autrui qui peut témoigner de notre propre mort mais jamais nous-même et en définitive, chacun meurt avec l’ignorance (et sans la satisfaction) de se savoir mort </p>
<p>Par ailleurs, c’est le statut épistémologique de la «réalité» de la CONSCIENCE elle-même qui en est troublé car la conscience fonctionne vraiment sur le mode de l’illusion  (ou du rêve comme bon nombre d’écrivains l’ont dit) dans le sens où l’on ne peut pas «POUR SOI» expérimenter la différence entre être mort et en vie (car l’on sait pertinemment que lorsqu’on meurt le monde continue d’exister sans sa conscience)</p>
<p>Si on peut «assister virtuellement» à sa naissance enregistrée en vidéo par exemple, la mort est bien la seule fin qu’on n’expérimente pas.</p>
<p>La question n’est pas pourquoi il y a t il quelque chose plutôt que rien mais est ce que ce quelque chose va durer pour toujours?</p>
<p>Si oui alors vivre sur le mode de la conscience humaine est ce expérimenter l infini ?</p>`;


const container = $('<div />', {css: {margin: 'auto', width: 1300, height: '95%'} }).appendTo($('#sample-viewer'));

	$('<div />', {'class': 'sample-flipbook'})
		.appendTo(container)
		.html(`<div><p style="font-size: 30px; margin-top: 10%; margin-bottom: 30px;">Les aporismes de la mort</p>
          <br><p>"La conscience est une expérience vertigineuse"</p>
          <p><br><a onclick="goToLastPage();">(Aller à la dernière page)</a></p></div>
            <div>${p1}</div>`);

// Wait until it renders
$('.sample-flipbook').turn({ width: 1300, height: '95%', autoCenter: true, shadows: $.isTouch, acceleration: $.isTouch });

})(jQuery);
