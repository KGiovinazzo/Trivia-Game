//Declaring the variables

var userPick;

var correctAnswer = 0;

var incorrectAnswer = 0;

var question = 0;

var count = 15;

//Setting up the question format

// $("question").append(bobsBurgersQuestion[0].question)

var bobsBurgersQuestion = 
[
    {
    question: "When is Bob and Linda's Anniversary?",
    choices: ["A: March 3rd", "B: September 3rd", "C: November 3rd", "D: October 3rd"],
    correctAnswer: 1
}, {
    question: "Which of the following lines was NOT said by Tina?",
    choices: ["A: See you soon, Baboon", "B: More like school needs to get ready for me", "C: I am a strong, sensual woman", "D: Alright!"],
    correctAnswer: 3
}, {
    question: "What are the ears on Louise's Hat?",
    choices: ["A: Mouse", "B: Cat", "C: Bunny", "D: Devil"],
    correctAnswer: 2
}, {
    question: "Which character on the show is actually voiced by a woman?",
    choices: ["A: Louise", "B: Tina", "C: Linda", "D: Gretchen"],
    correctAnswer: 0
}, {
    question: "Which recess activity did Mr. Frond introduce that Gene originally hated?",
    choices: ["A: Tether Ball", "B: GaGa Ball", "C: Racket Ball", "D: Volleyball"],
    correctAnswer: 1
}, {
    question: "What is the name of Gayle's infamous cat?",
    choices: ["A: Mr. Whiskers", "B: Mr. Whispers", "C: Mr. Business", "D: Mr. Giggles"],
    correctAnswer: 2
}, {
    question: "Which of the following changes in every episode?",
    choices: ["A: The storefront next door", "B: The Burger of the Day", "C: The color of the front door", "D: A & B"],
    correctAnswer: 3
},
];

function askQuestion() {
    for(i=0; i<bobsBurgersQuestion.length; i++){
        $("#quiz").append(bobsBurgersQuestion[i].question);
    }
}

function showQuestion() {
    var question = bobsBurgersQuestion[question].question;
    var choices = bobsBurgersQuestion[question].choices;

    $("#quiz").text(question);
}


$(".start").click(function(){
    askQuestion();
    $(".start").remove();
});
