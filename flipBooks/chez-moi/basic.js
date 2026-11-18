(async function($)  {

  let ipfsHttpsEndpoint = 'https://chisnan.infura-ipfs.io/ipfs/'
const fetchAvailableIPFSInfuraEndpoint = async  (incr = 0) => {
      try{
        const otherINFURAEndpoints = ['chisnan','infourat','test','arturo']
        const result = await fetch(`https://${otherINFURAEndpoints[incr]}.infura-ipfs.io/ipfs/QmYSQWB7S9TgiXrNWDzM4Z5HZZ2J7LrbwX1r48wjjUa1fe`)
        console.log('incr > otherINFURAEndpoints.length =', incr +'>'+ otherINFURAEndpoints.length)
        if(incr === otherINFURAEndpoints.length -1){
          console.warn('no more available ipfs endpoints')
          return JSON.stringify({error : 'no more available ipfs endpoints'})
        }
        if(result.status !== 200) {
          ipfsHttpsEndpoint = `https://${otherINFURAEndpoints[++incr]}.infura-ipfs.io/ipfs/`
         return fetchAvailableIPFSInfuraEndpoint(incr)            
        }
        return result
      }catch (err)
      {
        console.warn(err)
        return JSON.stringify({error : err})
      }
    }
    await fetchAvailableIPFSInfuraEndpoint();

  const ipfsHashs = ["QmTkkJZZQNmTzxMX6BH2oBRoBoJzdozS8sYNNCYcwVYyUx","QmYjiuD3m53vMBw4afJNLP3K8tvXGpsXUJPqbvySii3qvK","QmduQqoxtE7okfckJc3X4CdVctizNVgWp8sEiAJJAo68M5","QmbQGX7PtE6mxobBFa8cNmmMnDDTbtkvuqQDubDBiav4Zt","QmNm3ZuzRtcNBfUAPKcdDHiQNXa3aexreDUjwuXvphujwA","QmTZ54pG34BtCkzrLnj4wQK4LFMX4YFk4E2EADi8CkgbrF","QmXR3XMdiBYBP7h3dMxTnm8wHYLgkcGZ5sXdufCgHmBcXF","QmQdpiYP96nsMh293kfGpJ96u7GnW2agU44gmuTiYRWVQD","QmarBeh5AgKDNPvYtgMm8oppK1PA6amv6GSoft1QyWVdVq","Qme66ksr8pgRYB9zz41UkRq6QznuE2Hhe7eJ8C8ByXrD8H","QmbNvXypm391WNETcVBNmqDxmhu5s1QRCUGzXo1AzYoyjN","QmPukpFA3u5b5gycAFobD9ZXyHhBptKPawvtgAv6NVwKyT","QmQZQmtN3V528gCeCUXxCtLoTZ48kCp2qymBRCJcHExtUP","QmSRUJc8TAZGYVXhZWANdxnbSsNF8H4oZVt2vdBFY1PPKh","QmYik367nmyvPFspnC1LeVLKerJJz5JDihBdtsnyTPyYqu","QmcH6PhsjoVhqTL3gAdCSHkfYreUDYq4K8H8tMUfY1xMPU","QmRntUmRsVTFq2Ntm1MruqCZNbGdc5ZW68jjWmPWc12xdG","Qmf9TGyGQjfBPsJmQ5uUTyE32Tpw7pGZbhLhJqSJD3oeov","QmQpKkBVYRynbBG1efgUQEVqzJ1RY2dfSnspzMbsTE3K4z","QmUsFsfGckZc9LdbYWacYjwZoKRshffrtmnudGo1Sg9RM7","QmeDMKM6QeSic1bJ4gn3anw1LqEEmM7xis8qGoVdafYSWX","QmZyNyyf1fu99SDWJbGKLxMbwFV996gZFVebfEdFXMbmB6","QmZiJxtKoW2iZCu4nfvE9x3rgRBSYUUxg8BHjam5aJeUE9","QmesUo599mxeyJKxUAGjNkWsZovpbvmj1fhNyWLB6HJoAD","QmXRbHDjJdEXyKvvS3fT7thoejg4huePoap3P1VbLQ2CqU","QmRGHCcCtaj4ngQe59divixLR9vDepKRerzc4AfjF7Q5mj","Qma71vHFT124hVkQTmyPMBgaRrdFygMJvjSCC5BJfBc2h7","QmXzLPSDfCEJpPCZnKgMMNXoDZoR1XDC4tbmB1k2oSXKko","QmcpR6AkTMCLQHB7aQQXhp8LTs49pkxrwB4xZtK4rWFBWs","QmdfAH2SSdhWDGmu4PKVHwFLauNBv4ofEo8x5eXbgAnn4n","QmWjYgFakkQ71bNMH8cydkj3BCy2ZxdKkEAMLBV1kFS3g2","QmTbJXeAVsGqiHjQNmgSi6wwsmBC3o1TZbzzZjnXQQwyxR","QmSp8LXmRW4SJyxrDxwwyeQGzzcNcAvgro8DSxcGfQ2A2N","QmQxhimBGyBSSX3EKJFjrS8dTUFtMPAjLxguhhMWqVCBnY","QmNsCt4kSBwo1acPb6Qu7j5jNB2eiCGXaFzZ5my1HocREJ","QmRTYApDJ85z65ysPDMr9UFyEKRwgrMMbA4V8UhU23B7vU","QmSKSqCpyVCSEtvbRtKQ6kwbJ3PJ3Kz1WhDRTEWc2RkvAN"
  ]
  const html = ipfsHashs.map(v => `<div><img src="${ipfsHttpsEndpoint + v}" /></div>`).join('');
  const container = $('<div />', {css: {margin: 'auto', width: 1200, height: '100%'} }).appendTo($('#sample-viewer'));

  $('<div />', {'class': 'sample-flipbook'}).appendTo(container).html(html);

  $('.sample-flipbook').turn({
  	width: 1575,
  	height: '100%',
  	autoCenter: true,
  	shadows: $.isTouch,
  	acceleration: $.isTouch
  });
})(jQuery);
