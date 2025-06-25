const questions = [
  {
    question: "Which ancient civilization is known for its pyramids and pharaohs?",
    answers: [
      { text: "Aztec", correct: false },
      { text: "Egyptian", correct: true },
      { text: "Roman", correct: false },
      { text: "Greek", correct: false }
    ]
  },
  {
    question: "In which river valley did the ancient Sumerian civilization emerge?",
    answers: [
      { text: "Nile Valley", correct: false },
      { text: "Indus Valley", correct: false },
      { text: "Yellow River Valley", correct: false },
      { text: "Tigris-Euphrates Valley", correct: true }
    ]
  },
  {
    question: "What writing system did the ancient Egyptians use?",
    answers: [
      { text: "Hieroglyphics", correct: true },
      { text: "Cuneiform", correct: false },
      { text: "Alphabet", correct: false },
      { text: "Pictograms", correct: false }
    ]
  },
  {
    question: "Which event marked the beginning of World War II?",
    answers: [
      { text: "The assassination of Archduke Franz Ferdinand", correct: false },
      { text: "The German invasion of Poland", correct: true },
      { text: "The bombing of Pearl Harbor", correct: false },
      { text: "The Battle of Britain", correct: false }
    ]
  },
  {
    question: "Which of the following was NOT an Axis power during World War II?",
    answers: [
      { text: "Germany", correct: false },
      { text: "Italy", correct: false },
      { text: "Japan", correct: false },
      { text: "USSR", correct: true }
    ]
  },
  {
    question: "Who was the primary author of the Declaration of Independence?",
    answers: [
      { text: "John Adams", correct: false },
      { text: "Thomas Jefferson", correct: true },
      { text: "Benjamin Franklin", correct: false },
      { text: "James Madison", correct: false }
    ]
  },
  {
    question: "How many colonies were there in the United States?",
    answers: [
      { text: "12", correct: false },
      { text: "13", correct: true },
      { text: "14", correct: false }
    ]
  },
  {
    question: "What was the name of the American space program that first landed humans on the moon?",
    answers: [
      { text: "Mercury", correct: false },
      { text: "Gemini", correct: false },
      { text: "Apollo", correct: true }
    ]
  },
  {
    question: "Who was the first President of the United States?",
    answers: [
      { text: "John Adams", correct: false },
      { text: "Thomas Jefferson", correct: false },
      { text: "George Washington", correct: true }
    ]
  },
  {
    question: "Which state has the surname 'The First State'?",
    answers: [
      { text: "New York", correct: false },
      { text: "Massachusetts", correct: false },
      { text: "Vermont", correct: false },
      { text: "Delaware", correct: true }
    ]
  },
  {
    question: "What country ceded Florida to the USA in 1821 with the Treaty of Adams-Onis?",
    answers: [
      { text: "Britain", correct: false },
      { text: "France", correct: false },
      { text: "Portugal", correct: false },
      { text: "Spain", correct: true }
    ]
  },
  {
    question: "Which treaty marked the end of the Spanish-American War and resulted in the U.S. acquiring the Philippines?",
    answers: [
      { text: "Treaty of Versailles", correct: false },
      { text: "Treaty of Paris", correct: true },
      { text: "Treaty of Tordesillas", correct: false },
      { text: "Treaty of Ghent", correct: false }
    ]
  },
  {
    question: "The Mau Mau Uprising in the 1950s was part of which African nation's independence movement?",
    answers: [
      { text: "Nigeria", correct: false },
      { text: "South Africa", correct: false },
      { text: "Zimbabwe", correct: false },
      { text: "Kenya", correct: true }
    ]
  },
  {
    question: "Which African country achieved independence from Belgium in 1960?",
    answers: [
      { text: "Nigeria", correct: false },
      { text: "Kenya", correct: false },
      { text: "Ghana", correct: false },
      { text: "Congo", correct: true }
    ]
  },
  {
    question: "The Bretton Woods Agreement, establishing the IMF and World Bank, was signed in what year?",
    answers: [
      { text: "1944", correct: true },
      { text: "1947", correct: false },
      { text: "1949", correct: false },
      { text: "1953", correct: false }
    ]
  },
  {
    question: "What year did the Euro debut as a financial unit?",
    answers: [
      { text: "1995", correct: false },
      { text: "1997", correct: false },
      { text: "1999", correct: true },
      { text: "2001", correct: false }
    ]
  },
  {
    question: "What term refers to large industrial conglomerates in Japan before WWII?",
    answers: [
      { text: "Zaibatsu", correct: true },
      { text: "Keiretsu", correct: false },
      { text: "Sogo Shosha", correct: false },
      { text: "Shinkin", correct: false }
    ]
  },
  {
    question: "Which cartoon character was featured on emergency currency in WWII-era Philippines?",
    answers: [
      { text: "Bugs Bunny", correct: false },
      { text: "Mickey Mouse", correct: true },
      { text: "Donald Duck", correct: false },
      { text: "Popeye", correct: false }
    ]
  },
  {
    question: "How many of King Henry VIII’s wives were named Anne?",
    answers: [
      { text: "One", correct: false },
      { text: "Two", correct: true },
      { text: "Three", correct: false },
      { text: "Four", correct: false }
    ]
  },
  {
    question: "On which Mediterranean island was Napoleon Bonaparte born?",
    answers: [
      { text: "Sicily", correct: false },
      { text: "Malta", correct: false },
      { text: "Corsica", correct: true },
      { text: "Cyprus", correct: false }
    ]
  }
];

let currentQuestionIndex = 0;
let score = 0;

const questionElement = document.getElementById("question-text");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
const scoreContainer = document.getElementById("score-container");
const scoreText = document.getElementById("score-text");

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  scoreContainer.classList.add("hide");
  document.getElementById("question-container").classList.remove("hide");
  nextButton.innerText = "Next";
  showQuestion();
}

function showQuestion() {
  resetState();
  const currentQuestion = questions[currentQuestionIndex];
  questionElement.innerText = currentQuestion.question;

  currentQuestion.answers.forEach(answer => {
    const li = document.createElement("li");
    const button = document.createElement("button");
    button.innerText = answer.text;
    button.classList.add("btn");
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
    li.appendChild(button);
    answerButtons.appendChild(li);
  });
}

function resetState() {
  nextButton.classList.add("hide");
  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

function selectAnswer(e) {
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";
  if (isCorrect) score++;
  Array.from(answerButtons.children).forEach(li => {
    const btn = li.firstChild;
    btn.disabled = true;
    if (btn.dataset.correct === "true") {
      btn.style.backgroundColor = "#2ecc71";
    } else {
      btn.style.backgroundColor = "#e74c3c";
    }
  });
  nextButton.classList.remove("hide");
}

nextButton.addEventListener("click", () => {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
});

function showScore() {
  document.getElementById("question-container").classList.add("hide");
  scoreContainer.classList.remove("hide");
  scoreText.innerText = `You scored ${score} out of ${questions.length}`;
}

startQuiz();
