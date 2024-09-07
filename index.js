document.addEventListener('click',handleClick)

const homeScoreBox = document.querySelector('#homeScoreBox')

let homeScore=0
let guestScore=0

function handleClick(e){
    const idCheck = e.target.id
    if(idCheck=='homeMinus' && homeScore >0){
        homeScore--
    }
    if(idCheck=='homePlusOne'){
        homeScore++
    }
    if(idCheck=='homePlusTwo'){
        homeScore +=2 
    }
    

    if(idCheck=='guestMinus' && guestScore >0){
        guestScore--
    }
    if(idCheck=='guestPlusOne'){
        guestScore++
    }
    if(idCheck=='guestPlusTwo'){
        guestScore +=2 
    }
    homeScoreBox.textContent = homeScore
    guestScoreBox.textContent = guestScore
}