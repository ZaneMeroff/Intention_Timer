var accomplishHiddenError = document.getElementById("accomplish-error-message");
var accomplishInput = document.querySelector(".accomplish-input");
var accomplishText = document.getElementById("user-accomplish-input");
var activityButton = document.querySelector(".start-activity-button");
var chosenCatagory = "";
var congratsMessage = document.getElementById("congrats-message");
var exerciseButton = document.querySelector(".exercise-button");
var logActivityButton = document.getElementById("log-activity-button");
var meditateButton = document.querySelector(".meditate-button");
var minutesDisplay = document.getElementById("minutes-display");
var minuteHiddenError = document.getElementById("minute-error-message");
var minutesInput = document.querySelector(".minutes-input");
var leftSection = document.querySelector(".left-section");
var secondHiddenError = document.getElementById("second-error-message");
var secondsDisplay = document.getElementById("seconds-display");
var secondsInput = document.querySelector(".seconds-input");
var startButton = document.getElementById("start-button");
var startingMinutes;
var startingSeconds;
var studyButton = document.querySelector(".study-button");
var timerScreen = document.querySelector(".timer-screen");
var newActivityButton = document.querySelector(".create-new-activity-button");
var newActivityHeader = document.querySelector(".new-activity-heading");
var completedActivityScreen = document.querySelector(".create-new-activity-screen");

activityButton.addEventListener("click", onActivityButtonClick);
exerciseButton.addEventListener("click", styleExerciseButton);
logActivityButton.addEventListener("click", onLogActivityClick);
meditateButton.addEventListener("click", styleMeditateButton);
minutesInput.addEventListener("keydown", acceptNumbersOnly);
secondsInput.addEventListener("keydown", acceptNumbersOnly);
startButton.addEventListener("click", onStartClick);
studyButton.addEventListener("click", styleStudyButton);
newActivityButton.addEventListener("click", showNewActivityScreen);

function onActivityButtonClick() {
  errorMessage(accomplishInput, accomplishHiddenError);
  errorMessage(minutesInput, minuteHiddenError);
  errorMessage(secondsInput, secondHiddenError);
  changeNewActivityHeading();
  displayTimer();
  populateDesiredAccomplishment();
  displayTime();
  startingMinutes = parseInt(minutesInput.value);
  startingSeconds = parseInt(secondsInput.value);
}

function onLogActivityClick() {
   createLogCard();
   styleChosenCatagory();
   showCompletedActivityScreen();
}

 function onStartClick() {
   timer()
   var disableStartButton = document.querySelector(".disable");
   disableStartButton.disabled = true;
 }

// function checkForCatagorySelection() {
//   if (studyButton.classList.contains("???????")) {
//    activityButton.disabled = true;
//   }
// }

function showCompletedActivityScreen() {
  completedActivityScreen.classList.remove("hidden-screen");
  timerScreen.classList.add("hidden-screen");
  newActivityHeader.innerText = "Completed Activity";
}

function showNewActivityScreen() {
  completedActivityScreen.classList.add("hidden-screen");
  leftSection.classList.remove("hidden-screen");
  newActivityHeader.innerText = "New Activity";

}

function createLogCard() {
  var asideContainer = document.getElementById("aside-container");
  var asideParagraph1 = document.getElementById("aside-paragraph1");
  var asideParagraph2 = document.getElementById("aside-paragraph2");
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
  var countdownTimerText = document.getElementById("countdown-timer");
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
