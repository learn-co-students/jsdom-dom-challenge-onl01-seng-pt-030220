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
            var containsPause = pause.classList.contains("pause")

            if(containsPause){
                console.log(containsPause, "contains clss")
                clearInterval(interval)
                pause.classList.remove("pause");
            }
            else {
               pause.className = "pause";
               increment()
            //    setInterval(increment, 1000)
                //put class back on and continue interval
            }
        })

  });
  