// Массив вопросов

const questions = [
    {
        number: 2,
        category: 'Дежурства',
        question: 'Подскажите, как часто дежурства в офисе приносят Вам новых клиентов?',
        answers: ['Каждое дежурство получаю новые заявки', 'Редко, но получаю новые заявки', 'Не получаю новые заявки во время дежурства'],
    },
    {
        question: 'test',
        answers: ['1', '2'],
    },
    {
        question: 'test2',
        answers: ['1', '2'],
    }
]

// Находим элементы
const categoryContainer = document.querySelector('#category');
const numberContainer = document.querySelector('#number');
const headerContainer = document.querySelector('#question-title');
const listContainer = document.querySelector('#answers-list');
const submitBtn = document.querySelector('#submit');

// Переменные опросника
let score = 0; // Количество очков
let questionIndex = 0; // Номер вопроса

// clearPage();
showQuestion();

function clearPage() {
    categoryContainer.innerHTML = '';
    numberContainer.innerHTML = '';
    headerContainer.innerHTML = '';
    listContainer.innerHTML = '';
}

function showQuestion() {
    console.log(questions[questionIndex]);
    console.log(questions[questionIndex]['answers']);

    const categoryTemplate = `<h3 class="header-question--category" id="category">%category%</h3>`;
    const category = categoryTemplate.replace('%category%', questions[questionIndex]['category']);
    categoryContainer.innerHTML = category;

    const numberTemplate = `<p class="header-question--numbers">%number% из 11</p>`;
    const number = numberTemplate.replace('%number%', questions[questionIndex]['number']);
    numberContainer.innerHTML = number;

    const headerTemplate = `<h3 class="header-question--category">%title%</h3>`;
    const title = headerTemplate.replace('%title%', questions[questionIndex]['question']);
    headerContainer.innerHTML = title;

    for (answerText of questions[questionIndex]['answers']) {
        console.log(answerText);


    }
}

