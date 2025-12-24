let sectionIndex = 0;
let qIndex = 0;
let locked = false;

let total = 0;
let correct = 0;
let wrongList = [];

let questionBank = [];

/* ===== START QUIZ ===== */
function startQuiz(chapter) {
  const script = document.createElement("script");
  script.src = `question${chapter}.js`;

  script.onload = () => {
    document.getElementById("menu").style.display = "none";
    document.getElementById("app").style.display = "block";
    document.getElementById("quizTitle").innerText = `📘 Chương ${chapter}`;

    resetQuiz();
    loadQuestion();
  };

  document.body.appendChild(script);
}

/* ===== CORE ===== */
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
    div.onclick = () => checkAnswer(i);
    document.getElementById("options").appendChild(div);
  });
}

function checkAnswer(i) {
  if (locked) return;
  locked = true;
  total++;

  const section = questionBank[sectionIndex];
  const q = section.questions[qIndex];

  document.querySelectorAll(".option").forEach((opt, idx) => {
    if (idx === q.a) opt.classList.add("correct");
    if (idx === i && i !== q.a) opt.classList.add("wrong");
  });

  document.getElementById("explain").style.display = "block";
  document.getElementById("explain").innerHTML =
    `${i === q.a ? "✅ Correct" : "❌ Wrong"}<br><b>Cheat:</b> ${section.cheat}`;

  if (i === q.a) correct++;
  else wrongList.push({ q: q.q, cheat: section.cheat });

  document.getElementById("stats").innerText =
    `✔ ${correct} | ❌ ${total - correct} | Total ${total}`;

  document.getElementById("nextBtn").style.display = "block";
}

document.getElementById("nextBtn").onclick = () => {
  qIndex++;
  if (qIndex >= questionBank[sectionIndex].questions.length) {
    qIndex = 0;
    sectionIndex++;
    if (sectionIndex >= questionBank.length) return showReview();
  }
  loadQuestion();
};

function showReview() {
  document.getElementById("app").innerHTML = `
    <h2>Done</h2>
    <p>Correct: ${correct}/${total}</p>
    ${wrongList.map(w => `<div>${w.q}<br><i>${w.cheat}</i></div>`).join("")}
    <button onclick="location.reload()">Restart</button>
  `;
}
