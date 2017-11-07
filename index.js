'use strict';

// In-memory database of questions, answers, and correct answer

const QUIZDATA = [
  {
    question: 'Who is the supreme lord of the nine hells?',
    answers: ['Asmodeus', 'Mephistopholes', 'Richard Greenhill'],
    correctAnswer: 'Asmodeus'
  },
  {
    question: 'Question two text',
    answers: ['answer one', 'answer two', 'answer three'],
    correctAnswer: 'answer one'
  },
  {
    question: 'Question two text',
    answers: ['answer one', 'answer two', 'answer three'],
    correctAnswer: 'answer one'
  },
  {
    question: 'Question two text',
    answers: ['answer one', 'answer two', 'answer three'],
    correctAnswer: 'answer one'
  },
  {
    question: 'Question two text',
    answers: ['answer one', 'answer two', 'answer three'],
    correctAnswer: 'answer one'
  }
];

// Create your initial store
const STORE = {
  // Current Question
  'current question': 'None',
  // User's answer choice(s)
  'user answer choice(s)': 'None',
  // Current view
  'current view': 'Welcome to the quiz!',
  // Score? Anything else?
  'answer counter': 0,
  'answers correct': 0
};

// Template generators
function generateAnswerList(currentIndex) {
  // Definition of local variables for the purpose of accessing contents of QUIZDATA
  let displayedQuestionNumber = currentIndex;
  displayedQuestionNumber++;
  let currentQuestion = QUIZDATA[currentIndex];
  let question = currentQuestion.question;
  let answerOne = currentQuestion.answers[0];
  let answerTwo = currentQuestion.answers[1];
  let answerThree = currentQuestion.answers[2];

  // Updating STORE with relevant values
  STORE['current question'] = QUIZDATA[currentIndex];
  STORE['current view'] = `Question number ${displayedQuestionNumber}`;

  // Returning Question Template html
  return `<div>
  <h1>Infernal Plane Quiz</h1>
  <div class= 'questions-answered'>
      <p>Question ${displayedQuestionNumber}/5</p>
  </div>
  <form>
      <h3>${question}</h3>
      <div>
          <input type="radio" id="${answerOne}"
          name="answer" value="${answerOne}">
          <label for="${answerOne}">${answerOne}</label>
          <br>
          <input type="radio" id="${answerTwo}"
          name="answer" value="${answerTwo}">
          <label for="${answerTwo}">${answerTwo}</label>
          <br>
          <input type="radio" id="${answerThree}"
          name="answer" value="${answerThree}">
          <label for="${answerThree}">${answerThree}</label>
      </div>
      <div class="user-input">
          <button name= "submit-button" id= "answer-submit-button" class= "input-button" type= "submit" >Submit Answer</button>
      </div>
      <div class= "current-score">
          <p>Current score: 0/5</p>
      </div>
  </form>
</div>`;
}

function generateAnswerFeedback () {}

// Rendering functions
function renderQuestionView(currentIndex) {
//  Render the question view in the DOM
  const questionAnswer = generateAnswerList(currentIndex);
  $('.container').html(questionAnswer);
  handleAnswerSubmitted(STORE['current question']);
}

// Event handlers
function handleWelcomeView() {
  // listener for begin button to trigger rendering of first question
  $('#quiz-start-button').on('click', event => {
    // setting answer counter to 0 and calling render function for first question
    STORE['answer counter'] = 0;
    let currentQuestionNumberIndex = STORE['answer counter'];
    renderQuestionView(currentQuestionNumberIndex);
  });
}

function handleAnswerSubmitted(currentQuestion) {
  $('.user-input').on('click', '.input-button', event => {
    event.preventDefault();
    // Retrieve answer identifier of user-checked radio button
    let userAnswer = $('input[type=radio][name=answer]:checked').val();
    // Update STORE to reflect user answer
    STORE
    // Perform check: User answer === Correct Answer?
    if (userAnswer === currentQuestion.correctAnswer) {
      window.alert('Your answer is correct!');
      STORE['user answer choice(s)'].push(userAnswer);
      STORE['answers correct']++;
    }
    else {
      window.alert('You answer is incorrect!');
      STORE['user answer choice(s)'].push(userAnswer);
    }
    // Update Store and render appropriate section  
  });
}

function handleNextQuestion () {}

function handleQuizReset () {}

$(function main() {
  handleWelcomeView();
  handleAnswerSubmitted();
});