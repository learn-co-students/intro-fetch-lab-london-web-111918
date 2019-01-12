// const numberAPI = "http://numbersapi.com/"
const factButton = document.getElementById('one-facts')

function numberOne(){
fetch(`http://numbersapi.com/1/trivia`)
.then(res => res.text()
.then(fact => factButton.innerText = `${fact}`))
}
