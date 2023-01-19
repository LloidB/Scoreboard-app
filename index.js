//Home's scorecards

let homeScoreBtnOne = document.getElementById("home-score-btn-1")
let homeScoreBtnTwo = document.getElementById("home-score-btn-2")
let homeScoreBtnThree = document.getElementById("home-score-btn-3")

let homeScoreEl = document.getElementById("home-score")

let homeScore = 0

function increaseHomeScore1(){
    homeScore += 1
    homeScoreEl.textContent = homeScore
}

function increaseHomeScore2(){
    homeScore += 2
    homeScoreEl.textContent = homeScore
}

function increaseHomeScore3(){
    homeScore += 3
    homeScoreEl.textContent = homeScore
}

//Guest's scorecards

let guestScoreBtnOne = document.getElementById("guest-score-btn-1")
let guestScoreBtnTwo = document.getElementById("guest-score-btn-2")
let guestScoreBtnThree = document.getElementById("guest-score-btn-3")

let guestScoreEl = document.getElementById("guest-score")

let guestScore = 0 

function increaseGuestScore1(){
    guestScore += 1
    guestScoreEl.textContent = guestScore
}

function increaseGuestScore2(){
    guestScore += 2
    guestScoreEl.textContent = guestScore
}

function increaseGuestScore3(){
    guestScore += 3
    guestScoreEl.textContent = guestScore
}

let newGameBtn = document.getElementById("new-game-btn")

function newGame(){
   guestScoreEl.textContent = 0
   homeScoreEl.textContent = 0
   homeScore = 0
   guestScore = 0

}

