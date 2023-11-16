/* Moving from Start pages*/

$('.start-button').on('click', function () {
    window.location.href = 'rules.html';
});

$('.start-button1').on('click', function () {
    window.location.href = 'game.html';
});

const num1 = 3;
var num2 = Math.floor(Math.random() * (12 - 0 + 1) + 0);
$('.num1').html(num1);
$('.num2').html(num2);
const correctAnswer = num1 * num2;
console.log(correctAnswer);






