(function($) {

const questions = `<p class='t'><u>Quelques questions:</u></p><p>Pourquoi les russes savent-ils construire des choses qui durent?</p>
<p>Combien de personnes n'ont elles jamais su quel jour de la semaine elles sont nées?</p>
<p>Où peut vous mener une vie où vous faîtes  et choisissez toujours ce qu'il vous plait (de faire)?</p>
<p>Quand bien même chacun parvenait à faire ce qui lui plait vraiment dans la vie, est-ce que le monde se porterait mieux pour autant?</p>
<p>Quelles sont finalement, à la fin d'une vie, les différences entre les souvenirs de choses réellement vécues et les souvenirs de celles seulement rêvées? Entre les reflets de réalité et les « reflets de reflets »?</p>
<p>​Quel animal vous sentez vous?</p><p>L'être humain des sociétés modernes (mis à part l'artiste?) peut-il faire autre chose que de jouer avec l'élasticité de la laisse de son auto-domestication?</p>`;

const utopia = `<p class='t'><u>Utopie/Dystopie</u></p><p>Un monde où les femmes demandent en mariage (aux hommes).</p>
<p>Une humanité « biologiquement autistique » à la manière des dauphins.</p><p>Les enfants appartiennent tous au même pays.</p>
<p>Un monde où l'on ne pourrait pas retourner (au même endroit) dans l'espace (c'est une des manières de définir un trou noir).</p>`;

const contrepetrie = `<p class='t'><u>Contrepèterie:</u></p><p>Imaginez une machine à lécher le singe.</p>`;

const contreproverb = `<p class='t'><u>Contre-proverbes:</u></p><p>« loin des yeux, loin du coeur », « absence makes the heart grow fonder »</p>
<p>« les choses ne tournent pas rond », « things go round in circles »</p><p>C'est parce que les chiens font des chats à un moment donné que nous avons toutes ces créatures sur terre.</p>
<p>Fais comme « pas chez toi » !</p><p>J'aime la programmation parce que c'est un monde où c'est essentiellement et réellement avec les « si » qu'on fait plein de choses.</p>
<p>A force de vouloir se sentir partout chez soi on finit par être étranger à soi-même?</p><p>L'exception qui « infirme » la règle.</p>
<p>Je ne crois que ce que je ne vois pas, autrement dit l'invisible.</p><p>Il ne faudrait pas dire « je n'ai pas le temps » mais plutôt <br> « ce n'est pas ma priorité »</p>`;

const sciences = `<p class='t'><u>Remarques pour diverses sciences</u></p><p>La philosophie ne mène à rien car tout mène à la philosophie.</p>
<p>La psychiatrie est malheureusement la branche de la médecine qui évolue le moins.</p><p>Les rêves sont comme une boîte de pandore qu'il faudrait manipuler que sous certaines conditions et avec une extrême précaution.</p>
<p>Windows est le plus grand virus de l'histoire de l'informatique.</p>
<p>Les gens s'imaginent que l'informatique est compliquée alors que dans la plupart des cas de figures, lorsqu'un nouveau problème se présente, une seule règle suffit pour s'en sortir: lire. Il suffit d'avoir l'envie et de prendre le temps de lire.</p>
<p>​Il n'y a rien de plus ridicule de soutenir que l'art est inutile et ridicule car c'est peut-être la seule activité qui séparera les générations à venir d'avec les machines.</p>
<p>Le geste écologique par excellence est de ne pas avoir d’enfants. À la rigueur même adopter un enfant n’est pas écologique car c’est dans la majorité des cas le soustraire à une vie où le total de sa production carbone aurait été moins importante que dans sa nouvelle vie.</p>
<p>On ne s’intéressera (« aidera ») pas correctement aux gens tant quand on ne se sera pas d’abord bien d’abord intéressé  (« étudier » ) aux choses.</p>
<p>Ce qu’il faut comprendre avec la théorie de la relativité restreinte et générale est qu’on ne peut que RALENTIR le temps pour soi. Ralentir son cadre temporel.</p>
<p>La mécanique quantique est la vraie magie</p>`;

const others = `<p class='t'><u>Autres</u></p><p>Le vivant n'est vraiment ce qu'il est que lorsqu'il prend des risques.</p><p>Les morts-vivants ne sont pas de la fiction, on en côtoie tous les jours: les virus!</p>
<p>Les gens intéressants sont simplement ceux ou celles qui s'intéressent à une foultitude de choses et sont capables de les faire partager avec passion.</p>
<p>Ne pas savoir parler anglais c'est presque comme ne pas savoir utiliser un ordinateur. (D'ailleurs il est assez rare de rencontrer une personne parlant un très bon anglais qui ne soit pas sa langue native et ne sachant pas manipuler un ordinateur).</p>
<p>Il y aurait-il meilleur moment pour mourir que pendant l'acte d'amour?</p><p>L'omniscience passe par la connaissance et la compréhension de toutes formes de langues, langages, signes et symboles. Dieu est aussi omniscient en ce sens.</p>
<p>Il y a d'abord trois types de politiciens: les clowns, les criminels et les imposteurs.</p>
<p>Je pars du principe que je peux en apprendre autant d'un enfant de cinq ans que d'un homme ayant été interprète à la commission et au parlement européen.</p><p>Derrière du «faux quelque chose» se cache souvent une «vraie connerie»</p>
<p>Il n’y a qu’une chose mauvaise c’est le manichéisme!</p><p>Je crois à la mort après la vie (et pas l'inverse)</p>`;

const other_p2 = `<p>Dans le sac à main des femmes, il y a tout mais on n'a accès à rien!</p><p>Au printemps lorsque les journées rallongent clairement, il se passe dans notre cerveau quelque chose de comparable à une découverte musicale majeure.
<br>En plus d'un renouveau psychique, on est entraîné vers de nouveaux espoirs, motivations, projets. On redécouvre cette sensation d'éternité, de temps en dehors du temps...</p><p>Il faut parfois accepter que certaines situations de la vie n'ont d'autres solutions que la dis-solution</p>
<p>Le <a href='https://en.wikipedia.org/wiki/Sexual_dimorphism' target='_blank'>dimorphisme sexuel</a> chez l'être humain est si peu prononcé que certaines formes d'<a href='https://en.wiktionary.org/wiki/allo-' target='_blank'>allo</a>-sexualité ne m'étonnent guère.</p>
<p>Les fastfood c'est comme la masturbation: sur le coup c'est rapide et rarement bon et après on se sent sale!</p>
<p>Certes une heure n'est que 60 minutes, une journée n'est que 24 heures, une semaine n'est que 7 jours et 1 mois 4 semaines. Mais quand on se remet à vivre de manière inconsciente qu'un mois écoulé est aussi illusoire qu'une heure écoulée et donc sans s'imaginer tout ce qu'il faut faire durant 1 mois pour accomplir un projet.
  Bref quand le temps est de nouveau un allié et non plus un ennemi, plus rien ne semble insurmontable à la conscience.</p>
<p>​La saudade est différente de la simple nostalgie en ce qu'elle est aussi réminiscence aux choses d'une vie future perdue et pourtant potentiellement retrouvable! Elle n'est pas seulement un regard sur du passé révolu mais aussi désir d'une destinée qui pourrait se représenter et s'accomplir dans une vie future.
  Elle contiendrait (pour moi) une dimension de regret.</p>`;

const other_p3 = `<p>Nous sommes juste des 'surrogates' de vie, d'amour, d'inspiration etc.</p><p>Most important is not the place but the 'togetherness'</p><p>Le monde des adultes est conflictuel. Le monde de l'artiste est une évasion du monde adulte, un retour au monde de l'enfance.</p>
<p>Très souvent plus un problème est traité en amont plus sa solution est simple rapide et efficace.</p>
<p>Se marier plusieurs fois ne devrait pas être possible, comme on ne peut pas nous enterrer plusieurs fois (dans une même vie en tout cas pour ceux qui croiraient à la réincarnation). Tous les autres mariage d’une personne sont des fausses unions des pseudos mariages.</p>
<p>Aux pôles, une année passe comme une journée, tandis qu’à l équateur en altitude une journée peut passer comme une année (avec toutes les saisons)</p>`;

const internet_risks = `<p class='t'><u>Internet, virtuel, risques</u><p><u>L'empêchement de l'accomplissement de soi.</u></p><p>Accorder trop de temps au virtuel c'est empêcher de s'accomplir réellement. On a tendance à oublier cette évidence originelle.
On ne vit plus que par l'image qu'on souhaite véhiculer de soi. On est trop dans la communication, peu dans la création et l'accomplissement. Sans même subir d'harcèlement extérieur c'est parfois et même souvent un jeu auquel on s'invite premièrement paradoxalement.</p>
<p><u>L'illusion de défoulement.</u></p><p>Cela est déjà arrivé à certains d'entre nous de se servir des réseaux sociaux (facebook notamment) pour 'tenter' de se défouler lors de moments conflictuels avec autrui. Mais c'est encore une fois une illusion.
Le défoulement n'existe pas lorsqu'on est dans un rapport à autrui via réseaux sociaux ou e-mail (alors que je considère qu'il peut exister dans le cas des jeux vidéos). Les jeux vidéos peuvent même avoir un effet cathartique.
Au contraire ici par un effet boule de neige, chacun des interlocuteurs présents dans la zone conflictuelle, va générer une frustration décuplée qui se trouvera être le résultat totalement contraire et escompté de ce que l'on retrouve lors d'un défoulement 'classique'.
Un défoulement classique, c'est prendre une hache dans son garage pour aller taper sur un arbre dans les bois ou plus simplement taper dans un punching ball.</p><p><u>La rapidité de la communication.</u></p>
<p>Notre manière de vivre 'digitalisée', numérique avec internet qui change complètement notre rapport au temps (et donc à autrui) et qui de ce fait, peut se révéler néfaste, car lors de situations conflictuelles par exemple, on ne prend pas le temps de 'la retraite', la réflexion, du recueillement, de la distance.
  Comme le disent les proverbes anglais et français: 'Absence makes the heart grow fonder', loin des yeux, PRÈS du coeur sous-entendu l'absence apaise les mauvaises passions. (Ce point-là est intimement lié avec le précédent.)</p>`;

const internet_risks2 = `<p><u>Renforcement de l’isolement.</u></p><p><p>Sans incriminer les réseaux sociaux (qui eux ne sont que la raison du “maintien de cette stratégie), c’est déjà la nature même d’internet en abolissant les distances nous permet d’être en relation avec n’importe qui
à 'presque' n’importe quel endroit de la planète qui rend possible et initialise cette 'stratégie'.<p>On augmente ensuite ses contacts via les réseaux sociaux (qui peuvent même dans certains cas être de totals inconnus à de longues distances dans le but de se faire de nouveaux amis par ex).
Mais arrive alors le risque d’entretenir une relation exclusivement virtuelle avec chacun de ces contacts qui a pour effet de renforcer l’isolement si les contacts ne se donnent pas le moyen de se rencontrer réellement.</p>
<p>La proportion de contacts exclusivement virtuels peut rapidement prendre le dessus sur ceux réels surtout si les contacts sont répartis au 4 coins de la planète.</p><p>Par ailleurs ces contacts n’ont pas besoin non plus d’être très éloignés en distance pour entretenir une relation seulement 'télé-présentielle'.
Ils peuvent vivre tout au long de l’année dans la même région voir le même département et pourtant ils n’arrivent même pas à se rencontrer en chair et en os une fois par an!</p><p>En conclusion, internet avec les réseaux sociaux nous mettent dans le risque de 'l’illusion' d’améliorer,
augmenter nos relations amicales alors que on tend dangereusement et paradoxalement vers un renforcement de l’isolement qui va de pair avec le point précédemment vu de 'l’empêchement de l’accomplissement de soi'.</p>`;

const s_miyazkian_villages = `<p class='t'><u>Endroits Miyazakien</u></p><p><a href='https://www.google.com/maps/place/Erice,+Trapani,+Italie/@38.0126403,12.6330836,12z/data=!3m1!4b1!4m2!3m1!1s0x13197caf96a77763:0x5df4900ba40cec86' target='_blank'>Erice</a></p>
<p><a href='https://www.google.com/maps/place/Palais+national+de+Pena/@38.787585,-9.390614,17z/data=!3m1!4b1!4m2!3m1!1s0xd1edabff29c5a67:0x77271a7dcb673b58' target='_blank'>Palacio da Pena</a></p>
<p><a href='https://www.google.com/maps/place/Puerto+Nari%C3%B1o,+Amazonas,+Colombie/@-3.541985,-70.50833,10z/data=!3m1!4b1!4m2!3m1!1s0x91f20bcb19c6ea2b:0xd578bffb2adc25c5' target='_blank'>Puerto narino</a></p>`;

const daysInLife = `<p class='t'><u>Ces jours qui ont marqué ma petite<br><br>existence...</u></p><p>- Quand j'ai vu le lecteur mini-cd de Sony. Je me suis dis « il me faut ce truc! »</p>
<p>- Mes premiers téléchargements de musique grâce au logiciel peer to peer Kazaa.</p><p>- Mes premiers cours de philosophie avec François Tenaud.</p>
<p>- Le jour des attentats du 11 septembre 2001. Ces images surréalistes à la télé!</p><p>- Le jour du décès de mon père.</p><p>- Mes premières compositions M.I.D.I. sous Cubase avec le piano électronique de ma mère.</p>
<p>- Mon premier saut en parachute en tandem (avec <a href='https://www.youtube.com/watch?v=lDsN8a6hBCE' target='_blank'>Mike Brooke</a>).</p><p>- Le soir et la nuit du passage à l'année 2010...</p>`;

const s_my_dreams = "<p class='t'><u>Quelques rêves...</u></p><p>- Observer les 'doigts de dieux' dans la tornado alley aux USA</p><p>- Observer la terre depuis l'epsace</p><p>- Un week-end dans un phare ou dans un sous-marin.</p>";

const medellin = "<p class='t'><u>Medellin</u><p>Medellin est utopium</p><p>Medellín est une porte vers l'Amérique latine comme Marrakech pour l'Afrique.</p><p>Pour reprendre l'expression de F.Pessoa: 'Medellin on y est heureux quand on n'y va pas!'</p><p>'Diviser pour mieux régner'; on peut encore sentir que c'est une philosophie qui a beaucoup pesé.</p></p><p>C’est la fascination et l’exaltation indescriptible que l’on ressent au contact de cette ville qui nous amène à y retourner comme on retournerait fatalement vers son amant(e).</p>";

const love = `<p class='t'><u>Sur l'Amour</u></p><p>L'amour c'est quand les défauts de l'un s'accordent avec ceux de l'autre.</p><p>L'amour est d'abord quelque chose qui s'éprouve. C'est ensuite quelque chose qui se prouve (au quotidien dans nos actes).</p><p>L'amour dans un couple est d'abord une théorie. Comme pour les théories scientifiques il faut mettre l'amour à l'epreuve</p>
<p>L'amour qui triomphe commence avec une juste synchronisation</p><p>Nous sommes souvent (nous les adultes) devant l'amour comme l'enfant de quatre ans devant un piano: totalement impuissant à sortir la moindre mélodie.
  Et au lieu de nous astreindre au silence ou à la réflexion selon le cas, nous persistons à laisser une saveur désagréable et amère, autant pour nous-même que pour l'autre, de quelque chose qui peut, si elle est maniée avec virtuosité produire les plus belles mélodies de notre monde...</p>
  <p>Si vous faîtes tout le travail pour faire exister l'autre et le 'nous', ça sera aussi à vous d'accomplir ce travail de 'dés-existence'!</p>
  <p>En amour attention à l'effet boomerang!</p><p>Tout le soucis d’un homme est de trouver une femme belle, intéressante et agréable à vivre. Mais le dernier critère se trouve plus souvent chez une personne plus âgée alors qu'il la souhaite plus jeune...</p>`;

const love2 = `<p>De nos jours, avec le style de vie libertin, la possibilité de voyager n'importe où, puis de rester en contact avec n'importe qui (ses exs copains, copines) grâce aux réseaux sociaux notamment, il est probable qu'on ait de plus en plus affaire à des unions 'post multiples expériences'.</p>
<p>Après que des ex-conjoints, par exemple, aient batifolé chacun de leur côté (expériences permettant points de références, comparaison), ils pourraient décider de renouer une ancienne relation. On est assez éloigné d'un engagement suite à une longue expérience de vie en commune au préalable.</p><p>Le synonyme d'amour est sacrifice</p>`;

const psycho = `<p class='t'><u>Psycho</u></p><p>Entrer dans une maladie psychique c'est un peu comme entrer dans un tunnel obscur dont on ne connaîtrait pas la distance (si d'ailleurs fin il y a pour les plus pessimistes?).
Si l'état pathologique général nous fait rentrer dans un espace 'rétréci' (Goldstein), la spécificité de l'état pathologique psychique tient en l'indétermination de sa temporalité. Bref il est aisé de constater qu'une maladie de conscience (même les chroniques?) est d'abord une maladie de durée.
Quand est-ce que ça va s'arrêter ? Pourrais-je redevenir comme avant ? (Ou résilience plutôt). Mon trouble est-il si sévère pour que je ne puisse pas par moi-même refaire du temps mon allié, reprendre par moi-même le pouvoir de ma ‘pleine conscience’?</p>
<p>Pour être appréciable, la réalité doit fonctionner sur le même modèle que le rêve ou que l’art pour reprendre l’expression de C.DEBUSSY lorsqu’il évoquait 'le silence entre les notes'. Ce sont les espaces dont il est composé qui font sa stabilité, son harmonie.
  Les moments de solitude constituent ces espaces. Trop rempli de personnes, de rencontres ça sature et vire au cauchemar éveillé.</p>
<p>L'autosuggestion est ce qui stimule et développe la confiance en soi, elle est en quelque sorte la musculation de la confiance en soi.</p><p>Toute forme d'addiction est une forme de soumission donc de diminution de sa liberté.</p>
<p>De l'oppression naît l'expression et de l'expression naît une certaine forme de guérison.</p><p>Il y a peur quand il y a complexe d'infériorité et il y a complexe d'infériorité quand il y a abscence de connaissance.</p>
<p>L'opposé symétrique du rêve lucide (état inconscient contrôlé) est la "décompensation" (état incontrôlé conscient): elle est comme un cauchemar éveillé.</p>`;

const psy2 = `<p>Quand vous vous engagez dans une période de temps où vous prenez des risques (cumulés ?), soyez toujours prêts à pouvoir vous accrocher à quelque chose de la même manière que vous vous accrochez quand vous montez à l'arrière d'une moto.</p>
<p>Se sentir réel passe par toucher quelque chose ou quelqu’un par la totalité de la surface de sa main, et surtout avec sa paume</p>
<p>Le vrai lâcher prise ne peut commencer que sans internet, smartphone et ordinateur</p>
<p>Il y a écho la où il y a obsession</p>`;

const lastChapter = `<p class='t'><u>A mon propos</u></p><p>Mon cynisme est la manière de révéler les contradictions dans le comportement des gens et souvent de s'en moquer.</p>
<p>Lorsque je voyage en Colombie je voyage dans mon inconscient, en Russie dans mon âme, en Inde dans mon coeur et en France dans mon esprit.</p>
<p>Parfois je me dis que mon trouble est la meilleure chose qui me soit arrivée dans la vie: sans lui elle n'aurait sûrement pas eu autant d'intensité et de créativité!</p>
<p>Je suis homosexuel psychiquement, hétérosexuel physiquement.</p><p>C'est plutôt ce que les autres disent de moi dans mon dos qui m'intéresserait de savoir...</p>
<p>Je m'intéresserais plus aux choses qu'aux gens.</p><p>Sur mon épitaphe: 'Music must travel (Marcel Tabuteau).'</p><p>Au fond je suis marié depuis mes 15-16 ans environ: au Rach 3!</p>
<p>Google est mon meilleur ami, la musique est ma femme et la philosophie mon garde-fou.</p><p>'Le poète se souvient du futur': Dans une vie future je vivrai une histoire avec une paisa au Brésil. À plusieurs reprises déjà, dans cette vie cela a failli se produire...</p>
<p>"Il y a ceux qui disparaissent avant de mourrir" (H.MURAKAMI) et je disparais dans un solipsisme musicale hypermnésique</p><p>À défaut de pouvoir mourir à Thekkady (Kumily), j'aimerais pouvoir y être enterré.</p>
<p>Une nuit j'ai rêvé d'un nom prénom à consonnance indienne: Shal Ishamdjer</p>
<p><br><a href='#' onclick='goToFirstPage();'>(Retour à la 1ère page)</a></p>`;

const container = $('<div />', {css: {margin: 'auto', width: 1300, height: '95%'} }).appendTo($('#sample-viewer'));

	$('<div />', {'class': 'sample-flipbook'})
		.appendTo(container)
		.html(`<div><p style="font-size: 50px; margin-top: 10%; margin-bottom: 30px;">Fragments</p>
          <br>(...à ne pas toujours prendre au sérieux!)<p>"Pour qu'une chose dure, confiez-la au langage" <br> (<a href="http://fr.wikipedia.org/wiki/Patrice_Loraux" target="_blank">Patrice Loraux</a>)</p>
          <p><br><a onclick="goToLastPage();">(Aller à la dernière page)</a></p></div>
            <div>${questions}</div>
      			<div>${utopia}</div>
      			<div>${contrepetrie}</div>
      			<div>${contreproverb}</div>
      			<div>${sciences}</div>
      			<div>${others}</div>
            <div>${other_p2}</div>
            <div>${other_p3}</div>
            <div>${internet_risks}</div>
            <div>${internet_risks2}</div>
			      <div>${s_miyazkian_villages}</div>
            <div>${daysInLife}</div>
      			<div>${s_my_dreams}</div>
      			<div>${medellin}</div>
      			<div>${love}</div>
      			<div>${love2}</div>
      			<div>${psycho}</div>
            <div>${psy2}</div>
            <div>${lastChapter}</div>`);

// Wait until it renders
$('.sample-flipbook').turn({ width: 1300, height: '95%', autoCenter: true, shadows: $.isTouch, acceleration: $.isTouch });

})(jQuery);
