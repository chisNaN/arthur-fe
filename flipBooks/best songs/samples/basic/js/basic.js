(function($) {

	let awsUrl = 'https://s3-us-west-2.amazonaws.com/agreg0ire/website-datas/music/';
	awsUrl = ''

	const bestSongs = [{artist: 'Zero7', title: 'Morning Song', descr: 'A faithful expression of what one can feel during the morning.', name: '01+-+Morning+Song.mp3'},
		{ artist: 'Muki', title: 'Quiet Riot', descr: 'A good introductive James Bond song.', name: '02+-+Quiet+Riot.mp3'},
		{ artist: 'DJ Cam', title: 'Bounce', descr: 'One of the smartest bassline ever heard.', name: 'https://doc-0c-80-docs.googleusercontent.com/docs/securesc/ha0ro937gcuc7l7deffksulhg5h7mbp1/3592ev8bii3n0qt2jksi7kij5eniditp/1554458400000/17286551385290304284/*/0ByZkBrrzUJN_bkhVN1NSSloyd1U'},
		{ artist: 'Fragmentorchestra', title: 'Metropolis', descr: 'A very warm and sunny smooth jazz.', name: '04+-+metropolis.mp3'},
		{ artist: 'Taxi', title: 'People Come Running (Needs Remix)', descr: 'My national anthem. Lively, joyful and simple melodies.', name: '05+-+People+Come+Running+Needs+Remix.mp3'},
		{ artist: 'Musaria', title: 'Moment (Atjazz Remix)', descr: 'One of the best and most soulful AtJazz remix', name: 'https://doc-0g-80-docs.googleusercontent.com/docs/securesc/ha0ro937gcuc7l7deffksulhg5h7mbp1/cahi79t08m6ddvhvjprtrrntc2fude71/1554458400000/17286551385290304284/*/0ByZkBrrzUJN_ajBWRXhwVE5OX0U'},
		{ artist: 'Down to the Bone', title: 'The Sweetness', descr: 'The last tube of DTTB', name: '07+-+The+Sweetness.mp3'},
		{ artist: 'Incognito', title: 'Marrakech', descr: 'An entrancing journey to Marrakech', name: '16+-+Marrakech.mp3'},
		{ artist: 'Crazy Penis', title: 'Last Knockers', descr: 'One of the best funky and groovy Crazy P tune', name: 'https://doc-08-80-docs.googleusercontent.com/docs/securesc/ha0ro937gcuc7l7deffksulhg5h7mbp1/t3jsrhg6q6quqeecqs5jgs6kgees1uhp/1554458400000/17286551385290304284/*/0ByZkBrrzUJN_UktESk4yX3VUYTQ'},
		];

		const bestSongs2 = [{ artist: 'Donald Byrd', title: 'Design a Nation', descr: 'Gary bartz\'s improvisation on a Mizell brother\'s production', name: 'https://doc-0c-80-docs.googleusercontent.com/docs/securesc/ha0ro937gcuc7l7deffksulhg5h7mbp1/jb600e4vh8lvrb8ql88si48tbd5p8bs9/1554458400000/17286551385290304284/*/0ByZkBrrzUJN_bElqUXNuYXJjVWM'},
		{ artist: 'Celso Fonseca', title: 'Ficar', descr: 'A modern, original and soulful MPB', name: '11+Celso+Fonseca+-+Ficar.mp3'},
		{ artist: 'Kings of Convenience', title: 'Summer On The Westhill', descr: 'Meditative and nostalgic folk from Norway', name: 'Summer+On+The+Westhill.mp3'},
		{ artist: 'Manual and Syntaks', title: 'A Perfect Solitude', descr: 'One can feel like in "Atlantis" listening this track', name: '11+-+A+Perfect+Solitude.mp3'},
		{ artist: 'Hammock', title: 'This Is Not Enough', descr: 'Very "visual" music, one can feel the light of high northern areas.', name: '11+-+This+Is+Not+Enough+(Epilogue).mp3'},
		{ artist: 'Terry Callier', title: 'Dancing Girl', descr: 'Poetic, warm and powerful song. A big source of inspiration', name: '13+-+Dancing+Girl.mp3'},
		{ artist: 'Nuyorican Soul (with George Benson)', title: 'You Can Do It (Baby)', descr: 'An "orgasmic" guitar track', name: '14+-+Masters+At+Work+-+Nuyorican+Soul+-+You+Can+Do+It+(Baby)+[with+George+Benson].mp3'},
		{ artist: 'Phoneheads &amp; the Düsseldorf Symphonic Orchestra', title: 'Subject Beautiful', descr: 'Another powerful and immersive 007 song. (Enjoy the voice of Cleveland Watkiss)', name: '15+-+Subject+Beautiful.mp3'},
		{ artist: 'Archive', title: 'Sleep', descr: 'Romantic and mind-blowing triphop/progressive rock', name: 'https://doc-0c-80-docs.googleusercontent.com/docs/securesc/ha0ro937gcuc7l7deffksulhg5h7mbp1/bsc54k7cmv88ffvcnndmc8co9apd1ej0/1554458400000/17286551385290304284/*/0ByZkBrrzUJN_QUNDTVZmbWdHWEU' }
	];

	const bonusTracks = [{artist: 'High Violets', title: 'Chinese Letter (Ulrich Schnauss Remix)', descr: 'One of the best Ulrich Schnauss remix', name: '11.+High+Violets+-+Chinese+Letter+(Ulrich+Schnauss+Remix).mp3'},
	{artist: 'Guitar', title: 'Heretogether', descr: 'Dreamy, utopian and melancholic melodies', name: '09+-+Heretogether.mp3'},
{artist: 'Hot Toddy', title: 'Floatation Tank', descr: 'Summer hypnotic soulful track by Chris Todd (Crazy P)', name: '05+Floatation+Tank.mp3'},
{artist: 'The Lushlife Project', title: 'The Plastics Birds Part 2', descr: 'Late summer soulful deep house from Magyarorszag', name: 'the+plastics+birds+part+2.mp3'},
{artist: 'ReJazz', title: 'At First Glance', descr: 'Matthias Vogt and his band', name: '10+rejazz+Feat.+Mediha+-+At+First+Glance.mp3'},
{artist: 'Makoto', title: 'Time (Kyoto Jazz Massive Remix)', descr: 'soulful and groovy KJM remix with C.Watkiss voice', name: 'Time+(Kyoto+Jazz+Massive+Remix).mp3'},
{artist: 'City of Satellites', title: 'Skeletons (Manual Remix)', descr: 'One of the best Manual (Jonas Munk) Remix', name: '08.+Manual+-+City+of+Satellites+Skeletons+(Manual+Remix).mp3'},
{artist: 'Spotlights', title: 'Seismic', descr: 'Most "explosive" track ever heard!', name: '01+-+Seismic.mp3'},
{artist: 'Sparklehorse', title: 'Cow', descr: 'Our world is sadder and less beautiful without Mark Linkous', name: '08+-+Cow.mp3'}];

const lastPage = [{artist: 'Brian Bennett', title: 'Image', descr: 'Another 007 lyrical track', name: '11+-+Brian+Bennett+-+Image.mp3'}]

let htmlOutput = '';
let htmlOutput2 = '';
let htmlOutput3 = '';

bestSongs.forEach(o => {
	htmlOutput += '<p style="padding-top: 10px;">'+o.artist+', '+o.title+'<br><span style="font-style: italic; font-size: 12px;">'+o.descr+'</span><br><audio src="'+awsUrl+o.name+'" preload="none" type="audio/mp3"  controls title="'+o.title+'"></p>';
});

bestSongs2.forEach(o => {
	htmlOutput2 += '<p style="padding-top: 10px;">'+o.artist+', '+o.title+'<br><span style="font-style: italic; font-size: 12px;">'+o.descr+'</span><br><audio src="'+awsUrl+o.name+'" preload="none" type="audio/mp3"  controls title="'+o.title+'"></p>';
});

bonusTracks.forEach(v => {
	htmlOutput3 += '<p style="padding-top: 10px;">'+v.artist+', '+v.title+'<br><span style="font-style: italic; font-size: 12px;">'+v.descr+'</span><br><audio src="'+awsUrl+v.name+'" preload="none" type="audio/mp3"  controls title="'+v.title+'"></p>';
});

var container = $('<div />', {css: {margin: 'auto', width: 1300, height: '95%' } }).appendTo($('#sample-viewer'));

	$('<div />', {'class': 'sample-flipbook'})
		.appendTo(container)
		.html(`<div><p style="font-size: 30px; margin-top: 10%; margin-bottom: 50px;">"My" Best Songs (33 years old)</p>
<p >Binkbeats, Little Nerves (Live)<br><span style="font-style: italic; font-size: 12px;">Aerial lyric and powerful track</span><br><audio src="https://doc-0s-80-docs.googleusercontent.com/docs/securesc/ha0ro937gcuc7l7deffksulhg5h7mbp1/edhsv54jp2m6r4qov4m9m7g0c97hi92g/1554458400000/17286551385290304284/*/0ByZkBrrzUJN_Z21URndaVlY5ZW8" preload="none" type="audio/mp3"  controls title="Little Nerves (Live)"></p>
<p style="padding-top: 10px;">Snarky Puppy, Skate U<br><span style="font-style: italic; font-size: 12px;">Introductive track</span><br><audio src="${awsUrl}04+-+skate_u.mp3" preload="none" type="audio/mp3"  controls title="Skate U"></p>
<p style="padding-top: 10px;">Beth Hirsch, Wholehearted<br><span style="font-style: italic; font-size: 12px;">Warm bossanova from AIR singer</span><br><audio src="https://doc-14-80-docs.googleusercontent.com/docs/securesc/ha0ro937gcuc7l7deffksulhg5h7mbp1/m1o2r14d12cof3ts2s319nggedu6js73/1554458400000/17286551385290304284/*/0ByZkBrrzUJN_M3NKMnVVdUNyQUE" preload="none" type="audio/mp3"  controls title="Wholehearted"></p>
<p style="padding-top: 10px;">Kommode, Lady-logic<br><span style="font-style: italic; font-size: 12px;">Eirik Glambek Bøe</span><br><audio src="${awsUrl}03-kommode-lady-logic.mp3" preload="none" type="audio/mp3"  controls title="Lady-logic"></p>
<p style="padding-top: 10px;">Donald Byrd, I feel like loving you today<br><span style="font-style: italic; font-size: 12px;">Donald byrd trumpet on a stunning Isaac Hayes production</span><br><audio src="https://doc-0s-80-docs.googleusercontent.com/docs/securesc/ha0ro937gcuc7l7deffksulhg5h7mbp1/vqiqnc6gj61jetjsde2gm12ehr5vvs5e/1554458400000/17286551385290304284/*/1j-oHTwCbPzsUv_E4vAa2f_xRisl2eyIk" preload="none" type="audio/mp3"  controls title="I feel like loving you today"></p>
<p style="padding-top: 10px;">Safri Duo, Baya Baya<br><span style="font-style: italic; font-size: 12px;">Percussions</span><br><audio src="${awsUrl}08+-+Baya+Baya.mp3" preload="none" type="audio/mp3"  controls title="Baya Baya"></p>
<p style="padding-top: 10px;">Lars Bartkuhn Tokyo Burning<br><span style="font-style: italic; font-size: 12px;">Dynamic groove from german multi-instrumentist</span><br><audio src="${awsUrl}Lars+Bartkuhn+-+Tokyo+Burning.mp3" preload="none" type="audio/mp3"  controls title="Tokyo Burning"></p>
		<a onclick="goToLastPage();">(Aller à la dernière page)</a></p></div>
				<div>${htmlOutput}</div><div>${htmlOutput2}</div><div>${htmlOutput3}</div>
				<div>${lastPage.map(o => '<p style="padding-top: 10px;">'+o.artist+', '+o.title+'<br><span style="font-style: italic; font-size: 12px;">'+o.descr+'</span><br><audio src="'+awsUrl+o.name+'" preload="none" type="audio/mp3"  controls title="'+o.title+'"></p>').join('</div>')}`
);
// Wait until it renders

$('.sample-flipbook').turn({
	width: 1300,
	height: '95%',
	autoCenter: true,
	shadows: $.isTouch,
	acceleration: $.isTouch
});

})(jQuery);
