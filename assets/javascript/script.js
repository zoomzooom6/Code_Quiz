var timerE1 = document.getElementById('timer');
var srtBtn = document.getElementById('start');
var qDisp = document.getElementById('question-ask');
var a0Disp = document.getElementById('ans0');
var a1Disp = document.getElementById('ans1');
var a2Disp = document.getElementById('ans2');
var a3Disp = document.getElementById('ans3');
var guessResult = document.getElementById('guess-result');
var gameOver = document.getElementById('game-over');

var qArray = ["Question 1", "Question 2", "Question 3", "Question 4", "Question 5"]
var ansOp0 = ["Q1 Ans1", "Q2 Ans1", "Q3 Ans1", "Q4 Ans1", "Q5 Ans1"]
var ansOp1 = ["Q1 Ans2", "Q2 Ans2", "Q3 Ans2", "Q4 Ans2", "Q5 Ans2"]
var ansOp2 = ["Q1 Ans3", "Q2 Ans3", "Q3 Ans3", "Q4 Ans3", "Q5 Ans3"]
var ansOp3 = ["Q1 Ans4", "Q2 Ans4", "Q3 Ans4", "Q4 Ans4", "Q5 Ans4"]
var timeLeft = 60;

a0Disp.style.display = "none";
a1Disp.style.display = "none";
a2Disp.style.display = "none";
a3Disp.style.display = "none";

function countdown() {

    a0Disp.style.display = "";
    a1Disp.style.display = "";
    a2Disp.style.display = "";
    a3Disp.style.display = "";

    var timeInt = setInterval(function () {
        if (timeLeft > 0) {
            srtBtn.style.display = "none";
            gameOver.textContent = "";
            timerE1.textContent = "Timer: " + timeLeft;
            timeLeft--;
        } else {
            timerE1.textContent = "Time's up!";
            clearInterval(timeInt);
            gameOver.textContent = "Game Over!";
            srtBtn.textContent = "Retry";
            srtBtn.style.display = "";
            qDisp.style.display = "none";
            a0Disp.style.display = "none";
            a1Disp.style.display = "none";
            a2Disp.style.display = "none";
            a3Disp.style.display = "none";
        }
    }, 1000);
}

function displayQuiz() {
    var i = 0;
    qDisp.textContent = qArray[i];
    a0Disp.textContent = ansOp0[i];
    if (a0Disp.clicked === true) {
        console.log("a0 click detected");
        guessResult.textContent = "Correct!";
    } else if (a1Disp.clicked === true || a2Disp.clicked === true || a3Disp.clicked === true) {
        guessResult.textContent = "Wrong!";
    }
    a1Disp.textContent = ansOp1[i];
    a2Disp.textContent = ansOp2[i];
    a3Disp.textContent = ansOp3[i];
    i++;
}

srtBtn.addEventListener("click", countdown);
srtBtn.addEventListener("click", displayQuiz);
