const plusButton = document.querySelector('[data-action="increment"]');
const minusButton = document.querySelector('[data-action="decrement"]');
const value = document.getElementById("value");

function updateCounter() {
  let counterValue = 0;

  return function (e) {
    const {action} = e.target.dataset;
    switch (action) {
      case "increment":
        counterValue += 1;
        break;
      case "decrement":
        counterValue -= 1;
        break;
    }
    value.textContent = counterValue;

    return counterValue;
  };
}

const count = updateCounter();

plusButton.addEventListener("click", count);
minusButton.addEventListener("click", count);
