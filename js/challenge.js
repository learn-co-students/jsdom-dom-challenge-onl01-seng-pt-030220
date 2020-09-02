const counter = document.querySelector('#counter')

let i = -1
let interval = setInterval(increment, 1000);
function increment () {
  i++;
  counter.innerText = i
}
increment();


let plus = document.querySelector('#plus')
plus.addEventListener('click', () => {
  i++;
  counter.innerText = i;
})

let minus = document.querySelector('#minus')
minus.addEventListener('click', () => {
  i--;
  counter.innerText = i;
})

likes = {};

let likeList = document.querySelector('.likes')
let heart = document.querySelector('#heart')

heart.addEventListener('click', () => {
  let counterNumber = counter.innerText
  if(likes[counterNumber] === undefined){
    likes[counterNumber] = 1
  } else {
    likes[counterNumber]++
  }
  likeList.innerHTML = ''
  for (let key in likes){
    let number = key
    let numberOfLikes = likes[key]
    let likeItem = document.createElement('li')
    likeItem.innerText = `${number} has been liked ${numberOfLikes} time(s)`
    likeList.appendChild(likeItem)
  }
})

let pause = document.querySelector('#pause')

pause.addEventListener('click', () =>{
  if (pause.innerText === "pause"){
    pause.innerText = "resume",
    clearInterval(interval),
    document.getElementById("minus").disabled = true;
    document.getElementById("plus").disabled = true;
    document.getElementById("heart").disabled = true;
    document.getElementById("submit").disabled = true;
  } else {
    pause.innerText = "pause",
    setInterval(increment, 1000),
    document.getElementById("minus").disabled = false;
    document.getElementById("plus").disabled = false;
    document.getElementById("heart").disabled = false;
    document.getElementById("submit").disabled = false;
  }
})

const commentForm = document.querySelector('#comment-form')
const commentList = document.querySelector('#list')

commentForm.addEventListener("submit", function(e) {
  e.preventDefault()
  const newComment = document.querySelector("#comment-input").value
  commentList.innerHTML += `<li>${newComment}</li>`
  commentForm.reset()
})