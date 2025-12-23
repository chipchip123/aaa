let sectionIndex = 0;
let qIndex = 0;
let wrong = [];
let locked = false;

function loadQuestion() {
  locked = false;
  const section = questionBank[sectionIndex];
  const q = section.questions[qIndex];

  document.getElementById("progress").innerText =
    `Section ${section.section}: ${section.title} (${qIndex+1}/${section.questions.length})`;

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

  const q = questionBank[sectionIndex].questions[qIndex];
  document.querySelectorAll(".option").forEach((opt, idx) => {
    if (idx === q.a) opt.classList.add("correct");
    if (idx === i && i !== q.a) opt.classList.add("wrong");
  });

  if (i !== q.a) {
    wrong.push(q);
    const e = document.getElementById("explain");
    e.innerText = "❌ " + q.e;
    e.style.display = "block";
  }

  document.getElementById("nextBtn").style.display = "block";
}

document.getElementById("nextBtn").onclick = () => {
  qIndex++;
  if (qIndex >= questionBank[sectionIndex].questions.length) {
    qIndex = 0;
    sectionIndex++;
    if (sectionIndex >= questionBank.length) {
      alert("Done! Wrong answers: " + wrong.length);
      return;
    }
  }
  loadQuestion();
};

loadQuestion();
