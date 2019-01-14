// Write your numbers code in this file!
const oneButtonFacts = document.querySelector("#one-facts")
const oneButton = document.querySelector("#number-one")

const getFactsAboutOne = oneButton.addEventListener("click",
  function () {fetch('http://numbersapi.com/1/trivia')
    .then(res => res.text())
    .then(text => oneButtonFacts.innerText = text)
  }
)

const pickNumberInput = document.querySelector("#pick-a-number")
const pickNumberDisplay = document.querySelector("#random-math-fact")


const showFactAboutNumber = pickNumberInput.addEventListener("change",
  function () { //pickNumberValue must be inside the function
    const pickNumberValue =  document.querySelector("#pick-a-number").value;
    if (isNaN(pickNumberValue)){
      pickNumberDisplay.innerText = 'please enter a valid number'
    }
    else {
      fetch(`http://numbersapi.com/${pickNumberValue}/trivia`)
        .then(res => res.text())
        .then(text => pickNumberDisplay.innerText = text)
    }
  }
)
let year = 2019;

const historyDisplay = document.querySelector("#year-history")

const getHistoryFacts = function(){
  fetch(`http://numbersapi.com/${year}/year`)
    .then(res => res.text())
    .then(text => historyDisplay.innerText = text);
  year = year - 1;
}
const showFacts = setInterval(getHistoryFacts, 5000);

window.onload = getHistoryFacts(); showFacts;

const allFactsBtn = document.querySelector("#all-numbers-button")
const allFactsDisplay = document.querySelector("#all-the-numbers")
const newList = document.createElement('ul', id = 'myList');
const insertNewList = allFactsDisplay.insertAdjacentElement("beforeend", newList);

const getAllNumbersFacts = allFactsBtn.addEventListener("click", function() {
  const numbersArray = Array.from({length: 100}, () => Math.floor(Math.random() * 100));
  numbersArray.forEach(function(number) {
    let textChild;
    console.log(number)
    const newListElement = document.createElement('li', id = `myListElement${number}`);
    const insertNewListElement = insertNewList.insertAdjacentElement("beforeend",newListElement);

    fetch(`http://numbersapi.com/${number}/year`)
      .then(res => res.text())
      .then(text => newListElement.innerHTML = text); //can console.log text but need to display it
  })
})
