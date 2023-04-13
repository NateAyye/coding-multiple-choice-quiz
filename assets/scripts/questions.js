// A collection of questions gathered from a couple different sources
// Mainly w3 schools HTML Quiz: https://www.w3schools.com/quiztest/quiztest.asp?qtest=HTML
// Mainly w3 schools JavaScript Quiz: https://www.w3schools.com/quiztest/quiztest.asp?qtest=JS

const questions = [
  {
    id: 1,
    question: 'What does HTML stand for?',
    possibleAnswers: [
      'HyperLinks and Text Markup Language',
      'Hyper Text Markup Language',
      'Home Tool Markup Language',
      'Help Translate Markdown Lang',
    ],
    correctAnswer: 'Hyper Text Markup Language',
  },
  {
    id: 2,
    question: 'Which of the following is NOT a Javascript Type',
    possibleAnswers: ['string', 'number', 'float', 'boolean'],
    correctAnswer: 'float',
  },
  {
    id: 3,
    question: 'What is the correct HTML for inserting an image?',
    possibleAnswers: [
      '<img alt="MyImage">image.gif</img>',
      '<img src="image.gif" alt="MyImage">',
      '<image src="image.gif" alt="MyImage">',
      '<img href="image.gif" alt="MyImage">',
    ],
    correctAnswer: '<img src="image.gif" alt="MyImage">',
  },
  {
    id: 4,
    question: 'What is the correct way to make a checkbox?',
    possibleAnswers: [
      '<checkbox>',
      '<input type="checkbox">',
      '<check>',
      '<input type="check">',
    ],
    correctAnswer: '<input type="checkbox">',
  },
  {
    id: 5,
    question: 'Choose the correct HTML element to define important text',
    possibleAnswers: ['<strong>', '<i>', '<important>', '<b>'],
    correctAnswer: '<strong>',
  },
  {
    id: 6,
    question: 'Which HTML element defines the title of a document?',
    possibleAnswers: ['<head>', '<title>', '<meta>', '<link>'],
    correctAnswer: '<title>',
  },
  {
    id: 7,
    question:
      'Which HTML attribute specifies an alternate text for an image, if the image cannot be displayed?',
    possibleAnswers: ['title', 'src', 'alt', 'longdesc'],
    correctAnswer: 'alt',
  },
  {
    id: 8,
    question: 'Which doctype is correct for HTML5?',
    possibleAnswers: [
      '<!DOCTYPE html>',
      '<!DOCTYPE HTML5>',
      '<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 5.0//EN" "http://www.w3.org/TR/html5/strict.dtd">',
      '<!doctype lang="en">',
    ],
    correctAnswer: '<!DOCTYPE html>',
  },
  {
    id: 9,
    question:
      'In HTML, which attribute is used to specify that an input field must be filled out?',
    possibleAnswers: ['validate', 'required', 'formvalidate', 'placeholder'],
    correctAnswer: 'required',
  },
  {
    id: 10,
    question: 'Which input type defines a slider control?',
    possibleAnswers: ['slider', 'controls', 'search', 'range'],
    correctAnswer: 'range',
  },
  {
    id: 11,
    question: 'Inside which HTML element do we put the JavaScript?',
    possibleAnswers: ['<scriping>', '<js>', '<javascript>', '<script>'],
    correctAnswer: '<script>',
  },
  {
    id: 12,
    question:
      'What is the correct JavaScript syntax to change the content of the HTML element below?: \n <p id="demo">This is a demonstration.</p>',
    possibleAnswers: [
      'document.getElementByName("p").innerHTML = "Hello World!";',
      '#demo.innerHTML = "Hello World!";',
      'document.getElement("p").innerHTML = "Hello World!";',
      'document.getElementById("demo").innerHTML = "Hello World!";',
    ],
    correctAnswer:
      'document.getElementById("demo").innerHTML = "Hello World!";',
  },
  {
    id: 13,
    question:
      'What is the correct syntax for referring to an external script called "xxx.js"?',
    possibleAnswers: [
      '<script name="xxx.js">',
      '<script href="xxx.js">',
      '<script src="xxx.js">',
      '<script alt="xxx.js">',
    ],
    correctAnswer: '<script src="xxx.js">',
  },
  {
    id: 14,
    question: 'How do you write "Hello World" in an alert box?',
    possibleAnswers: [
      'alert("Hello Wordl");',
      'msgBox("Hello Wordl");',
      'msg("Hello Wordl");',
      'alertBox("Hello Wordl");',
    ],
    correctAnswer: 'alert("Hello Wordl");',
  },
  {
    id: 15,
    question: 'How do you create a function in JavaScript?',
    possibleAnswers: [
      'function = myFunction()',
      'function:myFunction()',
      'function myFunction()',
      'new myFunction()',
    ],
    correctAnswer: 'function myFunction()',
  },
  {
    id: 16,
    question: 'How does a WHILE loop start?',
    possibleAnswers: [
      'while i = 1 to 10',
      'while (i <= 10; i++)',
      'while(i <= 10)',
      'while(let i = 0; i <= 10; i++)',
    ],
    correctAnswer: 'while(i <= 10)',
  },
];
