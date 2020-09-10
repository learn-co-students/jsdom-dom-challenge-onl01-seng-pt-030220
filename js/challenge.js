const counter = document.getElementById('counter')
const minusButton = document.getElementById('minus')
const plusButton = document.getElementById('plus')
const heartButton = document.getElementById('heart')
const pauseButton = document.getElementById('pause')

const likes = document.querySelector(".likes")
const likesList = document.querySelector('ul.likes') // ul class="likes"

// Minus
// const minusButton = document.getElementById('minus')
minusButton.addEventListener('click', minusCounter);
function minusCounter(){
    if (!pause){
        counter.innerText = parseInt(counter.innerText) - 1;
    }
}

// Plus
// const plusButton = document.getElementById('plus')
plusButton.addEventListener('click', plusCounter);
function plusCounter(){
    if (!pause){
        counter.innerText = parseInt(counter.innerText) +1;
    }
}

// Heart
// const heartButton = document.getElementById('heart')
heartButton.addEventListener('click', addLike);
// const likesList = document.querySelector('ul.likes') // ul class="likes"
// const likes = document.querySelector(".likes")
function addLike(){
    let currentCount = counter.innerText
    let li = document.getElementById(`countNum${currentCount}`)
    if(li){
        let numberLikes = ++li.dataset.likes
        li.innerText = `${currentCount} has ${numberLikes} likes.`
    } else {
        likes.innerHTML += `<li id=countNum${currentCount} data-likes=1> ${currentCount} has 1 like. </li>`
    }
    
}

// Pause
// const pauseButton = document.getElementById('pause')
let pause = false
pauseButton.addEventListener('click', function(e){
    if (pause == false) {
        pause = true;
        e.target.innerText = "resume";
    }
    else {
        pause = false;
        e.target.innerText = "pause";
    }
});

// Counter
// const counter = document.getElementById('counter')
function countUp() {
    if (!pause) {
        counter.innerText = parseInt(counter.innerText) + 1;
    }
}

setInterval(countUp, 1000);

// Add a Comment
const inputComment = document.getElementById('comment-input')
const submitComment = document.getElementById('submit')
const listComment = document.getElementById('list')

submitComment.addEventListener("click", function(event){
    event.preventDefault();
});

submitComment.addEventListener("click", addComment);

function addComment(){
    let comment = inputComment.value;
    let listElement = document.createElement('li');
    listElement.innerHTML = comment;
    listComment.appendChild(listElement);
}