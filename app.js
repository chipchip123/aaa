let sectionIndex = 0;
let qIndex = 0;
let locked = false;

let total = 0;
let correct = 0;
let wrongList = [];

let questionBank = [];

/* =======================
   LOAD QUIZ BY CHAPTER
======================= */
function startQuiz(chapter) {
  loadQuestions(chapter);
}

function loadQuestions(chapter) {
  const script = document.createElement("script");

  if (chapter === 4) script.src = "question4.js";
  if (chapter === 5) script.src = "question5.js";
  if (chapter === 6) script.src = "question6.js";

  script.onload = () => {
    document.getElementById("menu").style.display = "none";
    document.getElementById("app").style.display = "block";
    document.getElementById("quizTitle").innerText =
      `📘 Chương ${chapter} – Quiz`;

    resetQuiz();
    loadQuestion();
  };

  document.body.appendChild(script);
}

/* =======================
   QUIZ CORE LOGIC
======================= */
function resetQuiz() {
  sectionIndex = 0;
  qIndex = 0;
  locked = false;
  total = 0;
  correct = 0;
  wrongList = [];
}

function loadQuestion() {
  locked = false;

  const section = questionBank[sectionIndex];
  const q = section.questions[qIndex];

  document.getElementById("progress").innerText =
    `Section ${section.section}: ${section.title} (${qIndex + 1}/${section.questions.length})`;

  document.getElementById("question").innerText = q.q;
  document.getElementById("options").innerHTML = "";
  document.getElementById("explain").style.display = "none";
  document.getElementById("nextBtn").style.display = "none";

  q.o.forEach((text, i) => {
    const div = document.createElement("div");
    div.className = "option";
    div.innerText = text;
    div.onclick = () => checkAnswer(div, i);
    document.getElementById("options").appendChild(div);
  });
}

function checkAnswer(el, i) {
  if (locked) return;
  locked = true;

  total++;

  const section = questionBank[sectionIndex];
  const q = section.questions[qIndex];

  document.querySelectorAll(".option").forEach((opt, idx) => {
    if (idx === q.a) opt.classList.add("correct");
    if (idx === i && i !== q.a) opt.classList.add("wrong");
  });

  const explain = document.getElementById("explain");
  explain.style.display = "block";
  explain.innerHTML = `
    ${i === q.a ? "✅ Correct" : "❌ Wrong"}<br><br>
    <b>Cheat Sheet:</b><br>${section.cheat}
  `;

  if (i === q.a) {
    correct++;
  } else {
    wrongList.push({
      section: section.section,
      title: section.title,
      question: q.q,
      cheat: section.cheat
    });
  }

  document.getElementById("stats").innerText =
    `✔ Correct: ${correct} | ❌ Wrong: ${total - correct} | Total: ${total}`;

  document.getElementById("nextBtn").style.display = "block";
}

/* =======================
   NEXT QUESTION
======================= */
document.getElementById("nextBtn").onclick = () => {
  qIndex++;

  if (qIndex >= questionBank[sectionIndex].questions.length) {
    qIndex = 0;
    sectionIndex++;

    if (sectionIndex >= questionBank.length) {
      showReview();
      return;
    }
  }

  loadQuestion();
};

/* =======================
   REVIEW
======================= */
function showReview() {
  document.getElementById("app").innerHTML = `
    <h2>📊 Quiz Completed</h2>
    <p>Total: ${total}</p>
    <p>Correct: ${correct}</p>
    <p>Wrong: ${total - correct}</p>
    <hr>
    <h3>❌ Wrong Questions Review</h3>
    ${wrongList.map(w => `
      <div style="margin-bottom:15px">
        <b>Section ${w.section}: ${w.title}</b><br>
        Q: ${w.question}<br>
        <i>Cheat Sheet:</i> ${w.cheat}
      </div>
    `).join("")}
    <button onclick="location.reload()">🔁 Restart</button>
  `;
}
