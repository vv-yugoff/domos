import { questions } from './data.js';
import { footerChange, createLink } from './utils.js';


// Находим элементы
const categoryContainer = document.querySelector('#category');
const numberContainer = document.querySelector('#number');
const headerContainer = document.querySelector('#question-title');
const listContainer = document.querySelector('#answers-list');
const submitBtn = document.querySelector('#submit');
const backBtn = document.querySelector('#back-btn');

// Массив с рецензиями по ответам
const reviewsList = [];
// Массив для значений из текстовых полей
const textInputArray = [];

// Переменные опросника
let questionIndex = 1; // Номер вопроса

// Функция используется для отображения вопроса и вариантов ответов на странице
showQuestion(); 

// Проверяет выбран ли ответ пользователя и принимает соответствующие меры.
submitBtn.addEventListener('click', checkAnswer); 

// Выбор ответа по нажатию на клавишу Enter
document.addEventListener('keydown', (evt) => {
    if (evt.key === 'Enter') {
        checkAnswer();
    }
});

// Обработчик события при клике на кнопку "Назад"
backBtn.addEventListener('click', goBack);


/**
 * Очищает страницу
 */
function clearPage() {
    const contentEmail = document.querySelector('.content-email');

    if (contentEmail) {
        contentEmail.innerHTML = '';
    }

    categoryContainer.innerHTML = '';
    numberContainer.innerHTML = '';
    headerContainer.innerHTML = '';
    listContainer.innerHTML = '';
}


/**
 * Отрисовка страницы с вопросом и варинтами ответов
*/
function showQuestion() {
    let questionTemplate = '';
    let index = 0;
    
    const categoryTemplate = `<h3 class="header-question--category" id="category">%category%</h3>`;
    const category = categoryTemplate.replace('%category%', questions[questionIndex - 1]['category']);
    categoryContainer.innerHTML = category;
    
    const numberTemplate = `<p class="header-question--numbers">%number% из 5</p>`;
    const number = numberTemplate.replace('%number%', questions[questionIndex - 1]['number']);
    numberContainer.innerHTML = number;
    
    const headerTemplate = `<h3 class="header-question--category">%title%</h3>`;
    const title = headerTemplate.replace('%title%', questions[questionIndex - 1]['question']);
    headerContainer.innerHTML = title;
    
    questions[questionIndex - 1]['answers'].forEach(answerText => {
        if (questionIndex - 1 !== questions.length - 1) {
            questionTemplate = 
                `<li>
                    <label>
                        <input value="%index%" type="radio" class="answer-radio" name="answer">
                        <span>%answer%</span>
                    </label>
                </li>`;
        } else {
            questionTemplate =
                `<li>
                    <label>%answer%
                        <input type="number" class="answer-input" name="answer" required>
                    </label>
                </li>`;
        }
            
        const answerHTML = questionTemplate
        .replace('%answer%', answerText)
        .replace('%index%', index);
        
        index++;
        listContainer.innerHTML += answerHTML;
    });
}


/**
 * Проверка и запись ответа
*/
function checkAnswer() {
    const checkedRadio = listContainer.querySelector('input[type="radio"]:checked');
    const textInputs = listContainer.querySelectorAll('input[type="number"]');
    
    if (!checkedRadio && textInputs.length === 0) {
        alert('Выберите ответ');
        return;
    }
    
    if (!checkedRadio && textInputs.length !== 0) {
        if (checkInputValues(textInputs)) {
            alert('Заполните все поля');
            return;
        };
    }
    
    if (checkedRadio) {
        // Узнаем номер ответа пользователя и сохраняем его
        const userAnswer = parseInt(checkedRadio.value);
        saveReview(userAnswer);
    }
    
    displayChange();
}


/**
 * Смена состония экрана (отрисовка различных "страниц")
 */
function displayChange() {
    if (questionIndex <= questions.length) {
        if (questionIndex === 5) {
            questionIndex++;
            clearPage();
            showQuestion();
            
            const footer = footerChange();
            footer.style.top = '80px';
            
            saveNumberFields();
            sendEmail();
        } else if (questionIndex === 6) {
            clearPage();
            showResults();
        } else {
            questionIndex++;
            clearPage();
            showQuestion();
        }
    }
}


/**
 * Функция сохраняющая поля типа Number для подсчета суммы в массив
 */
function saveNumberFields() {
    const fields = document.querySelectorAll('input[type="number"]');
    fields.forEach(field => textInputArray.push(field));
}


/**
 * Сохранение рецензии по выбранному ответу
 * @param {Number} answer - выбранный пользователей ответ
 */
function saveReview(answer) {
    let index = 0;

    if (questions[questionIndex - 1]['reviews']) {
        // Запоминаем рецензии по ответу
        questions[questionIndex - 1]['reviews'].forEach(review => {
            if (answer === index) {
                if (!(questionIndex === 2 && answer === 0)) {
                    reviewsList.push(review);
                }
                
                // Пропуск второго вопроса по теме "Дежурства", если выбран ответ "нет"
                if (questionIndex === 2 && answer === 1) {
                    questionIndex++;
                }
            }
            index++;
        });

    }
}


/**
 * Функция, проверяющая, что все числовые поля заполнены
 * @param {Object} fields -  Input (type=number) DOM Elements 
 * @returns flag (true - есть пустые поля, false - все поля заполнены) 
 */
function checkInputValues(fields) {
    console.log(typeof(fields));

    const flag = false;

    fields.forEach(field => {
        if (field.value === '') {
            flag = true;
        }
    });

    return flag;
}


/**
 * Подсчет итогового значения по формуле
 * @param {Array} textInputArray - Массив со значениями из полей type=number 
 */
function calculateValue() {
    // Получение переменных для формулы
    const numberOfDeals = parseInt(textInputArray[0].value);
    const checkPerDeal = parseInt(textInputArray[1].value);
    const percentFromDeal = parseInt(textInputArray[2].value);

    const result = Math.round((numberOfDeals * checkPerDeal) * (percentFromDeal / 100)); 
    return result;
}


/**
 * Отрисовка страницы с результатами
 */
function showResults() {
    const header = document.querySelector('header');
    // const mainBlock = document.querySelector('main');
    const buttonLink = createLink();
    const footer = footerChange();

    const calculatedResult = calculateValue();
    const result = document.createElement('li');
    
    header.classList.add('hidden');

    document.querySelector('#question-title').textContent = `
        Спасибо, что ты нашел время пройти тест. Давай перейдем к анализу агенства, в котором ты работаешь.
    `;
  
    result.classList.add('answer-input');
    result.innerHTML = `
        <b>Результат:</b> ${calculatedResult} руб. ежемесячно вы отдаете своему агенству.<br>
        В Домос вы будете отдавать только 10 000 руб. в месяц.
    `;
    result.style.paddingLeft = 0;
    document.querySelector('#answers-list').appendChild(result);

    reviewsList.forEach(review => {
        const li = document.createElement('li');
        li.classList.add('answer-input');
        li.textContent = review;
        li.style.paddingLeft = 0;
        document.querySelector('#answers-list').appendChild(li);
    });
    
    footer.style.bottom = '17px';
    footer.appendChild(buttonLink);
}


// Функция для возвращения на предыдущий вопрос
function goBack() {
    // Уменьшаем значение questionIndex на 1
    questionIndex--;
    reviewsList.pop();

    // Проверяем, чтобы questionIndex не стал меньше 1
    if (questionIndex < 1) {
        questionIndex = 1;
    }

    if (questionIndex === 3) {
        questionIndex--;
    }

    clearPage();
    showQuestion();
}

const validFormArr = [];

function getForm() {
    const form = document.forms['form'];
    const formArr = Array.from(form);
    const button = form.elements['button'];

    return [form, formArr, button];
}



// Ниже все для почты
function sendEmail() {
    document.querySelector('.content-button').remove();
    
    const emailTemplate = document.querySelector('#email-template').content;
    
    document.querySelector('main').appendChild(emailTemplate);
    
    const formData = getForm();
    const form = formData[0];
    const formArr = formData[1];

    formArr.forEach((element) => {
        if (element.hasAttribute('data-reg')) {
            element.setAttribute('is-valid', '0');
            // console.log(element);
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
    data.append('reviewsList', JSON.stringify(reviewsList))
    // console.log('great', data);
    const response = await sendData(data);
    // console.log(response);

    if (response.ok) {
        let result = await response.json();
        alert(result.message);
        formReset(form);
    } else {
        clearPage();
        showResults();
        // alert('Код ошибки: ' + response.status);
    }

}

function serializeForm(form) {
    return new FormData(form);
}

async function sendData(data) {
    return await fetch('send_mail.php', {
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