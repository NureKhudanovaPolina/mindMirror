// assets/scripts/quiz.js

let questions = [];
let current = 0;

// DOM refs
const qNumEl       = document.getElementById('question-number');
const progressBar  = document.getElementById('progress-bar');
const qTextEl      = document.getElementById('question-text');
const answersEl    = document.getElementById('answers');
const nextBtn      = document.getElementById('next-btn');

// 1) Fetch the JSON, then initialize the quiz
fetch('assets/questions.json')
  .then(res => res.json())
  .then(data => {
    questions = data;
    loadQuestion(0);
  })
  .catch(err => console.error('Could not load questions:', err));

// 2) Render one question
function loadQuestion(i) {
  const total = questions.length;
  const q     = questions[i];
  qNumEl.textContent      = `Question ${i+1} of ${total}`;
  progressBar.style.width = `${(i/total)*100}%`;
  qTextEl.textContent     = q.question;
  answersEl.innerHTML     = '';
  nextBtn.disabled         = true;

  q.answers.forEach(ans => {
    const btn = document.createElement('button');
    btn.textContent = ans;
    btn.addEventListener('click', () => {
      Array.from(answersEl.children).forEach(b => b.classList.remove('selected'));
      btn.classList.add('selected');
      nextBtn.disabled = false;
    });
    answersEl.appendChild(btn);
  });
}

// 3) Advance on Next
nextBtn.addEventListener('click', () => {
  if (current < questions.length - 1) {
    current++;
    loadQuestion(current);
  } else {
    alert('Test complete! Thanks for your answers.');
  }
});
