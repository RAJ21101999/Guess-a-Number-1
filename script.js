let random = parseInt(Math.random() * 100) + 1;
let userInput = document.querySelector('#guessField')
let loworHi = document.querySelector('.lowOrHi')
let submit = document.getElementById('subt')
let prev = document.querySelector('.guesses')
let guesscount= document.querySelector('.lastResult')
let prevGuess = [];
let playGame=true;
let but= document.createElement('button')
let startOver = document.querySelector('.resultParas');

submit.addEventListener('click', (e) => {
  e.preventDefault();
  let guess = userInput.value;
   validateGuess(guess);
  if(playGame!==false){
   
     checkGuess(guess);
  }
})
  

let checkGuess = (val) => {
  if (val == random) {
    displayMessage("You win")
  }
  else if (val > random) {
    displayMessage("No is High")
  }
  else if (val < random) {
    displayMessage("No is low")
  }
  else {
    displayMessage("You loss")
  }
}

let displayMessage = (message) => {
  loworHi.innerHTML = `<h2> ${message}</h2>`
}
let validateGuess = (val) => {
  let n = parseInt(guesscount.innerHTML)
  guesscount.innerHTML = n-1;
  if(n!==1){
  prevGuess.push(val);
  prev.innerHTML = prevGuess;
  }
  else{
    displayMessage(`Game End and the Random number was ${random}`)
    userInput.setAttribute('disabled','')
    submit.setAttribute('hidden','')
    endGame();
  }
}

let endGame = () =>{
  userInput.innerHTML = "";
  prevGuess=[];
  playGame =false
  but.classList.add('but')
  but.innerHTML="New Game"
  startOver.appendChild(but)
  }
let newGame =()=>{
  random = parseInt(Math.random() * 100) + 1;
  prevGuess=[];
  guesscount.innerHTML = 10;
  playGame=true;
  userInput.removeAttribute('disabled')
  userInput.value=""
  submit.removeAttribute('hidden')
  loworHi.innerHTML = ""
  prev.innerHTML = ""
  but.remove()
}

but.addEventListener('click',(e)=>{
  e.preventDefault();
  newGame();
})
