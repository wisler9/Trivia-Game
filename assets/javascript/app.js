var counter = 0;
var timer = 45;
var correct = 0;
var incorrect = 0;
var answered = 0;
var unanswered = 0;
var intervalId;

//  When the stop button gets clicked, run the stop function.
$("#startBtn").on("click", run);
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
  $("#time-remaining").html("<h2>Time remaining: "+ timer + "</h2>");
  //  Once number hits zero...
  if (timer === 0) {
    //  ...run the stop function.
    stop();
    //  Alert the user that time is up.
    alert("Time Up!");
  }
}

//  The stop function
function stop() {

  //  Clear our intervalId, we just pass the name of the intervalto the clearInterval function.
  clearInterval(intervalId);
}
