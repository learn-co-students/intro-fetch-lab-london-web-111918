// Write your swapi code in this file!
const openingCrawlButton = document.querySelector("#crawlBtn")
let crawlDiv = document.querySelector("#crawlDiv")
const findPlanetButton = document.querySelector("#findPlanet")
let planetData = document.querySelector("#planetData")

getOpeningCrawl = () => {
  fetch('https://swapi.co/api/films/1/').then(response => response.json()).then(json => crawlDiv.innerText = json.opening_crawl)
}

getPlanet = () => {
  let planetInput = document.querySelector("#planetInput").value
  if (!(planetInput >= 1 && planetInput <= 60)) {
    planetData.innerText = "Invalid Planet Number!"
  } else {
    fetch(`https://swapi.co/api/planets/${planetInput}/`).then(response => response.json()).then( json => {
      planetData.innerText = `Planet Name: ${json.name} - Planet Climate: ${json.climate}`
    })
  }
}

getDroids = () => {
  let characterIds = [2,3]
  characterIds.forEach(charId => {
    let swapiUrl = `https://swapi.co/api/people/${charId}/`
    let droidDiv = document.querySelector(`#droid-${charId}`)
    fetch(swapiUrl).then(response => response.json()).then(json => {
      let newDroid = document.createElement("button")
      newDroid.id = `droid-${charId}-btn`
      newDroid.innerText = `Name: ${json.name} - Height: ${json.height}cm - Mass: ${json.mass}kg`
      droidDiv.appendChild(newDroid)
      newDroid.addEventListener("click", getHomePlanet.bind(null, charId))
    })
  })
}

getHomePlanet = (id) => {
  let swapiUrl = `https://swapi.co/api/people/${id}/`
  let droidButton = document.querySelector(`#droid-${id}-btn`)
  fetch(swapiUrl).then(response => response.json()).then(json => {
    fetch(json.homeworld).then(response => response.json()).then(json => {
      droidButton.innerText += ` - Home Planet: ${json.name}`
    })
  })
}

openingCrawlButton.addEventListener('click', getOpeningCrawl)
findPlanetButton.addEventListener('click', getPlanet)
window.onload = getDroids()
