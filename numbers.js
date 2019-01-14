// Write your numbers code in this file!
const oneBtn = document.querySelector('#number-one')
const oneFactsDiv = document.querySelector('#one-facts')

function numberOneFacts() {
  fetch('http://numbersapi.com/1/trivia')
    .then(res => res.text())
    .then(text => {
      oneFactsDiv.innerHTML = text
    })
}

oneBtn.addEventListener('click', numberOneFacts)

const numberInput = document.querySelector('#pick-a-number')
const numberDiv = document.querySelector('#random-math-fact')

function pickNumber() {
  if (!parseInt(numberInput.value)) {
    numberDiv.innerHTML = "please enter a valid number"
  } else {
    fetch(`http://numbersapi.com/${numberInput.value}/trivia`)
      .then(res => res.text())
      .then(text => {
        numberDiv.innerHTML = text
      })
  }
}

numberInput.addEventListener('input', pickNumber)

let year = new Date().getFullYear()
const yearDiv = document.querySelector('#year-history')

function studyHistory() {
  fetch(`http://numbersapi.com/${year}/year`)
    .then(res => res.text())
    .then(text => {
      yearDiv.innerHTML = text
    })
  year--
}

// setInterval(studyHistory, 5000)

const numbersBtn = document.querySelector('#all-numbers-button')
const allNumbersDiv = document.querySelector('#all-the-numbers')
const numberList = document.createElement('ul')

function allNumbers() {
  fetch('http://numbersapi.com/1..100')
    .then(res => res.json())
    .then(json => {
      for (const key in json) {
        let num = document.createElement('li')
        num.innerHTML = json[key]
        numberList.appendChild(num)
      }
      allNumbersDiv.appendChild(numberList)
    })
}

numbersBtn.addEventListener('click', allNumbers)
