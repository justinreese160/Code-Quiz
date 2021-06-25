var timer = document.getElementById("time");
var startbutton = document.getElementById("startTime");
var title = document.getElementById("title");
var subtitle = document.getElementById("subtitle");
var questioncounter = 0;
var choiceUL = document.getElementById("choicesUl");
var questionarray = [
  {
    title: "Question 1",
    answer: "choice 2",
    choices: ["choice1", "choice2", "choice3"],
  },
  {
    title: "Question 2",
    answer: "choice 2",
    choices: ["choice1", "choice2", "choice3"],
  },
  {
    title: "Question 3",
    answer: "choice 2",
    choices: ["choice1", "choice2", "choice3"],
  },
];
var seconds = 30;
//removes text on screen and starts quiz
function startquiz() {
  title.remove();
  subtitle.remove();
  startbutton.remove();
  // starts timer countdown
  var timerId = setInterval(function () {
    seconds--;
    timer.textContent = seconds + " seconds";
    if (seconds === 0) {
      clearInterval(timerId);
    }
  }, 1000);
}
startbutton.onclick = startquiz;

function displayQuestion() {
  // 
  var currentQuestion = questionarray[questioncounter];
  var htmlString = "";
  for (var i = 0; i < currentQuestion.choices.length; i++) {
    htmlString += "<li>" + currentQuestion.choices[i] + "</li>";
  }

  questioncounter++;
}
displayQuestion();
