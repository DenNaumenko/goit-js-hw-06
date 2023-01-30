let firstBoxSize = 30;

const input = document.querySelector('[type="number"]');
const create = document.querySelector('[data-create]');
const destroy = document.querySelector('[data-destroy]');
const boxesWrapper = document.getElementById('boxes');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function createBoxes() {
  const amountBoxes = input.value;
  const arrayOfBoxes = [];

  for (let i = 0; i < amountBoxes; i++) {
    const div = document.createElement('div');

    div.style.width = firstBoxSize + 'px';
    div.style.height = firstBoxSize + 'px';
    div.style.backgroundColor = getRandomHexColor();

    arrayOfBoxes.push(div);

    firstBoxSize += 10;
  }

  boxesWrapper.append(...arrayOfBoxes);
}

function destroyBoxes() {
  firstBoxSize = 30;
  boxesWrapper.innerHTML = '';
}

create.addEventListener('click', createBoxes);
destroy.addEventListener('click', destroyBoxes);