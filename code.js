var timer = document.getElementById("time");
var seconds = 30;
var startButton = document.getElementById("startTime");
var title = document.getElementById("title");
var subTitle = document.getElementById("subtitle");
var questionCounter = -1;
var result = document.getElementById("result");
var choiceUL = document.getElementById("choiceUL");
var score = 0;
var timerID;
var scoreForm = document.getElementById("scoreform");

var questionarray = [
  {
    title: "What is  used to connect a css file?",
    answer: "link",
    choices: ["link", "div", "wrapper"],
  },
  {
    title: "What is the html tag for an unordered list?",
    answer: "ul",
    choices: ["li", "ul", "ulist"],
  },
  {
    title: "What is used to link a Javascript file to an html file?",
    answer: "script",
    choices: ["script", "href", "input"],
  },
  {
    title: "The # symbol symbol specifies that the selector is ____?",
    answer: "id",
    choices: ["class", "tag", "id"],
  },
];

function startQuiz() {
  title.textContent = "";
  subTitle.style.display = "none";
  startButton.style.display = "none";
  timerID = setInterval(function () {
    seconds--;
    timer.textContent = seconds + " seconds";
    if (seconds <= 0) {
      clearInterval(timerID);
      gameOver();
    }
  }, 1000);
  displayQuestion();
}

startButton.onclick = startQuiz;

// displayQuestion();

function gameOver() {
  title.textContent = "GAME OVER!";
  result.textContent = "Your Score" + score;
  choiceUL.innerHTML = "";
  scoreForm.style.display = "block";
}

function displayQuestion() {
  questionCounter += 1;
  if (questionCounter >= questionarray.length) {
    clearInterval(timerID);
    gameOver();
  } else {
    var currentQuestion = questionarray[questionCounter];
    title.textContent = currentQuestion.title;
    result.textContent = "";
    var htmlString = "";
    for (var i = 0; i < currentQuestion.choices.length; i++) {
      htmlString +=
        `<li class = "choice">` + currentQuestion.choices[i] + "</li>";
    }
    choiceUL.innerHTML = htmlString;
    var choiceArray = document.getElementsByClassName("choice");
    for (var i = 0; i < choiceArray.length; i++) {
      var listItem = choiceArray[i];
      listItem.addEventListener("click", function (event) {
        if (event.target.innerText === currentQuestion.answer) {
          score += 5;
          (seconds += 5), (result.textContent = "Correct Answer");
          displayQuestion();
        } else {
          score -= 5;
          seconds -= 5;
          result.textContent = "Wrong Answer";
          displayQuestion();
        }
      });
    }
  }
}


// get items out of local storage and put them into new array
// push current score and initials into the new array
// set the new array into local storage
