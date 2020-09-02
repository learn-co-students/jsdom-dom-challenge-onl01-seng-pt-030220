let nIntervalId
const counter = document.getElementById("counter")
let buttons = document.getElementsByTagName("button")
const pause = document.getElementById("pause")
const plus = document.getElementById("plus")
const minus = document.getElementById("minus")
const like = document.getElementById("heart")
const submit = document.getElementById("submit")

document.addEventListener("DOMContentLoaded", () => {
  nIntervalId = setInterval(startCounter, 1000)
  plus.addEventListener("click", () => {counter.innerHTML++})
  minus.addEventListener("click", () => {counter.innerHTML--})  
  like.addEventListener("click", likedNumber)
  submit.addEventListener("click", addComment)
})

function startCounter(){
  pause.addEventListener("click", toggleCounter)
  counter.innerText++
}

function toggleCounter(){
  pause.innerHTML == "resume" ? enableButtons() : disableButtons()
}

function disableButtons(){
  clearInterval(nIntervalId)
  for (i = 0; i < buttons.length; i++){
   const button = buttons.item(i)
    button.disabled = true
    button.background="#DBD5D4"
  }
  buttons.namedItem("pause").disabled= false
  pause.innerHTML = "resume"
}

function enableButtons(){
  for (i = 0; i < buttons.length; i++){
    const button = buttons.item(i)
    button.disabled = false
  }
  pause.innerHTML = "pause"
  nIntervalId = setInterval(startCounter, 1000)
}

function likedNumber() {
  const counterNumber = counter.innerHTML
  
  const likesCount = document.getElementsByClassName("likes")[0]
  let currentListItem
  for(i = 0; i < likesCount.children.length; i++){
    n = likesCount.children.item(i)
    if (n.getAttribute("data-num") === counterNumber)
    currentListItem = n 
  }
  if (currentListItem) {
    const span = currentListItem.getElementsByTagName("span")[0]
    span.innerHTML++
  }
  else {
    createNewLi(likesCount, counterNumber)
  }

}

function createNewLi(likesCount, counterNumber){
  const list = document.createElement("li")
  likesCount.appendChild(list)
  list.setAttribute("data-num", counterNumber)
  const text = document.createTextNode(`${counterNumber} has been liked `) 
  list.appendChild(text)
  const span = document.createElement("span")
  span.innerHTML = 1
  list.appendChild(span)
  const time = document.createTextNode(` time`)
  list.appendChild(time)
  likesCount.appendChild(list)
}

function addComment(e){
  e.preventDefault()
  const allComments = document.getElementById("list")
  const comments = document.createElement("p")
  let commentInput = document.getElementById("comment-input")["value"]
  comments.innerText = commentInput
  allComments.appendChild(comments)
  document.forms["comment-form"].reset()
}
