const state = {
    count: 0,
    paused: false,
}

const counter = document.querySelector("#counter")
const plus = document.querySelector("#plus")
const minus = document.querySelector("#minus")
const heart = document.querySelector("#heart")
const pause = document.querySelector("#pause")
const submit = document.querySelector("#submit")
const form = document.querySelector("#comment-form")
const list = document.querySelector("#list")
const likes = document.querySelector(".likes")

setInterval(() => count(1), 1000)

function count(num) {
    if (!state.paused){
        state.count += num
        counter.innerText = state.count
    }
        
}


function appendLike(){
    let currentTime = counter.innerText
    let li = document.getElementById(currentTime)

    if (li) {
        let text = li.innerText
        let arr = text.split(" ")
        let number = parseInt(arr.slice(-2,-1))
        li.innerHTML = `${currentTime} has been liked ${number + 1} times`
    }
    else {
        let li = document.createElement('li')
        li.setAttribute("id", currentTime)
        li.innerHTML = `${currentTime} has been liked 1 time`
        likes.appendChild(li)
    }

}



plus.addEventListener("click", () => count(1))
minus.addEventListener("click", () => count(-1))


function pauser() {
    state.paused = !state.paused
    document.querySelectorAll("button").forEach(button => {
        if (button.id !== "pause") {
            button.disabled = !button.disabled
        }
    })
}

function addComment(e) {
    e.preventDefault()
    let content = form.comment.value
    let comment = document.createElement("p")
    comment.innerText = content
    list.appendChild(comment)
}

pause.addEventListener("click", pauser)
form.addEventListener('submit', addComment)
heart.addEventListener("click", appendLike)