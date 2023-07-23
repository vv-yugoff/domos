// Массив вопросов

const questions = [
    {
        number: 1,
        category: 'Полезные обучения',
        question: `Как часто в агенстве, в котором вы работаете, проводятся полезные обучения?
            Полезные обучения - те, что стимилируют ваш профессиональный и личностный рост
            (обучения техникам продаж, деловой этикет, язык тела в профессии и т.д.)`,
        answers: [
            '2-3 раза в месяц', 
            '1 раз в месяц', 
            'реже одного раза в месяц', 
            'все знания добываю самостоятельно',
        ],
        reviews: [
            'В твоем агенстве следят за уровнем знаний своих агентов и это похвально. Мы надеемся, что обучения, которые ты проходишь помогают становиться настоящим профессионалом, а также развивают тебя как личность.',
            'В твоем агенстве проводятся ежемесячные обучения и это отлично, но согласись, нет предела совершенству? Мы надеемся, что обучения влияют не только на твою профессиональную деятельность, но и развивают тебя как личность.',
            'Увы, твое агенство как-будто не очень заинтересовано в твоем профессиональном и личностном росте. Обучающие мероприятия проводятся исключительно редко, судя по твоему ответу.',
            'Увы, твое агенство как-будто не очень заинтересовано в твоем профессиональном и личностном росте. Обучающие мероприятия проводятся исключительно редко, судя по твоему ответу.',
        ],
    },
    {
        number: 2,
        category: 'Дежурства',
        question: 'Есть ли в вашем агенстве обязательные дежурства?',
        answers: ['да', 'нет'],
        reviews: [
            '',
            'О, это замечательное чувство: отсутствие обязательных посещений офиса, тебе оно знакомо, как и нам в Домос. Ты волен делать то, что необходимо именно тебе для развития и совершения большего количества сделок и это прекрасно.',
        ],
    },
    {
        number: 2,
        category: 'Дежурства',
        question: 'Как часто дежурства в офисе приносят вам новых клиентов?',
        answers: [
            'каждое дежурство получаю новые заявки', 
            'редко, но получаю новые заявки',
            'не получаю новые заявки во время дежурства',
        ],
        reviews: [
            'Хоть у тебя и нет той свободы выбора, как у нас в Домос, и ты вынужден оставаться на дежурства. Правда твое агенство недвижимости стоит похвалить. Ты получаешь новые заявки каждый раз, когда проводишь выходные в офисе и это оправдывает потраченное  время.',
            'К сожалению, в твоем агенстве нет ни свободы выбора, ни большого потока клиентов, которые бы это могли оправдать. Дежурства в офисе в выходные дни могут быть приемлемы только при большом количестве заявок, иначе это все все пустая трата твоего драгоценного времени.',
            'К сожалению, в твоем агенстве нет ни свободы выбора, ни большого потока клиентов, которые бы это могли оправдать. Дежурства в офисе в выходные дни могут быть приемлемы только при большом количестве заявок, иначе это все все пустая трата твоего драгоценного времени.',
        ],
    },
    {
        number: 3,
        category: 'Безопасность сделок',
        question: 'Юрист в вашем агентсве проверяет безопасность ваших сделок и готовит документы к ней?',
        answers: [
            'помогает всегда', 
            'помогает, но приходится долго ждать ответа', 
            'не помогает вовсе/в агенстве нет юриста'
        ],
        reviews: [
            'Юрист твоего агентства сокровище. Мы рады, что у тебя есть поддержка в лице специалиста, который всегда придет на помощь.',
            'Помощь юриста очень важна в нашей деятельности, именно поэтому так важна быстрота его реакций на твои сообщения. Подумай, может быть стоит задуматься над качеством работы вашего специалиста?',
            'В твоем агенстве проблемы с юристом. Это критично, на это нельзя закрывать глаза. Ты отвечаешь за тех людей, которым поомогаешь с покупкой и продажей недвижимости, а правильно оформленные документы - ключ к хорошей сделке.',
        ],
    },
    {
        number: 4,
        category: 'Обязательства',
        question: 'Есть ли у вас обязательства по посещению офиса?',
        answers: [
            'нужно быть в офисе каждый день и отчитываться о проделанной работе', 
            'нужно быть в офисе раз в неделю', 
            'необязательно посещать офис'
        ],
        reviews: [
            'Если ты начинающий риелтор, то мы можем понять твое постоянное нахождение в офисе, а вот если ты уже несколько лет в профессии, но тебя все равно стараются загнать в график, то мы в Домос не понимаем этих правил и выступаем против них.',
            'Мы надеемся, что твое еженедельное обязательно посещение офиса связано с тем, что у вас замечательный коллектив, с которым тебе хочется встретиться, а не с тем, что тебя контролирует твое руководство. Ты взрослый и самостоятельный человек, который отвечает за свои сделки, поэтому подумай, нужно ли тебе постоянно перед кем-то отчитываться.',
            'Как хорошо, что в твоем агентстве не настаивают на постоянном посещении офиса. Видимо, у вас все также свободно как у нас в "Домос": мы видимся на обучениях (которые кстати тоже не являются обязательными) или когда хотим провести время вместе.', 
        ],
    },
    {
        number: 5,
        category: 'Узнать честность агенства',
        question: 'Давайте посчитаем, сколько суммарно вы отдаете за месяц своему агенству недвижимости',
        answers: [
            'Среднее количество сделок в месяц:', 
            'Средний чек по сделке:', 
            'Какой процент со сделки вы отдаете в свое агенство недвижимости?'
        ],
    }
]

// Находим элементы
const categoryContainer = document.querySelector('#category');
const numberContainer = document.querySelector('#number');
const headerContainer = document.querySelector('#question-title');
const listContainer = document.querySelector('#answers-list');
const submitBtn = document.querySelector('#submit');

// Массив с рецензиями по ответам
const reviewsList = [];

// Переменные опросника
let score = 0; // Количество очков
let questionIndex = 1; // Номер вопроса

showQuestion(); // функция используется для отображения вопроса и вариантов ответов на странице
submitBtn.addEventListener('click', checkAnswer); // проверяет выбран ли ответ пользователя и принимает соответствующие меры.
document.addEventListener('keydown', (evt) => {
    if (evt.key === 'Enter') {
        checkAnswer();
    }
});

/**
 * Очищает страницу
 */
function clearPage() {
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

    const categoryTemplate = `<h3 class="header-question--category" id="category">%category%</h3>`;
    const category = categoryTemplate.replace('%category%', questions[questionIndex - 1]['category']);
    categoryContainer.innerHTML = category;

    const numberTemplate = `<p class="header-question--numbers">%number% из 5</p>`;
    const number = numberTemplate.replace('%number%', questions[questionIndex - 1]['number']);
    numberContainer.innerHTML = number;

    const headerTemplate = `<h3 class="header-question--category">%title%</h3>`;
    const title = headerTemplate.replace('%title%', questions[questionIndex - 1]['question']);
    headerContainer.innerHTML = title;

    for ([index, answerText] of questions[questionIndex - 1]['answers'].entries()) {
        console.log(index + 1, answerText);
        index++;

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
                        <input type="text" class="answer-input" name="answer">
                    </label>
                </li>`;
        }

        const answerHTML = questionTemplate
            .replace('%answer%', answerText)
            .replace('%index%', index);

        listContainer.innerHTML += answerHTML;
    }
}

function checkAnswer() {
    // Массив для значений из текстовых полей
    const textInputArray = [];

    // Находим выбранную радиокнопку
    const checkedRadio = listContainer.querySelector('input[type="radio"]:checked');

    // Если ответ не выбран, то выходим из функции
    if (!checkedRadio) {
        submitBtn.blur();
        alert('Выберите ответ');
        // return
    } else if (listContainer.querySelectorAll('input[type="text"]').length !== 0) {
        console.log('ТОГДА НАДО ПРОВЕРЯТЬ ТЕКСТОВЫЕ ПОЛЯ');
        listContainer.querySelectorAll('input[type="text"]').forEach(item => {
            console.log(item.value);
            textInputArray.push(item.value);
        });
        console.log(listContainer.querySelectorAll('input[type="text"]'));
        console.log(textInputArray);
    } else {
        // Узнаем номер ответа пользователя
        const userAnswer = parseInt(checkedRadio.value);
        console.log('Номер ответа пользователя - ', userAnswer);

        if (questions[questionIndex - 1]['reviews']) {
            // Запоминаем рецензии по ответу
            for ([index, review] of questions[questionIndex - 1]['reviews'].entries()) {
                console.log('Ответ пользователя ', userAnswer);
                console.log('Индекс ревьюхи ', index);
                console.log('Ревью' , review);

                if (userAnswer === index + 1) {
                    console.log(document.querySelector('#answers-list'));
                    const list = document.querySelector('#answers-list');
                    reviewsList.push(review);
                }
            }
        } else {
            console.log('Нет reviews');
        }
        console.log(reviewsList);
    }

    if (questionIndex !== questions.length) {
        console.log('НОМЕР ВОПРОСА: ', questionIndex);
        console.log('ВСЕГО ВОПРОСОВ: ', questions.length);
        
        console.log('Это не последний вопрос');
        questionIndex++;
        // Очистка
        clearPage();
        // Отображение нового вопроса
        showQuestion();
    } else {
        console.log('Последний вопрос');
        clearPage();
        // Страница с результатами
        showResults();
    }
}


function showResults() {
    console.log('РЕЗУЛЬТАТЫ');

    const header = document.querySelector('header');
    header.classList.add('hidden');

    document.querySelector('#question-title').textContent = `
        Спасибо, что ты нашел время, чтобы пройти этот тест, а теперь давай перейдем к анализу агенства, в котором ты работаешь.
    `;

    reviewsList.forEach(review => {
        // const li = `<li class='answer-input'>${review}</li>`;
        // console.log(li);
        const li = document.createElement('li');
        li.classList.add('answer-input');
        li.textContent = review;
        // document.querySelector('#answers-list').appendChild(li);
        document.querySelector('#answers-list').appendChild(li);
    });

     // Убираем стиль absolute у footer
     const footer = document.querySelector('footer');
     footer.style.position = 'relative';
     footer.style.bottom = '-45px';
     document.body.style.overflow = 'auto';

     const submitButton = document.getElementById('submit');

        // Изменяем текст и ссылку элемента
        submitButton.textContent = 'Перейти на сайт';
        submitButton.href = 'http://domos.top';
}


// Находим кнопку "Назад"
const backButton = document.querySelector('.btn--back');

// Добавляем обработчик события при клике на кнопку "Назад"
backButton.addEventListener('click', goBack);

// Функция для возвращения на предыдущий вопрос
function goBack() {
  // Уменьшаем значение questionIndex на 1
  questionIndex--;

  reviewsList
  // Проверяем, чтобы questionIndex не стал меньше 1
  if (questionIndex < 1) {
    questionIndex = 1;
  }

  // Очищаем страницу
  clearPage();

  // Отображаем предыдущий вопрос
  showQuestion();

}

// submitBtn.addEventListener('click', checkAnswer);

// function checkAnswer() {
//     const checkedRadio = listContainer.querySelector('input[type="radio"]:checked');

//     if (!checkedRadio) {
//         submitBtn.blur();
//         alert('Выберите ответ');
//         return;
//     }

//     // Остальной код функции checkAnswer() остается без изменений

//     questionIndex++;
//     clearPage();
//     showQuestion();
// }


// Убираем стиль absolute у footer и устанавливаем значение bottom
// const footer = document.querySelector('footer');
// footer.style.position = 'relative';
// footer.style.bottom = '-45px';

// Разрешаем прокрутку на странице
// document.body.style.overflow = 'auto';