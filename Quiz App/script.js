const quizData = [
  {
    question: "How old are you?",
    a: "10",
    b: "24",
    c: "30",
    d: "50",
    correct: "b",
  },
  {
    question: "What is the most used programming languagein 2024",
    a: "Java",
    b: "Javascript",
    c: "Python",
    d: "Rust",
    correct: "a",
  },
  {
    question: "What is your fav. color?",
    a: "red",
    b: "black",
    c: "orange",
    d: "blue",
    correct: "d",
  },
  {
    question: "What is your bike colour?",
    a: "red",
    b: "black",
    c: "orange",
    d: "blue",
    correct: "b",
  },
];

const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const quiz = document.getElementById("quiz");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
  deselectAnswers();

  const currentQuizData = quizData[currentQuiz];

  questionEl.innerText = currentQuizData.question;

  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}

function getSelected() {
  let answer = undefined;

  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });

  return answer;
}

function deselectAnswers() {
  answerEls.forEach((answerEl) => {
    answerEl.checked = false;
  });
}

submitBtn.addEventListener("click", () => {
  // check to see the answer
  const answer = getSelected();
//   console.log(answer);

  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++;
    }

    currentQuiz++;
    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      quiz.innerHTML = `<h2> You answered correctly a ${score}/${quizData.length}question.</h2> 
      
      <button onclick="location.reload()">Reload</button>`;
    }
  }
});
