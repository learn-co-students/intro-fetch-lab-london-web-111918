// const numberAPI = "http://numbersapi.com/"


function numberOne(){
  const factButton = document.getElementById('one-facts')
  fetch(`http://numbersapi.com/1/trivia`)
  .then(res => res.text()
  .then(fact => factButton.innerText = `${fact}`))
}

//  **************************



function pickNum() {
  const input = document.querySelector('#pick-a-number');
  const div = document.querySelector('#random-math-fact')

  fetch(`http://numbersapi.com/${input.value}/trivia`)

    if(isNaN(input.value)) {
      div.innerHTML = "please enter a valid number"
    }
    else {
      fetch(`http://numbersapi.com/${input.value}/trivia`)
      .then(res => res.text()
      .then(fact => div.innerText = `${fact}`))
    }
}
