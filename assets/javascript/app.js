var TriviaGame = {
        correct_answers: ["2 dozen", "Maximus", "Jafar", "Flower", "Bavaria"],
        users_answers: [],
        num_correct: 0,
        num_incorrect: 0,
        game_timer: "",
        me: this,
        startTimer: function (thisref) {
            thisref.game_timer = setInterval(function () {
                var currentTimer = parseInt($("span#timer_display").text());
                console.log("timerEquals" + currentTimer);
                currentTimer--;
                $("span#timer_display").text(currentTimer);
                if (currentTimer == 0) 
                {
                    //this is where we call the getResults() function to end the game.
                    clearInterval(me.gameTimer);
                    me.getAnswers();
                }
            }, 1000);
        },
        getAnswers: function () {
            var num_questions = this.correct_answers.length;
            for (var x = 1; x <= num_questions; x++) {
                var current_answer = $("input:radio[name='answer_" + x + "']:checked").val();
                console.log("User answered " + current_answer + " for question" + x);
                if (current_answer == this.correct_answers[x - 1])
                {
                    this.num_correct++;
                    console.log("Correct");
                } 
                else
                {
                    this.num_incorrect++;
                    console.log("Incorrect");
                }

            }
            $("#submit").hide();
            this.showResults();
        },
        showResults: function () {
            $("#num_correct").text(this.num_correct);
            $("#num_incorrect").text(this.num_incorrect);
            $("div#results").show();
            }
        };

        $(document).ready(function () {

            TriviaGame.startTimer(TriviaGame);
            $("button#submit").click(function() {
                clearInterval(TriviaGame.game_timer);
                TriviaGame.getAnswers();
            })

        });