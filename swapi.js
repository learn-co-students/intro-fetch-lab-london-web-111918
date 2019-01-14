// Write your swapi code in this file!
// let promiseForData = fetch('https://swapi.co/api/films/1/')
//   .then(res => res.json())
//   .then(json => console.log(json));

const getOpeningCrawl = document.querySelector("#crawlBtn")

const pullOpeningCrawl = getOpeningCrawl.addEventListener("click",
  function () {fetch('https://swapi.co/api/films/1/')
    .then(res => res.json())
    .then(json => document.querySelector("#crawlDiv").innerHTML = json["opening_crawl"]);
  }
)

const planetNumber = document.querySelector("#findPlanet")

const pullPlanetInfo = planetNumber.addEventListener("click",
  function () {
    let planetInput = document.querySelector("#planetInput").value
    if (planetInput < 61 && planetInput > 0) {
      {fetch(`https://swapi.co/api/planets/${planetInput}/`)
        .then(res => res.json())
        .then(json => document.querySelector("#planetData").innerText = ("Name: " + json["name"] + " " + "Climate: " + json["climate"]));
      }
    }
    else {
      alert("Please enter a planet ID number from 1 to 60!")
    }
  }
)

const getDroids = function() {
  // Fetch droid information and put to screen
  let c3p0 = fetch('https://swapi.co/api/people/2/')
      .then(res => res.json());
  let r2d2 = fetch('https://swapi.co/api/people/3/')
      .then(res => res.json());
  c3p0.then(json => document.querySelector("#droid-2").innerText = ("Name: " + json["name"] + " " + "Height: " + json["height"]) + " " + "Mass: " + json["mass"]);
  r2d2.then(json => document.querySelector("#droid-3").innerText = ("Name: " + json["name"] + " " + "Height: " + json["height"]) + " " + "Mass: " + json["mass"]);
}
const droid2Btn = document.createElement("Button", id = "droid-2-btn");
const droid3Btn = document.createElement("Button", id = "droid-3-btn");
// Create buttons and put to screen
const showButtons = document.addEventListener("DOMContentLoaded", function() {
  const text1 = document.createTextNode("Get Home Planet!");
  droid2Btn.appendChild(text1);
  document.querySelector("#droid-2").insertAdjacentElement("afterend", droid2Btn);
  const text2 = document.createTextNode("Get Home Planet!");
  droid3Btn.appendChild(text2);
  document.querySelector("#droid-3").insertAdjacentElement("afterend", droid3Btn);
})



const droid2BtnResponse = document.createElement("Text");
const droid3BtnResponse = document.createElement("Text");

let name2;
let name3;

const getDroidPlanet2 = function () {
  return fetch(`https://swapi.co/api/people/2/`)
    .then(res => res.json())
    .then(json => fetch(json["homeworld"]))
    .then(resp => resp.json())
    .then(json => name2 = json["name"])
}

const getDroidPlanet3 = function () {
  return fetch(`https://swapi.co/api/people/3/`)
    .then(res => res.json())
    .then(json => fetch(json["homeworld"]))
    .then(resp => resp.json())
    .then(json => name3 = json["name"])
}

const droid2Click = droid2Btn.addEventListener("click", function() {
  getDroidPlanet2();
  droid2BtnResponse.textContent = name2;
  document.querySelector("#droid-2").appendChild(droid2BtnResponse);
})

const droid3Click = droid3Btn.addEventListener("click", function() {
  getDroidPlanet3();
  droid3BtnResponse.textContent = name3;
  document.querySelector("#droid-3").appendChild(droid3BtnResponse);
})

window.onload =
getDroids()
