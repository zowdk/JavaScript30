//2. Build functions
//3. Hook up event listeners

const player = document.querySelector(".player");
const video = player.querySelector(".viewer");

const progressBar = player.querySelector(".progress");
const progressFilled = player.querySelector(".progress__filled");
const playerToggle = player.querySelector(".toggle");
const playerSlider = player.querySelectorAll(".player__slider");
const skipButtons = player.querySelectorAll("[data-skip]");

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
