let counter = 0;
let timer; 
let isPaused = false

const counterElement = document.getElementById('counter')
const plusBtn = document.getElementById('plus')
const minusBtn = document.getElementById('minus')
const pauseBtn = document.getElementById('pause')
const heartBtn = document.getElementById('heart')
const likes = document.querySelector('.likes')
const formElement = document.getElementById('comment-form')

// Initiates Counter
function startTimer(){
    timer = setInterval(() => {
       if (!isPaused){
        counter++
        updateCounter()
       }
    }, 1000)
}

// function to update counter 
function updateCounter () {
    counterElement.textContent = counter
}

// Increasing counter speed
plusBtn.addEventListener('click', e => {
    if(!isPaused) {
        counter++
        updateCounter()
    }
})

// Decreasing counter speed
minusBtn.addEventListener('click', e => {
    if(!isPaused){
        counter--
        updateCounter()
    }
})

//Adding heart button
heartBtn.addEventListener('click', e => {
    if(!isPaused){
        console.log(e)
        updatelikes()
    }
})

function updatelikes() {
    const likeItem = document.createElement('li')
    // likes.innerHTML = ``
    likeItem.textContent = `${counter} has been liked 1 time`
    likes.appendChild(likeItem)
}


//Adding comments
formElement.addEventListener('submit', e => {
    e.preventDefault()
    const textInput = document.getElementById('comment-input')
    if (textInput.value){
        const comment = document.createElement('li')
        comment.textContent = textInput.value 
        document.getElementById('comment-section').appendChild(comment)
    }

    textInput.value = ''
})

pauseBtn.addEventListener('click', e => {
    isPaused = !isPaused
    pauseBtn.textContent = isPaused ? 'Resume' : 'Pause'
    if(isPaused){
        [plusBtn, minusBtn, heartBtn].forEach(btn => btn.disabled)
    }
})

document.addEventListener('DOMContentLoaded', startTimer)