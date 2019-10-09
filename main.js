var studyButton = document.querySelector(".study-button");
var meditateButton = document.querySelector(".meditate-button");
var exerciseButton = document.querySelector(".exercise-button");
var minutesInput = document.querySelector(".minutes-input");
var secondsInput = document.querySelector(".seconds-input");

studyButton.addEventListener("click", styleStudyButton);
meditateButton.addEventListener("click", styleMeditateButton);
exerciseButton.addEventListener("click", styleExerciseButton);
minutesInput.addEventListener("keydown", acceptNumbersOnly);
secondsInput.addEventListener("keydown", acceptNumbersOnly);

function acceptNumbersOnly(event) {
  console.log(event)
  if (event.keyCode === 69) {
    event.preventDefault();
  }
}


function styleStudyButton(event) {
  if (event.target.classList.contains("study-button")) {
    studyButton.style.color = "#B3FD78";
    studyButton.style.borderColor = "#B3FD78";
    studyButton.style.backgroundImage = "url(./assets/study-active.svg)";
  } else {
    studyButton.style.color = "#FFFFF";
    studyButton.style.borderColor = "#FFFFF";
    studyButton.style.backgroundImage = "url(./assets/study.svg)";
  }
}

function styleMeditateButton() {
  meditateButton.style.color = "#C278FD";
  meditateButton.style.borderColor = "#C278FD";
  meditateButton.style.backgroundImage = "url(./assets/meditate-active.svg)";
}

function styleExerciseButton() {
  exerciseButton.style.color = "#FD8078";
  exerciseButton.style.borderColor = "#FD8078";
  exerciseButton.style.backgroundImage = "url(./assets/exercise-active.svg)";
}
