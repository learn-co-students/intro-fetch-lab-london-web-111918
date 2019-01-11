// const crawl = document.querySelector(#crawlBtn)


function getOpeningCrawl(){
  fetch('https://swapi.co/api/films/1/')
  .then(res => res.json())
  .then(json => console.log(json.opening_crawl));
}


const planetUserInput = document.getElementById("planetInput");
const renderPlanet = document.getElementById("planetData");

function getPlanet(){
fetch(`https://swapi.co/api/planets/${planetUserInput.value}/`)
.then(res => res.json())
.then(planet => renderPlanet.innerHTML = `
  <h2>${planet.name}
  <br>
  <b>Climate:</b> ${planet.climate}
  </h2>`
)
  }
