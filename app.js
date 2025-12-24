/* ================= GLOBAL ================= */
var questionBank = [];

var sectionIndex = 0;
var qIndex = 0;
var locked = false;

var total = 0;
var correct = 0;

/* ================= SHUFFLE ================= */
function shuffleArray(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
}

/* ================= INIT ================= */
window.onload = () => {
  const chapter = localStorage.getItem("chapter");
  if (!chapter) {
    alert("Chưa chọn chương!");
    window.location.href = "index.html";
    return;
  }
  loadQuestions(chapter);
};

/* ================= LOAD QUESTIONS ================= */
function loadQuestions(chapter) {
  const script = document.createElement("script");
  script.src = `question${chapter}.js`;

  script.onload = () => {

    // 🔀 RANDOM SECTION
    shuffleArray(questionBank);

    // 🔀 RANDOM QUESTIONS IN EACH SECTION
    questionBank.forEach(sec => {
      shuffleArray(sec.questions);
    });

    sectionIndex = 0;
    qIndex = 0;
    total = 0;
    correct = 0;

    const title = document.getElementById("quizTitle");
    if (title) {
      title.innerText = `📘 Ôn tập Chương ${chapter}`;
    }

    loadQuestion();
  };

  document.body.appendChild(script);
}

/* ================= LOAD QUESTION ================= */
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

/* ================= CHECK ANSWER ================= */
function checkAnswer(el, i) {
  if (locked) return;
  locked = true;

  total++;

  const q = questionBank[sectionIndex].questions[qIndex];

  document.querySelectorAll(".option").forEach((opt, idx) => {
    if (idx === q.a) opt.classList.add("correct");
    if (idx === i && i !== q.a) opt.classList.add("wrong");
  });

  const explain = document.getElementById("explain");
  explain.style.display = "block";
  explain.innerHTML = `
    ${i === q.a ? "✅ Correct" : "❌ Wrong"}<br><br>
    <b>Cheat Sheet:</b><br>${questionBank[sectionIndex].cheat}
  `;

  if (i === q.a) correct++;

  document.getElementById("stats").innerText =
    `✔ Correct: ${correct} | ❌ Wrong: ${total - correct} | Total: ${total}`;

  document.getElementById("nextBtn").style.display = "block";
}

/* ================= NEXT ================= */
document.getElementById("nextBtn").onclick = () => {
  qIndex++;

  if (qIndex >= questionBank[sectionIndex].questions.length) {
    qIndex = 0;
    sectionIndex++;

    if (sectionIndex >= questionBank.length) {
      alert("🎉 Hoàn thành chương!");
      backHome();
      return;
    }
  }

  loadQuestion();
};

/* ================= BACK ================= */
function backHome() {
  localStorage.removeItem("chapter");
  window.location.href = "index.html";
}
