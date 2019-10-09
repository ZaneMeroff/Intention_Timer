var activityButton = document.querySelector(".start-activity-button");
var studyButton = document.querySelector(".study-button");
var meditateButton = document.querySelector(".meditate-button");
var exerciseButton = document.querySelector(".exercise-button");
var minutesInput = document.querySelector(".minutes-input");
var secondsInput = document.querySelector(".seconds-input");
var accomplishInput = document.querySelector(".accomplish-input");
var accomplishHiddenError = document.getElementById("accomplish-error-message");
var minuteHiddenError = document.getElementById("minute-error-message");
var secondHiddenError = document.getElementById("second-error-message")

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
  if (studyButton.classList.contains("study-button")) {
    studyButton.classList.toggle("styleStudyButton");
  }
}

function styleMeditateButton() {
  if (meditateButton.classList.contains("meditate-button")) {
    meditateButton.classList.toggle("styleMeditateButton");
  }
}

function styleExerciseButton() {
  if (exerciseButton.classList.contains("exercise-button")) {
    exerciseButton.classList.toggle("styleExerciseButton")
  }
}
