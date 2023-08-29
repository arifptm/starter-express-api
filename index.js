const express = require('express')
const app = express()
app.all('/', async (req, res) => {
try{
		const url = "https://makkahlive.net/tvcamera.aspx"
		let executablePath = null
		if(os.platform() == 'linux') executablePath = '/usr/bin/chromium-browser';
		const browser = await puppeteer.launch({ args: ['--no-sandbox'], 
	      	executablePath,
	      	headless: true,
	      	args: minimal_args
	    });

		const page = await browser.newPage();
		await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/66.0.3359.181 Safari/537.36');
	
		await page.setRequestInterception(true)	
		page.on('request', request => {
      		if (request.resourceType() === 'script')
         		request.abort();
      		else
         		request.continue();
   		})
		await page.goto(url);
        
		//const content = await page.content();
		//await browser.close();
		//const $ = cheerio.load(content);
    
    //let result = []
		//const youtubeId = $('lite-youtube').each(function(i, element) {
      //result.push({id: (i == 0) ? 'makkah' : 'madina', data: element.attribs.videoid })
	  //});
    
		//fs.writeFileSync('/home/goried/public_html/makkah.txt', result[0].data, 'utf-8');
		//fs.writeFileSync('/home/goried/public_html/madina.txt', result[1].data, 'utf-8');
		return console.log('success')
	} catch(err){
		return ({ error: err})
	}
})
app.listen(process.env.PORT || 3000)
