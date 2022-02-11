const puppeteer = require('puppeteer')
const slugify = require('slugify')

exports.dataScrap = async( keyword )=>{

    const url = `https://www.fiverr.com/search/gigs?query=${slugify(keyword, '%20')}&source=top-bar&search_in=everywhere&search-autocomplete-original-term=${slugify(keyword, '%20')}`
    const browser = await puppeteer.launch({headless : false});
    const page = await browser.newPage();

    await page.goto(url,{ waitUntil: "domcontentloaded" });
    const names = await page.evaluate(()=>{
      return  data = Array
        .from(document.querySelectorAll(".seller-name a"))
            .map(x=>x.innerText);
    })

    browser.close()

    return names
}




