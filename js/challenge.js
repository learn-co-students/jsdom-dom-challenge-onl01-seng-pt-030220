
  // let timer = 0;
  // let paused = false;
  // const currentLikes = {}
  const state = {
    timer: 0,
    paused: false,
    currentLikes: {}
  };

// const counter = document.getElementById('counter');
  // const plus = document.getElementById('plus');
  // const minus = document.getElementById('minus');
  // const pause = document.getElementById('pause');
  // const heart = document.getElementById('heart');
  // const form = document.getElementById('comment-form');
  // const list = document.getElementById('list');
  // const likesDiv = document.querySelector('.likes');
  const docEl = {
    counter: document.getElementById('counter'),
    form: document.getElementById('comment-form'),
    list: document.getElementById('list'),
    likesDiv: document.querySelector('.likes'),
  };
  
  const buttons = {
    "plus": () => secondsTimer(1),
    "minus": () => secondsTimer(-1),
    "pause": togglePause,
    "heart": like
  }

  

  function secondsTimer(num) {
    if (!state.paused){
      state.timer += num
      docEl.counter.innerHTML = state.timer
      return state.timer
    };
  };

  function togglePause(){
    state.paused = !state.paused
    document.querySelectorAll("button")
    .forEach(button=>{
      if(button.id !== 'pause'){
        button.disabled = !button.disabled
      }
    })
    state.pause.innerText = state.paused ? "resume" : "pause";
  };

  function addComment(e){
    e.preventDefault()

    let userInput = docEl.form.comment.value
    let comment = document.createElement('div');
    docEl.list.appendChild(comment).innerText = userInput;
    docEl.form.reset();
  };

  function like(){
    (state.currentLikes[state.timer]) ? state.currentLikes[state.timer] ++ : state.currentLikes[state.timer] = 1
    renderLikes()
  };

  function renderLikes(){
    docEl.likesDiv.innerHTML = ""
    Object.entries(state.currentLikes).forEach(like=>{
      const seconds = like[0]
      const likes = like[1]
      renderLike(seconds, likes)
    })
  };

  function renderLike(seconds, likes){
    const ul = document.createElement('ul')
    const li = document.createElement('li')
    li.innerText = `${seconds} has ${likes} like${state.currentLikes[seconds] === 1 ? "" : "s"}!`
    ul.appendChild(li)
    docEl.likesDiv.appendChild(li)
  };


  document.addEventListener('click', (button) => {
    buttons[button.target.id] && buttons[button.target.id]()
  })
  // plus.addEventListener('click', () => secondsTimer(1));
  // minus.addEventListener('click', () => secondsTimer(-1));
  // pause.addEventListener('click', togglePause);
  // heart.addEventListener('click', like);
  docEl.form.addEventListener('submit', addComment)

  setInterval(() => secondsTimer(1), 1000);