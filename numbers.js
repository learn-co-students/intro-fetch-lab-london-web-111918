function fetchTrivia(number) {
  return fetch(`http://numbersapi.com/${number}/trivia`)
  .then(res => res.text())
}


function numberOneTrivia() {
  const div = document.querySelector('#one-facts')
  div.innerHTML = ''
  fetchTrivia(1).then(trivia => {
    div.innerHTML = trivia
  })
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
      return planetID
}


pickAnyNum = (e) => {
  e.preventDefault()
  const div = document.querySelector('#random-math-fact')
  div.innerHTML = ''
  const number = document.querySelector('#pick-a-number').value

  if (isNaN(number)) {
    div.innerHTML = 'please enter a valid number'
  } else {
    fetchTrivia(number).then(trivia => div.innerHTML = trivia)
  }
}


fetchYearTrivia = (year) => {
  return fetch(`http://numbersapi.com/${year}/year`).then(res => res.text())
}


getYearFact = (e) => {
  let year = new Date().getFullYear()
  fetchYearTrivia(year).then(res => renderYearFact(res))

  setInterval(() => {
    year -= 1
    fetchYearTrivia(year).then(res => renderYearFact(res))
  }, 5000)
}

renderYearFact = (year) => {
  const div = document.querySelector('#year-history')
  div.innerHTML = ''
  div.innerHTML = year
}

getAllNumbers = (e) => {
 e.preventDefault()
 const div = document.querySelector('#all-the-numbers')
 div.innerHTML = ''
 const ulEl = document.createElement('ul')
 document.querySelector('#all-the-numbers').appendChild(ulEl)
 array = Array.from(Array(100).keys()) // ES6 generate an array of 100 numbers
 array.forEach((element) => {
   const num = Math.floor(Math.random() * 100) + 1
   fetchTrivia(num).then(trivia => {renderAllNums(trivia)})
 })
}

renderAllNums = (trivia) => {
  container = document.querySelector('#all-the-numbers ul')
  let string = `<li>${trivia}</li>`
  container.innerHTML += string
}

  document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('#number-one').addEventListener('click', numberOneTrivia)
    document.querySelector('#pick-a-number').addEventListener('click', pickAnyNum)
    getYearFact()
    document.querySelector('#all-numbers-button').addEventListener('click', getAllNumbers)
  })
