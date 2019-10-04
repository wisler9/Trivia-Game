var counter = 0;
var timer = 45;
var correct = 0;
var incorrect = 0;
var answered = 0;
var unanswered = 0;


function tenSeconds() {
    // in the element with an id of `time-left` add an h2 saying About 5 Seconds Left!
    // console log 5 seconds left
    $("#time-remaining").append("<h2>About 5 Seconds Left!</h2>");
    setTimeout(fiveSeconds, 5000);
    console.log("5 seconds left");
  }
  tenSeconds();
  
//   function timeUp() {
//     // in the element with an id of `time-left` add an h2 saying Time's Up!
//     // console log done
//     console.log("done");
//     $("#time-remaining").append("<h2>About 10 Seconds Left!</h2>");
//     console.log("time is up");
//   }
//   timeUp(); 