const timerEl = document.querySelector('#timer span');

const startSection = document.getElementById('start-page');
const startButton = document.getElementById('start-btn');

const questionSection = document.getElementById('question-page');
const questionTitle = document.getElementById('question-title');
const answerButtonsList = document.querySelector('#answer-btns ol');
const previousResult = document.getElementById('previous-result');
const previousResultSpan = document.querySelector('#previous-result span');

const scoreForm = document.getElementById('score-form');
const finalScoreSpan = document.querySelector('#final-score');
const initialsInput = document.getElementById('initials');
const scoreFormButton = document.getElementById('score-submit-btn');
const errorSpanEl = document.getElementById('error-span');

const MAX_TIME = 30;
const currentQuestions = getCurrentQuestions();

let userScore = 0;
let currentQuestion = 0;
let initials = '';
let previousAnswer = '';

const WRONG_COLOR = '#aa6d6db2';
const CORRECT_COLOR = '#6daa75b2';

function getCurrentQuestions() {
  let jumbledFixedQuestions = [];
  let usedQuestions = [];
  while (jumbledFixedQuestions.length < 10) {
    const randomQuestion =
      questions[Math.floor(Math.random() * questions.length)];
    if (usedQuestions.includes(randomQuestion.id)) {
      continue;
    }
    usedQuestions.push(randomQuestion.id);
    jumbledFixedQuestions.push(randomQuestion);
  }
  return jumbledFixedQuestions;
}

function saveScore() {
  const currentScores = JSON.parse(localStorage.getItem('highscores'));

  if (initials.trim() === '') {
    errorSpanEl.innerText = 'Initials must have a Value';
    return;
  }
  const newScore = {
    id: currentScores ? currentScores[currentScores.length - 1].id + 1 : 1,
    initials,
    score: userScore,
  };

  const newScores = currentScores ? [...currentScores, newScore] : [newScore];
  localStorage.setItem('highscores', JSON.stringify(newScores));
}

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
    if (timerEl.innerHTML === '0') {
      clearTimeout(timerId);
      displayScoreForm();
    }
  }, 1000);
}

function displayResult(answer, question, currentScore) {
  previousResult.style.display = 'block';
  if (answer === question.correctAnswer) {
    userScore += currentScore;
    previousResultSpan.innerText = 'Correct';
    previousResultSpan.style.color = CORRECT_COLOR;
  } else {
    previousResultSpan.innerText = 'Wrong';
    previousResultSpan.style.color = WRONG_COLOR;
  }

  setTimeout(() => {
    previousResult.style.display = 'none';
  }, 1500);
}

function displayQuestion() {
  answerButtonsList.innerHTML = '';
  let currentScore = 10;
  const question = currentQuestions[currentQuestion];

  questionTitle.innerText = question.question;

  let intervalId = setInterval(() => {
    currentScore--;
    if (currentScore <= 0) {
      clearInterval(intervalId);
    }
  }, 1000);

  question.possibleAnswers.forEach((answer) => {
    const li = document.createElement('li');
    const button = document.createElement('button');
    button.innerText = answer;
    button.addEventListener('click', (e) => {
      currentQuestion++;
      clearInterval(intervalId);
      displayResult(answer, question, currentScore);
      if (currentQuestion >= 10) return displayScoreForm();
      displayQuestion();
    });
    li.append(button);
    answerButtonsList.append(li);
  });
}

// Start Quiz by hidding the start-page section and unhidding the question-page
// And Start the timer counting down from our MAX_TIME Constant
function startQuiz() {
  if (questionSection.style.display !== 'flex') {
    startSection.style.display = 'none';
    questionSection.style.display = 'flex';
  }

  startTimer();

  displayQuestion();
}

function handleScoreSubmision(e) {
  e.preventDefault();
  // Handle Saving the Initials and score to localStorage

  saveScore();
  location.replace('./highscores.html');
}

function init() {
  startButton.addEventListener('click', startQuiz);
  scoreFormButton.addEventListener('click', handleScoreSubmision);
  initialsInput.addEventListener('input', (e) => {
    initials = e.target.value;
  });
}

document.addEventListener('DOMContentLoaded', init);
