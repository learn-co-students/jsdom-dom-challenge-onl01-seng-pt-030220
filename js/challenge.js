const state = {
    count: 0, 
    paused: false, 
    likes: {}
}

const counter = document.getElementById("counter")
const minus = document.getElementById("minus")
const plus = document.getElementById("plus")
const pause = document.getElementById("pause")
const form = document.getElementById("comment-form")
const heart = document.getElementById("heart")
const likeList = document.querySelector(".likes")

setInterval(() => count(1),1000)

function count(num){
    if (!state.paused){
state.count += num
counter.innerText = state.count
}
}; 

function pauseApp(){
    state.paused  = !state.paused
    document.querySelectorAll("button").forEach(item =>{
        if (item.id !=="pause") {
            item.disabled = !item.disabled
        } 
    })
    pause.innerText = state.paused ? "resume" : "pause"
    // if the state is paused, change the inner text to resume ; otherwise, keep it as paused
}; 

function like(){
if (state.likes[state.count]){
state.likes[state.count] ++ 
} 
else {
    state.likes[state.count] = 1 
}
renderLikes()
}

function renderLikes(){
    likeList.innerHTML = ""
    Object.entries(state.likes).forEach(likeArray => {
        const second = likeArray[0]
        const likes = likeArray[1]
        renderLike(second,likes)
    })
}

function renderLike(second,likes){
    const li = document.createElement("li")
    li.innerText = `${second} has been liked ${likes} times`
    likeList.appendChild(li)
};

function addComment(e){
    e.preventDefault()
    let input = form.comment.value 
    const comment = document.createElement("p") 
    comment.innerText = input
    list.appendChild(comment)
    form.reset()
    // this works because it is finding the (name=) from the form, 
    // which they usually must have anyway.
    // using comment, because name="comment" ; if it were name="meow", change to 
    // meow
}


plus.addEventListener("click", () => count(1))
minus.addEventListener("click", () => count(-1))
pause.addEventListener("click", () => pauseApp() )
heart.addEventListener("click", like)
form.addEventListener("submit", addComment)
