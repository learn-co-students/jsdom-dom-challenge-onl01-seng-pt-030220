
const counter = document.getElementById("counter")
const plus = document.getElementById("plus")
const minus = document.getElementById("minus")
const pause = document.getElementById("pause")
const commentForm = document.getElementById("comment-form")
const likes = document.querySelector(".likes")
const list = document.getElementById("list")
const heart = document.getElementById("heart")
let paused = false


setInterval(countUp, 1000)

function countUp(){
    if (!paused){
    counter.innerText++
    }
}

function countDown(){
    if (!paused){
    counter.innerText--
    }
}

plus.addEventListener("click", countUp)
minus.addEventListener("click", countDown)
pause.addEventListener("click", ()=>{
    paused = !paused
    toggleButtons()
})

function toggleButtons(){
    document.querySelectorAll("button").forEach(btn => {
        if (btn.id !== "pause"){
            btn.disabled = !btn.disabled
        }
    })
}

function like(){
    let currentSecond = counter.innerText
    let li = document.getElementById(`second-${currentSecond}`)
    if(li){
        li.innerText = `${currentSecond} has been liked ${++li.dataset.likes} times.`
        // (console.log(li, "has already been liked"))
    } else {
        likes.innerHTML += `<li id=second-${currentSecond} data-likes=1>${currentSecond} has been liked 1 time </li>`
    } 
}

heart.addEventListener("click", like)


function appendComment(commentInput){
    // console.log(commentInput, "this is comment input")
    const list = document.querySelector('#list')
    const ul = document.createElement('ul')
    let button = document.createElement("button")
    let li = document.createElement("li")
    li.innerHTML = `<li>${commentInput}</li>`
    button.textContent = "Delete";
    button.addEventListener("click", (event) => event.target.parentNode.remove());
    list.appendChild(ul).appendChild(li).appendChild(button)
}

commentForm.addEventListener('submit', (event) => {
    event.preventDefault()
    const commentInput = document.querySelector('#comment-input').value
    appendComment(commentInput)
})