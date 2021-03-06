var timerE1 = document.getElementById('timer');
var srtBtn = document.getElementById('start');
var qDisp = document.getElementById('question-ask');
var iDisp = document.getElementById('intro');
var a0Disp = document.getElementById('ans0');
var a1Disp = document.getElementById('ans1');
var a2Disp = document.getElementById('ans2');
var a3Disp = document.getElementById('ans3');
var guessResult = document.getElementById('guess-result');
var gameOver = document.getElementById('game-over');
var highScores = document.getElementById('highScore');
var enterInitials = document.getElementById('initials');
var saveScore = document.getElementById('save-initials');
var clearScore = document.getElementById('clear-high-score');
var histScore = document.getElementById('high-score');
var highScore = [];

var qArray = [
    "Commonly used data types do NOT include: ",
    "Which tag is the correct element for calling JavaScript?",
    "How do you find the number with the highest value of x and y?",
    "What event occurs when a user clicks on an HTML element?",
    "How do you make a numbered list?"]
var ansOp0 = [
    "1. Boolean",
    "1. <js>",
    "1. Math.ceil(x, y)",
    "1. onmouseover",
    "1. <dl>"]
var ansOp1 = [
    "2. String",
    "2. <script>",
    "2. upper(x, y)",
    "2. onchange",
    "2. <list>"]
var ansOp2 = [
    "3. Alerts",
    "3. <javascript>",
    "3. Math.max(x, y)",
    "3. onmouseclick",
    "3. <ul>"]
var ansOp3 = [
    "4. Numbers",
    "4. <scripts>",
    "4. ceil(x, y)",
    "4. onclick",
    "4. <ol>"]
var timeLeft = 60;
var i = 0;
var score = 0;

qDisp.textContent = "Coding Quiz Challenge"
iDisp.textContent = "Welcome to the coding challenge! \r\n";
iDisp.textContent += "Test your knowledge with these questions, but be warned, you will lose 10 seconds for every wrong answer. \r\n";
iDisp.textContent += "Click the Start to begin!";
hideScore();
hideQuiz();

function countdown() {

    resetGame();
    showQuiz();
    hideScore();
    srtBtn.style.display = "none";
    gameOver.textContent = "";
    guessResult.textContent = "";

    var timeInt = setInterval(function () {
        if (timeLeft > 0) {
            timerE1.textContent = "Timer: " + timeLeft;
            timeLeft--;
        } else {
            timerE1.textContent = "Time's up!";
            clearInterval(timeInt);
            gameOver.textContent = "Game Over!";
            endGame();
            qDisp.textContent = "Score: " + score;
            srtBtn.textContent = "Retry";
            srtBtn.style.display = "";
            showScore();
            hideQuiz();
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

function hideQuiz() {
    a0Disp.style.display = "none";
    a1Disp.style.display = "none";
    a2Disp.style.display = "none";
    a3Disp.style.display = "none";
}

function showQuiz() {
    qDisp.style.display = "";
    iDisp.textContent = "";
    a0Disp.style.display = "";
    a1Disp.style.display = "";
    a2Disp.style.display = "";
    a3Disp.style.display = "";
}

function hideScore() {
    enterInitials.style.display = "none";
    saveScore.style.display = "none";
    clearScore.style.display = "none";
}

function showScore() {
    enterInitials.style.display = "";
    saveScore.style.display = "";
    clearScore.style.display = "";
}

function resetGame() {
    i = 0;
    timeLeft = 60;
    score = 0;
}

function endGame() {
    if (score > highScore[1]) {
        showScore();
        guessResult.textContent = "Congratulations! You set a new high score!";
    } else {
        hideScore();
        guessResult.textContent = "Sorry, you did not beat the high score.";
    }
    return; 
}

var saveScores = function() {
    localStorage.setItem("highScore", JSON.stringify(highScore));
}

var loadScores = function() {
    var savedScores = localStorage.getItem("highScore");

    if (savedScores === null) {
        return false;
    }

    savedScores = JSON.parse(savedScores);

    for (var i = 0; i < highScore.length; i++) {
        highScore.push(savedScores[i]);
    }
}

srtBtn.addEventListener("click", countdown);
srtBtn.addEventListener("click", displayQuiz);
highScores.addEventListener("click", function () {
    var scoreDisp = "";

    for (var i = 0; i < highScore.length; i++) {
        scoreDisp.concat(highScore[i].toString());
    }

    histScore.textContent = scoreDisp;
});

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
            score = timeLeft;
            timeLeft = 0;
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
            score = timeLeft;
            timeLeft = 0;
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
            score = timeLeft;
            timeLeft = 0;
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
            score = timeLeft;
            timeLeft = 0;
            break;
    }
});

saveScore.addEventListener("click", function() {
    highScore.pop();
    highScore.pop();
    highScore.push(enterInitials.value, score);
    saveScores();
});

clearScore.addEventListener("click", function() {
    localStorage.clear();
});

loadScores();