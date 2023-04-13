// Element Selectors
const timerEl = document.querySelector('#timer span');

// Starting Section
const startSection = document.getElementById('start-page');
const startButton = document.getElementById('start-btn');

// Questions Section
const questionSection = document.getElementById('question-page');
const questionTitle = document.getElementById('question-title');
const answerButtonsList = document.querySelector('#answer-btns ol');
const previousResult = document.getElementById('previous-result');
const previousResultSpan = document.querySelector('#previous-result span');

// Score Initials Form
const scoreForm = document.getElementById('score-form');
const finalScoreSpan = document.querySelector('#final-score');
const initialsInput = document.getElementById('initials');
const scoreFormButton = document.getElementById('score-submit-btn');
const errorSpanEl = document.getElementById('error-span');

// Constant Variables
const MAX_TIME = 90;
const currentQuestions = getCurrentQuestions();
const WRONG_COLOR = '#aa6d6db2';
const CORRECT_COLOR = '#6daa75b2';

// Progran data
let userScore = 0;
let currentQuestion = 0;
let initials = '';
let previousAnswer = '';

// A function that will jumble up the questions and pick 10 random questions (Non-repeating)
// for the current quiz. so that it isn't the same every time
function getCurrentQuestions() {
  // Initializing some starter variables that we will be returning/using.
  let jumbledFixedQuestions = [];
  let usedQuestions = [];
  // A while loop that will add a Question to the jumbled question array only if it is not already in their.
  // and I want that to go until i have 10 questions
  while (jumbledFixedQuestions.length < 10) {
    //Grab random questions from my questions array (defined in the questions.js file)
    const randomQuestion =
      questions[Math.floor(Math.random() * questions.length)];
    // Then I check if the randomQuestion is already been picked. \
    // If it has then just rerun the loop but if it hasn't been picked then just push it to the array.
    if (usedQuestions.includes(randomQuestion.id)) {
      continue;
    }
    usedQuestions.push(randomQuestion.id);
    jumbledFixedQuestions.push(randomQuestion);
  }
  return jumbledFixedQuestions;
}

// Function that I abstracted in order to save the score of the current user where ever I may need it
function saveScore() {
  // Grab the scores from the localStorage and parse it back to an object
  const data = localStorage.getItem('highscores');
  let scores = [];
  if (data) scores = JSON.parse(data);

  // Checking if they entered any Value into the initials input and if it is blank I will display the
  // Initials must have a Value right below the input for the initials
  if (initials.trim() === '') {
    errorSpanEl.innerText = 'Initials must have a Value';
    return;
  }

  // Now we know that the initials are their so we will create a new Score based of the user and current score
  // Here we set the id to either the id of the last user + 1 of if their is no data thier then set the id to one
  const newScore = {
    id: data ? scores[scores.length - 1].id + 1 : 1,
    initials,
    score: userScore,
  };
  // Now we will set the newScores to either the oldScores + the new one Or just the old one depending if we have data already.
  const newScores = scores ? [...scores, newScore] : [newScore];
  localStorage.setItem('highscores', JSON.stringify(newScores));
}

// This function is going to hide the question-page and then display the score submit form
function displayScoreForm() {
  finalScoreSpan.innerText = userScore;
  questionSection.style.display = 'none';
  scoreForm.style.display = 'flex';
}

// Start the timer counting down with a setInterval and update the timerEl innerHTML
// Until it reaches 0 then we are going to bring them to the score submit page
function startTimer() {
  timerEl.innerHTML = MAX_TIME;
  const timerId = setInterval(() => {
    timerEl.innerHTML -= 1;
    if (Number.parseInt(timerEl.innerHTML) <= 0) {
      clearTimeout(timerId);
      displayScoreForm();
    }
  }, 1000);
}

// Once an Answer is clicked than this function will take over and display wether you got the previous answer correct
function displayResult(answer, question, currentScore) {
  // Showing the previousResult Element
  previousResult.style.display = 'block';
  //Then checking if the correct answer was clicked if so change the text to Correct and color to green
  if (answer === question.correctAnswer) {
    userScore += currentScore;
    previousResultSpan.innerText = 'Correct';
    previousResultSpan.style.color = CORRECT_COLOR;
  } else {
    //Then checking if the wrong answer was clicked if so change the text to Wrong and color to red
    timerEl.innerHTML -= 3;
    previousResultSpan.innerText = 'Wrong';
    previousResultSpan.style.color = WRONG_COLOR;
  }

  // Setting a timeout for 1.5s so that it changes the prevResult element back to invisible
  setTimeout(() => {
    previousResult.style.display = 'none';
  }, 1500);
}

// Function for handling displaying the correct/current question
function displayQuestion() {
  //Reset the UL for the buttons to empty
  answerButtonsList.innerHTML = '';
  // Set a score for each question and subtract points based of time taken and wrong answers
  let currentScore = 10;
  const question = currentQuestions[currentQuestion];

  questionTitle.innerText = question.question;
  // Another Interval but this one will subtract 1 point from the score for each second that you take on the current question
  let intervalId = setInterval(() => {
    currentScore--;
    if (currentScore <= 0) {
      clearInterval(intervalId);
    }
  }, 1000);

  // Looping over the possibleAnswers for the currentQuestion and creating a list item element and styling it and adding the button within it
  // That has the event listener that will add 1 to the currentQuestion indexer defined at the top and then
  // Its going to clear the interval set for the score per question. after that I only want to display the next question
  // if we are not at the last question. so I check if the currentQuestion(indexer) has reached our questions length which in this quiz is hardcoded to 10

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

//Function that handles the initialization of the quiz and event listeners
function init() {
  startButton.addEventListener('click', startQuiz);
  scoreFormButton.addEventListener('click', handleScoreSubmision);
  initialsInput.addEventListener('input', (e) => {
    initials = e.target.value;
  });
}

document.addEventListener('DOMContentLoaded', init);
