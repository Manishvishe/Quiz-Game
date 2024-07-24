const questions = [
    {
        question: "Who is the first player to score 100 centuries in international cricket?",
        answers: [
            { Text: "Rahul Dravid", correct: false},
            { Text: "Sachin Tendulkar", correct: true},
            { Text: "Sunil Gavaskar", correct: false},
            { Text: "Kapil Dev", correct: false},        
        ]
    },
    {
        question: "How many members are there in each team in cricket?",
        answers: [
            { Text: "11", correct: true},
            { Text: "12", correct: false},
            { Text: "10", correct: false},
            { Text: "13", correct: false},        
        ]
    },
    {
        question: "what is the full form of ODI?",
        answers: [
            { Text: "One Day National", correct: false},
            { Text: "One Day Intercricket", correct: false},
            { Text: "One Day International", correct: true},
            { Text: "None of the above", correct: false},        
        ]
    },
    {
        question: "Who won the most IPL Titles?",
        answers: [
            { Text: "Gujrat Titans", correct: false},
            { Text: "Mumbai Indians", correct: true},
            { Text: "Punjab Kings", correct: false},
            { Text: "Delhi Capitals", correct: false},        
        ]
    },
    {
        question: "Who is known as the 'God Of Cricket'?",
        answers: [
            { Text: "MS Dhoni", correct: false},
            { Text: "Sachin Tendulkar", correct: true},
            { Text: "VVS Laxman", correct: false},
            { Text: "Rahul Dravid", correct: false},        
        ]
    },
    {
        question: "Which Country win the 2011 ODI World Cup?",
        answers: [
            { Text: "India", correct: true},
            { Text: "England", correct: false},
            { Text: "Australia", correct: false},
            { Text: "New Zealand", correct: false},        
        ]
    },
    {
        question: "Who is known as the 'Hitman of Cricket'?",
        answers: [
            { Text: "Virat Kohli", correct: false},
            { Text: "Rohit Sharma", correct: true},
            { Text: "Hardik Pandya", correct: false},
            { Text: "Surya Kumar Yadav", correct: false},        
        ]
    },
    {
        question: "Who was the first cricketer to hit 6 sixes in an over in T20I cricket?",
        answers: [
            { Text: "Yuvraj Singh", correct: true},
            { Text: "Hardik Pandya", correct: false},
            { Text: "Surya Kumar Yadav", correct: false},
            { Text: "Rishab Pant", correct: false},        
        ]
    },
    {
        question: "Who was the first player to score three double Century in ODI cricket?",
        answers: [
            { Text: "Sachin Tendulkar", correct: false},
            { Text: "Rahul Dravid", correct: false},
            { Text: "Rohit Sharma", correct: true},
            { Text: "Virat Kohli", correct: false},        
        ]
    },
    {
        question: "Which country win the 2024 T20I World cup?",
        answers: [
            { Text: "Australia", correct: false},
            { Text: "India", correct: true},
            { Text: "England", correct: false},
            { Text: "South Africa", correct: false},        
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetstate();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + "." + currentQuestion.question;

    currentQuestion.answers.forEach(answer =>{
        const button = document.createElement("button");
        button.innerHTML = answer.Text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}


function resetstate(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild)
    }
}

function selectAnswer(e){
    const selectBtn = e.target;
    const iscorrect = selectBtn.dataset.correct === "true";
    if(iscorrect){
        selectBtn.classList.add("correct");
        score++;
    }else{
        selectBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showscore(){
    resetstate();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showscore();
    }
}

nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
});


startQuiz();