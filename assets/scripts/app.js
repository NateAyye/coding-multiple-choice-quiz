const timerEl = document.querySelector('#timer span');

const startSection = document.getElementById('start-page');
const startButton = document.getElementById('start-btn');

const questionSection = document.getElementById('question-page');
const answerButtons = document.querySelectorAll('.answer');
const previousResult = document.getElementById('previous-result');
const previousResultSpan = document.querySelector('#previous-result span');

const scoreForm = document.getElementById('score-form');
const finalScoreSpan = document.querySelector('#final-score');
const initialsInput = document.getElementById('initials');
const scoreFormButton = document.getElementById('score-submit-btn');

const MAX_TIME = 5;

// This function is going to hide the question-page and then display the score submit form
function displayScoreForm() {
  questionSection.style.display = 'none';
  scoreForm.style.display = 'flex';
}

// Start the timer counting down with a setInterval and update the timerEl innerHTML
// Until it reaches 0 then we are going to bring them to the score submit page
function startTimer() {
  timerEl.innerHTML = MAX_TIME;
  const timerId = setInterval(() => {
    timerEl.innerHTML -= 1;
    console.log(timerEl.innerHTML);
    if (timerEl.innerHTML === '0') {
      clearTimeout(timerId);
      displayScoreForm();
    }
  }, 1000);
}

// Start Quiz by hidding the start-page section and unhidding the question-page
// And Start the timer counting down from our MAX_TIME Constant
function startQuiz() {
  startSection.style.display = 'none';
  questionSection.style.display = 'flex';
  startTimer();
}

function init() {
  startButton.addEventListener('click', startQuiz);
}

document.addEventListener('DOMContentLoaded', init);
