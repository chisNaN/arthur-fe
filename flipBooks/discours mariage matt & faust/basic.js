(function($) {

const s_p_1 = `<p>« Aimer une femme qui ne serait que belle, ce serait comme boire un vin qui ne donnerait pas d'ivresse. »</p>`;

const s_p_2 = `<p>Faustine n'est pas que belle. A chaque discussion que j'engage avec elle, je constate sa culture vaste et variée. Elle lit souvent et beaucoup, là où mon frère n'a jamais vraiment commencé et où moi-même ai presque arrêté. Par les études qu'elle a accomplies, elle se révèle d'un grand pragmatisme et je devine, sans certitude absolue, qu'elle l'aide aussi bien que son beau-père dans ses nouvelles démarches professionnelles.</p>`;

const s_p_3 = `<p>Matthieu a vraiment bien choisi sa femme, j'ai le sentiment qu'ils sont comme cul et chemise.</p>`;

const s_p_4 = `<p>Si les activités principales de Faustine relèvent moins du domaine de l'intuition, celles de son mari, comme la gastronomie et le sport en exigent un minimum. En ce sens, je trouve que Faustine a certains traits commun avec sa belle mère. Elle est plus dans l'analyse et use d'abord son esprit mathématique et cartésien mais sans jamais faire fi de sa sensibilité.</p>`;

const s_p_5 = `<p>Faustine est une bourreau de travail qui a déjà suivi 7 années d'études avec de l'alternance à un rythme acharné et sans aucune interruption. Ainsi, il était difficile de passer des moments privilégiés en sa compagnie sauf dans les quelques éditions des journées du patrimoine de l'abbaye de Marcheroux et lors de vacances d'été à cinq.</p>`;

const s_p_6 = `<p>Le scénario est presque similaire pour mon frère. Si l'on a été très proches jusqu'à ce que Matthieu intègre le pensionnat, le métier qu'il a choisi lui accapara rapidement tout son temps. Arrivé à 32 ans, il y a une semaine, il a déjà travaillé la moitié de sa vie. Et même lorsqu'on a pu vivre en collocation pendant 2 ans, ses horaires de coupures nous empêchaient d'avoir une vie synchrone. Néanmoins c'est lors de la deuxième année de collocation que j'ai fait la connaissance de Faustine. Cela fait donc 8 ans qu'ils se connaissent...</p>`;

const s_p_7 = `<p style='text-align: center; font-weight: bold; font-size: 20px;'>*<br>*   *</p>`;

const s_p_8 = `<p>Les aspects de mon frère que je connais ne sont pas les mêmes que ceux que sa femme ou ses meilleurs amis peuvent observer au quotidien mais quoi qu'il en soit il y a forcément au moins un oxymoron caractérisant Matthieu tant sa personnalité est truculente. Je m'excuse d'avance car je n'en suis pas l'auteur mais c'est celui qui m'est venu instantanément: « insoutenable légèreté »</p>`;

const s_p_9 = `<p>Il fut difficile pour certains de ses proches de suivre Matthieu tant il pouvait pousser les choses assez loin pour se mettre et mettre autrui dans des situations très limites. Pour prendre un exemple gentil et qui ne concerne que moi : je me souviens qu'étant enfants il s'amusait à me chamailler méchamment lors de longs trajets en voiture en voyages (vers l'Espagne). Un véritable calvaire.</p>`;

const s_p_10 = `<p>Certes, il a fait un bon paquet de conneries dans sa vie mais il n'a jamais été triste. Je n'ai pas eu l'occasion de le voir dans un tel état et c'est ce qui me fait venir à l'autre trait de sa personnalité que j'ai voulu souligner tant il contraste avec le premier.</p>`;

const s_p_11 = `<p>Matthieu est donc d'une grande légèreté. C'est facile, intuitif, naturel, donné. Il a beaucoup d'aisance dans ses relations avec autrui. On peut toujours compter sur lui pour mettre la bonne ambiance : dérision, auto-dérision… Très généreux, il donne sa confiance rapidement et n'entre pas dans le jugement.</p>`;

const s_p_12 = `<p>Matthieu incarne certains mots d'ordre qui me tiennent à cœur comme la créativité, l'endurance ou encore l'épanouissement. L'endurance me semble être la condition majeure de l'épanouissement. Il faut un minimum d'endurance pour construire les choses les plus précieuses de la vie et « un bonheur qui nous tombe du ciel n'est pas vraiment un bonheur. » Mon frère a montré son endurance et sa créativité aussi bien aux fourneaux qu'avec ses amis.</p>`;

const s_p_13 = `<p>Ce qui singularise sur un même élan les mariés : ce sont le choix et l'entretien des relations d'amitiés. Matthieu & Faustine on su fonder un groupe d'amis authentiques qui perdure en harmonie au fil des années.</p>`;

const s_p_14 = `<p>Continue, continuez comme ça, en mieux même ! C'est bien sûr du bonheur que je vous souhaite de partager mais que les moments difficiles vous renforcent dans votre nouvelle union.</p>`;

const s_p_15 = `<p>Novalis qui toute sa courte vie considérait le mariage comme la forme la plus haute forme du bonheur humain disait en son lieu:</p>`;

const s_p_16 = `<p>« Le mariage signifie une nouvelle, une plus haute époque de l’amour.<br>L’amour sociable et vivant. »</p>`;

const s_p_17 = `<p>Alors bienvenu et bon voyage à vous deux dans une autre dimension de l'amour et de la vie !</p>`;

const container = $('<div />', {css: {margin: 'auto', width: 1300, height: 660} }).appendTo($('#sample-viewer'));

	$('<div />', {'class': 'sample-flipbook'})
		.appendTo(container)
		.html(`<div><p style="font-size: 50px; margin-top: 10%; margin-bottom: 30px;">Matt et Faust</p><br><p>« Le mariage signifie une nouvelle, une plus haute époque de l’amour.<br>L’amour sociable et vivant. » <br> (Novalis)</p><p><br><a onclick="goToLastPage();">(Aller à la dernière page)</a></p>
  </div>
  <div>${s_p_1} ${s_p_2} ${s_p_3} ${s_p_4}  ${s_p_5}</div>
  <div>${s_p_6} ${s_p_7} ${s_p_8} ${s_p_9}</div>
  <div>${s_p_10} ${s_p_11} ${s_p_12} ${s_p_13}</div>
  <div>${s_p_14} ${s_p_15} ${s_p_16} ${s_p_17}</div>
  <div><p><a href="#" onclick="goToFirstPage();">(Retourner à la première page.)</a></p></div>`);

// Wait until it renders

$('.sample-flipbook').turn({
	width: 1300,
	height: 660,
	autoCenter: true,
	shadows: $.isTouch,
	acceleration: $.isTouch
});

})(jQuery);
