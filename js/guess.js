
const randomNumber = document.querySelector(".number")
console.log(randomNumber)

let guess = document.querySelector(".guess")
console.log(guess)

const btnCheck = document.querySelector(".btnCheck")

const btnAgain = document.querySelector(".btnAgain")

let message = document.querySelector(".message")
console.log(message)

let highScore = document.querySelector(".highscore")

let score = document.querySelector(".score")
let startscore = 20
let endscore = 0
console.log(score)
let highscore1 = 0
let wins = 0;
randomNumber.value = Math.floor((Math.random()*20) +1)

const hint = document.querySelector(".hint")

function checking(){
    let guess1 = Number(guess.value)
    console.log(guess.value)
    if(randomNumber.value === guess1){
        wins++
        message.textContent = "Correct"
        endscore += startscore
        if(endscore> highscore1){
            highScore.textContent = String(endscore)
        }
        startscore = 20
        score.textContent =String(startscore)
        randomNumber.textContent = String(randomNumber.value)
        if(wins === 5){
            endscore = 0;
            wins = 0;
            message.textContent = "Game over"
            setInterval(again, 5000)
        }
    }
    else {
        message.textContent = "Wrong, Try again"
        startscore--
        score.textContent = String(startscore)
    }

}

function again(){
    randomNumber.textContent = "?"
    message.textContent = "Start guessing"
    randomNumber.value = Math.floor((Math.random()*20) +1)
}

function hint1(){
    let currentGuess = Number(guess.value)
    if(randomNumber.value> currentGuess){
        message.textContent = "The number is higher"
    }
    else {
        message.textContent = "The number is lower"
    }
    startscore--
    score.textContent = String(startscore)
}

btnCheck.addEventListener("click", checking );

btnAgain.addEventListener("click", again)

hint.addEventListener("click", hint1)