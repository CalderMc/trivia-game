$("document").ready(function() {
    var numCorrect = 0;
    var numIncorrect = 0;
    var currentQuestion = {};
    var currentQuestionIndex = -1;
    var chosenAnswer = "";
    var chosenOption;
    var questions = [];
    var roundStarted = false;
  
    $("button#start-game").on("click", function startGame() {
      numCorrect = 0;
      numIncorrect = 0;
      currentQuestion = {};
      currentQuestionIndex = -1;
      chosenAnswer = "";
      roundStarted = false;
      $("div#buttonContainer").hide();
      $("div#question").empty();
      questions = [
        { 
          question: "What do you call an elephant that doesn't matter?",
          answers: [
            "An irrelephant",
            "Rosie O'Donnell",
            "nothing",
            "Dumbo",
          ],
          correctAnswer: "An irrelephant"
        },
        {
          question: "What do they call Miley Cyrus in Europe?",
          answers: [
            "Hey You",
            "Kilometry Cyrus",
            "Walking Syphillis",
            "Hanna Montana",
          ],
          correctAnswer: "Kilometry Cyrus"
        },
        {
          question: "What do you call a fake noodle?",
          answers: [
            "A Spaghettio",
            "Ravi-oh-no",
            "La-got-cha",
            "An Impasta",
          ],
          correctAnswer: "An Impasta"
        },
        {
          question: "Why can't T-Rexes clap their hands?",
          answers: [
            "Their arms are too short",
            "They are Cleveland Browns fans",
            "Because they are extinct",
            "They need manicures",
          ],
          correctAnswer: "Because they are extinct"
        },
        {
          question: "Want to hear a word I just made up?",
          answers: [
            "Okay then",
            "Pehtelkds",
            "Dohickey",
            "Plagiarism",
          ],
          correctAnswer: "Plagiarism"
        },
        {
          question: "What concert costs 45 cents?",
          answers: [
            "Anything with the Osmonds",
            "Yanni Goes Country",
            "Willie Nelson: The Remix Tour",
            "50 Cent ft. Nickelback",
          ],
          correctAnswer: "50 Cent ft. Nickelback"
        },
        {
          question: "What did one snowman say to the other one?",
          answers: [
            "Sure is hot out here",
            "Happy New Year",
            "Do you smell carrots?",
            "Frosty, is that you?",
          ],
          correctAnswer: "Do you smell carrots?"
        },
        {
          question: "What do you do when a blonde throws a grenade at you?",
          answers: [
            "Duck",
            "Wait for her to fetch it",
            "Pull the pin and throw it back",
            "Tell her she throws like a girl",
          ],
          correctAnswer: "Pull the pin and throw it back"
        },
        {
          question: "Why do you never see elephants hiding in trees?",
          answers: [
            "They're chameleons",
            "You never think to look for them",
            "They're hiding behind the leaves",
            "Because they're so good at it",
          ],
          correctAnswer: "Because they're so good at it"
        },
        {
          question: "How do you make a hankie dance?",
          answers: [
            "Shake it",
            "Put a little boogie in it",
            "Wiggle it",
            "Blow in it",
          ],
          correctAnswer: "Put a little boogie in it"
        },
        {
          question: "What’s ET short for?",
          answers: [
            "Because he’s only got little legs",
            "Extra-Terrestrial",
            "Eastern Time",
            "Entertainment Tonight",
          ],
          correctAnswer: "Because he’s only got little legs"
        },
        {
            question: "What has four letters, sometimes has nine letters, and never has five letters…",
            answers: [
              "no idea",
              "I give up",
              "No clue",
              "Duh, that's not a question",
            ],
            correctAnswer: "Duh, that's not a question"
          },
          {
            question: "What was Snoop's favorite childhood song?",
            answers: [
              "Wheels on the bus",
              "Old MacDonald",
              "Puff The Magic Dragon",
              "Twinkle Twinkle Little Star",
            ],
            correctAnswer: "Puff The Magic Dragon"
          },
          {
            question: "Why is Snoop Dogg black?",
            answers: [
              "Too much sun",
              "Side effect of weed",
              "He isn't!",
              "Because his parents were",
            ],
            correctAnswer: "Because his parents were"
          },
          {
            question: "Why can Snoop never hold onto a hot pocket?",
            answers: [
              "Always got the munchies",
              "Too many peeps in the posse",
              "fo sizzle",
              "Because he drops it like it's hot",
            ],
            correctAnswer: "Because he drops it like it's hot"
          },
          {
            question: "What does Snoop Dogg use to keep his whites their whitest?",
            answers: [
              "Blea-ochh",
              "Oxi-clean",
              "bleach",
              "clorox",
            ],
            correctAnswer: "Blea-ochh"
          },
          {
            question: "Why does Snoop Dogg carry an umbrella?",
            answers: [
              "to protect his 'fro",
              "fo drizzle my nizzle",
              "so the rain won't put out his doobie",
              "pimp status",
            ],
            correctAnswer: "fo drizzle my nizzle"
          },{
            question: "What's brown and rhymes with Snoop?",
            answers: [
              "hoop",
              "poop",
              "Dr. Dre",
              "group",
            ],
            correctAnswer: "Dr. Dre"
          },
          
      ];
      function displayQuestion() {
        if (questions.length == 0) {
          $("div.answer").empty();
          $("div#question").html(
            "You got " + numCorrect + " correct<br>" + 
            "You got " + numIncorrect + " incorrect<br>" +
            "You got " + (numCorrect / (numCorrect + numIncorrect)) * 100 + "% correct"
          );
          $("button#start-game").html("Restart Game");
          currentQuestionIndex = -1;
          $("div#buttonContainer").show();
        } else {
          roundStarted = true;
          currentQuestionIndex = Math.floor(Math.random() * questions.length);
          currentQuestion = questions[currentQuestionIndex];
          questions.splice(currentQuestionIndex, 1);
          $("div#question").html(currentQuestion.question);
          for (var i = 0; i < Object.keys(currentQuestion.answers).length; i++) {
            if (currentQuestion.answers[i] === currentQuestion.correctAnswer) {
              $("div#answer" + i).html("<button class='btn btn-secondary' data-value='correct'>" + currentQuestion.answers[i] + "</button>");
            } else {
              $("div#answer" + i).html("<button class='btn btn-secondary'>" + currentQuestion.answers[i] + "</button>");
            }
          };
          setTimer();
        }
      }
  
      displayQuestion();
  
      var timer;
  
      function setTimer() {
        var timeLeft = 30
        $("#questionTimer").html(timeLeft);
        timer = setInterval(function x() { 
          $('#questionTimer').html("You have " + timeLeft-- + " seconds remaining");
          if (timeLeft == -1) {
            clearInterval(timer);    
            $("div#questionTimer").empty();
            numIncorrect++;
            $("div#question").text("Sorry, you ran out of time, the correct answer was:");
            $("[data-value='correct']").addClass("btn-success"); 
            var displayNextQuestion = setTimeout(displayQuestion, 3000);   
          } 
          return x;
        }(), 1000);
      };
  
      $("div.answer").off("click").on("click", "button", function() {
        if (roundStarted === true) {
          chosenButton = $(this);
          chosenAnswer = $(this).text();
          clearInterval(timer);
          $("div#questionTimer").empty();
          checkAnswer();
        }
      });
    
      function checkAnswer() {
        roundStarted = false;
        if (chosenAnswer === currentQuestion.correctAnswer) {
          numCorrect++;
          $("div#question").empty();
          $("div#question").text("That's Correct!");
          chosenButton.addClass("btn-success");
          var displayNextQuestion = setTimeout(displayQuestion, 3000);
        } else {
          numIncorrect++;
          $("div#question").empty();
          $("div#question").text("Sorry, you got it wrong, the correct answer was:");
          chosenButton.addClass("btn-danger");
          $("[data-value='correct']").addClass("btn-success");
          var displayNextQuestion = setTimeout(displayQuestion, 3000);
        }
      };
    });
  });