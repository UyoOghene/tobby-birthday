
let score = 0;
let currentQuestionIndex = 0;
const start = document.getElementById('start');
const answerButtons = document.getElementById('answer-buttons');
const question = document.getElementById('question');
const next = document.getElementById('next');
const presentScore= document.getElementById('presentScore');
const Wish= document.getElementById('wish');



const questions =[
    {
        question:"Fun facts about Tobby:",
        answers: [
            {text: 'You are bold and fearless. ', correct: true},
        ]
    },
    {
        question:"Fun facts about Tobby:",
        answers: [
            {text: 'You are consistent and dependable.', correct: true},
        ]
    },
    
    {
        question:"Fun facts about Tobby:",
        answers: [
            {text: 'You are kind and genuinely caring , to me and people around you.', correct: true},
        ]
    },
    {
        question:"Fun facts about Tobby:",
        answers: [
            {text: 'You are a beautiful person inside and outside.', correct: true},
        ]
    },
    {
        question:"Fun facts about Tobby:",
        answers: [
            {text: 'You are real and honest.', correct: true},
        ]
    },

    {
        question:"Fun facts about Tobby:",
        answers: [
            {text: 'Your mind is animated, it makes being around you interesting and you look at the world from a different perspective.', correct: true},
        ]
    },
    {
        question:"Fun facts about Tobby:",
        answers: [
            {text: 'You are extremely hardworking, although i wish you dont have to work so much. ', correct: true},
        ]
    },
    {
        question:"Fun facts about Tobby:",
        answers: [
            {text: 'Your sense of humor is on another level, it shows how smart you are. ', correct: true},
        ]
    },
    {
        question:"Fun facts about Tobby:",
        answers: [
            {text: 'You love Jesus. ', correct: true},
        ]
    },
    {
        question:"Fun facts about Tobby:",
        answers: [
            {text: 'You are the life of the party. ', correct: true},
        ]
    },

]


function startQuiz(){
    currentQuestionIndex = 0 ;
    score = 0 ;
    
    next.innerHTML = 'next';
    showQuestion();
}

function showQuestion(){
    resetState();
let currentQuestion =questions[currentQuestionIndex];
let questionNo = currentQuestionIndex +1;
question.innerHTML =questionNo +'. '+ currentQuestion.question;

currentQuestion.answers.forEach(answer => {
    const button = document.createElement('button');
    button.innerHTML = answer.text;
    button.classList.add('btn');
    answerButtons.appendChild(button);
    if(answer.correct){
        button.dataset.correct =answer.correct;
    }
    button.addEventListener('click',selectAnswer);
    
});
}

function resetState(){
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild)
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === 'true';
    if(isCorrect){
        selectedBtn.classList.add('correct');
        score++;
    }else{
        selectedBtn.classList.add('incorrect');
    }

    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === 'true'){
            button.classList.add('correct');
        }
        button.disabled = true;
    }); 
    next.style.display = 'block';
}

function showScore(){
    resetState();
    question.innerHTML = 'The world needs more people like Tobby';
    Wish.innerHTML = 'I wish you genuine Love, Happiness and a bright and successful future.'
    next.innerHTML ='start over';
    next.style.display='block';
}

function handleNxtbtn(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
} 


next.addEventListener('click', ()=>{
    if(currentQuestionIndex < questions.length){
        handleNxtbtn();
    }else{
        startQuiz();

    }
})

startQuiz();