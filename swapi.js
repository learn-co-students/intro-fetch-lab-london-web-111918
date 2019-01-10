// Write your swapi code in this file!
let promiseForData = fetch('https://swapi.co/api/films/1/')
const crawlBtn = document.querySelector('#crawlBtn')
const crawlDiv = document.querySelector('#crawlDiv')

function getOpeningCrawl() {
  promiseForData
    .then(res => res.json())
    .then(json => {
      crawlDiv.innerHTML = json.opening_crawl
    })
}

crawlBtn.addEventListener('click', getOpeningCrawl)

function getPlanet() {
  
}
