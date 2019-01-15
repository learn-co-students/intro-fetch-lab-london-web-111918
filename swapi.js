
function getOpeningCrawl(){
  let promiseForData = fetch('https://swapi.co/api/films/1/')
  let crawlDiv = document.querySelector('#crawlDiv')
  promiseForData
    .then(response => response.json())
    .then(json => crawlDiv.innerText = json.opening_crawl);
}



function numCheck(num){
      let planetID = ''
      let idChecked = ''
      if(parseInt(num) < 1 || isNaN(parseInt(num))) {
        idChecked = 1;
      } else if (parseInt(num) > 60) {
        idChecked = 60;
      } else {
        idChecked = num;
      }
      planetID = idChecked;
      document.querySelector('#planetInput').value = planetID
      return planetID

}

function renderPlanet(planetObj){
  let name = ''
  let climate = ''
  let planetEl = document.querySelector('#planetData')
  planetEl.innerHTML = ''
  name = `<li>Planet: ${planetObj.name}</li>`
  climate = `<li>Climate: ${planetObj.climate}</li>`
  planetEl.innerHTML += name
  planetEl.innerHTML += climate
}


function getPlanet(e){
  e.preventDefault()
  document.querySelector('#planetData').innerHTML = ''
  let planetID = document.querySelector('#planetInput').value
  let checkedID = numCheck(planetID)
  fetch(`https://swapi.co/api/planets/${checkedID}/`)
  .then(response => response.json())
  .then(response => renderPlanet(response))
}

getDroidFromApi = (id) =>
  fetch(`https://swapi.co/api/people/${id}/`)
  .then(response => response.json())



function renderDroid(droid, num){
  const tempDroid = droid
  const newBtn = document.createElement('button')
  droidData = `
   <span>Name:${droid.name}</span>
   <span>Height:${droid.height}</span>
   <span>Mass:${droid.mass}</span>
  `
  const div = document.getElementById(`droid-${num}`)
  div.innerHTML = droidData
  // document.querySelector(`#droid-${num}`).innerHTML = c3po.name
  newBtn.innerHTML = "Find Planet!"
  newBtn.setAttribute('id', `droid-${num}-btn`)
  document.getElementById(`droid-${num}`).appendChild(newBtn)
  document.querySelector(`#droid-${num}-btn`).addEventListener('click', function() { getHomePlanet(tempDroid, num) }, false)

}

getDroids = (num) => {
  getDroidFromApi(num).then(response => renderDroid(response, num))
  document.querySelector('#planetForm').addEventListener('click', getPlanet);
}

getPlanetFromApi = (url) =>
  fetch(`${url}`)
  .then(response => response.json())

renderDroidPlanet = (res, num) => {
  const planet = res
  div = document.querySelector(`#droid-${num}`)
  div.innerHTML += `Planet: ${planet.name}`
}


getHomePlanet = (droid, num) => {
  let url = droid.homeworld
  getPlanetFromApi(url).then(res => renderDroidPlanet(res, num))
}


document.addEventListener('DOMContentLoaded', function(){
  document.querySelector('#crawlBtn').addEventListener('click', getOpeningCrawl);
  document.querySelector('#planetForm').addEventListener('click', getPlanet);
})
// tempDroid = getDroidFromApi(2).then(response => resp)
// document.querySelector(`droid-2-btn`).addEventListener('click', function() { getHomePlanet(tempDroid) }, false)

getDroids(2)
getDroids(3)
