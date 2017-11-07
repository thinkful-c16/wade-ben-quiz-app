'use strict';

// In-memory database of questions, answers, and correct answer

const QUIZDATA = [
  {
    question: 'Who is the supreme lord and most powerful archdevil of the Nine Hells?',
    answers: ['Asmodeus', 'Richard Greenhill', 'Mephistopheles'],
    correctAnswer: 'Asmodeus'
  },
  {
    question: 'How many layers are there in the Nine Hells?',
    answers: ['Several thousand', 'Only one', 'Nine'],
    correctAnswer: 'Nine'
  },
  {
    question: 'What is the arrival point for any visitors to the Nine Hells?',
    answers: ['the stench-ridden bog of Minauros', 'the rocky wastes of Avernus', 'the dark pits of Nessus'],
    correctAnswer: 'the rocky wastes of Avernus'
  },
  {
    question: 'What is the largest metropolis in the Nine Hells?',
    answers: ['the Iron City of Dis', 'the Clockwork Nirvana of Mechanus', 'Abriymoch, the Obsidian Fortress'],
    correctAnswer: 'the Iron City of Dis'
  },
  {
    question: 'Where does the infernal court of Asmodeus reside?',
    answers: ['the River Styx', 'the citadel-spire of Malsheem', 'the City of Brass'],
    correctAnswer: 'the citadel-spire of Malsheem'
  }
];

// Create your initial store
const STORE = {
  // Current Question
  'current question': 'None',
  'current question index': 0,
  // User's answer choice(s)
  'user answer choice(s)': 'None',
  // Current view
  'current view': 'Welcome to the quiz!',
  // Score? Anything else?
  'question counter': 1,
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

  // Returning question template html
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
          <button name= "submit-button" id= "answer-submit-button" class= "input-button" type= "submit" >Submit answer</button>
      </div>
      <div class= "current-score">
          <p>Current score: ${STORE['answers correct']}/5</p>
      </div>
  </form>
</div>`;
}

function generateAnswerFeedback (currentQuestion) {
  //Returning answer feedback template html
  return `<div>
  <h1>Infernal Plane Quiz</h1>
  <div class= 'questions-answered'>
    <p>Question ${STORE['question counter']}/5</p>
  </div>
  <div class= 'user-answer'>Your answer: ${STORE['user answer choice(s)']}
  </div>
  <div class= 'correct-answer'>Correct answer: ${STORE['current question'].correctAnswer}
  </div>
  <div class="user-input">
  <button name= "submit-button" id= "next-question-button" class= "input-button" type= "submit" >Next question</button>
  </div>
  <div class= "current-score">
    <p>Current score: ${STORE['answers correct']}/5</p>
  </div>
  </div>`;
}

// Rendering functions
function renderQuestionView(currentIndex) {
//  Render the question view in the DOM
  const questionAnswer = generateAnswerList(currentIndex);
  $('.container').html(questionAnswer);
  handleAnswerSubmitted(STORE['current question']);
}

function renderAnswerFeedback(currentQuestion) {
  const answerFeedback = generateAnswerFeedback(currentQuestion);
  $('.container').html(answerFeedback);
  // Render the question feedback in the DOM
  handleNextQuestion();
}

// Event handlers
function handleWelcomeView() {
  // listener for begin button to trigger rendering of first question
  $('#quiz-start-button').on('click', event => {
    // setting answer counter to 1 and calling render function for first question
    STORE['question counter'] = 1;
    let currentQuestionNumberIndex = STORE['current question index'];
    renderQuestionView(currentQuestionNumberIndex);
  });
}

function handleAnswerSubmitted(currentQuestion) {
  // Listener for submit answer button
  $('.user-input').on('click', '.input-button', event => {
    event.preventDefault();
    // Retrieve answer identifier of user-checked radio button
    let userAnswer = $('input[type=radio][name=answer]:checked').val();
    // Update STORE to reflect user answer
    STORE['user answer choice(s)'] = $('input[type=radio][name=answer]:checked').val();
    // Perform check: User answer === Correct Answer?
    if (userAnswer === currentQuestion.correctAnswer) {
      window.alert('Your answer is correct!');
      STORE['answers correct']++;
    }
    else {
      window.alert('Your answer is incorrect!');
    }
    renderAnswerFeedback(STORE['current question']);
  });
}

function handleNextQuestion () {
  // Listener for next question button
  $('.user-input').on('click', '.input-button', event => {
    event.preventDefault();
    // updating question counter in STORE
    STORE['question counter']++;
    STORE['current question index']++;
    let currentQuestionNumberIndex = STORE['current question index'];
    renderQuestionView(currentQuestionNumberIndex);
  });
}

function handleFinalQuestion () {}

function handleQuizReset () {}

$(function main() {
  handleWelcomeView();
  handleAnswerSubmitted();
  handleNextQuestion();
});