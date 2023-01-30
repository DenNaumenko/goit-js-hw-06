const input = document.getElementById('name-input');
const output = document.getElementById('name-output');

function handler(e) {
    const {value} = e.target;

    output.textContent = value ? value : 'Anonymous';
}

input.addEventListener('input', handler)
