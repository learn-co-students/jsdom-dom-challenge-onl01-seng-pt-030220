let counter = document.querySelector("#counter")
let pauseButton = document.querySelector("#pause")
let incrementButton = document.querySelector("#plus")
let decreaseButton = document.querySelector("#minus")
let ulLikes = document.querySelector(".likes")
let heartButton = document.querySelector("#heart")
let commentForm = document.querySelector("#comment-form")
let commentList = document.querySelector("#list")

let counterInterval
let likes = {}



document.addEventListener("DOMContentLoaded", startCounter())
pauseButton.addEventListener("click", () => {counterButton()})
incrementButton.addEventListener("click", () => {increment()})
decreaseButton.addEventListener("click", () => {decrease()})

//comment section
commentForm.addEventListener("submit", (e) => {
    e.preventDefault()
    addText(e.target.comment.value)
    commentForm.reset()
})

function addText(text) {
    const p = document.createElement("p")
    p.innerText = text
    commentList.appendChild(p)
}

//like section

heartButton.addEventListener("click", () => {
    let number = (counter.innerHTML)
    addLike(number)
    renderLike(number)
})

function renderLike(number){
    if (likes[number] != 1) {
        const ul = document.querySelectorAll(".likes li")
        for (let i = 0; i <= ul.length -1; i++) {
            if (ul[i].id == "sec-"+`${number}`) {
                console.log(likes[number])
                ul[i].innerHTML = number + " ❤️ :" + likes[number]
            }
        }
    }

    else {
    const li = document.createElement("li")
    li.id = "sec-"+`${number}`
    li.innerHTML = number + " ❤️ :" + likes[number]
    ulLikes.appendChild(li)
    }
}

function addLike(number){
    likes[number] ? likes[number] ++ : likes[number] = 1
}

//counter section

function counterButton() {
    if (pauseButton.innerText == 'pause') {
        pauseCounter()
    }
    else {
        startCounter()
    }
}

function startCounter(){
    counterInterval = setInterval(increment, 1000)
    pauseButton.innerText = 'pause' 
}

function increment() {
    let start = parseInt(counter.innerText)
    start += 1
    counter.innerText = start
}

function decrease() {
    let start = parseInt(counter.innerText)
    start -= 1
    counter.innerText = start
}

function pauseCounter() {
    clearInterval(counterInterval)
    pauseButton.innerText = 'resume'
}

