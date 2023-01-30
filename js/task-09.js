const button = document.querySelector('.change-color');
const span = document.querySelector('.color');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function hendler() {
  const color = getRandomHexColor();

  document.body.style.backgroundColor = color;
  span.innerText = color;
}

button.addEventListener('click', hendler);