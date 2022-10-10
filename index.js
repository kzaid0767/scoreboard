let homeScore=0
let guestScore=0
let homeSpan = document.getElementById("homeSpan")
let guestSpan = document.getElementById("guestSpan")

function add1(){
    homeScore +=1
    homeSpan.textContent = homeScore
    gameLeader(homeScore, guestScore)
}

function add2(){
    homeScore +=2
    homeSpan.textContent = homeScore
    gameLeader(homeScore, guestScore)
}

function add3(){
    homeScore +=3
    homeSpan.textContent = homeScore
    gameLeader(homeScore, guestScore)
}

function gadd1(){
    guestScore +=1
    guestSpan.textContent = guestScore
    gameLeader(homeScore, guestScore)
}

function gadd2(){
    guestScore +=2
    guestSpan.textContent = guestScore
    gameLeader(homeScore, guestScore)
}

function gadd3(){
    guestScore +=3
    guestSpan.textContent = guestScore
    gameLeader(homeScore, guestScore)
}

function newGame(){
    homeScore=0
    guestScore=0
    homeSpan.textContent = homeScore
    guestSpan.textContent = guestScore
    homeSpan.style.color = '#F94F6D'
    guestSpan.style.color = '#F94F6D'
}

function gameLeader(score1, score2){
    if (score1>score2) {
        homeSpan.style.color = 'green'
    } else {
        homeSpan.style.color = '#F94F6D'
    }
    if(score1<score2) {
        guestSpan.style.color = 'green'
    } else {
        guestSpan.style.color = '#F94F6D'
    }
}

//gameLeader(homeScore, guestScore)