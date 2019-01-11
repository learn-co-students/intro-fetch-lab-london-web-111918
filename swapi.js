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
  Climate: ${planet.climate}
  </h2>`
)
  }


function getDroids(id){
  const droidEl = document.querySelector("#droid-" + id);
    fetch(`https://swapi.co/api/people/${id}/`)
    .then(res => res.json())
    .then(droid => {
      droidEl.innerHTML = `${droid.name}
      <br>${droid.mass}
      <br>${droid.homeworld}`
    })
  }


//  fetch data for droids
// they're in https://swapi.co/api/people/ with id 2 and 3

//  find each droid's name, height and mass in their own span
//   click either of their button triggers getHomePlanet()
//  call the API again
//   find the corresponding homePlanet



document.addEventListener('load', getDroids(2))


const renderSingleDroid = (droid) => {
}
