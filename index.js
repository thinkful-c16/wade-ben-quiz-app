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
  'current question': '',
  // User's answer choice(s)
  'user answer choice(s)': [],
  // Current view
  'current view': '',
  // Score? Anything else?
  'answers correct': 0
};

function handleWelcomeView() {
  // listener for begin button to trigger rendering of first question
  $('#quiz-start-button').on('click', event => {
    let currentQuestionNumberIndex = 0;
    renderQuestionView(currentQuestionNumberIndex);
  });
}

// Template generators
// function generateAnswerList(answers) {}


// Rendering functions
function renderQuestionView(currentIndex) {
  // Definition of local variables for the purpose of accessing contents of QUIZDATA
  let displayedQuestionNumber = currentIndex;
  displayedQuestionNumber++;
  let currentQuestion = QUIZDATA[currentIndex];
  let question = currentQuestion.question;
  let answerOne = currentQuestion.answers[0];
  let answerTwo = currentQuestion.answers[1];
  let answerThree = currentQuestion.answers[2];

  // inserting Question Template into the DOM
  $('.container').html(
    `<div>
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
</div>`
  );
  handleAnswerSubmitted();
}

// Event handlers
function handleAnswerSubmitted() {
  $('.user-controls').on('click', '.input-button', () => {
    // Retrieve answer identifier of user-checked radio button
    let userAnswer = $('input[type=radio][name=answer]:checked').val();
    // Perform check: User answer === Correct Answer?

    // Update Store and render appropriate section  
  });
}

$(function main() {
  handleWelcomeView();
  handleAnswerSubmitted();
});