const questions = [
    "Which ancient civilization is known for its pyramids and pharaohs?",
    "In which river valley did the ancient Sumerian civilization emerge?",
    "What writing system did the ancient Egyptians use?",
    "Which event marked the beginning of World War II?",
    "Which of the following was NOT an Axis power during World War II?",
    "Who was the primary author of the Declaration of Independence?",
    "How many colonies were there in the United States?",
    "What was the name of the American space program that first landed humans on the moon?",
    "Who was the first President of the United States?",
    "Which state has the surname 'The First State'?",
    "What country ceded Florida to the USA in 1821 with the Treaty of Adams-Onis?",
    "Which treaty, signed in 1898, marked the end of the Spanish-American War and resulted in the U.S. acquiring the Philippines?",
    "The Mau Mau Uprising in the 1950s was a key part of which African nation’s struggle for independence from British rule?",
    "Which African country achieved independence from Belgium in 1960, following a significant decolonization movement?",
    "The Bretton Woods Agreement, which established the IMF and the World Bank, was signed in which year?",
    "What year did the Euro debut as a financial unit in corporate and investment markets?",
    "What term refers to the large industrial conglomerates that dominated the Japanese economy from the late 19th century until World War II?",
    "Which cartoon character was featured on the emergency currency issued in the Philippines during World War II?",
    "How many of King Henry VIII’s wives were called Anne?",
    "On which Mediterranean island was Napoleon Bonaparte born?",
];

const answers = [
    "Egyptian",
    "Tigris-Euphrates Valley",
    "Hieroglyphics",
    "The German invasion of Poland",
    "USSR",
    "Thomas Jefferson",
    "13",
    "Apollo",
    "George Washington",
    "Delaware",
    "Spain",
    "Treaty of Paris",
    "Kenya",
    "Congo",
    "1944",
    "1999",
    "Zaibatsu",
    "Mickey Mouse",
    "Two",
    "Corsica"
];
const images = [
    "assets/pharaoh-pyramids.jpg",
    "assets/Tigris-Euphrates Valley.jpg",
    "assets/Hieroglyphics.jpg",
    "assets/The German invasion of Poland.jpg",
    "assets/ussr.png",
    "assets/thomasjefferson.jpg",
    "assets/13.png",
    "assets/apollo.jpg",
    "assets/georgewashington.jpg",
    "assets/Delaware.jpg",
    "assets/spain.jpg",
    "assets/treatyofparis.jpg",
    "assets/kenya.png",
    "assets/congo.png",
    "assets/brentonwoods.jpg",
    "assets/euro.jpg",
    "assets/zaibatsu.jpg",
    "assets/mickeymouse.jpg",
    "assets/anne.jpg",
    "assets/corsica.jpg"
]
const allAnswers = [
    ["Aztec", "Roman", "Egyptian", "Greek"],
    ["Nile Valley", "Indus Valley", "Yellow River Valley", "Tigris-Euphrates Valley"],
    ["Hieroglyphics", "Cuneiform", "Alphabet", "Pictograms"],
    ["The assassination of Archduke Franz Ferdinand", "The German invasion of Poland", "The bombing of Pearl Harbor", "The Battle of Britain"],
    ["Germany", "Italy", "Japan", "USSR"],
    ["John Adams", "Thomas Jefferson", "Benjamin Franklin", "James Madison"],
    ["12", "13", "14", "7"],
    ["Mercury", "Gemini", "Apollo", "Scorpio"],
    ["John Adams", "Thomas Jefferson", "George Washington"],
    ["New York", "Massachusetts", "Vermont", "Delaware"],
    ["Britain", "France", "Portugal", "Spain"],
    ["Treaty of Versailles", "Treaty of Paris", "Treaty of Tordesillas", "Treaty of Ghent"],
    ["Nigeria", "South Africa", "Zimbabwe", "Kenya"],
    ["Nigeria", "Kenya", "Ghana", "Congo"],
    ["1944", "1947", "1949", "1953"],
    ["1995", "1997", "1999", "2001"],
    ["Zaibatsu", "Keiretsu", "Sogo Shosha", "Shinkin"],
    ["Bugs Bunny", "Mickey Mouse", "Donald Duck", "Popeye"],
    ["One", "Two", "Three", "Four"],
    ["Sicily", "Malta", "Corsica", "Cyprus"],
];



// Setting up variables
let Num = 0;
let next = 0;
let totalCorrect = 0;
const button = document.getElementById("submitBTN");
const retakebutton = document.getElementById("retake");
const questionsSection = document.getElementById("question");
const radioAnswers = document.getElementsByName("answer");

// Combine all quiz data such as answers and questions
const quizData = questions.map((q, i) => ({
    question: q,
    correctAnswer: answers[i],
    choices: allAnswers[i],
    image: images[i]
}));

//shuffle the questions around
shuffle(quizData);

//shuffle function
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Set initial question and choices
loadQuestion();

button.addEventListener("click", function () {
    let selectedAnswer = null;
    for (let i = 0; i < radioAnswers.length; i++) {
        if (radioAnswers[i].checked) {
            selectedAnswer = radioAnswers[i].value;
            break;
        }
    }

    if (selectedAnswer === quizData[next].correctAnswer) {
        totalCorrect++;
    }

    next++;

    if (next < questions.length) {
        loadQuestion();
    } else {
        questionsSection.innerText = `You got ${totalCorrect} out of ${questions.length}`;
        for (let i = 0; i < radioAnswers.length; i++) {
            radioAnswers[i].style.display = "none";
            button.style.display = "none"
            retakebutton.style.display = "flex"
            const label = document.querySelector(`label[for="${radioAnswers[i].id}"]`);
            if (label) label.style.display = "none";
        }
    }

    console.log("Next index:", next);
});

retakebutton.addEventListener("click", function(){
    window.location.reload();
})

function loadQuestion() {
    Num++;
    questionsSection.innerText = Num+". " + quizData[next].question;
    const choices = quizData[next].choices;
    const imageTag = document.getElementById("replaceImage");
    imageTag.src = quizData[next].image;

    for (let i = 0; i < radioAnswers.length; i++) {
        radioAnswers[i].value = choices[i];
        const label = document.querySelector(`label[for="${radioAnswers[i].id}"]`);
        if (label) label.innerText = choices[i];
        radioAnswers[i].checked = false;
    }
}