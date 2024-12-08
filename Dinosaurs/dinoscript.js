const quizData = [
    {
        question: "Which classification has hadrosaurs?",
        options: ["Theropod", "Marginocephalian", "Sauropod", "Ornithopods", "Thyreophoran"],
        answer: "Ornithopods"
    },
    {
        question: "Which classification of dinosaurs has the biggest members?",
        options: ["Theropod", "Marginocephalian", "Sauropod", "Ornithopods", "Thyreophoran"],
        answer: "Sauropod"
    },
	{
        question: "Which dinosaurs are known for their armor?",
        options: ["Theropod", "Marginocephalian", "Sauropod", "Ornithopods", "Thyreophoran"],
        answer: "Thyreophoran"
    },
	{
        question: "Which classification does Tyrannosaurus Rex belong to?",
        options: ["Theropod", "Marginocephalian", "Sauropod", "Ornithopods", "Thyreophoran"],
        answer: "Theropod"
    },
		{
        question: "Which of these have a bony shelf on their skulls?",
        options: ["Theropod", "Marginocephalian", "Sauropod", "Ornithopods", "Thyreophoran"],
        answer: "Marginocephalian"
    },
];

const quizContainer = document.getElementById("quiz");
const questionContainer = document.getElementById("question");
const optionsContainer = document.getElementById("options");
const submitButton = document.getElementById("submit");

let currentQuestion = 0;
let score = 0;

function loadQuestion() {
    const currentQuizData = quizData[currentQuestion];
    questionContainer.innerText = currentQuizData.question;
    optionsContainer.innerHTML = "";
    currentQuizData.options.forEach(option => {
        const button = document.createElement("button");
        button.innerText = option;
        button.classList.add("option-btn");
        button.addEventListener("click", () => selectOption(option));
        optionsContainer.appendChild(button);
    });
}

function selectOption(selectedOption) {
    const currentQuizData = quizData[currentQuestion];
    if (selectedOption === currentQuizData.answer) {
        score++;
    }
    currentQuestion++;
    if (currentQuestion < quizData.length) {
        loadQuestion();
    } else {
        quizContainer.innerHTML = `<h2>Your total score is: ${score}/${quizData.length}</h2>`;
    }
}

loadQuestion();
