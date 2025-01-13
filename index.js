
const quizQuestions = [
    {
        question: "1) Which HTML tag is used to define an unordered list?",
        answers: {
            A: "<li>",
            B: "<ol>",
            C: "<ul>",
            D: "<list>"
        },
        correctAnswer: "C"
    },
    {
        question: "2) What is the correct HTML element to define a hyperlink?",
        answers: {
            A: "<link>",
            B: "<a>",
            C: "<herf>",
            D: "<hyperlink>"
        },
        correctAnswer: "B"
    },
    {
        question: "3) Which HTML element is used to define an input field where the user can enter data?",
        answers: {
            A: "<textarea>",
            B: "<form>",
            C: "<input>",
            D: "<select>"
        },
        correctAnswer: "C"
    },
    {
        question: "4) How do you select an element with the ID 'myElement' in CSS?",
        answers: {
            A: "#myElement",
            B: ".myElement",
            C: "myElement",
            D: "*myElement"
        },
        correctAnswer: "A"
    },
    {
        question: "5) Which of the following CSS properties is used to set the font size of text?",
        answers: {
            A: "font-weight",
            B: "font-family",
            C: "font-size",
            D: "text-style"
        },
        correctAnswer: "C"
    },
    {
        question: "6) Which tag is used to display an image in an HTML document?",
        answers: {
            A: "<picture>",
            B: "<image>",
            C: "<src>",
            D: "<img>"
        },
        correctAnswer: "D"
    },
    {
        question: "7) How can you make a list in HTML ordered?",
        answers: {
            A: "By using the <ol> tag",
            B: "By using the <ul> tag",
            C: "By using the <li> tag",
            D: "By using the <list> tag"
        },
        correctAnswer: "A"
    },
    {
        question: "8) Which CSS property is used to control the space between the content of an element and its border?",
        answers: {
            A: "padding",
            B: "margin",
            C: "border-spacing",
            D: "spacing"
        },
        correctAnswer: "A"
    },
    {
        question: "9) What is the default value of the position property in CSS?",
        answers: {
            A: "absolute",
            B: "relative",
            C: "fixed",
            D: "static"
        },
        correctAnswer: "D"
    },
    {
        question: "10) Which CSS property is used to change the background color of an element?",
        answers: {
            A: "color",
            B: "bg-color",
            C: "background-color",
            D: "background-style"
        },
        correctAnswer: "C"
    }
];

let currentQuestionIndex = 0;
let score = 0;


function startQuiz(){
    document.getElementById('startQuiz').style.display='none';
    loadQuestion();
    document.getElementById('quiz').style.display='block';
}


function loadQuestion() {
    const currentQuestion = quizQuestions[currentQuestionIndex];
    document.getElementById('question').textContent = currentQuestion.question;
    
    const buttons = document.querySelectorAll('.answer-btn');
    buttons.forEach((button, index) => {
        const answerKey = Object.keys(currentQuestion.answers)[index];
        button.textContent = `${answerKey}. ${currentQuestion.answers[answerKey]}`;
    });

    document.getElementById('result-container').style.display = 'none';
    document.getElementById('nextQuestion').style.display = 'block';
}


function checkAnswer(answer) {
    const currentQuestion = quizQuestions[currentQuestionIndex];
    if (answer === currentQuestion.correctAnswer) {
        score++;
        document.getElementById('result').textContent = "Correct!";
    } else {
        document.getElementById('result').textContent = "Wrong! The correct answer is " + currentQuestion.correctAnswer + ".";
    }
    document.getElementById('quiz').style.display = 'none';
    document.getElementById('result-container').style.display = 'block';
}



function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < quizQuestions.length) {
        loadQuestion();
        document.getElementById('quiz').style.display='block';
    } else {
        document.getElementById('result').textContent = `Quiz Over! Your score is: ${score} / ${quizQuestions.length}`;
        document.getElementById('result-container').style.display = 'block';
        document.getElementById('nextQuestion').style.display = 'none';
        document.getElementById('retakeQuiz').style.display = 'block';
        confetti();
    }
}

function retakeQuiz(){
    currentQuestionIndex=0;
    score=0;
    document.getElementById('result-container').style.display = 'none';
    document.getElementById('retakeQuiz').style.display = 'none';
    loadQuestion();
    document.getElementById('quiz').style.display = 'block';
}


