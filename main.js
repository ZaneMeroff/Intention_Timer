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
var startButton = document.getElementById("start-button");
var accomplishText = document.getElementById("user-accomplish-input");
var startingMinutes;
var startingSeconds;
var minutesDisplay = document.getElementById("minutes-display");
var secondsDisplay = document.getElementById("seconds-display");
var countdownTimerText = document.getElementById("countdown-timer");
var congratsMessage = document.getElementById("congrats-message");
var logActivityButton = document.getElementById("log-activity-button");
var asideContainer = document.getElementById("aside-container");
var asideParagraph1 = document.getElementById("aside-paragraph1");
var asideParagraph2 = document.getElementById("aside-paragraph2");
var chosenCatagory = "";

startButton.addEventListener("click", handleTimerStart);
activityButton.addEventListener("click", onActivityButtonClick);
studyButton.addEventListener("click", styleStudyButton);
meditateButton.addEventListener("click", styleMeditateButton);
exerciseButton.addEventListener("click", styleExerciseButton);
minutesInput.addEventListener("keydown", acceptNumbersOnly);
secondsInput.addEventListener("keydown", acceptNumbersOnly);
logActivityButton.addEventListener("click", onLogActivityClick);

function onActivityButtonClick() {
  errorMessage(accomplishInput, accomplishHiddenError);
  errorMessage(minutesInput, minuteHiddenError);
  errorMessage(secondsInput, secondHiddenError);
  displayTimer();
  changeNewActivityHeading();
  populateDesiredAccomplishment();
  displayTime();
  startingMinutes = parseInt(minutesInput.value);
  startingSeconds = parseInt(secondsInput.value);
}

function onLogActivityClick() {
   createLogCard();
   styleChosenCatagory();
}

function handleTimerStart() {
   timer();
}
//    stop();
// }
//
// function stop() {
//   e.startButton.removeEventListener("click", stop)
// }

function createLogCard() {
  asideParagraph1.classList.add("hidden-screen");
  asideParagraph2.classList.add("hidden-screen");
  asideContainer.innerHTML += `
  <div class="log-activity-card">
    <p class="card-catagory">${chosenCatagory}</p>
    <p class="card-time">${startingMinutes} MIN ${startingSeconds} SECONDS</p>
    <p class="card-accomplishment">${accomplishInput.value}</p>
  </div>`
}

function styleChosenCatagory() {
  var cardCatatgoryBorder = document.querySelector(".card-catagory");
  if (chosenCatagory === "Study") {
  cardCatatgoryBorder.style.borderColor = "#B3FD78";
  } else if (chosenCatagory === "Meditate") {
  cardCatatgoryBorder.style.borderColor = "#C278FD";
  } else {
    cardCatatgoryBorder.style.borderColor = "#FD8078";
   }
}

function timer() {
  var remainingSeconds = startingSeconds;
  var remainingMinutes = startingMinutes;
  var countdown = setInterval(function() {
    if (remainingSeconds <= 0 && remainingMinutes <= 0) {
      clearInterval(countdown)
      startButton.innerText = "COMPLETE!";
      accomplishText.classList.add("hidden-screen");
      countdownTimerText.classList.add("hidden-screen");
      congratsMessage.classList.remove("hidden-screen");
      logActivityButton.classList.remove("hidden-screen");
      return;
    }
      remainingSeconds -= 1
      if (remainingSeconds < 0) {
         remainingMinutes -= 1
         remainingSeconds = 59
      }
      if (remainingSeconds > 59) {
         var additionalSeconds = (remainingSeconds % 60)
         remainingSeconds = additionalSeconds;
         var additionalMinutes = (remainingSeconds / 60)
         remainingMinutes = (remainingMinutes + 1);
      }
      minutesDisplay.innerText = addZeroToTimer(remainingMinutes);
      secondsDisplay.innerText = addZeroToTimer(remainingSeconds);
    }, 1000);
}

function addZeroToTimer(time) {
  if(time < 10) {
    time = "0" + time;
  } else {
    time;
  }
  return time;
}

function displayTime() {
  minutesDisplay.innerText = addZeroToTimer(minutesInput.value);
  secondsDisplay.innerText = addZeroToTimer(secondsInput.value);
}


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
    chosenCatagory = "Study";
}

function styleMeditateButton() {
    meditateButton.classList.toggle("styleMeditateButton");
    studyButton.classList.remove("styleStudyButton");
    exerciseButton.classList.remove("styleExerciseButton");
    startButton.style.borderColor = "#C278FD";
    chosenCatagory = "Meditate";
}

function styleExerciseButton() {
    exerciseButton.classList.toggle("styleExerciseButton");
    studyButton.classList.remove("styleStudyButton");
    meditateButton.classList.remove("styleMeditateButton");
    startButton.style.borderColor = "#FD8078";
    chosenCatagory = "Exercise";
}

function displayTimer() {
  if (accomplishInput.value && minutesInput.value && secondsInput.value) {
  timerScreen.classList.remove("hidden-screen");
  leftSection.classList.add("hidden-screen");
  }
}

function changeNewActivityHeading() {
  newActivityHeader.innerText = "Current Activity";
}

function populateDesiredAccomplishment() {
  accomplishText.innerText = accomplishInput.value ;
}
