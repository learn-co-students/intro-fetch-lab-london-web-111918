// const crawl = document.querySelector(#crawlBtn)


function getOpeningCrawl(){
  fetch('https://swapi.co/api/films/1/')
  .then(res => res.json())
  .then(json => console.log(json.opening_crawl));
}

const planetUserInput = document.getElementById("planetInput");

function getPlanet(){
fetch(`https://swapi.co/api/planets/${planetUserInput.value}/`)
.then(res => res.json())
.then(data => {
      console.log(data)
      // for each pokemon
      // - DONE create a element
      // - DONE fill it with h1 and image
      // - render that pokemon to the page
      data.forEach(renderPlanet)
  })
}

const renderPlanet = (planet) => {
  const saidPlanet = document.createElement('div')
  said.innerHTML = `
    <h2>${planet.name}</h2>
    <br>
    <b>Climate:</b> ${planet.climate.value}
  `
  saidPlanet.appendChild(renderPlanet.value)



}
