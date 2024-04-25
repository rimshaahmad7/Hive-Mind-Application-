const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));
const progressText = document.getElementById('progressText');
const scoreText = document.getElementById('score');
const progressBarFull = document.getElementById('progressBarFull');

let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

let questions = [
    {
        question: "What is the full form of USB?",
        choice1: "Universal Serial Bus",
        choice2: "United States of America Business",
        choice3: "User Serial Business",
        choice4: "Universal Serial Battery",
        answer: 1
    },
    {
        question: "What is the function of a modem in a computer?",
        choice1: "To connect to the Internet",
        choice2: "To print documents",
        choice3: "To store data",
        choice4: "To play music",
        answer: 1
    },
    {
        question: "Which of the following is a type of software?",
        choice1: "Mouse",
        choice2: "Keyboard",
        choice3: "Operating System",
        choice4: "Monitor",
        answer: 3
    },
    {
        question: "Which of the following is a type of computer memory?",
        choice1: "Input Memory",
        choice2: "Output Memory",
        choice3: "Virtual Memory",
        choice4: "Secondary Memory",
        answer: 3
    },
    {
        question: "Which of the following is a type of network?",
        choice1: "RAM",
        choice2: "CPU",
        choice3: "USB",
        choice4: "LAN",
        answer: 4
    },
    {
        question: "Which of the following is a type of storage device?",
        choice1: "Mouse",
        choice2: "Keyboard",
        choice3: "CD-ROM",
        choice4: "Printer",
        answer: 3
    },
    {
        question: "What is the full form of PDF?",
        choice1: "Portable Document Format",
        choice2: "Portable Data Format",
        choice3: "Personal Document Format",
        choice4: "Personal Data Format",
        answer: 1
    },
    {
        question: "Which of the following is a type of computer virus?",
        choice1: "Printer",
        choice2: "Keyboard",
        choice3: "Mouse",
        choice4: "Trojan",
        answer: 4
    },
    {
        question: "Which of the following is a type of computer memory?",
        choice1: "To print documents",
        choice2: "To block unauthorized access",
        choice3: "To store data",
        choice4: "To play music",
        answer: 2
    },
    {
        question: "Which of the following is not a web browser?",
        choice1: "Google Chrome",
        choice2: "Microsoft Word",
        choice3: "Mozilla Firefox",
        choice4: "Internet Explorer",
        answer: 2
    },
    {
        question: "The Third Generation Computer was made with____.",
        choice1: "Vacuum Tube",
        choice2: "Discrete Components",
        choice3: "Integrated circuits",
        choice4: "Bio Chips",
        answer: 3
    },
    {
        question: "What is a browser?",
        choice1: "A type of software",
        choice2: "A type of hardtware",
        choice3: "A type of network",
        choice4: "A type of modem",
        answer: 1
    }
];

const CORRECT_BONUS = 10;
const MAX_QUESTIONS = 10;

startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions];
    getNewQuestion();
};

getNewQuestion = () => {

    if (availableQuestions.length === 0 || questionCounter >= MAX_QUESTIONS) {
        localStorage.setItem('mostRecentScore',score);
        //go to the end page
        return window.location.assign("end_medium.html");
    }
    questionCounter++;
    progressText.innerText = `Question ${questionCounter}/${MAX_QUESTIONS}`;
    //Update the progress bar
    progressBarFull.style.width = `${(questionCounter / MAX_QUESTIONS) * 100}% `;

    const questionIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex];
    question.innerText = currentQuestion.question;

    choices.forEach(choice => {
        const number = choice.dataset['number'];
        choice.innerText = currentQuestion['choice' + number];

    });

    availableQuestions.splice(questionIndex, 1);
    acceptingAnswers = true;

};

choices.forEach(choice => {
    choice.addEventListener('click', e => {
        if (!acceptingAnswers) return;

        acceptingAnswers = false;
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset["number"];

        const classToApply = selectedAnswer == currentQuestion.answer ? "correct" : "incorrect";

        if (classToApply === "correct") {
            incrementScore(CORRECT_BONUS);
        }

        selectedChoice.parentElement.classList.add(classToApply);

        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply);
            getNewQuestion();
        }, 1000)

    });

});

incrementScore = num => {
    score += num;
    scoreText.innerText = score;
};

startGame();