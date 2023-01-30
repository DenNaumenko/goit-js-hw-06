const input = document.getElementById('font-size-control');
const text = document.getElementById('text');

window.onload = function() {
    text.style.fontSize = `${input.value}px`;
}

function hendler(e) {
    const {value} = e.target;

    text.style.fontSize = `${value}px`;
}

input.addEventListener('input', hendler);
