// Массив вопросов

export const questions = [
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
];