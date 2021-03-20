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
        a: 4
    },
    {
        q: "Consoling is a useful to for troubleshooting",
        b: ["true", "false"],
        a: 0
    },

];

var currentQuestion = 0

function startQuiz() {
    document.getElementById("quiz").style = "display: none";
    document.getElementById("quizQuestion").style = "display: block";
    document.getElementById("quizQuestionDiv").style = "display:block";
    showQuestion(currentQuestion)
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
        document.getElementById("response").textContent = "Correct"
    } else {
        document.getElementById("response").textContent = "Incorrect"
    }
    currentQuestion++

    document.getElementById("responseBlock").style = "display:block"

        ;

    if (currentQuestion < questions.length) {
        showQuestion(currentQuestion)

    } else {

        console.log("Quiz complete")
    }
};
document.getElementById("startBtn").addEventListener("click", startQuiz)