const questions = [
  {
    id: 1,
    question: 'What does HTML stand for?',
    possibleAnswers: {
      a: 'HyperLinks and Text Markup Language',
      b: 'Hyper Text Markup Language',
      c: 'Home Tool Markup Language',
      d: 'Help Translate Markdown Lang',
    },
    correctAnswer: 'b',
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
    possibleAnswers: {
      a: '<img alt="MyImage">image.gif</img>',
      b: '<img src="image.gif" alt="MyImage">',
      c: '<image src="image.gif" alt="MyImage">',
      d: '<img href="image.gif" alt="MyImage">',
    },
    correctAnswer: 'b',
  },
  {
    id: 4,
    question: 'What does HTML stand for?',
    possibleAnswers: {
      a: '<checkbox>',
      b: '<input type="checkbox">',
      c: '<check>',
      d: '<input type="check">',
    },
    correctAnswer: 'b',
  },
  {
    id: 5,
    question: 'Choose the correct HTML element to define important text',
    possibleAnswers: {
      a: '<strong>',
      b: '<i>',
      c: '<important>',
      d: '<b>',
    },
    correctAnswer: 'a',
  },
  {
    id: 6,
    question: 'Which HTML element defines the title of a document?',
    possibleAnswers: {
      a: '<head>',
      b: '<title>',
      c: '<meta>',
      d: '<link>',
    },
    correctAnswer: 'b',
  },
  {
    id: 7,
    question:
      'Which HTML attribute specifies an alternate text for an image, if the image cannot be displayed?',
    possibleAnswers: {
      a: 'title',
      b: 'src',
      c: 'alt',
      d: 'longdesc',
    },
    correctAnswer: 'c',
  },
  {
    id: 8,
    question: 'Which doctype is correct for HTML5?',
    possibleAnswers: {
      a: '<!DOCTYPE html>',
      b: '<!DOCTYPE HTML5>',
      c: '<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 5.0//EN" "http://www.w3.org/TR/html5/strict.dtd">',
      d: '<!doctype lang="en">',
    },
    correctAnswer: 'a',
  },
  {
    id: 9,
    question:
      'In HTML, which attribute is used to specify that an input field must be filled out?',
    possibleAnswers: {
      a: 'validate',
      b: 'required',
      c: 'formvalidate',
      d: 'placeholder',
    },
    correctAnswer: 'b',
  },
  {
    id: 10,
    question: 'Which input type defines a slider control?',
    possibleAnswers: {
      a: 'slider',
      b: 'controls',
      c: 'search',
      d: 'range',
    },
    correctAnswer: 'd',
  },
  {
    id: 11,
    question: 'Inside which HTML element do we put the JavaScript?',
    possibleAnswers: {
      a: '<scriping>',
      b: '<js>',
      c: '<javascript>',
      d: '<script>',
    },
    correctAnswer: 'd',
  },
  {
    id: 12,
    question:
      'What is the correct JavaScript syntax to change the content of the HTML element below?: \n <p id="demo">This is a demonstration.</p>',
    possibleAnswers: {
      a: 'document.getElementByName("p").innerHTML = "Hello World!";',
      b: '#demo.innerHTML = "Hello World!";',
      c: 'document.getElement("p").innerHTML = "Hello World!";',
      d: 'document.getElementById("demo").innerHTML = "Hello World!";',
    },
    correctAnswer: 'd',
  },
  {
    id: 13,
    question:
      'What is the correct syntax for referring to an external script called "xxx.js"?',
    possibleAnswers: {
      a: '<script name="xxx.js">',
      b: '<script href="xxx.js">',
      c: '<script src="xxx.js">',
      d: '<script alt="xxx.js">',
    },
    correctAnswer: 'c',
  },
  {
    id: 14,
    question: 'How do you write "Hello World" in an alert box?',
    possibleAnswers: {
      a: 'alert("Hello Wordl");',
      b: 'msgBox("Hello Wordl");',
      c: 'msg("Hello Wordl");',
      d: 'alertBox("Hello Wordl");',
    },
    correctAnswer: 'a',
  },
  {
    id: 15,
    question: 'How do you create a function in JavaScript?',
    possibleAnswers: {
      a: 'function = myFunction()',
      b: 'function:myFunction()',
      c: 'function myFunction()',
      d: 'new myFunction()',
    },
    correctAnswer: 'c',
  },
  {
    id: 16,
    question: 'How does a WHILE loop start?',
    possibleAnswers: {
      a: 'while i = 1 to 10',
      b: 'while (i <= 10; i++)',
      c: 'while(i <= 10)',
      d: 'while(let i = 0; i <= 10; i++)',
    },
    correctAnswer: 'c',
  },
];