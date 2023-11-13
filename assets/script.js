let operand1 = 3;
$('#operand1').html(operand1);
var operand2 = Math.floor(Math.random() * (12 - 0 + 1) + 0);
$('#operand2').html(operand2);

function calculateAnswer() {
    let correctAnswer = operand1 * operand2;
    return correctAnswer;
};

function checkAnswer(correctAnswer) {

    var userAnswer = $('#answer-box').val();
    correctAnswer =
        calculateAnswer();
    if (correctAnswer == userAnswer) {
        console.log("YES");
    } else {
        console.log("NO");
    };
};

function increaseScore() {
    let oldScore = parseInt(document.getElementById("score").innerText);
    document.getElementById("score").innerText = ++oldScore;
    var userAnswer = $('#answer-box').val();
    correctAnswer =
        calculateAnswer();
    if (userAnswer != correctAnswer) {
        document.getElementById("score").innerText = --oldScore;
    };
};

function newQuestion() {
    $('#answer-box').val("");
    let operand1 = 3;
    $('#operand1').html(operand1);
    var operand2 = Math.floor(Math.random() * (12 - 0 + 1) + 0);
    $('#operand2').html(operand2);
};

$("#myButton").on("click", function () {
    calculateAnswer();
    checkAnswer();
    increaseScore();
    newQuestion();
});
