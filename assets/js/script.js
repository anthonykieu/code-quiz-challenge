var questions = [
    {
q: "",
o: "",
c: "",
}

];

var currentQuestion = 0

function startQuiz() {
    document.getElementById("quiz").style = "display: none";
    document.getElementById("quizQuestion").style = "display: block";
    showQuestion(currentQuestion)
}
function showQuestion(index) {

    var question = questions[index]
    
    document.getElementById("question").textContent = question.q
    document.getElementById("answer").innerHTML = ''
    for (let i = 0; i < question.b.length; i++) {
        var button = document.createElement("button")
        button.textContent = question.o[i]
        button.style.display = "block"
        button.addEventListener("click", function () {
            checkAnswer(i === question.c)
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