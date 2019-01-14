// Write your swapi code in this file!
const crawlBtn = document.querySelector('#crawlBtn')
const crawlDiv = document.querySelector('#crawlDiv')

function getOpeningCrawl() {
  fetch('https://swapi.co/api/films/1/')
    .then(res => res.json())
    .then(json => {
      crawlDiv.innerHTML = json.opening_crawl
    })
}

crawlBtn.addEventListener('click', getOpeningCrawl)

const planetInput = document.querySelector('#planetInput')
const planetBtn = document.querySelector('#findPlanet')
const planetDiv = document.querySelector('#planetData')

function getPlanet() {
  if (planetInput.value < 1 || planetInput.value > 60) {
    planetDiv.innerHTML = 'Enter a number between 1 and 60'
  } else {
    fetch(`https://swapi.co/api/planets/${planetInput.value}/`)
      .then(res => res.json())
      .then(json => {
        planetDiv.innerHTML = `Name: ${json.name}, Climate: ${json.climate}`
      })
  }
}

planetBtn.addEventListener('click', getPlanet)

const droidBtn2 = document.querySelector('#find-droid-2')
const droidBtn3 = document.querySelector('#find-droid-3')

function getDroid(num) {
  const droidDiv = document.querySelector(`#droid-${num}`)
  fetch(`https://swapi.co/api/people/${num}/`)
    .then(res => res.json())
    .then(json => {
      fetch(json.homeworld)
        .then(res => res.json())
        .then(planetJson => {
          droidDiv.innerHTML = `Name: ${json.name} Height: ${json.height} Mass: ${json.mass} Homeworld: ${planetJson.name} Climate: ${planetJson.climate}`
        })
    })
}

droidBtn2.addEventListener('click', () => getDroid(2))
droidBtn3.addEventListener('click', () => getDroid(3))
