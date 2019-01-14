// Write your numbers code in this file!
const numberOneButton = document.querySelector("#number-one")
const numberOneFactsDiv = document.querySelector("#one-facts")

const numberPicker = document.querySelector("#pick-a-number")
const randomFactDiv = document.querySelector("#random-math-fact")

const yearHistoryDiv = document.querySelector("#year-history")

const allNumbersButton = document.querySelector("#all-numbers-button")
let numberDiv = document.querySelector("#all-the-numbers")

numberOneFacts = () => {
  fetch('http://numbersapi.com/1/trivia').then(response => response.text()).then(text => {
    numberOneFactsDiv.innerText = text
  })
}

randomMathsFact = () => {
  let number = numberPicker.value
  if (!(/\D/m).test(number)) {
    fetch(`http://numbersapi.com/${number}/trivia`).then(response => response.text()).then(text => {
    randomFactDiv.innerText = text
    })
  } else {
    randomFactDiv.innerText = 'please enter a valid number'
  }
}

failHistory = () => {
  let currentYear = new Date().getFullYear()
    repeatHistory = () => {
    let yearUrl = `http://numbersapi.com/${currentYear}/year`
    fetch(yearUrl).then(response => response.text()).then(text => yearHistoryDiv.innerText = text)
    currentYear--
  }
  repeatHistory()
  setInterval(repeatHistory, 5000)
}

allTheNumbers = () => {
    fetch("http://numbersapi.com/1..100").then(response => response.json()).then(json => {
        numberDiv.innerHTML = ""
        list = document.createElement("ul")
        for (key in json) {
          list.innerHTML += `<li>${json[key]}</li>`
        }
        numberDiv.appendChild(list)
      })
}


numberOneButton.addEventListener('click', numberOneFacts)
numberPicker.addEventListener('change', randomMathsFact)
allNumbersButton.addEventListener('click', allTheNumbers)
window.onload = failHistory()
