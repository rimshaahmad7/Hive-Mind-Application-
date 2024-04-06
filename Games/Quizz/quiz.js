
// let questions = [
//     {
//         id: 1,
//         question: "What is the full form of RAM?",
//         answer: "Random Access Memory",
//         options: [
//             "Run Accept Memory",
//             "Random All Memory",
//             "Random Access Memory",
//             "None of these"
//         ]
//     },
//     {
//         id: 2,
//         question: "What is the full form of CPU?",
//         answer: "Central Processing Unit",
//         options: [
//             "Central Progress Unit",
//             "Central Processing Unit",
//             "Central Preload Unit",
//             "None of these"
//         ]
//     },
//     {
//         id: 3,
//         question: "What is the full form of E-mail?",
//         answer: "Electronic Mail",
//         options: [
//             "Electronic Mail",
//             "Electric Mail",
//             "Engine Mail",
//             "None of these"
//         ]
//     },
//     {
//         id: 4,
//         question: "'DB' in computer means?",
//         answer: "DataBase",
//         options: [
//             "Double Byte",
//             "Data Block",
//             "DataBase",
//             "None of these"
//         ]
//     },
//     {
//         id: 5,
//         question: "What is FMD?",
//         answer: "Fluorescent Multi-Layer Disc",
//         options: [
//             "Fluorescent Multi-Layer Disc",
//             "Flash Media Driver",
//             "Fast-Ethernet Measuring Device",
//             "None of these"
//         ]
//     },
//     {
//         id: 6,
//         question: "How many bits is a byte?",
//         answer: "8",
//         options: [
//             "32",
//             "16",
//             "8",
//             "64"
//         ]
//     },
//     {
//         id: 7,
//         question: "A JPG stands for:",
//         answer: "A format for an image file",
//         options: [
//             "A format for an image file",
//             "A jumper programme graphic",
//             "A unit of measure for memory",
//             "None of these"
//         ]
//     },
//     {
//         id: 8,
//         question: "Which was an early mainframe computer?",
//         answer: "ENIAC",
//         options: [
//             "ENIAC",
//             "EDVAC",
//             "UNIC",
//             "ABACUS"
//         ]
//     },
//     {
//         id: 9,
//         question: "Main circuit board in a computer is:",
//         answer: "Mother board",
//         options: [
//             "Harddisk",
//             "Mother board",
//             "Microprocessor",
//             "None of these"
//         ]
//     },
//     {
//         id: 10,
//         question: "ISP stands for:",
//         answer: "Internet Survice Provider",
//         options: [
//             "Internet Survey Period",
//             "Integrated Survice Provider",
//             "Internet Sucurity Protocol",
//             "Internet Survice Provider"

//         ]
//     },
// ];


// let question_count = 0;
// let points = 0;


// window.onload = function () {
//     SharedWorker(question_count);
// };

// function show(count) {
//     let question = document.getElementById("questions");
//     let [first, second, third, fourth] = questions[count].options;

//     question.innerHTML = `<h2>Q${count + 1}. ${questions[count].question}</h2>
//     <ul class="option_group">
//     <li class="option">${first}</li>
//     <li class="option">${second}</li>
//     <li class="option">${third}</li>
//     <li class="option">${fourth}</li>
//     </ul>`;
//     toggleActive();

// }

// function toggleActive(){
//     let option=document.querySelectorAll("li.option");
//     for(let i=0; i <option.length; i++){
//         option[i].onclick = function(){
//             for(let i=0; i< option.length; i++){
//                 if(option[i].classList.contains("active")){
//                     option[i].classList.remove("active");
//                 }
//             }
//             option[i].classList.add("active");
//         }
//     }
// }


let question = document.getElementById("questions");
const options = Array.from(document.getElementsByClassName("option"));

let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];


let questions = [
    {
        question: "What is the full form of RAM?",
        choice1: "<Run Accept Memory>",
        choice2: "<Random All Memory>",
        choice3: "<Random Access Memory>",
        choice4: "<None of these>",
        answer: 3
    },
    {
        question: "What is the full form of CPU?",
        choice1: "<Central Progress Unit>",
        choice2: "<Central Processing Unit>",
        choice3: "<Central Preload Unit>",
        choice4: "<None of these>",
        answer: 2
    },
    {
        question: "What is the full form of E-mail?",
        choice1: "<Electronic Mail>",
        choice2: "<Electric Mail>",
        choice3: "<Engine Mail>",
        choice4: "<None of these>",
        answer: 1
    },
    {
        question: "'DB' in computer means?",
        choice1: "<Double Byte>",
        choice2: "<Data Block>",
        choice3: "<DataBase>",
        choice4: "<None of these>",
        answer: 3
    },
    {
        question: "What is FMD?",
        choice1: "<Fluorescent Multi-Layer Disc>",
        choice2: "<Flash Media Driver>",
        choice3: "<Fast-Ethernet Measuring Device>",
        choice4: "<None of these>",
        answer: 1
    }
];

const CORRECT_BONUS = 10;
const MAX_QUESTIONS = 3;

startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions];
    console.log(availableQuestions);
    getNewQuestion();
};

getNewQuestion = () => {
    questionCounter++;
    const questionIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex];
    question.innerText = currentQuestion.question;

    options.forEach(option => {
        const number = option.dataset['number'];
        option.innerText = currentQuestion['option' + number];

    });

    availableQuestions.splice(questionIndex, 1);
    console.log(availableQuestions);
    acceptingAnswers = true;

};

options.forEach(option => {
    option.addEventListener('click', e => {
        if (!acceptingAnswers) return;

        acceptingAnswers = false;
        const selextedOption = e.target;
        const selectedAnswer = selextedOption.dataset["number"];
        console.log(selectedAnswer);
        getNewQuestion();
    });

});

startGame();




































function next() {
    if (question_count == question.length - 1) {
        location.href = "final.html";
    }
    console.log(question_count);

    let user_answer = document.querySelector("li.option.active").innerHTML;

    if (user_answer == question[question_count].answer) {
        points += 10;
        sessionStorage.setItem("points", points);
    }
    console.log(points);

    question_count++;
    show(question_count);
}

