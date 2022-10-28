const player = document.querySelector(".player");
const video = player.querySelector(".viewer");

const progressBar = player.querySelector(".progress");
const progressFilled = player.querySelector(".progress__filled");
const playerToggle = player.querySelector(".toggle");
const playerSlider = player.querySelectorAll(".player__slider");
const skipButtons = player.querySelectorAll("[data-skip]");

//2. Build functions

//Write a function that plays a paused video,
// or pauses a playing video.

function togglePlay() {
  //   const method = video.paused ? "play" : "pause";
  //   video[method]();
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
}
//Write a function updateButton that displays play or pause
function updateButton() {
  const icon = this.paused ? "►" : "◼︎";
  console.log(icon);
  togglePlay.textContent = icon;
}
// Make a function for skip buttons
function skip() {
  console.log("skipping!");
  video.currentTime += parseFloat(this.dataset.skip);
}

//3. Hook up event listeners

//when play button or video screen get clicked, togglePlay
video.addEventListener("click", togglePlay);
playerToggle.addEventListener("click", togglePlay);

//listen on video and update the button so user knows to play / pause
video.addEventListener("play", updateButton);
video.addEventListener("pause", updateButton);

//listen for a click on anything with data-skip attribute
skipButtons.forEach((button) => button.addEventListener("click", skip));
