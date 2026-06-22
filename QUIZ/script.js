const questions = [
  {
    question: "What does HTML stand for?",
    options: ["Hyper Text Markup Language", "High Tech Modern Language", "Hyper Transfer Markup Logic", "Home Tool Markup Language"],
    answer: "Hyper Text Markup Language"
  },
  {
    question: "Which HTML tag is used to link a CSS file to an HTML page?",
    options: ["<style>", "<css>", "<link>", "<script>"],
    answer: "<link>"
  },
  {
    question: "Which CSS property changes the text color of an element?",
    options: ["font-color", "text-color", "color", "foreground"],
    answer: "color"
  },
  {
    question: "Which keyword is used to declare a variable in modern JavaScript?",
    options: ["var", "let", "define", "int"],
    answer: "let"
  },
  {
    question: "What does getElementById() do?",
    options: ["Creates a new HTML element", "Deletes an element", "Finds an HTML element using its id", "Changes the CSS of an element"],
    answer: "Finds an HTML element using its id"
  }
];

let currentQuestion = 0;
let score = 0;

function showQuestion() {
  const q = questions[currentQuestion];

  document.getElementById("question-number").textContent =
    "Question " + (currentQuestion + 1) + " of " + questions.length;
  document.getElementById("question-text").textContent = q.question;

  const optionsDiv = document.getElementById("options");
  optionsDiv.innerHTML = "";

  q.options.forEach(function (option) {
    const button = document.createElement("button");
    button.textContent = option;
    button.addEventListener("click", function () {
      checkAnswer(option);
    });
    optionsDiv.appendChild(button);
  });
}

function checkAnswer(selected) {
  const buttons = document.querySelectorAll("#options button");
  buttons.forEach(function (btn) { btn.disabled = true; });

  if (selected === questions[currentQuestion].answer) {
    score++;
    document.body.classList.add("correct");
  } else {
    document.body.classList.add("wrong");
  }

  setTimeout(function () {
    document.body.classList.remove("correct");
    document.body.classList.remove("wrong");
    currentQuestion++;

    if (currentQuestion < questions.length) {
      showQuestion();
    } else {
      showResult();
    }
  }, 1000);
}

function showResult() {
  document.getElementById("question-screen").classList.add("hidden");
  document.getElementById("result-screen").classList.remove("hidden");
  document.getElementById("score-text").textContent = "You scored " + score + " out of " + questions.length;

  let remark = "";
  if (score === 5) remark = "Excellent! Perfect score!";
  else if (score === 4) remark = "Great job!";
  else if (score === 3) remark = "Good effort!";
  else if (score === 2) remark = "Not bad, but there is room to improve.";
  else remark = "Keep studying!!!";

  document.getElementById("grade-remark").textContent = remark;
}

function restartQuiz() {
  currentQuestion = 0;
  score = 0;
  document.getElementById("result-screen").classList.add("hidden");
  document.getElementById("question-screen").classList.remove("hidden");
  showQuestion();
}

showQuestion();
document.getElementById("restart-btn").addEventListener("click", restartQuiz);
