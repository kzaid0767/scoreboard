document.addEventListener('click',handleClick)

const homeScoreBox = document.querySelector('#homeScoreBox')
const guestScoreBox = document.querySelector('#guestScoreBox')
const homeFoulsBox = document.querySelector('#home-fouls')
const guestFoulsBox = document.querySelector('#guest-fouls')
const periodBox = document.querySelector('#period-container')
const timeBox = document.querySelector('#time')


let homeScore=0
let guestScore=0
let homeFouls=0
let guestFouls=0
let period=0
let time=20
let countdown //to take return value of setInterval

function handleClick(e){
    const idCheck = e.target.id
    if (idCheck=='start'){
        timerRun()
    }

    if (idCheck=='pause'){
        pauseTime()
    }

    if (idCheck=='reset'){
        resetTime()
    }

    

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


    if(homeScore>guestScore){
        guestScoreBox.classList.remove('leader')
        homeScoreBox.classList.add('leader')
    } else if (guestScore>homeScore){
        homeScoreBox.classList.remove('leader')
        guestScoreBox.classList.add('leader')
    } else {
        homeScoreBox.classList.remove('leader')
        guestScoreBox.classList.remove('leader')
    }

    if(idCheck=='homeFoulsMinus' && homeFouls>0){
        homeFouls--
        homeFoulsBox.textContent = homeFouls
    }
    if(idCheck=='homeFoulsPlus'){
        homeFouls++
        homeFoulsBox.textContent = homeFouls
    }
    if(idCheck=='guestFoulsMinus' && guestFouls>0){
        guestFouls--
        guestFoulsBox.textContent = guestFouls
    }
    if(idCheck=='guestFoulsPlus'){
        guestFouls++
        guestFoulsBox.textContent = guestFouls
    }

    if(idCheck=='periodminus' && period>0){
        period--
        periodBox.textContent = period
    }
    if(idCheck=='periodplus'){
        period++
        periodBox.textContent = period
    }
}

function timerRun(){
    if (!countdown){
        countdown = setInterval(()=>{
            if (time>0){
                time--
                timeBox.textContent = time
            } else {
                clearInterval(countdown)
                countdown=null
            }
        },1000)
    }
}

function pauseTime(){
    clearInterval(countdown)
    countdown = null
}

function resetTime(){
    clearInterval(countdown)
    countdown = null
    time=20
    timeBox.textContent = time
}