// Write your numbers code in this file!
// function fetchOneFact() {
//   let fetchFact = fetch('http://numbersapi.com/1/trivia').then(response => response.text())
//   }

const oneFactEl = document.querySelector('#one-facts')
const oneFactBtn = document.querySelector('#number-one')

const chooseNumberInputEl = document.querySelector('#pick-a-number')
const chooseNumberBtn = document.querySelector('#find-number')
const chosenNumberFactEl = document.querySelector('#random-math-fact')

const yearFactEl = document.querySelector('#year-history')

const manyFactEl = document.querySelector('#all-the-numbers')
const manyFactBtn = document.querySelector('#all-numbers-button')
const ulEl = document.createElement('ul')

let year = new Date().getFullYear()


function fetchOneFact() {
    let fetchFact = fetch('http://numbersapi.com/1/trivia').then(response => response.text())
      .then(data => {
          let oneFact = data
          oneFactEl.innerHTML = oneFact;
          document.body.appendChild(oneFactEl);
      })
    };

oneFactBtn.addEventListener('click', fetchOneFact);

chooseNumberInputEl.addEventListener('change', handleSubmitBtn);

function handleSubmitBtn(event) {
  event.preventDefault()

  const chosenNumber = chooseNumberInputEl.value
    if (isNaN(chosenNumber)) {
      chosenNumberFactEl.innerHTML = 'please enter a valid number'
    }
    let fetchFact = fetch(`http://numbersapi.com/${chosenNumber}/trivia`).then(response => response.text())
      .then(data => {
          let chosenNumberFact = data
          chosenNumberFactEl.innerHTML = chosenNumberFact;
          document.body.appendChild(chosenNumberFactEl);
      })
  };


function yearFact() {
  let fetchYearFact = fetch(`http://numbersapi.com/${year}/year`).then(response => response.text())
    .then(data => {
      let chosenYearFact = data
      yearFactEl.innerHTML = chosenYearFact;
    });
    --year
}

setInterval(yearFact, 5000)

function getManyFacts() {
    let fetchManyFacts = fetch('http://numbersapi.com/1..100').then(resp => resp.json())
      .then(data => {
        for (const key in data) {
          let each = document.createElement('li')
            each.innerHTML = data[key];
            ulEl.appendChild(each)
        }
      })
      manyFactEl.appendChild(ulEl)
}

manyFactBtn.addEventListener('click', getManyFacts)
