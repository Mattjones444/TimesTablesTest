/* Moving from Start pages*/

$(".start-button").on("click", function () {
    window.location.href = "rules.html";
});

$(".start-button1").on("click", function () {
    window.location.href = "game.html";
});

/* Array of Questions */

const myQuestions = [
    {
        question: "3 x 3",
        answers: {
            a: "3",
            b: "9",
            c: "12",
            d: "36",
        },
        correctAnswer: "b",
    },
    {
        question: "3 x 6",
        answers: {
            a: "18",
            b: "12",
            c: "30",
            d: "10",
        },
        correctAnswer: "a",
    },
    {
        question: "3 x 9",
        answers: {
            a: "18",
            b: "3",
            c: "33",
            d: "27",
        },
        correctAnswer: "d",
    },
];

function generateRandomQuestion() {
    var randomIndex = Math.floor(Math.random() * myQuestions.length);
    var randomQuestion = myQuestions[randomIndex];
    console.log(`index = ${randomIndex}, q = ${randomQuestion}`);
    $(".question-box").text(randomQuestion.question);
};

function populateAnswerOptions(question) {
    var answerWrapper = $("#answer-wrapper");
    answerWrapper.empty();
    for (var key in question.answers) {
        var answerText = question.answers[key];
        console.log(answerText);
        answerWrapper.append(
            `<button class="answer-option" data-answer="${key}">${answerText}</button>`
        );
    };
};

generateRandomQuestion();
populateAnswerOptions(randomQuestion);

/* On submit Generate new question
$("#submit").on("click", function () {
    generateRandomQuestion();
});*/
