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
    question: 'Question three text',
    answers: ['answer one', 'answer two', 'answer three'],
    correctAnswer: 'answer one'
  },
  {
    question: 'Question four text',
    answers: ['answer one', 'answer two', 'answer three'],
    correctAnswer: 'answer one'
  },
  {
    question: 'Question five text',
    answers: ['answer one', 'answer two', 'answer three'],
    correctAnswer: 'answer one'
  }
];

// Create your initial store
const STORE = {
  // Current Question
   'current_question': 0,
  // User's answer choice(s)
  // Current view
  // Score? Anything else?

};

//*************************************************/
//*********    Combined even handlers   ***********/
//*************************************************/
function handleWelcomeView() {
  // listener for begin button to trigger rendering of first question
  $('#quiz-start-button').on('click', event => {
    STORE.current_question;
    renderQuestionView(); //Should call renderer, no parameter
  });
  $('.container').on('click', '#answer-submit-button', event => {
    STORE.current_question++;
    renderQuestionView();
  })
}
//*************************************************/
//*********    Combined even handlers   ***********/
//*************************************************/

// Template generators
// function generateAnswerList(answers) {}


// Rendering functions
function renderQuestionView() { //removed currentIndex parameter from function
  // Definition of local variables for the purpose of accessing contents of QUIZDATA
  let displayedQuestionNumber = STORE.current_question; //updated***
  displayedQuestionNumber++;
  let currentQuestion = QUIZDATA[STORE.current_question]; //Updated***
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
    // Perform check: User answer === Correct Answer?
    // Update Store and render appropriate section  
  });
}

$(function main() {
  handleWelcomeView();
  handleAnswerSubmitted();
});