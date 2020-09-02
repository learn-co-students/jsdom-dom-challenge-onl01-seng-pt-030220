function appendComment(commentInput){
    // console.log(commentInput, "this is comment input")
    const list = document.querySelector('#list')
    const ul = document.createElement('ul')
    const updates = list.appendChild(ul)
        updates.innerHTML = `<li>${commentInput}<button id="delete">delete</button></li>`
    deleteComment()
}

function deleteComment(){
    const button = document.querySelector('button#delete')
    button.addEventListener('click', (event) => {
       console.log(event.target.parentNode)
       const li = event.target.parentNode
       li.remove()
    })   
}



document.addEventListener("DOMContentLoaded", () => {
    let form = document.querySelector('form')
    // console.log(form, "this is form")
    form.addEventListener('submit', (event) => {
        event.preventDefault()
        const commentInput = document.querySelector('#comment-input').value
        appendComment(commentInput)
      
    })

    let i =-1;
    let j = 0;
    let interval = setInterval( increment, 1000);
        function increment(){
            i++;
            document.querySelector('h1#counter').innerText = i;
            j = 0;
        }
    increment();

    let pause = document.querySelector('button#pause')
        pause.addEventListener('click', (event) => {
            console.log(event.target)
            console.log()
            clearInterval(interval)
        })

  });
  