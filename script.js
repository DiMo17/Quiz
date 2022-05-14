const quizData = [
     {
          question: 'Что такое JSON?',
          a: 'Java Super Object Nation',
          b: 'Junior Simple Order Numerator',
          c: 'JavaScript Object Notation',
          d: 'Ни один из этих вариантов',
          correct: 'c'
     }, {
          question: 'Какой язык программирования был лучшим в 2021 году?',
          a: 'Java',
          b: 'C++',
          c: 'JavaScript',
          d: 'Python',
          correct: 'd'
     }, {
          question: 'Какой президент изображен на 100$ купюре?',
          a: 'Джордж Вашингтон',
          b: 'Бенджамин Франклин',
          c: 'Авраам Линкольн',
          d: 'Гровер Кливленд',
          correct: 'b'
     }, {
          question: 'Что такое HTML?',
          a: 'Hypertext Markup Language',
          b: 'Cascading Style Sheet',
          c: 'JSON Object Notation',
          d: 'Application Programming Interface',
          correct: 'a'
     }, {
          question: 'Когда появился JavaScript?',
          a: '1994',
          b: '1996',
          c: '1995',
          d: 'Ни один из этих вариантов',
          correct: 'c'
     }
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
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

submitBtn.addEventListener('click', () => {
     
     const answer = getSelected();

     if (answer) {
          if (answer === quizData[currentQuiz].correct) {
               score++;
          }

           currentQuiz++;
           if (currentQuiz < quizData.length) {
               loadQuiz();
          } else {
               quiz.innerHTML = `
               <h2>Вы ответили правильно на ${score}/${quizData.length} вопросов.</h2>
               
               <button onclick="location.reload()">Reload</button>
               `;
          }
     }
});