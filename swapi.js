// Write your swapi code in this file!

function getOpeningCrawl() {
  let promiseForData = fetch('https://swapi.co/api/films/1/')

  promiseForData
    .then(response => response.json())
    .then(json => console.log(json))
    .then(d => {
    let crawlDiv = document.querySelector('#crawlDiv');
    crawlDiv.innerText = d.opening_crawl;
  });
}

document.addEventListener('DOMContentLoaded', function() {
  const crawlButton = document.querySelector('#crawlBtn')
  crawlButton.addEventListener('click', getOpeningCrawl)

})
