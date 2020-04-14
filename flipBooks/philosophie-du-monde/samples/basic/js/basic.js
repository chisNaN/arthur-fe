(function($) {

const p1 = `<p>Soit la cause du monde est extérieure à lui-même alors il est contingent et n'aurait pu ne pas être. Soit la cause est interne et il est alors nécessaire. Or "il y a bien quelque chose plutôt que rien"</p>`;

const p2 = `<p>Les rêves sont une ouverture au monde synthétique par opposition au monde tangent visible par les sens classiques, c'est à dire le monde de tous les jours que l'on observe et perçoit dans l'état de veille (et non dans l'état de sommeil)</p>`

const p3 = `<p>
Il y a deux univers "jumeaux" avec deux lignes de temps opposés dont un qui va du futur vers le passé (<a href="https://fr.wikipedia.org/wiki/Andre%C3%AF_Sakharov#Travaux_en_cosmologie" target="_blank">Andreï Sakharov</a>)
(Pour comprendre une analogie serait lorsqu'on regarde dans le rétroviseur de sa voiture en roulant). Cela permettrait d'expliquer les impressions de déjà-vu, les rêves prémonitoires ou autres phénomènes de télépathie, synchronicité et interconnexions.</p>`

const p4 = `<p>Les impressions de déjà-vu sont souvent "trompeusement" des rêves prémonitoires parce que ces derniers sont NON DIRECTEMENT et automatiquement remémorés le lendemain matin au lever. Par exemple, lorsque vous rêvez d'une personne que vous n'avez pas vu depuis des années la veille d'une retrouvaille fortuite.
Dans ce cas on pourrait bien sûr rétorquer que la personne doit simplement rêver régulièrement de cette autre sans s'en souvenir et que la rencontre lui a fait remémorer son rêve qui n'avait pas assez de détail exact sur le contexte (et que donc cela n'a rien de prémonitoire)</p>`

const p5 = `<p>Mais cela devient plus étrange lorsque ces deux personnes se sont totalement oubliées, perdues de vue depuis des années et rêvent chacune l'une de l'autre la même nuit avec une forte lucidité et n'ayant pas besoin de déclencheur "tardif" pour se souvenir du rêve
et que le lendemain même ces deux personnes s'envoient un email pour dire qu'elles ont rêvé l'une de l'autre!</p>`

const p6 = `<p>Cela peut aussi se passer avec des personnes que l’on a jamais rencontrées dans le monde tangent.
Il peut nous arriver de rêver, avec une forte lucidité, de personnes inconnues et d'ailleurs plus souvent lorsqu’on va dormir dans un nouvel endroit aussi inconnu.</p>`

const p7 = `<p>En outre, le phénomène peut se produire avec autre chose qu'une personne ou une autre "âme", mais tout simplement avec un "LIEU" du monde tangent.
Plus rarement, il arrive qu'on rêve des paysages d'un lieu sans jamais l'avoir vu en photo/vidéo ou de quelques autres manières à l’avance (que par ses rêves) et la stupéfaction est inexplicable lorsqu’on se retrouve dans ce lieu pour la première fois et qu'il corresponde très fidèlement à nos rêves.
(Cela m'est arrivé une seule fois pour un voyage à madère)</p>`

const p8 = `<p>Enfin, les rêves absolus sont ceux de créations musicales (non pas de composition au sens strict qui implique un état conscient)
La création musicale nocturne inconsciente est tirée, provient involontairement de cet hyperspace ou monde synthétique où toutes les âmes sont d'ailleurs interconnectées.
Certaines personnes rapportent avoir le même phénomène d'évidence/stupeur harmonique de manière consciente en plein jour.</p>`

const p9 = `<p>C'est ce monde synthétique que l'âme rejoint définitivement lorsque les êtres vivants meurent, mais ce n'est pas un monde réflexif qui a conscience de soi ou avec des consciences de soi.</p>`

const p10 = `<p>Le monde synthétique ou hyperspace suit simplement une ligne de temps inversée qui comme on serait tenté de le croire ne contient pas l'infinité des événements à venir mais la globalité des événements possible pour les rembobiner.</p>`

const p11 = `<p>"<i>Sakharov considère aussi une variante où le point de renversement du temps ne se situe pas à la singularité de Friedman mais à un point d'entropie maximal de l'univers.</i>"</p>`

const container = $('<div />', {css: {margin: 'auto', width: 1300, height: '95%'} }).appendTo($('#sample-viewer'));

	$('<div />', {'class': 'sample-flipbook'})
		.appendTo(container)
		.html(`<div><p style="font-size: 30px; margin-top: 10%; margin-bottom: 30px;">La philosophie du monde</p>
		<p>(Où comment expliquer le rapport et la supériorité du monde synthétique par rapport au monde tangent, essentiellement par celui des rêves.)</p>
		<p>*<br>*  *</p>
          <br><p>"Il eût voulu quitter son corps, suivre la musique là où elle s’en était allée, dans l’hyperspace" (page 119)</p>
					<p>"mais en même temps les accords magiques semblaient venir d'un autre monde" (page 444)</p><br>
					<p>Corps et âme, l'enfant prodige (Frank CONROY)</p>
          <p><br><a onclick="goToLastPage();">(Aller à la dernière page)</a></p></div>
            <div>${p1+p2+p3+p4+p5}</div>
						<div>${p6+p7+p8+p9+p10}</div>
						<div>${p11}</div>`);

// Wait until it renders
$('.sample-flipbook').turn({ width: 1300, height: '95%', autoCenter: true, shadows: $.isTouch, acceleration: $.isTouch });

})(jQuery);
