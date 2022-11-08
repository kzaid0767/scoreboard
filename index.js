let homeScore=0
let guestScore=0
let homeSpan = document.getElementById("homeSpan")
let guestSpan = document.getElementById("guestSpan")

document.addEventListener('click', add)

function add(e){
    if(e.target.dataset.add==='h1'){
        homeScore +=1
    } else if (e.target.dataset.add==='h2'){
        homeScore +=2
    } else if (e.target.dataset.add==='h3'){
        homeScore +=3
    } else if (e.target.dataset.add==='g1'){
        guestScore +=1
    } else if (e.target.dataset.add==='g2'){
        guestScore +=2
    } else if (e.target.dataset.add==='g3'){
        guestScore +=3
    }
    homeSpan.textContent = homeScore
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