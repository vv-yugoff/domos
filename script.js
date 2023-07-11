// Массив вопросов

const questions = [
    {
        number: 1,
        category: 'Полезные обучения',
        question: `Как часто в агенстве, в котором вы работаете, проводятся полезные обучения?
            Полезные обучения - те, что стимилируют ваш профессиональный и личностный рост.
            (Обучения техникам продаж, деловой этикет, язык тела в профессии и т.д.)`,
        answers: ['2-3 раза в месяц', '1 раз в месяц', 'реже одного раза в месяц', 'все знания добываю самостоятельно'],
        points: [3, 2, 1, 0],
    },
    {
        number: 2,
        category: 'Дежурства',
        question: 'Есть ли в вашем агенстве обязательные дежурства?',
        answers: ['да', 'нет'],
        points: [1, 0],
    },
    {
        number: 3,
        category: 'Безопасность сделок',
        question: 'Юрист в вашем агентсве проверяет безопасность ваших сделок и готовит документы к ней?',
        answers: ['помогает всегда', 'помогает, но приходится долго ждать ответа', 'не помогает вовсе/в агенстве нет юриста'],
        points: [2, 1, 0],
    },
    {
        number: 4,
        category: 'Обязательства',
        question: 'Есть ли у вас обязательства по посещению офиса?',
        answers: ['нужно быть в офисе каждый день и отчитываться о проделанной работе', 'нужно быть в офисе раз в неделю', 'необязательно посещать офис'],
        points: [2, 1, 0],
    },
    {
        number: 5,
        category: 'Обязательства',
        question: 'Есть ли у вас обязательства по посещению офиса?',
        answers: ['нужно быть в офисе каждый день и отчитываться о проделанной работе', 'нужно быть в офисе раз в неделю', 'необязательно посещать офис'],
        points: [2, 1, 0],
    },
    {
        number: 6,
        category: 'Узнать честность агенства',
        question: 'Давайте посчитаем, сколько суммарно вы отдаете за месяц своему агенству недвижимости',
        answers: ['Среднее количество сделок в месяц:', 'Сколько из этих сделок вы обычно получаете от АН, в котором вы работает?', 'Средний чек по сделке:', 'Какой процент со сделки вы отдаете в свое агенство недвижимости?'],
    }
    // {
    //     number: 3,
    //     category: 'Дежурства',
    //     question: 'Подскажите, как часто дежурства в офисе приносят Вам новых клиентов?',
    //     answers: ['Каждое дежурство получаю новые заявки', 'Редко, но получаю новые заявки', 'Не получаю новые заявки во время дежурства'],
    //     points: [3, 2, 1],
    // },
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
submitBtn.addEventListener('click', checkAnswer);

function clearPage() {
    categoryContainer.innerHTML = '';
    numberContainer.innerHTML = '';
    headerContainer.innerHTML = '';
    listContainer.innerHTML = '';
}

function showQuestion() {
    let questionTemplate = '';

    const categoryTemplate = `<h3 class="header-question--category" id="category">%category%</h3>`;
    const category = categoryTemplate.replace('%category%', questions[questionIndex]['category']);
    categoryContainer.innerHTML = category;

    const numberTemplate = `<p class="header-question--numbers">%number% из 5</p>`;
    const number = numberTemplate.replace('%number%', questions[questionIndex]['number']);
    numberContainer.innerHTML = number;

    const headerTemplate = `<h3 class="header-question--category">%title%</h3>`;
    const title = headerTemplate.replace('%title%', questions[questionIndex]['question']);
    headerContainer.innerHTML = title;

    for ([index, answerText] of questions[questionIndex]['answers'].entries()) {
        console.log(index + 1, answerText);
        index++;

        if (questionIndex !== questions.length - 1) {
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
                        <input type="text" class="answer-input" name="answer">
                    </label>
                </li>`;
        }

        console.log(questionTemplate);

        const answerHTML = questionTemplate
            .replace('%answer%', answerText)
            .replace('%index%', index);

        listContainer.innerHTML += answerHTML;
    }
}

function checkAnswer() {
    // Находим выбранную радиокнопку
    const checkedRadio = listContainer.querySelector('input[type="radio"]:checked');
    
    // Если ответ не выбран, то выходим из функции
    if (!checkedRadio) {
        submitBtn.blur();
        return
    }

    // Узнаем номер ответа пользователя
    const userAnswer = parseInt(checkedRadio.value);
    console.log('Номер ответа пользователя - ', userAnswer);

    // После ответа - увеличиваем счет
    for ([scoreIndex, points] of questions[questionIndex]['points'].entries()) {
        console.log(scoreIndex, points);
        scoreIndex++;

        if (userAnswer === scoreIndex) {
            score += points;
        }
    }
    console.log('Итог:', score);

    if (questionIndex !== questions.length - 1) {
        console.log('a', questionIndex);
        console.log('b', questions.length - 1);
        
        console.log('Это не последний вопрос');
        questionIndex++;
        // Очистка
        clearPage();
        // Отображение нового вопроса
        showQuestion();
    } else {
        console.log('Последний вопрос');
        // Страница с результатами
        showResults();
    }
}

function showResults() {
    console.log('РЕЗУЛЬТАТЫ');
}
