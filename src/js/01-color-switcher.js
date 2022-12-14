function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const startBtn = document.querySelector("button[data-start]")
const stopBtn = document.querySelector('button[data-stop]')
const body = document.querySelector("body")
let timerId = null;

function onClickStart() {
  timerId = setInterval(() => { body.style.backgroundColor = getRandomHexColor() }, 1000);
  startBtn.setAttribute('disabled', true);
}

startBtn.addEventListener('click', onClickStart)

function onClickStop() {
  clearInterval(timerId);
  startBtn.removeAttribute('disabled', true);
}

stopBtn.addEventListener('click', onClickStop)
