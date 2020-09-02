function appendComment(commentInput){
    // console.log(commentInput, "this is comment input")
    

}




document.addEventListener("DOMContentLoaded", () => {
    let form = document.querySelector('form')
    // console.log(form, "this is form")
    form.addEventListener('click', (event) => {
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
  