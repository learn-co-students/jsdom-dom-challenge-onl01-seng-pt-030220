function appendComment(commentInput){
    // console.log(commentInput, "this is comment input")
       const list = document.querySelector('#list')
        const ul = document.createElement('ul')
        const updates = list.appendChild(ul)
        updates.innerHTML = `<li>${commentInput}</li>`
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
  