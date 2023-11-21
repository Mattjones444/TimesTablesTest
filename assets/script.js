/* Moving from Start pages*/

$('.start-button').on('click', function () {
    window.location.href = 'rules.html';
});

$('.start-button1').on('click', function () {
    window.location.href = 'game.html';
});

/* New Question on page load

const num1 = 3;
var num2 = Math.floor(Math.random() * (12 - 0 + 1) + 0);
$('.num1').html(num1);
$('.num2').html(num2);
const correctAnswer = num1 * num2;

function newQuestion() {
   var answerNumber1 = correctAnswer;
   var answerNumber2 = Math.floor(Math.random() * 37);
   var answerNumber3 = Math.floor(Math.random() * 37);
   var answerNumber4 = Math.floor(Math.random() * 37);
   $('.button1').html(answerNumber1);
   $('.button2').html(answerNumber2);
   $('.button3').html(answerNumber3);
   $('.button4').html(answerNumber4);
};

newQuestion();*/

const myQuestions = [
    {
        question1: "3 x 3",
        answers: {
            a: '3',
            b: '9',
            c: '12',
            d: '36'
        },
        correctAnswer: 'b'
    },
    {
        question2: "What is 3 x 6",
        answers: {
            a: '18',
            b: '12',
            c: '30',
            d: '10'
        },
        correctAnswer: 'a'
    },
    {
        question3: "What is 3 x 9",
        answers: {
            a: '18',
            b: '3',
            c: '33',
            d: '27'
        },
        correctAnswer: 'd'
    }
];

function generateQuestion() {
    var randomIndex = Math.floor(Math.random() * myQuestions.length);
    var selectedQuestion = myQuestions[randomIndex];

    var questionContainer = $('.question-box');
    questionContainer.html(selectedQuestion.question);
    console.log(selectedQuestion.question);
};


generateQuestion();






