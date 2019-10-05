$("document").ready(function () {
    //Declaring the variables

    var questionIndex,
    wins,
    losses,
    currQuestion;

    // var correctAnswer = 0;

    // var incorrectAnswer = 0;

    // var question = 0;

    // var count = 15;

    // var counter = 0;

    //Setting up the question format 

    var bobsBurgersQuestion =
        [
            {
                question: "When is Bob and Linda's Anniversary?",
                choices: ["March 3rd ", "September 3rd ", "November 3rd ", "October 3rd "],
                correctAnswer: "September 3rd ",
                questionImg: ""
            }, {
                question: "Which of the following lines was NOT said by Tina?",
                choices: ["See you soon, Baboon ", "More like school needs to get ready for me ", "I am a strong, sensual woman ", "If she were a spice, she would be flour "],
                correctAnswer: "If she were a spice, she would be flour ",
                questionImg: ""
            }, {
                question: "What are the ears on Louise's Hat?",
                choices: ["Mouse ", "Cat ", "Bunny ", "Devil "],
                correctAnswer: "Bunny",
                questionImg: ""
            }, {
                question: "Which character on the show is actually voiced by a woman?",
                choices: ["Louise ", "Tina ", "Linda ", "Gretchen "],
                correctAnswer: "Louise",
                questionImg: ""
            }, {
                question: "Which recess activity did Mr. Frond introduce that Gene originally hated?",
                choices: ["Tether Ball ", "GaGa Ball ", "Racket Ball ", "Volleyball "],
                correctAnswer: "GaGa Ball",
                questionImg: ""
            }, {
                question: "What is the name of Gayle's infamous cat?",
                choices: ["Mr. Whiskers ", "Mr. Whispers ", "Mr. Business ", "Mr. Giggles "],
                correctAnswer: "Mr. Business",
                questionImg: ""
            }, {
                question: "Which of the following changes in every episode?",
                choices: ["The storefront next door ", "The Burger of the Day ", "The color of the front door ", "1 & 2 "],
                correctAnswer: "1 & 2",
                questionImg: ""
            },
        ];

    

    $(".start").click(function () {
        initializeGame();
        $(".start").remove();
    });

    $("button").on("click", function () {
        var answerChoice = $(this).text();

        checkAnswer(answerChoice);
    });

    function initializeGame(){
        questionIndex = 0;
        wins = 0;
        losses = 0;
        currQuestion = bobsBurgersQuestion[questionIndex];
        populateView(currQuestion);
    };

function populateView(questionObject){
    $("#question").text(questionObject.question);
    $("#question-img").attr('src', questionObject.questionImg);
    for(var i=0; i<questionObject.choices.length; i++){
        $("#answer"+i).text(questionObject.choices[i]);
    }
};

function checkAnswer(answerChoice){
    if(currQuestion && answerChoice == currQuestion.correctAnswer){
        wins++;
        nextQuestion();
    }else if(currQuestion && answerChoice !== currQuestion.correctAnswer){
        losses++;
        nextQuestion();
    }
};

function nextQuestion(){
    questionIndex++;
    currQuestion = bobsBurgersQuestion[questionIndex];
    if(currQuestion){
        populateView(currQuestion);
    }else{
        endGame();
    }
}

function endGame(){
    if(wins >= 6){
        alert("You've Won! Alllriiight!");
        initializeGame();
    }else{
        alert("You've Lost.. UHhhhh");
        initializeGame();
    }
};

});

// //Set current question equal to variable. 
// function askQuestion() {
//     //set question variable
//     var currentQuestion = bobsBurgersQuestion[counter].question;
//     //set choices variable
//     var anw = bobsBurgersQuestion[counter].choices;

//     $question = $("<div>").addClass("form-group text-center qtext");
//     //use for loop
//     for (var i = 0; i < question.length; i++) {

//         var choiceLabel = $("<button>");
//         choiceLabel.text(question.choices[i])
//             .addClass("button")
//             .appendTo(choice);
//         choice.appendTo($question);
//     }



//     //append question to div
//     $("#quiz").append(currentQuestion);
//     //append choices to div
//     $("#anw").append(anw)

//     //increment counter up

// }



