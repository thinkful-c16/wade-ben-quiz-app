'use strict';

// In-memory database of questions, answers, and correct answer

const QUESTIONS = [
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
  // Current Question Index
  currentQuestion: 0,
  // Current Question counter
  currentCounter: 1,
  // User's answer choice(s)
  userAnswer: '',
  // Current view
  // Score? Anything else?
  score: 0,
};

function handleUserInputs() {
  // listener for begin button to trigger rendering of first question
  $('#quiz-start-button').on('click', event => {
    renderQuestionView();
  });
  // listener for answer submit button
  $('.container').on('click', '#answer-submit-button', event => {
    event.preventDefault();
    // updates userAnswer in store to reflect user answer selection
    STORE.userAnswer = $( 'input[type=radio][name=answer]:checked' ).val();
    // Perform check to determine if user answer is correct
    if (STORE.userAnswer === QUESTIONS[STORE.currentQuestion].correctAnswer) {
      STORE.score++;
    }
    renderAnswerFeedback();
  });
}

// Template generators
function generateAnswerView() {
  let questionIndex = STORE.currentQuestion;  //********** change all keys to camelCasing (no spaces) */
  let answers = QUESTIONS[questionIndex].answers;

  
  return `<div>
      <h1>Infernal Plane Quiz</h1>
      <div class= 'questions-answered'>
          <p>Question ${STORE.currentCounter}/5</p>
      </div>
      <form>
          <h3>${QUESTIONS[STORE.currentQuestion].question}</h3>
          <div>
              <input type="radio" id="${answers[0]}"
              name="answer" value="${answers[0]}">
              <label for="${answers[0]}">${answers[0]}</label>
              <br>
              <input type="radio" id="${answers[1]}"
              name="answer" value="${answers[1]}">
              <label for="${answers[1]}">${answers[1]}</label>
              <br>
              <input type="radio" id="${answers[2]}"
              name="answer" value="${answers[2]}">
              <label for="${answers[2]}">${answers[2]}</label>
          </div>
          <div class="user-input">
              <button name= "submit-button" id= "answer-submit-button" class= "input-button" type= "submit" >Submit Answer</button>
          </div>
          <div class= "current-score">
              <p>Current score: ${STORE.score}/5</p>
          </div>
      </form>
    </div>`
  ;
}
// function generateAnswerList(answers) {}


// Rendering functions
function renderQuestionView() {
  // Definition of local variables for the purpose of accessing contents of QUESTIONS
  let questionAnswers = generateAnswerView();
  // inserting Question Template into the DOM
$('.container').html(questionAnswers);
}

function renderAnswerFeedback() {}

// Event handlers
function handleAnswerSubmitted() {
  $('.user-controls').on('click', '.input-button', () => {
    // Retrieve answer identifier of user-checked radio button
    // Perform check: User answer === Correct Answer?
    // Update Store and render appropriate section  
  });
}

$(function main() {
  handleUserInputs();
  handleAnswerSubmitted();
});