const express = require('express')
const app = express()
const { dataScrap } = require('./helpers/puppeteer')


app.get('/',  async(req, res)=>{

  await dataScrap("laravel").then(seller=>{
      res.json(seller)
  })

})

const PORT = 3000

app.listen(PORT, ()=>{
    console.log(`Server running on ${PORT}`);
})



// https://www.fiverr.com/search/gigs?query=    graphics%20design   &source=top-bar&search_in=everywhere&search-autocomplete-original-term=      graphics%20design
// https://www.fiverr.com/search/gigs?query=      react%20native    &source=top-bar&search_in=everywhere&search-autocomplete-original-term=      react%20native



// https://www.fiverr.com/search/gigs?query=      react%20native    &source=pagination&search_in=everywhere&search-autocomplete-original-term=   react%20native    &page=2
// https://www.fiverr.com/search/gigs?query=      react%20native    &source=pagination&search_in=everywhere&search-autocomplete-original-term=   react%20native    &page=4
// https://www.fiverr.com/search/gigs?query=     graphics%20design  &source=pagination&search_in=everywhere&search-autocomplete-original-term=  graphics%20design  &page=5
