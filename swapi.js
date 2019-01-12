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
  const droidButton = document.createElement('button')

    fetch(`https://swapi.co/api/people/${id}/`)
    .then(res => res.json())
    .then(droid => {

      droidButton.id = `droid-${id}-btn`;
      droidButton.dataset.homeworld = droid.homeworld
      droidButton.innerText = "Find out my Home Planet";
      droidEl.innerHTML = `
      <br>
      <h3>${droid.name}</h3>
      ${droid.mass}
      <br>${droid.homeworld}<br>`
      droidEl.appendChild(droidButton)
    })

  droidButton.addEventListener('click', (event) => {
    getHomePlanet(event.target.dataset.homeworld)
  })
}

function getHomePlanet(homeworld) {
  // console.log(homeworld)
  fetch(`${homeworld}`)
  .then(res => res.json())
  .then(data => console.log(data))
}


//  fetch data for droids
// they're in https://swapi.co/api/people/ with id 2 and 3

//  find each droid's name, height and mass in their own span
//   click either of their button triggers getHomePlanet()
//  call the API again
//   find the corresponding homePlanet



document.addEventListener('load', getDroids(2));
document.addEventListener('load', getDroids(3));

const renderSingleDroid = (droid) => {

}
