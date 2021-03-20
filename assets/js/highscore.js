function highscores() {
    var highscores = JSON.parse(window.localStorage.getItem("highscores")) || [];
    console.log("highscoreprint", highscores);
    highscores.sort(function (a, b) {
        return b.score - a.score;
    });

    highscores.forEach(function (score) {
       
        var listHighScore = document.createElement("li");
        listHighScore.textContent = score.initials + " - " + score.score;
  
        var oListEl = document.getElementById("highscores");
        oListEl.append(listHighScore);
    });
}

function clearHighScores() {
    window.localStorage.removeItem("highscores");
    window.location.reload();
}
function goBack() {
    window.location.href = "index.html";
    window.location.reload();
}

highscores();

document.getElementById("goBack").addEventListener("click", goBack)
document.getElementById("clearScoreBoard").addEventListener("click", clearHighScores)