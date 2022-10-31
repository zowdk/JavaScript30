const player = document.querySelector(".player");
const video = player.querySelector(".viewer");

const progressBar = player.querySelector(".progress");
const progressFilled = player.querySelector(".progress__filled");
const playerToggle = player.querySelector(".toggle");
const playerSlider = player.querySelectorAll(".player__slider");
const skipButtons = player.querySelectorAll("[data-skip]");

//2. FUNCTIONS

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

//Write a function that handles changes with the range inputs
function handleRangeUpdate() {
  video[this.name] = this.value;
}

//Write a function that handles the progress bar updating in real time,

function handleProgress() {
  const percent = (video.currentTime / video.duration) * 100;
  progressBar.style.flexBasis = `${percent}%`;
}

//Make a function scrub, that jumps to corresponding points in video when clicked
function scrub(e) {
  const scrubTime = (e.offsetX / progressBar.offsetWidth) * video.duration;
  video.currentTime = scrubTime;
}
//3. EVENT LISTENERS

//when play button or video screen get clicked, togglePlay
video.addEventListener("click", togglePlay);
playerToggle.addEventListener("click", togglePlay);

//listen on video and update the button so user knows to play / pause
video.addEventListener("play", updateButton);
video.addEventListener("pause", updateButton);

//listen for the video to emit an event, then run handleProgress
video.addEventListener("timeupdate", handleProgress);

//listen for click on progress bar
progressBar.addEventListener("click", scrub);

//listen for progress bar getting dragged - clicked AND dragged
let mousedown = false;

//move video progress to corresponding point only if progress bar gets clicked
progressBar.addEventListener("mousemove", (e) => mousedown && scrub(e));
progressBar.addEventListener("mousedown", () => (mousedown = true));
progressBar.addEventListener("mouseup", () => (mousedown = false));

//listen for a click on anything with data-skip attribute
skipButtons.forEach((button) => button.addEventListener("click", skip));

//listen for changes AND mousemove events on sliders/ range inputs
playerSlider.forEach((playerSlider) =>
  playerSlider.addEventListener("change", handleRangeUpdate)
);
playerSlider.forEach((playerSlider) =>
  playerSlider.addEventListener("mousemove", handleRangeUpdate)
);
