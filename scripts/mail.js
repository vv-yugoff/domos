import { getForm } from "./utils.js";
import { reviewsList } from "./script.js";

const validFormArr = [];

export function sendEmail() {
    const emailTemplate = document.querySelector('#email-template').content;
    const formData = getForm();
    const form = formData[0];
    const formArr = formData[1];
    
    document.querySelector('.content-button').remove();
    document.querySelector('main').appendChild(emailTemplate);

    formArr.forEach((element) => {
        if (element.hasAttribute('data-reg')) {
            element.setAttribute('is-valid', '0');
            validFormArr.push(element);
        }
    });

    form.addEventListener('input', inputHandler);
    form.addEventListener('submit', formCheck);    
}

function inputHandler({ target }) {
    if (target.hasAttribute('data-reg')) {
        inputCheck(target);
    }
}

function inputCheck(element) {
    const inputValue = element.value;
    const inputReg = element.getAttribute('data-reg');
    const reg = new RegExp(inputReg);

    if (reg.test(inputValue)) {
        element.setAttribute('is-valid', '1');
        element.style.border = '2px solid rgb(0, 196, 0)';
    } else {
        element.setAttribute('is-valid', '0');
        element.style.border = '2px solid rgb(255, 0, 0)';
    }
}

function formCheck(event) {
    event.preventDefault();
    const allValid = [];

    validFormArr.forEach((element) => {
        allValid.push(element.getAttribute('is-valid'));
    });

    const isAllValid = allValid.reduce((acc, current) => {
        return acc && current;
    });

    if (!Boolean(Number(isAllValid))) {
        alert('Заполните поля правильно!');
        return;
    }
    formSubmit();
}

async function formSubmit() {
    const formData = getForm();
    const form = formData[0];
    const data = serializeForm(form);
    data.append('reviewsList', JSON.stringify(reviewsList));
    const response = await sendData(data);

    if (response.ok) {
        let result = await response.json();
        alert(result.message);
        formReset(form);
    } else {
        alert('Код ошибки: ' + response.status);
    }

}

function serializeForm(form) {
    return new FormData(form);
}

async function sendData(data) {
    return await fetch('../send_mail.php', {
        method: 'POST',
        body: data,
    });
}

function formReset(form) {
    form.reset();

    validFormArr.forEach((element) => {
        element.setAttribute('is-valid', 0);
        element.style.border = 'none';
    });
}