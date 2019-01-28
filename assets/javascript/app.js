// (function() {
//   function triviaQuiz() {
//     // need a place to store the HTML output
//     const output = [];

//     // for each question...
//     myQuestions.forEach((currentQuestion, questionNumber) => {
//       // want to store the list of answer choices
//       const answers = [];

//       // and for each available answer...
//       for (letter in currentQuestion.answers) {
//         // ...add an HTML radio button
//         answers.push(
//           `<label>
//             <input type="radio"
//         name="question${questionNumber}" value="${letter}">
//             ${letter} :
//             ${currentQuestion.answers[letter]}
//           </label>`
//         );
//       } 

//       // add this question and its answers to the output
//       output.push(
//         `<div class="question"> ${currentQuestion.question} </div>
//         <div class="answers"> ${answers.join("")} </div>`
//       );
//     });

//     // combine output list into one string of HTML and put it on the page
//     quizContainer.innerHTML = output.join("");
//   }

//   function showResults() {
//     // gather answer containers from quiz
//     const answerContainers = quizContainer.querySelectorAll(".answers");

//     // keep track of user's answers
//     let numCorrect = 0;

//     // for each question...
//     myQuestions.forEach((currentQuestion, questionNumber) => {
//       // find selected answer
//       const answerContainer = answerContainers[questionNumber];
//       const selector = `input[name=question${questionNumber}]:checked`;
//       const userAnswer = (answerContainer.querySelector(selector) || {}).value;

//       // if answer is correct
//       if (userAnswer === currentQuestion.correctAnswer) {
//         // add to the number of correct answers
//         numCorrect++;

var TriviaGame = {
    correct_answers: [2,1,3,2,0],
    users_answers: [],
    user_total_correct_answers: 0,
    getAnswers: function() {
        var num_questions = this.correct_answers.length;
        for (var x=1; x<num_questions; x++) {
            var current_answer = $("input:radio[name='answer_" + x +"']:checked").val();
            console.log("User answered " + current_answer + " for question" + x);
        }
        
    },
    showResults: function() {

    }

};


function startTimer() {
    
    var gameTimer = setInterval(function () {
        var currentTimer = parseInt($("span#timer_display").text());
        console.log("timerEquals" + currentTimer);
        currentTimer--;
        $("span#timer_display").text(currentTimer);
        if(currentTimer == 0)
        {
            //this is where we call the getResults() function to end the game.
            clearInterval(gameTimer);

        }
    }, 1000);
}


$(document).ready(function() {
    startTimer();

}); 