(function($) {

const music = `<p>La musique est ma première passion et la passion est ma première musique!</p>
<p>La musique est l'art le plus « Dionysiaque » !</p><p>La musique est probablement la seule religion (du latin religiare : qui unit les gens).</p>
<p>Pourquoi 90% de la musique qui a marqué l'histoire et continue de la marquer vient de grande Bretagne?</p>
<p>Je pense tous les jours plusieurs fois à la mort. Sergeï Rachmaninoff était assez envahi par la mort, lorsqu'on écoute sa musique on a l'impression qu'elle ne nous attendra jamais.</p>
<p>Le piano est l'instrument de la virtuosité, la guitare de l'expressivité, les cuivres du dynamisme, la basse du groove et les cordes frottées transportent.
  La basse est un instrument paradoxal car il offre très peu d'intérêt en solo mais une musique sans basse offre elle-même aussi rarement d'intérêt.</p>
<p>"Sans musique la vie serait une erreur." La musique sans le rach 3 serait une erreur et le rach 3 sans Horowitz serait inachevé (donc la vie sans Horowitz serait inachevée...)</p>
<p>Chez moi, la musique a vraiment commencé avec <a href='http://fr.wikipedia.org/wiki/Mark_Linkous' target='_blank'>Mark Linkous</a>. (Et finira sûrement aussi avec lui)</p>
<p>La musique est l’un des meilleurs moyens pour communiquer avec nos absents.</p><p>D'où provient cette musique dont je peux rêver parfois la nuit?
Le plus souvent il s'agit d'une simple mélodie que j'ai envie d'enregistrer le lendemain car il m'arrive de pouvoir m'en souvenir facilement.
Plus rarement la restitution parfaite d'une chanson maintes et maintes fois écoutée durant la journée mais parfois ce sont des vrais extraits de concerto ou de symphonie qui me font pleurer au réveil car leur beauté est telle qu'elle me semble venir d'un autre monde!</p>
<p>J'ai découvert assez de musique pour "sentir" le mystère de la vie.</p><p>J'espère qu'au moment de décéder je pourrai avoir une pleine conscience de toutes les musiques dont j'ai rêvé la nuit et ne peux me souvenir.</p>`;


const music2 = `<p class="t"><u>Mon rapport, comportement avec la musique: L’art de bien recevoir la musique</u></p><p>« Every moment has its music » (Slogan du walkman SONY)</p>
<p>C’est cette idée là que je ritualise très au sérieux et jusqu’à l’extrême.</p><p>Lorsque je découvre un album, quelques morceaux dont je comprends et pressens qu’ils vont être très important (pour la construction de ma personnalité et de mon identité
), je peux, par exemple, aller jusqu’à m’interdire de les écouter jusqu’au moment où je serai vraiment en mesure de bien en profiter autrement dit de vraiment bien les "recevoir".</p>
<p>Il y a un pouvoir de reminiscence évident avec la musique. Il faut savoir composer avec et s’astreindre dans le même sens que la philosophie épicurienne qui n’incite pas à jouir bêtement de tous les plaisirs dès qu’ils se présentent, mais au contraire de fuir les petits plaisirs qui empêcheraient d’accéder à des plaisirs supérieurs.</p>
<p>Ainsi un morceau de musique peut prendre une dimension toute autre lorsqu’il a été découvert et écouté (plusieurs fois si possible) dans un contexte bien particulier, comme lors d’un voyage.
C’est pour ces raisons qu’on peut apprécier une musique pas tellement pour sa mélodie, sa technicité intrinsèque mais pour son pouvoir d’évocation permettant de nous faire revivre des instants passés , re-voyager vers des endroits qui nous ont marqué (et justement qui nous auront encore plus marqué avec cette musique associée.)</p>
<p>Enfin je me risquerais même jusque dire que le rapport que j’ai avec la musique va plus loin que celui que je pourrais avoir avec n’importe quel être humain pour les deux raisons suivantes (au moins):</p>
<p>- Quand Spinoza dit qu’on ne peut peut vraiment aimer que les choses infinies car les choses finies (comme les êtres humains ne sont pas partageables). On peut donc « véritablement » en ce sens, les mathématiques, dieu, la musique.</p>
- Pour revenir sur le point de l’identité et de la personnalité la musique permet non seulement de les construire au fur et à mesure mais elle offre en même temps un gigantesque pouvoir de « réflexivité » , de comprendre sa propre personne, les émotions, les sentiments qu’on a pu traversé (difficilement ou non) dans la vie.</p>`;

const music3 = `<p>Je trouve qu’elle le permet plus que n’importe quel art car elle nous touche au plus profond de l’âme.</p>
<p>- Cette réflexivité dans la musique est intimement lié au concept d’intersubjectivité et malgré mon expérience de production, composition et enregistrement musicale, c’est toujours un « autre» musicien qui arrivera mieux à décrire avec sa musique à lui, les états d’âmes que peut traverser mon être.
  Il est étrange que cette réflexivité passe forcément par l’altérité et c’est en ce sens que c’est une relation qui peut être supérieur à une relation humaine "directe" car elle est potentiellement infinie (toujours renouvelée), vraiment autre et désintéressée.</p>
  <p>Mes rêves de composition musicale interviennent très probablement dans des rêves lucides dont je ne me souviens pas.</p>
  <p>Lorsque l'on aura établi le moyen d’enregistrer les rêves, la musique sera confirmée en tant qu’art majeur de l’humanité puisque la composition musicale intervenant dans le cadre de rêves lucides (dont on se souvient ou non) sera accessible.</p>
<p><br><a href='#' onclick='goToFirstPage();'>(Retour à la 1ère page)</a></p>`;

const container = $('<div />', {css: {margin: 'auto', width: 1300, height: '95%'} }).appendTo($('#sample-viewer'));

$('<div />', {'class': 'sample-flipbook'})
.appendTo(container)
.html(`<div><p style="font-size: 50px; margin-top: 10%; margin-bottom: 30px;">Sur la musique</p>
<p>"La musique suffit pour une existence, <br> mais un existence ne suffit pas à  la musique."<p>(<a href="https://en.wikipedia.org/wiki/Sergei_Rachmaninoff" target="_blank">Sergei Rachmanninoff</a> )</p>
<p><br><a onclick="goToLastPage();">(Aller à la dernière page)</a></p></div>
	<div>${music}</div>
	<div>${music2}</div>
  <div>${music3}</div>`);

$('.sample-flipbook').turn({ width: 1300, height: '95%', autoCenter: true, shadows: $.isTouch, acceleration: $.isTouch });

})(jQuery);
