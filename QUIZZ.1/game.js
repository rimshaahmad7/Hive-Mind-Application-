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
        question: "What is the full form of RAM?",
        choice1: "Run Accept Memory",
        choice2: "Random All Memory",
        choice3: "Random Access Memory",
        choice4: "None of these",
        answer: 3
    },
    {
        question: "What is the full form of CPU?",
        choice1: "Central Progress Unit",
        choice2: "Central Processing Unit",
        choice3: "Central Preload Unit",
        choice4: "None of these",
        answer: 2
    },
    {
        question: "What is the full form of E-mail?",
        choice1: "Electronic Mail",
        choice2: "Electric Mail",
        choice3: "Engine Mail",
        choice4: "None of these",
        answer: 1
    },
    {
        question: "'DB' in computer means?",
        choice1: "Double Byte",
        choice2: "Data Block",
        choice3: "DataBase",
        choice4: "None of these",
        answer: 3
    },
    {
        question: "What is FMD?",
        choice1: "Fluorescent Multi-Layer Disc",
        choice2: "Flash Media Driver",
        choice3: "Fast-Ethernet Measuring Device",
        choice4: "None of these",
        answer: 1
    }
];

const CORRECT_BONUS = 10;
const MAX_QUESTIONS = 3;

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
        return window.location.assign("end.html");
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