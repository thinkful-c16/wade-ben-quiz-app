'use strict';

// In-memory example of database of answers
const ANSWERS1 = [
    {answer: 'Asmodeus', correct: true},
    {answer: 'Mephistopholes', correct: false},
]

// In-memory database of questions
const QUESTIONS = [];

// Create your initial store
const STORE = {
  // Current Question
  // User's answer choice(s)
  // Current view
  // Score? Anything else?
};

// Template generators
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