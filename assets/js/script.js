

var questions = [
    {
        q: "Javascript is used to style the application",
        b: ["true", "false"],
        a: 1
    },
    {
        q: "CSS is used to style the application",
        b: ["true", "false"],
        a: 0
    },
    {
        q: "Arrays can contain:",
        b: ["strings", "objects", "arrays", "numbers", "all of the above"],
        a: 4
    },
    {
        q: "Which is not a common data type:",
        b: ["wigets", "numbers", "strings", "booleans"],
        a: 0
    },
    {
        q: "Consoling is a useful to for troubleshooting",
        b: ["true", "false"],
        a: 0
    },

];

var currentQuestion = 0
var timeRemaining = 0
var startClockAt = 20
var score = 0
var countdown
var displayResults



function startQuiz() {
    document.getElementById("quiz").style = "display: none";
    document.getElementById("quizQuestion").style = "display: block";
    document.getElementById("quizQuestionDiv").style = "display:block";
    showQuestion(currentQuestion)
    startCountdown()
}
function showQuestion(index) {

    var question = questions[index]

    document.getElementById("question").textContent = question.q
    document.getElementById("answer").innerHTML = ''
    for (let i = 0; i < question.b.length; i++) {
        var button = document.createElement("button")
        button.textContent = question.b[i]
        button.style.display = "block"
        button.addEventListener("click", function () {
            checkAnswer(i === question.a)
        })
        document.getElementById("answer").appendChild(button)
    }

}

function checkAnswer(correct) {

    if (correct) {
        score = score + 10
        document.getElementById("response").textContent = "Correct"
    } else {
        setTimeRemaining(timeRemaining - 10)
        document.getElementById("response").textContent = "Incorrect"
    }
    currentQuestion++

    document.getElementById("responseBlock").style = "display:block"

    clearTimeout(displayResults)
    displayResults = setTimeout(function () {
        document.getElementById("quizQuestion").style = ""
    }, 6000);


    if (currentQuestion < questions.length) {
        showQuestion(currentQuestion)

    } else {

        console.log("Quiz complete")
    }
};

function setTimeRemaining(seconds) {

    timeRemaining = Math.max(seconds, 0)
    document.getElementById("time").textContent = timeRemaining
}

function startCountdown() {
    setTimeRemaining(startClockAt)
    countdown = setInterval(function () {
        setTimeRemaining(timeRemaining - 1)
        if (timeRemaining <= 0) {
            results()
        }
    }, 1000)
}

function results() {
    clearInterval(countdown)
    console.log("resultscore", score)
    score = score + timeRemaining
    document.getElementById("yourScore").style = "display: inline";
    document.getElementById("score").textContent = score
}

function saveScore(event) {
    console.log("test", score)
    event.preventDefault();
    var initials = document.getElementById("inputInitials").value;
    console.log("initials", initials);

    if (initials !== "") {
       
        var highscores = JSON.parse(window.localStorage.getItem("highscores")) || [];
        console.log("savehighscore", highscores);
        var newScore = {
            score: score,
            initials: initials
        };

        highscores.push(newScore);
        window.localStorage.setItem("highscores", JSON.stringify(highscores));
        window.location.href = "highscore.html";
    }
}
document.getElementById("startBtn").addEventListener("click", startQuiz)
document.getElementById("yourScoreBtn").addEventListener("click", saveScore)
