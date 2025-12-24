let sectionIndex = 0;
let qIndex = 0;
let wrong = [];
let locked = false;

hàm loadQuestion() {
  đã khóa = false;
  const section = questionBank[sectionIndex];
  const q = section.questions[qIndex];

  document.getElementById("progress").innerText =
    `Mục ${section.section}: ${section.title} (${qIndex+1}/${section.questions.length})`;

  document.getElementById("câu hỏi").innerText = qq;
  document.getElementById("options").innerHTML = "";
  document.getElementById("explain").style.display = "none";
  document.getElementById("nextBtn").style.display = "none";

  qoforEach((text, i) => {
    const div = document.createElement("div");
    div.className = "option";
    div.innerText = text;
    div.onclick = () => checkAnswer(div, i);
    document.getElementById("options").appendChild(div);
  });
}

hàm checkAnswer(el, i) {
  nếu (bị khóa) trả về;
  đã khóa = đúng;

  const q = questionBank[sectionIndex].questions[qIndex];
  document.querySelectorAll(".option").forEach((opt, idx) => {
    if (idx === qa) opt.classList.add("correct");
    if (idx === i && i !== qa) opt.classList.add("wrong");
  });

  nếu (i !== qa) {
    sai.đẩy(q);
    const e = document.getElementById("explain");
    e.innerText = "❌ " + qe;
    e.style.display = "block";
  }

  document.getElementById("nextBtn").style.display = "block";
}

document.getElementById("nextBtn").onclick = () => {
  qIndex++;
  nếu (qIndex >= questionBank[sectionIndex].questions.length) {
    qIndex = 0;
    sectionIndex++;
    nếu (sectionIndex >= questionBank.length) {
      alert("Xong! Câu trả lời sai: " + wrong.length);
      trở lại;
    }
  }
  loadQuestion();
};

loadQuestion();
