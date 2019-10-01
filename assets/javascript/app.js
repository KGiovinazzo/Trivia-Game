//Declaring the variables

var userPick;

var correctAnswer = 0;

var incorrectAnswer = 0;

var question = 0;

var count = 15;

var counter = 0;

//Setting up the question format

var bobsBurgersQuestion =
    [
        {
            question: "When is Bob and Linda's Anniversary?",
            choices: ["March 3rd ", "September 3rd ", "November 3rd ", "October 3rd "],
            correctAnswer: "September 3rd "
        }, {
            question: "Which of the following lines was NOT said by Tina?",
            choices: ["See you soon, Baboon ", "More like school needs to get ready for me ", "I am a strong, sensual woman ", "If she were a spice, she would be flour "],
            correctAnswer: "If she were a spice, she would be flour "
        }, {
            question: "What are the ears on Louise's Hat?",
            choices: ["Mouse ", "Cat ", "Bunny ", "Devil "],
            correctAnswer: "Bunny"
        }, {
            question: "Which character on the show is actually voiced by a woman?",
            choices: ["Louise ", "Tina ", "Linda ", "Gretchen "],
            correctAnswer: "Louise"
        }, {
            question: "Which recess activity did Mr. Frond introduce that Gene originally hated?",
            choices: ["Tether Ball ", "GaGa Ball ", "Racket Ball ", "Volleyball "],
            correctAnswer: "GaGa Ball"
        }, {
            question: "What is the name of Gayle's infamous cat?",
            choices: ["Mr. Whiskers ", "Mr. Whispers ", "Mr. Business ", "Mr. Giggles "],
            correctAnswer: "Mr. Business"
        }, {
            question: "Which of the following changes in every episode?",
            choices: ["The storefront next door ", "The Burger of the Day ", "The color of the front door ", "1 & 2 "],
            correctAnswer: "1 & 2"
        },
    ];

//Set current question equal to variable. 
function askQuestion() {
    //set question variable
    var currentQuestion = bobsBurgersQuestion[counter].question;
    //set choices variable
    var anw = bobsBurgersQuestion[counter].choices;

    $question = $("<div>").addClass("form-group text-center qtext");
    //use for loop
    for (var i = 0; i < question.length; i++) {

            var choiceLabel = $("<button>");
            choiceLabel.text(question.choices[i])
            .addClass("button")
            .appendTo(choice);
            choice.appendTo($question);
    }



    //append question to div
    $("#quiz").append(currentQuestion);
    //append choices to div
    $("#anw").append(anw)

    //increment counter up

}

// function showAnswers() {
//     // var question = bobsBurgersQuestion[question].question;
//     var anw = bobsBurgersQuestion[counter].choices;

//     $("#anw").append(anw)
// }


$(".start").click(function () {
    askQuestion();
    $(".start").remove();
});
