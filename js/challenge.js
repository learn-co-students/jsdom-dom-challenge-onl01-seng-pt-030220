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


let timesLiked = 1

let heart = document.querySelector('#heart');

heart.addEventListener('click', () => {
  let ul = document.querySelector('.likes');
  let li = document.createElement('li')
  ul.appendChild(li);
  li.innerText = `${counter.innerText} has been liked ${timesLiked++} time(s)`
});


const commentForm = document.querySelector('#comment-form')
const commentList = document.querySelector('#list')

commentForm.addEventListener("submit", function(e) {
  e.preventDefault()
  const newComment = document.querySelector("#comment-input").value
  commentList.innerHTML += `<li>${newComment}</li>`
  commentForm.reset()
})
















// let counterIsPaused = false;
// const counterH1 = document.querySelector('#counter')

// setInterval(function() {
//     if(counterIsPaused == false){
//         counterH1.innerText++
//     }
// }, 1000)

// let pause = document.querySelector('#pause')
// pause.addEventListener('click', function(){
//     if(counterIsPaused == false){
//         counterIsPaused = true
//     } else {
//         counterIsPaused = false
//     }
// })

// let add = document.querySelector('#plus')
// add.addEventListener('click', function(){
//     counterH1.innerText = parseFloat(counterH1.innerText) + 1
// })

// let minus = document.querySelector('#minus')
// minus.addEventListener('click', function(){
//     counterH1.innerText = parseFloat(counterH1.innerText) - 1
// })

// let likes = {};

// let likeList = document.querySelector('.likes')

// let heart = document.querySelector('#heart')
// heart.addEventListener('click', function(){
//     let counterNumber = counterH1.innerText
//     if(likes[counterNumber] == undefined){
//         likes[counterNumber] = 1
//     } else {
//         likes[counterNumber]++
//     }

//     likeList.innerHTML = ''
//     for (var key in likes) {
//         let number = key
//         let numberOfLikes = likes[key]
//         let likeItem = document.createElement('li')
//         likeItem.innerText = `${number} has been liked ${numberOfLikes}`
//         likeList.append(likeItem)
//     }
// })

// pause.addEventListener('click', e => {
//     if(pause.innerHTML == 'resume'){
//         e.preventDefault();
//         isPaused = true;
//         minus.disabled = true;
//         plus.disabled = true;
//         heart.disabled = true;
//         pause.innerHTML = 'pause'
//     }else{
//         isPaused = false;
//         minus.disabled = false;
//         plus.disabled = false;
//         heart.disabled = false;
//         pause.innerHTML = 'resume'
//     }
// })

// let commentList = document.querySelector('form')

// commentList.addEventListener('submit', e => {
//     e.preventDefault();
//     let value = commentList.children[0].value

//     let d = document.querySelector('.comments'),
//         p = document.createElement('p');
//         p.innerText = value, d.appendChild(p)
// })










































// var i =-1;
// var j = 0;
// var interval = setInterval( increment, 1000);
// function increment(){
//     i++;
//     document.querySelector('h1#counter').textContent = i;
//     j = 0;
// }
// increment();

// document.getElementById("minus").addEventListener("click", function(){
//   i--;
//   document.querySelector('h1#counter').textContent = i;
// });

// document.getElementById("plus").addEventListener("click", function(){
//   i++;
//   document.querySelector('h1#counter').textContent = i;
// });

// document.getElementById("heart").addEventListener("click", function(){
//   j++;
//   var li = document.createElement("li");
//   var node = document.createTextNode(i + " has been liked " + j + " time(s).")
//   var likes = document.querySelector('.likes')
//   var lastLike = document.querySelector('.likes').lastChild
//   li.appendChild(node);
//   if(j>1){
//    lastLike.replaceWith(li)
//   } else {
//     likes.appendChild(li);
//   }
// });

// document.getElementById("pause").addEventListener("click", function(){
//   if(document.querySelector('#pause').innerText == "pause") {
//     clearInterval(interval)
//     document.querySelector('#pause').innerText = "resume"
//     document.getElementById("minus").disabled = true;
//     document.getElementById("plus").disabled = true;
//     document.getElementById("heart").disabled = true;
//     document.getElementById("submit").disabled = true;
//   } else {
//     interval = setInterval( increment, 1000);
//     document.querySelector('#pause').innerText = "pause"
//     document.getElementById("minus").disabled = false;
//     document.getElementById("plus").disabled = false;
//     document.getElementById("heart").disabled = false;
//     document.getElementById("submit").disabled = false;
//   }
// });

// document.getElementById("submit").addEventListener("click", function(event){
//   event.preventDefault();
//   var comment = document.querySelector('input#comment-input').value
//   var commentsList = document.querySelector('.comments')
//   var p = document.createElement("p");
//   var node = document.createTextNode(comment)
//   p.appendChild(node);
//   commentsList.appendChild(p);
//   document.querySelector('input#comment-input').value = ''
// });