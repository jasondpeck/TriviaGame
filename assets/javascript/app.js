
$(document).ready(function() {

//declearing variables for countdown timer, the correct answer choices in order of questions, and "total is equal to the length of the answers variable" for the loop
  var number = 60;
  var answers = ["D","B","C","C","A","B","B","C","A","D"];
  var tot = answers.length;

//functions for starting the game and the countdown timer
$("#start").click(function() {
$("#start").on("click", start);

  function start(){
    counter = setInterval(timer, 1000);
  }
  function timer(){
    number--
      $("#countdown").html(number);
        if (number === 0){
          alert("Game Over!")
            stop();
  }
}

//function for stopping the timer when it reaches 0
  function stop(){
    clearInterval(counter);
  }

//function for recording the player's choices based on each value (letters A-D) for each radio button
  function getInput(radioName){
    var radios = document.getElementsByName(radioName);
      for(var i=0; i<radios.length; i++)
        if(radios[i].checked) return radios[i].value;
  }

//function for incrementing the score based on if each answer matches the array of the answers variable for each question
  function getScore(){
    var score = 0;
      for (var i=0; i<tot; i++)
        if(getInput("question"+i)===answers[i]) score += 1;
          return score;
  }

  //function for alerting the score when the player hits the submit button
  function alertScore(){
    alert("You got " + getScore() +" out of "+ tot + " questions right!");
  }

  $("#results").on("click", alertScore)

  start();
  });
});