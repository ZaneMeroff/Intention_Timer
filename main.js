var activityButton = document.querySelector(".start-activity-button");
var studyButton = document.querySelector(".study-button");
var meditateButton = document.querySelector(".meditate-button");
var exerciseButton = document.querySelector(".exercise-button");
var minutesInput = document.querySelector(".minutes-input");
var secondsInput = document.querySelector(".seconds-input");
var accomplishInput = document.querySelector(".accomplish-input");
var accomplishHiddenError = document.getElementById("accomplish-error-message");
var minuteHiddenError = document.getElementById("minute-error-message");
var secondHiddenError = document.getElementById("second-error-message");
var newActivityHeader = document.querySelector(".new-activity-heading");
var leftSection = document.querySelector(".left-section");
var timerScreen = document.querySelector(".timer-screen");

// var countdown;
var startButton = document.getElementById("start-button");

// var timerMinutes = document.getElementById("")
// var userMinutes = document.getElementById("user-minutes");
// var userSeconds = document.getElementById("user-seconds");
// var timer = document.getElementById("countdown-timer");
//
// var counter = 0;
// var timeleft = 65;
//
// function convertSeconds(s) {
//   var min = floor (s / 60);
//   var sec = s % 60;
//   return nf(min,2) + ':' + nf(sec, 2);
// }
//
// function setup() {
//    timer.innerHTML(convertSeconds(timeleft - counter));
//
//    function timeIt() {
//      counter++;
//      timer.innerHTML(convertSeconds(timeleft - counter));
//    }
//    setInterval(timeIt, 1000);
// }


// var countdown;
// function timer() {
//   var milla = userSeconds.value * 1000;
//     countdown = setInterval(function() {
//       if (milla <= 0) {
//         clearInterval(countdown)
//         return;
//       }
//       // var timerDisplay = document.querySel
//       milla -= 1000
//       // timerDisplay.innerHTML(`${milla}`)
//       console.log(milla)
//     }, 1000)
// }

// startButton.addEventListener("click", displayTimer);
activityButton.addEventListener("click", onActivityButtonClick);
studyButton.addEventListener("click", styleStudyButton);
meditateButton.addEventListener("click", styleMeditateButton);
exerciseButton.addEventListener("click", styleExerciseButton);
minutesInput.addEventListener("keydown", acceptNumbersOnly);
secondsInput.addEventListener("keydown", acceptNumbersOnly);

function onActivityButtonClick() {
  errorMessage(accomplishInput, accomplishHiddenError);
  errorMessage(minutesInput, minuteHiddenError);
  errorMessage(secondsInput, secondHiddenError);
  displayTimer();
  // switchHeading();
}

// function timer(seconds) {
//   var now = Date.now();
//   var then = (now + seconds) * 1000;
//
//   countdown = setInterval(() => {
//     var secondsLeft = Math.round((then - Date.now()) / 1000);
//     if (secondsLeft = 0) {
//       clearInterval(countdown);
//       return;
//     }
//     console.log(secondsLeft);
//   }, 1000);
// }


// function switchHeading() {
//   if (newActivityHeader.classList.contains("new-activity-heading")) {
//     newActivityHeader.innerHTML = "Current Activity"
//     newActivityHeader.style.color = #CBC9CF;
//   }
// }


function errorMessage(input, error) {
  if (input.value === "") {
    error.style.visibility = "visible";
  } else {
    error.style.visibility = "hidden";
  }
}

function acceptNumbersOnly(event) {
  console.log(event)
  if (event.keyCode === 69) {
    event.preventDefault();
  }
}

function styleStudyButton() {
    studyButton.classList.toggle("styleStudyButton");
    meditateButton.classList.remove("styleMeditateButton");
    exerciseButton.classList.remove("styleExerciseButton");
    startButton.style.borderColor = "#B3FD78";
}

function styleMeditateButton() {
    meditateButton.classList.toggle("styleMeditateButton");
    studyButton.classList.remove("styleStudyButton");
    exerciseButton.classList.remove("styleExerciseButton");
    startButton.style.borderColor = "#C278FD";
}

function styleExerciseButton() {
    exerciseButton.classList.toggle("styleExerciseButton");
    studyButton.classList.remove("styleStudyButton");
    meditateButton.classList.remove("styleMeditateButton");
    startButton.style.borderColor = "#FD8078";
}

function displayTimer() {
  if (accomplishInput.value && minutesInput.value && secondsInput.value) {
  timerScreen.classList.remove("hidden-screen");
  leftSection.classList.add("hidden-screen");
  }
}
