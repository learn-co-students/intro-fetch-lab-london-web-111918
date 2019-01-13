//opening crawl

let promiseForFilmData = fetch('https://swapi.co/api/films/1/')
const crawlBtn = document.querySelector('#crawlBtn')
const crawlDiv = document.querySelector('#crawlDiv')

function getOpeningCrawl() {
  promiseForFilmData
    .then(res => res.json())
    .then(json => {
      crawlDiv.innerHTML = json.opening_crawl
    })
}

crawlBtn.addEventListener('click', getOpeningCrawl)


//planets

const planetForm = document.querySelector('#planetInput')
const planetDiv = document.querySelector('#planetData')
const planetBtn = document.querySelector('#findPlanet')

function getPlanet() {
    fetch(`https://swapi.co/api/planets/${planetForm.value}/`)
    .then(res => res.json())
    .then(json => {
      planetDiv.innerHTML = `${json.name}, ${json.climate}`
    })
}

planetBtn.addEventListener('click', getPlanet)


//droids

const droidBtn2 = document.querySelector('#droid-2-btn')
const droidBtn3 = document.querySelector('#droid-3-btn')


function getDroids(id) {
  const droidDiv = document.querySelector(`#droid-${id}`)
  const droidPlanet = document.querySelector(`#droid-homeworld-${id}`)
  let getHomePlanet
  let promiseForDroids = fetch(`https://swapi.co/api/people/${id}/`)

  promiseForDroids
    .then(res => res.json())
    .then(json => {
      droidDiv.innerHTML = `Name: ${json.name}, Height: ${json.height}, Mass: ${json.mass}`
      fetch(json.homeworld)
        .then(res => res.json())
        .then(json => {
        droidPlanet.innerHTML = `Homeworld Name: ${json.name}, Climate: ${json.climate}`
      })
    })

}

droidBtn2.addEventListener('click', () => getDroids(2))
droidBtn3.addEventListener('click', () => getDroids(3))
