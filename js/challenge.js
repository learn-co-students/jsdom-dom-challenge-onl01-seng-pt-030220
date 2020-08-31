const counter = document.getElementById("counter")
const minus = document.getElementById("minus")
const plus = document.getElementById("plus")
const pause = document.getElementById("pause")
const like = document.getElementById("heart")
const form = document.getElementById("comment-form")

const comment = document.getElementById("")

const interval = setInterval(timer, 1000);


//var c = 0

function timer() {
    counter.innerText++
        //counter.innerHTML = c;
        // c = c + 1;
}




function pauseTime() {
    if (pause.innerText == "pause") {
        pause.addEventListener("click", function(e) {
            clearInterval(interval)
            pause.innerText = "resume"
            start()

        })
    }

}
pauseTime()

function start() {
    if (pause.innerText == "resume") {
        pause.addEventListener("click", function(e) {
            timer()
            setInterval(timer, 1000);
            pause.innerText = "pause"
        })
    }
}

function increment() {

    plus.addEventListener("click", function(e) {
        counter.innerText++
    })

}
increment()

function decrement() {

    minus.addEventListener("click", function(e) {
        counter.innerText--

    })

}
decrement()

var c = 0

function likeCounter() {

    like.addEventListener("click", function(e) {

        c = c + 1

    })

}
likeCounter()



function comments() {

    form.addEventListener("submit", function(e) {

        e.preventDefault()
        const text = document.getElementById("comment-input").value
        const newtag = document.createElement("h1")
        newtag.innerHTML = text
        document.body.appendChild(newtag)

    })

}
comments()