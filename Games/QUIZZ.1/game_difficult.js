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
        question: "Which of these languages uses a two-step compilation process both interpreter and compiler?",
        choice1: "COBOL",
        choice2: "BASIC",
        choice3: "Java",
        choice4: "C++",
        answer: 3
    },
    {
        question: "A hacker that changes or forges information in an electronic resource, is engaging in __________.",
        choice1: "denial of service",
        choice2: "sniffing",
        choice3: " terrorism",
        choice4: "data diddling",
        answer: 4
    },
    {
        question: "What is a Firewall in Computer Network?",
        choice1: "An operating System of Computer Network",
        choice2: "The physical boundary of Network",
        choice3: "A web browsing Software",
        choice4: "A system designed to prevent unauthorized access",
        answer: 4
    },
    {
        question: "What kind of lock includes a keypad that can be used to control access into areas?",
        choice1: "Cipher",
        choice2: "Warded",
        choice3: "Device",
        choice4: "Tumbler",
        answer: 1
    },
    {
        question: "________ is an important circuitry in a computer system that directs the operation of the processor.",
        choice1: "Memory",
        choice2: "Control Unit",
        choice3: "Address Bus",
        choice4: "Accumulator",
        answer: 2
    },
    {
        question: "Switch is a network device whose responsibility is to_______.",
        choice1: "Protect from virus attack",
        choice2: "turn of the power to network",
        choice3: "Connect Network devices",
        choice4: "Boot the network",
        answer: 3
    },
    {
        question: "A type of device used to connect a central processor and peripherals which uses multiplying is known as _____.",
        choice1: "Modem",
        choice2: "Network",
        choice3: "Multiplexer",
        choice4: "All of these",
        answer: 3
    },
    {
        question: "Which of the following is a search engine?",
        choice1: "Yahoo",
        choice2: "Bing",
        choice3: "WhatsApp",
        choice4: "Instagram",
        answer: 2
    },
    {
        question: "Who invented the first computer mouse?",
        choice1: "Steve Jobs",
        choice2: "Douglas Engelbart",
        choice3: "Bill Gates",
        choice4: "Tim Berners-Lee",
        answer: 2
    },
    {
        question: "What is a Firewall in Computer Network?",
        choice1: "An operating System of Computer Network",
        choice2: "The physical boundary of Network",
        choice3: "A web browsing Software",
        choice4: "A system designed to prevent unauthorized access",
        answer: 4
    },
    {
        question: "What is a Firewall in Computer Network?",
        choice1: "An operating System of Computer Network",
        choice2: "The physical boundary of Network",
        choice3: "A web browsing Software",
        choice4: "A system designed to prevent unauthorized access",
        answer: 4
    },
    {
        question: "What is a Firewall in Computer Network?",
        choice1: "An operating System of Computer Network",
        choice2: "The physical boundary of Network",
        choice3: "A web browsing Software",
        choice4: "A system designed to prevent unauthorized access",
        answer: 4
    },
    {
        question: "What is a Firewall in Computer Network?",
        choice1: "An operating System of Computer Network",
        choice2: "The physical boundary of Network",
        choice3: "A web browsing Software",
        choice4: "A system designed to prevent unauthorized access",
        answer: 4
    },
    {
        question: "What is a Firewall in Computer Network?",
        choice1: "An operating System of Computer Network",
        choice2: "The physical boundary of Network",
        choice3: "A web browsing Software",
        choice4: "A system designed to prevent unauthorized access",
        answer: 4
    },
    {
        question: "What is a Firewall in Computer Network?",
        choice1: "An operating System of Computer Network",
        choice2: "The physical boundary of Network",
        choice3: "A web browsing Software",
        choice4: "A system designed to prevent unauthorized access",
        answer: 4
    },
    {
        question: "What is a Firewall in Computer Network?",
        choice1: "An operating System of Computer Network",
        choice2: "The physical boundary of Network",
        choice3: "A web browsing Software",
        choice4: "A system designed to prevent unauthorized access",
        answer: 4
    },
    {
        question: "What is a LAN?",
        choice1: "A network that covers a large geographic area",
        choice2: "A network that connects devices within a building or group of buildings",
        choice3: "A network that connects devices across multiple cities",
        choice4: "A network that connects devices across the world",
        answer: 2
    },
    {
        question: "Which of the following is a type of computer virus?",
        choice1: "Trojan horse",
        choice2: "Worm",
        choice3: "Spyware",
        choice4: "All of these",
        answer: 4
    },
    {
        question: "What is the purpose of a firewall?",
        choice1: "To protect against viruses",
        choice2: "To block unwanted traffic",
        choice3: "To speed up internet connection",
        choice4: "To monitor internet usage",
        answer: 2
    },
    {
        question: "Which of the following is not a programming language?",
        choice1: "C++",
        choice2: "Python",
        choice3: "HTML",
        choice4: "Firefox",
        answer: 4
    },
    {
        question: "Who is considered the father of modern computing?",
        choice1: "Steve Jobs",
        choice2: "Bill Gates",
        choice3: "Alan Turing",
        choice4: "Charles Babbage",
        answer: 4
    },
    {
        question: "The digital telecommunications term ISDN is an abbreviation for ______.",
        choice1: "Integrated Standard Digital Networks",
        choice2: "Internet Services Data Network",
        choice3: "Interactive Standard Dynamic Networks",
        choice4: "Integrated Services Digital Network",
        answer: 4
    }
];

const CORRECT_BONUS = 10;
const MAX_QUESTIONS = 20;

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