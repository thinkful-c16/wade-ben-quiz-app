'use strict';

// In-memory database of questions

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
  // Current Question
  // User's answer choice(s)
  // Current view
  // Score? Anything else?

};

// Template generators
function generateWelcomeView() {

}

function generateAnswerList(answers) {}

// Rendering functions
function renderQuestionText() {}

// Event handlers
function handleAnswerSubmitted() {
  $('.user-controls').on('click', '.input-button', () => {
    // Retrieve answer identifier of user-checked radio button
    // Perform check: User answer === Correct Answer?
    // Update Store and render appropriate section  
  });
}

$(function main() {
    handleAnswerSubmitted();
}