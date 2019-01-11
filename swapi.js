// const crawl = document.querySelector(#crawlBtn)


function getOpeningCrawl(){
  fetch('https://swapi.co/api/films/1/')
  .then(res => res.json())
  .then(json => console.log(json.opening_crawl));
}
