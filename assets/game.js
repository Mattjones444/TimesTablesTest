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

function generateRandomIndex() {
    var randomIndex = Math.floor(Math.random() * myQuestions.length);
    return randomIndex;
};

function populateQuestionDescription(question) {
    $(".question-box").text(question.question);
};

function populateAnswerOptions(question) {
    var answerWrapper = $("#answer-wrapper");
    console.log(answerWrapper);
    answerWrapper.empty();
    for (var key in question.answers) {
        var answerText = question.answers[key];
        console.log(answerText);
        answerWrapper.append(
            `<button class="answer-option" data-answer="${key}">${answerText}</button>`
        );
    };
};

function generateNewQuestion() {
    randomIndex = generateRandomIndex();
    populateQuestionDescription(myQuestions[randomIndex]);
    populateAnswerOptions(myQuestions[randomIndex]);
};

function init() {
    generateNewQuestion();
};

init();
