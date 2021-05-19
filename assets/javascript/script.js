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
var i = 0;

a0Disp.style.display = "none";
a1Disp.style.display = "none";
a2Disp.style.display = "none";
a3Disp.style.display = "none";

function countdown() {

    i = 0;
    timeLeft = 60;
    qDisp.style.display = "";
    a0Disp.style.display = "";
    a1Disp.style.display = "";
    a2Disp.style.display = "";
    a3Disp.style.display = "";
    srtBtn.style.display = "none";
    gameOver.textContent = "";

    var timeInt = setInterval(function () {
        if (timeLeft > 0) {
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
    qDisp.textContent = qArray[i];
    a0Disp.textContent = ansOp0[i];
    a1Disp.textContent = ansOp1[i];
    a2Disp.textContent = ansOp2[i];
    a3Disp.textContent = ansOp3[i];
}

srtBtn.addEventListener("click", countdown);
srtBtn.addEventListener("click", displayQuiz);

a0Disp.addEventListener("click", function () {
    switch (i) {
        case 0: guessResult.textContent = "Correct!";
            i++;
            displayQuiz();
            break;
        case 1: guessResult.textContent = "Wrong!";
            i++;
            displayQuiz();
            timeLeft = timeLeft - 10;
            break;
        case 2: guessResult.textContent = "Wrong!";
            i++;
            displayQuiz();
            timeLeft = timeLeft - 10;
            break;
        case 3: guessResult.textContent = "Wrong!";
            i++;
            displayQuiz();
            timeLeft = timeLeft - 10;
            break;
        case 4: guessResult.textContent = "Wrong!";
            timeLeft = 0;
            displayQuiz();
            guessResult.textContent = "";
            break;
    }
});

a1Disp.addEventListener("click", function () {
    switch (i) {
        case 0: guessResult.textContent = "Wrong!";
            i++;
            displayQuiz();
            timeLeft = timeLeft - 10;
            break;
        case 1: guessResult.textContent = "Correct!";
            i++;
            displayQuiz();
            break;
        case 2: guessResult.textContent = "Wrong!";
            i++;
            displayQuiz();
            timeLeft = timeLeft - 10;
            break;
        case 3: guessResult.textContent = "Wrong!";
            i++;
            displayQuiz();
            timeLeft = timeLeft - 10;
            break;
        case 4: guessResult.textContent = "Wrong!";
            timeLeft = 0;
            displayQuiz();
            guessResult.textContent = "";
            break;
    }
});

a2Disp.addEventListener("click", function () {
    switch (i) {
        case 0: guessResult.textContent = "Wrong!";
            i++;
            displayQuiz();
            timeLeft = timeLeft - 10;
            break;
        case 1: guessResult.textContent = "Wrong!";
            i++;
            displayQuiz();
            timeLeft = timeLeft - 10;
            break;
        case 2: guessResult.textContent = "Correct!";
            i++;
            displayQuiz();
            break;
        case 3: guessResult.textContent = "Wrong!";
            i++;
            displayQuiz();
            timeLeft = timeLeft - 10;
            break;
        case 4: guessResult.textContent = "Wrong!";
            timeLeft = 0;
            displayQuiz();
            guessResult.textContent = "";
            break;
    }
});

a3Disp.addEventListener("click", function () {
    switch (i) {
        case 0: guessResult.textContent = "Wrong!";
            i++;
            displayQuiz();
            timeLeft = timeLeft - 10;
            break;
        case 1: guessResult.textContent = "Wrong!";
            i++;
            displayQuiz();
            timeLeft = timeLeft - 10;
            break;
        case 2: guessResult.textContent = "Wrong!";
            i++;
            displayQuiz();
            timeLeft = timeLeft - 10;
            break;
        case 3: guessResult.textContent = "Correct!";
            i++;
            displayQuiz();
            break;
        case 4: guessResult.textContent = "Correct!";
            timeLeft = 0;
            displayQuiz();
            guessResult.textContent = "";
            break;
    }
});