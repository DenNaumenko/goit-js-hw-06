const form = document.querySelector('.login-form');
const submitBtn = form.querySelector('[type="submit"]');

function handler(e) {
    e.preventDefault();
    const elements = form.getElementsByTagName('input');
    const formElementsArray = Array.from(elements);
    const result = {};

    for (let i = 0; i < formElementsArray.length; i++) {
        const element = formElementsArray[i];

        if (!element.value) {
            alert('all fields must be filled');
            return
        }

        result[element.name] = element.value;
    }

    // const email = form.querySelector('[name="email"]');
    // const password = form.querySelector('[name="password"]');

    // if (!email.value || !password.value) {
    //     alert('all fields must be filled');
    //     return
    // }

    // result.email = email.value;
    // result.password = password.value;

    form.reset();

    console.log(result);
}

submitBtn.addEventListener('click', handler);
