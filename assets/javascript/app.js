$(document).ready(() => {
  var counter = 0;
  var timer = 15;
  var correct = 0;
  var incorrect = 0;
  var answered = 0;
  var unanswered = 0;
  var intervalId;

  //  When the stop button gets clicked, run the stop function.
  $("#startBtn").click(function(event) {
    event.preventDefault();
    run();
    disableButton();
    formQuestion();
  });

  function disableButton() {
    $("#startBtn").remove();
    // alert("Button has been disabled.");
  }

  // $("#startBtn").click(disableButton, run);

  // function disableButton(){
  //   $("#startBtn").remove();
  //   alert("Button has been disabled.");
  // }

  // $("#stop").on("click", stop);

  //  When the resume button gets clicked, execute the run function.
  // $("#resume").on("click", run);

  //  The run function sets an interval
  //  that runs the decrement function once a second.
  //  *****BUG FIX********
  //  Clearing the intervalId prior to setting our new intervalId will not allow multiple instances.
  function run() {
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
  }

  //  The decrement function.
  function decrement() {
    //  Decrease number by one.
    timer--;
    //  Show the number in the #show-number tag.
    $("#time-remaining").html("<h2>Time remaining: " + timer + "</h2>");
    //  Once number hits zero...
    if (timer === 0) {
      //  ...run the stop function.
      stop();
      //  Alert the user that time is up.
      // alert("Time Up!");
    }
  }

  //  The stop function
  function stop() {
    //  Clear our intervalId, we just pass the name of the intervalto the clearInterval function.
    clearInterval(intervalId);
  }

  // Array list of questions

  var quest = [
    {
      q: "Which year Demi-Leigh Neil-Peters become Miss Universe?",
      a: ["2016", "2013", "2019", "2017"],
      correctAnswer: 4
    },
    {
      q: "Name the largest planet in the universe",
      a: ["Saturn", "Jupiter", "Pluto", "Mars"],
      correctAnswer: 2
    },
    {
      q: "Which year did Albert Einstein die?",
      a: ["1960", "1952", "1955", "1958"],
      correctAnswer: 3
    },
    {
      q: "Which year did the incident of Gulf Oil Spill occur?",
      a: ["2010", "2008", "2015", "2005"],
      correctAnswer: 1
    },
    {
      q: "Who discovered human cell?",
      a: ["Leonard bean", "Issac Pots", "Adam Sandler", "Robert Hooke"],
      correctAnswer: 4
    },
    {
      q: "In which city of Spain did Columbus die??",
      a: ["Barcelona", "Valladolid", "Madrid", "Seville"],
      correctAnswer: 2
    }
  ];

  //  creating questions

  function formQuestion() {
    $("#form").html("<form></form>");
    for (let i = 0; i < quest.length; i++) {
      var element = quest[i];
     ($(".triv-quest").append("<div class='qContainer'></div>"));
      // $(".qContainer").append(element.q + "<br>");
      // console.log(element.q);

      // console.log(this);
      
      for (let k = 0; k < element.q.length; k++) {
        $(".triv-ans").append("<button class='answer-button' id='button' data-name='"  + element.q[k] + "'>" +
            element.q[k] + "</button>");
      }

      for (let j = 0; j < element.a.length; j++){
        element.a[j]
        $(".triv-ans").append("<input type='radio' name='4'>" + element.a[j] + "</input>" + "<br>");
      }
    }


    $("input").attr({
      type: "radio",
      name: "",
      value: "",
      text: ""
    });
  }
});
