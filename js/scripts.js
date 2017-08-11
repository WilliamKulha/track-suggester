$(document).ready(function() {
  $("#survey").submit(function(event) {
    var scores = [0, 0, 0, 0];
    var questions = ["question1", "question2", "question3", "question4", "question5"];

    questions.forEach(function(q) {
      var answer = parseInt($("select#" + q).val());
      scores[answer] += 1;
    });

    var indexOfMax = scores.indexOf(Math.max.apply(null, scores));
    $(".form-container").hide();
    if (indexOfMax === 0) {
      $(".c-sharp").fadeIn(2500);
      $(".jumbotron").hide();
    } else if (indexOfMax === 1) {
      $(".java").fadeIn(2500);
      $(".jumbotron").hide();
    } else if (indexOfMax === 2) {
      $(".php").fadeIn(2500);
      $(".jumbotron").hide();
    } else {
      $(".ruby").fadeIn(2500);
      $(".jumbotron").hide();
    }

    event.preventDefault();
  });
});
