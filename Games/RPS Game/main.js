/*          *     .        *  .    *    *   . 
 .  *  move your mouse to over the stars   .
 *  .  .   change these values:   .  *
   .      * .        .          * .       */
const STAR_COLOR = '#fff';
const STAR_SIZE = 3;
const STAR_MIN_SCALE = 0.2;
const OVERFLOW_THRESHOLD = 50;
const STAR_COUNT = (window.innerWidth + window.innerHeight) / 8;

const canvas = document.querySelector('canvas'),
    context = canvas.getContext('2d');

let scale = 1, // device pixel ratio
    width,
    height;

let stars = [];

let pointerX,
    pointerY;

let velocity = { x: 0, y: 0, tx: 0, ty: 0, z: 0.0005 };

let touchInput = false;

generate();
resize();
step();

window.onresize = resize;
canvas.onmousemove = onMouseMove;
canvas.ontouchmove = onTouchMove;
canvas.ontouchend = onMouseLeave;
document.onmouseleave = onMouseLeave;

function generate() {

    for (let i = 0; i < STAR_COUNT; i++) {
        stars.push({
            x: 0,
            y: 0,
            z: STAR_MIN_SCALE + Math.random() * (1 - STAR_MIN_SCALE)
        });
    }

}

function placeStar(star) {

    star.x = Math.random() * width;
    star.y = Math.random() * height;

}

function recycleStar(star) {

    let direction = 'z';

    let vx = Math.abs(velocity.x),
        vy = Math.abs(velocity.y);

    if (vx > 1 || vy > 1) {
        let axis;

        if (vx > vy) {
            axis = Math.random() < vx / (vx + vy) ? 'h' : 'v';
        }
        else {
            axis = Math.random() < vy / (vx + vy) ? 'v' : 'h';
        }

        if (axis === 'h') {
            direction = velocity.x > 0 ? 'l' : 'r';
        }
        else {
            direction = velocity.y > 0 ? 't' : 'b';
        }
    }

    star.z = STAR_MIN_SCALE + Math.random() * (1 - STAR_MIN_SCALE);

    if (direction === 'z') {
        star.z = 0.1;
        star.x = Math.random() * width;
        star.y = Math.random() * height;
    }
    else if (direction === 'l') {
        star.x = -OVERFLOW_THRESHOLD;
        star.y = height * Math.random();
    }
    else if (direction === 'r') {
        star.x = width + OVERFLOW_THRESHOLD;
        star.y = height * Math.random();
    }
    else if (direction === 't') {
        star.x = width * Math.random();
        star.y = -OVERFLOW_THRESHOLD;
    }
    else if (direction === 'b') {
        star.x = width * Math.random();
        star.y = height + OVERFLOW_THRESHOLD;
    }

}

function resize() {

    scale = window.devicePixelRatio || 1;

    width = window.innerWidth * scale;
    height = window.innerHeight * scale;

    canvas.width = width;
    canvas.height = height;

    stars.forEach(placeStar);

}

function step() {

    context.clearRect(0, 0, width, height);

    update();
    render();

    requestAnimationFrame(step);

}

function update() {

    velocity.tx *= 0.96;
    velocity.ty *= 0.96;

    velocity.x += (velocity.tx - velocity.x) * 0.8;
    velocity.y += (velocity.ty - velocity.y) * 0.8;

    stars.forEach((star) => {

        star.x += velocity.x * star.z;
        star.y += velocity.y * star.z;

        star.x += (star.x - width / 2) * velocity.z * star.z;
        star.y += (star.y - height / 2) * velocity.z * star.z;
        star.z += velocity.z;

        // recycle when out of bounds
        if (star.x < -OVERFLOW_THRESHOLD || star.x > width + OVERFLOW_THRESHOLD || star.y < -OVERFLOW_THRESHOLD || star.y > height + OVERFLOW_THRESHOLD) {
            recycleStar(star);
        }

    });

}

function render() {

    stars.forEach((star) => {

        context.beginPath();
        context.lineCap = 'round';
        context.lineWidth = STAR_SIZE * star.z * scale;
        context.globalAlpha = 0.5 + 0.5 * Math.random();
        context.strokeStyle = STAR_COLOR;

        context.beginPath();
        context.moveTo(star.x, star.y);

        var tailX = velocity.x * 2,
            tailY = velocity.y * 2;

        // stroke() wont work on an invisible line
        if (Math.abs(tailX) < 0.1) tailX = 0.5;
        if (Math.abs(tailY) < 0.1) tailY = 0.5;

        context.lineTo(star.x + tailX, star.y + tailY);

        context.stroke();

    });

}

function movePointer(x, y) {

    if (typeof pointerX === 'number' && typeof pointerY === 'number') {

        let ox = x - pointerX,
            oy = y - pointerY;

        velocity.tx = velocity.tx + (ox / 8 * scale) * (touchInput ? 1 : -1);
        velocity.ty = velocity.ty + (oy / 8 * scale) * (touchInput ? 1 : -1);

    }

    pointerX = x;
    pointerY = y;

}

function onMouseMove(event) {

    touchInput = false;

    movePointer(event.clientX, event.clientY);

}

function onTouchMove(event) {

    touchInput = true;

    movePointer(event.touches[0].clientX, event.touches[0].clientY, true);

    event.preventDefault();

}

function onMouseLeave() {

    pointerX = null;
    pointerY = null;

}

var roundNumber;
var trackRounds = 0;
let compNames = ["Smith", "David", "John", "bonny", "Shivv"];
let compName = document.getElementById("computer-name");
let chosenCompName = compNames[Math.floor(Math.random() * 5)];
let player;

function login() {
    player = document.getElementById("player").value;
    roundNumber = document.getElementById("round-number").value;
    let startButton = document.getElementById("submit");
    let faq = document.getElementById("faq");

    if (/\w{2,10}/.test(player) == false || /\d/.test(roundNumber) == false) {
        alert(
            "Please enter a valid name of atleast 2 letters, don't forget the number of rounds."
        );
        return 0;
    } else if (roundNumber > 10 || roundNumber < 3) {
        alert("Please enter a round number between 3 and 10.");
        return 0;
    }

    startButton.value = "LET'S GO";
    startButton.style.background = "#5AC994";

    document.getElementById("computer-name").innerText = chosenCompName;
    document.getElementById("player-name").innerText = player;

    function closeWindow() {
        document.getElementById("player-login").style.display = "none";
        document.getElementById("game").style.display = "block";
    }

    setTimeout(() => closeWindow(), 790);
}

function faq() {
    document.getElementById("faq").style.display = "none";
    document.getElementById("player-login").style.display = "block";
}

//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
/*/////////////////--PLAYGROUND--//////////////// */
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

let trackCompScore = 0;
let trackPlayerScore = 0;

function chose(n) {
    let playerChoice = document.getElementById(n).innerText;
    let playerDisplay = document.getElementById("player-choice");
    let compDisplay = document.getElementById("comp-choice");
    let comments = document.getElementById("commentary");
    let compScore = document.getElementById("computer-score");
    let playerScore = document.getElementById("player-score");
    let controls = document.getElementsByClassName("controls");

    if (roundNumber == 0) {
        if (trackCompScore > trackPlayerScore) {
            document.getElementById("winner-name").innerText = chosenCompName;
        } else {
            document.getElementById("winner-name").innerText = player;
        }
        document.getElementById("player-wins").innerText = trackPlayerScore;
        document.getElementById("player-losses").innerText = trackCompScore;
        document.getElementById("computer-wins").innerText = trackCompScore;
        document.getElementById("computer-losses").innerText = trackPlayerScore;

        document.getElementById("final-computer-score").innerText =
            trackCompScore;
        document.getElementById("final-player-score").innerText =
            trackPlayerScore;
        document.getElementById("final-computer-name").innerText =
            chosenCompName;
        document.getElementById("final-player-name").innerText = player;
        document.getElementById("draws").innerText =
            trackRounds - (trackCompScore + trackPlayerScore);
        document.getElementById("results-section").style.display = "block";
        document.getElementById("game").style.display = "none";
        return 0;
    }
    roundNumber--;

    compDisplay.innerText = "🤜🏻";
    playerDisplay.innerText = "🤜🏻";
    playerDisplay.classList.add("handshaking");
    compDisplay.classList.add("handshaking-comp");
    for (control of controls) {
        control.style.display = "none";
    }

    function gameplay() {
        playerDisplay.classList.remove("handshaking");
        compDisplay.classList.remove("handshaking-comp");
        function computer() {
            let options = ["🖐🏻", "👊🏻", "✌"];
            playerDisplay.innerText = playerChoice;
            compDisplay.innerText = options[Math.floor(Math.random() * 3)];
        }
        computer();

        function modifyScore() {
            let choices = playerDisplay.innerText + compDisplay.innerText;
            trackRounds += 1;
            if (compDisplay.innerText == playerDisplay.innerText) {
                comments.innerText = "Draw❕❕😄";
                comments.classList.add("exclame");
            } else if (compDisplay.innerText !== playerDisplay.innerText) {
                comments.classList.add("exclame");
                switch (choices) {
                    case "👊🏻🖐🏻":
                        compScore.innerText = trackCompScore + 1;
                        trackCompScore += 1;
                        comments.innerText = "Lost❕❕😆";
                        break;
                    case "👊🏻✌":
                        playerScore.innerText = trackPlayerScore + 1;
                        trackPlayerScore += 1;
                        comments.innerText = "Won❕❕😒";
                        break;
                    case "🖐🏻✌":
                        compScore.innerText = trackCompScore + 1;
                        trackCompScore += 1;
                        comments.innerText = "Lost❕❕😝";
                        break;
                    case "🖐🏻👊🏻":
                        playerScore.innerText = trackPlayerScore + 1;
                        trackPlayerScore += 1;
                        comments.innerText = "Haaaa❕❕😲";
                        break;
                    case "✌🖐🏻":
                        playerScore.innerText = trackPlayerScore + 1;
                        trackPlayerScore += 1;
                        comments.innerText = "Hhmmm❕❕😑";
                        break;
                    case "✌👊🏻":
                        compScore.innerText = trackCompScore + 1;
                        trackCompScore += 1;
                        comments.innerText = "Woooo❕❕😝";
                        break;
                }
            }
        }
        modifyScore();
        setTimeout(() => comments.classList.remove("exclame"), 1000);

        for (control of controls) {
            control.style.display = "block";
        }
    }

    setTimeout(() => gameplay(), 2000);
}

