(function($) {

const ipfsHttpsEndpoint = 'https://ipfs.infura.io/ipfs/'
const hashs = [
    "QmYSQWB7S9TgiXrNWDzM4Z5HZZ2J7LrbwX1r48wjjUa1fe",
    "QmSZjjpcJASxid1ZA9pcMiBRvo6JGdZrHy19gApkk3CGjx",
    "QmVvJdiLGThABSCRGY3vckF7vsG6aQziYD2m8E7T1AD6hX",
    "QmQEKhTMs5Rn1zk2Z6aG7rR6qscJbpX5G5g6hjiCueGMjK",
    "QmNsu7ZUVTpikLnaV8LAm9p36d3NBLdJ8t74AkH5psBE2k",
    "QmXX7mm9qhdRRqdpydGq5JEjmQxpDd7K7bRqKghnk9CxPn",
    "QmTohg1QfGxUoniDbsqv46fGXa8mpjhVQnzFUgs4oqaa87",
    "QmYHoqTxuqZmmxzSMs7RrN75979TE54o64XJYeLkQo8Ad5",
    "QmXnGQF85AHvcNrqfgaRxeWbM6pu7QYK7E2kb4u2jEsXMz",
    "QmZQ6Ngtwpe6m5k4x5BQkEuxN8ZoxmjTi7NvabE7j3ost9",
    "QmQMXEmeqBnJFisbQCPgLMJz8JQPELdK52idR1z9R3tfEZ",
    "QmVnDDJCEzSaMZfv8mfxnXQp8a4GwM6oMavKXK4DC2KqhP",
    "Qmc6DL26JphigXCyzHRxVc2mKPG2NXmH7YYZGmxwor1RaT",
    "Qma3MLp65Uy7a6S4NiZQXTfMLNJQhBTAGB2Mm3ikGj21b5",
    "QmYcGDBGmFfQSHFxGz8fL871Nq4PvRJTPryGHoT5iDMLTx",
    "QmUQDHBeLWstRtu55SWTiTALTfEYQgohjY34LFEg67JHVc",
    "QmawB7KZYpCrdX54S6dCxfLMmtRr8wzHEEc5CQPdRCG5gq",
    "QmTHDtxepUs1fTSsuxjWzFudajSjcQrp5cc3vPewx67cqi",
    "QmXQgw14ArtQML5D72qinFYe7ZxmmcyVTEzi12uiUfAfMG",
    "Qma2jEst6ppfnHCAiWptboomtq1u7YmL7aes6odieYrzrd",
    "QmawqUK9P9tgqNm4vEF5HFHzMjuK9UzXiSfTo982a5fGgf",
    "QmVBFUtkCKDhYJDciHMT4Zozpz4BcesFJ15UrAQbd1es3f",
    "QmbZPcfozQwxLi54VE5KXUv9FhQzBV2TUswqMRXwX6MsUs",
    "QmUAid9QqQp2DrtxEDo9mPiM6Anr4hQQFyxVfuXrPfwQ26",
    "QmaMERaT8yqNGL3qrVnT8WtyXgVwGBdVyiPbB4nJKnviEQ",
    "QmRoKxtqjee1tcsNrvQKwW6mse4VyuHPmDGRu8XQVbtWZR",
    "QmPKwdhxKJwiMKATL8cy9dHoDLSzQdmpiN8GUj7yZ9eQ3V",
    "QmV9Py4eqFJhj3F9B28H4V53oXSAArD3EQmyMcgYqFHC2Y",
    "QmbNY9xcFGE5f7da8pKE9U73SXHKw1cYL2ENE8yku9Sw81",
    "QmSj6zWPLLBKNokFEgHein88TySr7GuFeMeKT9TH4ibZDd",
    "QmUTVdDuS5yVzS4kWp5eVLETUZkXhTZ8w77zZmmKrVEHPv",
    "QmdeA52ugEypoxorcA3ZVK9LWKAfJhCskCjvJuV4UnHUkm",
    "QmfJnFkjqC7HGie6q7jpdbvz6hU32DnTFwqVGev4Zs8hd2",
    "QmRDWLVdtWLdBmWEedWfvBGZocv2wuriCfCfdxFbqKtx62",
    "Qmf7jz4LB3NdHHrZ61Zg9wCqeWoux4UrVJp9eAPYaq9vSu",
    "Qmda636PrZLN4HpfBGoVaQY6ptEGufTwEZoUqurPDR8zNe"
  ]
  let i = 0
  const bestSongs0 = [{artist: 'Binkbeats', title: 'Little Nerves (Live)', descr: 'Aerial lyric and powerful track.', name: ipfsHttpsEndpoint+hashs[i++]},
		{ artist: 'Snarky Puppy', title: 'Skate U', descr: 'powerful Introductive track.', name: ipfsHttpsEndpoint+hashs[i++]},
		{ artist: 'Beth Hirsch', title: 'Wholehearted', descr: 'Warm bossanova from AIR singer', name: ipfsHttpsEndpoint+hashs[i++]},
		{ artist: 'Kommode', title: 'Lady-logic', descr: 'Genius of Eirik Glambek Bøe.', name: ipfsHttpsEndpoint+hashs[i++]},
		{ artist: 'Donald Byrd', title: 'I feel like loving you today', descr: 'Donald byrd trumpet on a stunning Isaac Hayes production.', name: ipfsHttpsEndpoint+hashs[i++]},
		{ artist: 'Safri Duo', title: 'Baya Baya', descr: 'Percussions', name: ipfsHttpsEndpoint+hashs[i++]},
		{ artist: 'Lars Bartkuhn', title: 'Tokyo Burning', descr: 'Dynamic groove from german multi-instrumentist', name: ipfsHttpsEndpoint+hashs[i++]},
		];
	const bestSongs1 = [{artist: 'Zero7', title: 'Morning Song', descr: 'A faithful expression of what one can feel during the morning.', name: ipfsHttpsEndpoint+hashs[i++]},
		{ artist: 'Muki', title: 'Quiet Riot', descr: 'A good introductive James Bond song.', name: ipfsHttpsEndpoint+hashs[i++]},
		{ artist: 'DJ Cam', title: 'Bounce', descr: 'One of the smartest bassline ever heard.', name: ipfsHttpsEndpoint+hashs[i++]},
		{ artist: 'Fragmentorchestra', title: 'Metropolis', descr: 'A very warm and sunny smooth jazz.', name: ipfsHttpsEndpoint+hashs[i++]},
		{ artist: 'Taxi', title: 'People Come Running (Needs Remix)', descr: 'My national anthem. Lively, joyful and simple melodies.', name: ipfsHttpsEndpoint+hashs[i++]},
		{ artist: 'Musaria', title: 'Moment (Atjazz Remix)', descr: 'One of the best and most soulful AtJazz remix', name: ipfsHttpsEndpoint+hashs[i++]},
		{ artist: 'Down to the Bone', title: 'The Sweetness', descr: 'The last tube of DTTB', name: ipfsHttpsEndpoint+hashs[i++]},
		{ artist: 'Incognito', title: 'Marrakech', descr: 'An entrancing journey to Marrakech', name: ipfsHttpsEndpoint+hashs[i++]},
		{ artist: 'Crazy Penis', title: 'Last Knockers', descr: 'One of the best funky and groovy Crazy P tune', name: ipfsHttpsEndpoint+hashs[i++]},
		];

		const bestSongs2 = [{ artist: 'Donald Byrd', title: 'Design a Nation', descr: 'Gary bartz\'s improvisation on a Mizell brother\'s production', name: ipfsHttpsEndpoint+hashs[i++]},
		{ artist: 'Celso Fonseca', title: 'Ficar', descr: 'A modern, original and soulful MPB', name: ipfsHttpsEndpoint+hashs[i++]},
		{ artist: 'Kings of Convenience', title: 'Summer On The Westhill', descr: 'Meditative and nostalgic folk from Norway', name: ipfsHttpsEndpoint+hashs[i++]},
		{ artist: 'Manual and Syntaks', title: 'A Perfect Solitude', descr: 'One can feel like in "Atlantis" listening this track', name: ipfsHttpsEndpoint+hashs[i++]},
		{ artist: 'Hammock', title: 'This Is Not Enough', descr: 'Very "visual" music, one can feel the light of high northern areas.', name: ipfsHttpsEndpoint+hashs[i++]},
		{ artist: 'Isabelle Antena', title: 'My lexicon', descr: 'Soulful mediterranean bossanova', name: ipfsHttpsEndpoint+hashs[i++]},
		{ artist: 'Nuyorican Soul (with George Benson)', title: 'You Can Do It (Baby)', descr: 'An "orgasmic" guitar track', name: ipfsHttpsEndpoint+hashs[i++]},
		{ artist: 'Phoneheads &amp; the Düsseldorf Symphonic Orchestra', title: 'Subject Beautiful', descr: 'Another powerful and immersive 007 song. (Enjoy the voice of Cleveland Watkiss)', name: ipfsHttpsEndpoint+hashs[i++]},
		{ artist: 'Archive', title: 'Sleep', descr: 'Romantic and mind-blowing triphop/progressive rock', name: ipfsHttpsEndpoint+hashs[i++]},
	];

	const bonusTracks = [{artist: 'Ulrich Schnauss', title: 'No Further Ahead Than Today (2017 Edit)', descr: 'Ulrich Schnauss at his best', name: ipfsHttpsEndpoint+hashs[i++]},
	{artist: 'Guitar', title: 'Heretogether', descr: 'Dreamy, utopian and melancholic melodies', name: ipfsHttpsEndpoint+hashs[i++]},
{artist: 'Hot Toddy', title: 'Floatation Tank', descr: 'Summer hypnotic soulful track by Chris Todd (Crazy P)', name: ipfsHttpsEndpoint+hashs[i++]},
{artist: 'The Lushlife Project', title: 'The Plastics Birds Part 2', descr: 'Late summer soulful deep house from Magyarorszag', name: ipfsHttpsEndpoint+hashs[i++]},
{artist: 'ReJazz', title: 'At First Glance', descr: 'Matthias Vogt and his band', name: ipfsHttpsEndpoint+hashs[i++]},
{artist: 'Makoto', title: 'Time (Kyoto Jazz Massive Remix)', descr: 'soulful and groovy KJM remix with C.Watkiss voice', name: ipfsHttpsEndpoint+hashs[i++]},
{artist: 'City of Satellites', title: 'Skeletons (Manual Remix)', descr: 'One of the best Manual (Jonas Munk) Remix', name: ipfsHttpsEndpoint+hashs[i++]},
{artist: 'Spotlights', title: 'Seismic', descr: 'Most "explosive" track ever heard!', name: ipfsHttpsEndpoint+hashs[i++]},
{artist: 'Sparklehorse', title: 'Cow', descr: 'Our world is sadder and less beautiful without Mark Linkous', name: ipfsHttpsEndpoint+hashs[i++]}
]

const lastPage = [{artist: 'Brian Bennett', title: 'Image', descr: 'Another 007 lyrical track', name: ipfsHttpsEndpoint+hashs[i++]},
{artist: 'Talvin Singh', title: 'Butterfly', descr: 'Soulful indian vibes', name: ipfsHttpsEndpoint+hashs[i++]}]

let htmlOutput0 = bestSongs0.map(o => {
	return '<p style="padding-top: 10px;">'+o.artist+', '+o.title+'<br><span style="font-style: italic; font-size: 12px;">'+o.descr+'</span><br><audio src="'+o.name+'" preload="none" type="audio/mp3"  controls title="'+o.title+'"></p>';
}).join('');

let htmlOutput1 =bestSongs1.map(o => {
	return '<p style="padding-top: 10px;">'+o.artist+', '+o.title+'<br><span style="font-style: italic; font-size: 12px;">'+o.descr+'</span><br><audio src="'+o.name+'" preload="none" type="audio/mp3"  controls title="'+o.title+'"></p>';
}).join('');

let htmlOutput2 =bestSongs2.map(o => {
	return '<p style="padding-top: 10px;">'+o.artist+', '+o.title+'<br><span style="font-style: italic; font-size: 12px;">'+o.descr+'</span><br><audio src="'+o.name+'" preload="none" type="audio/mp3"  controls title="'+o.title+'"></p>';
}).join('');

let htmlOutput3 =bonusTracks.map(o => {
	return '<p style="padding-top: 10px;">'+o.artist+', '+o.title+'<br><span style="font-style: italic; font-size: 12px;">'+o.descr+'</span><br><audio src="'+o.name+'" preload="none" type="audio/mp3"  controls title="'+o.title+'"></p>';
}).join('');

let htmlOutput4 = lastPage.map(o => {
  return '<p style="padding-top: 10px;">'+o.artist+', '+o.title+'<br><span style="font-style: italic; font-size: 12px;">'+o.descr+'</span><br><audio src="'+o.name+'" preload="none" type="audio/mp3"  controls title="'+o.title+'"></p>'
}).join('')

const container = $('<div />', {css: {margin: 'auto', width: 1300, height: '95%' } }).appendTo($('#sample-viewer'));

	$('<div />', {'class': 'sample-flipbook'})
		.appendTo(container)
		.html(`<div><p style="font-size: 30px; margin-top: 10%; margin-bottom: 50px;">"My" Best Songs (33 years old)</p>
				${htmlOutput0}</div>
        <div>${htmlOutput1}</div>
        <div>${htmlOutput2}</div>
        <div>${htmlOutput3}</div>
				<div>${htmlOutput4}</div>`);

  $('.sample-flipbook').turn({
  	width: 1300,
  	height: '95%',
  	autoCenter: true,
  	shadows: $.isTouch,
  	acceleration: $.isTouch
  });
})(jQuery);
