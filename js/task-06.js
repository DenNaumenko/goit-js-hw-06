const input = document.getElementById('validation-input');

function hendler(e) {
    const {target} = e;

    if (target.value.length === Number(target.dataset.length)) {
        target.className = 'valid';

        return
    }

    target.className = 'invalid';
}

input.addEventListener('blur', hendler);