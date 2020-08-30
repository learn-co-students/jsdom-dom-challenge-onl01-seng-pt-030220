const counter = document.getElementById("counter")
let counterInterval = window.setInterval(incrementCounter, 1000)

function incrementCounter() {
    counter.innerText = parseInt(counter.innerText) + 1
}

function addTime() {
    counter.innerText = parseInt(counter.innerText) + 1
}

function removeTime() {
    counter.innerText = parseInt(counter.innerText) - 1
}

function addLike() {
    if (document.getElementById(`${counter.innerText}`) != undefined) {
        const li = document.getElementById(`${counter.innerText}`)
        const liked = parseInt(li.innerText.split(" ")[4]) + 1
        li.innerText = `${counter.innerText} has ben liked ${liked} times`
    } else {
        const list = document.querySelector(".likes")
        console.log(list)
        const li = document.createElement("li")
        li.id = `${counter.innerText}`
        li.innerText = `${counter.innerText} has ben liked 1 time`
        list.appendChild(li)
    }
}

function pauseTimer() {
    if (pauseButton.innerText == "pause") {
        plusButton.disabled = true
        minusButton.disabled = true
        likeButton.disabled = true
        submitButton.disabled = true
        window.clearInterval(counterInterval)
        pauseButton.innerText = "resume"
    } else {
        plusButton.disabled = false
        minusButton.disabled = false
        likeButton.disabled = false
        submitButton.disabled = false
        pauseButton.innerText = "pause"
        counterInterval = window.setInterval(incrementCounter, 1000)
    }
}

function addComment(e) {
    event.preventDefault()
    const comment = document.getElementById("comment-input")
    const commentList = document.getElementById("list")
    const paragraph = document.createElement("p")
    paragraph.innerText = comment.value
    commentList.appendChild(paragraph)
    comment.value = ""
    
}

const plusButton = document.getElementById("plus")
plusButton.addEventListener("click", addTime)

const minusButton = document.getElementById("minus")
minusButton.addEventListener("click", removeTime)

const likeButton = document.getElementById("heart")
likeButton.addEventListener("click", addLike )

const submitButton = document.getElementById("submit")
submitButton.addEventListener("click", addComment)

const pauseButton = document.getElementById("pause")
pauseButton.addEventListener("click", pauseTimer)