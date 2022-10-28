//1. Get elements:
//2. Build functions
//3. Hook up event listeners

const player = document.querySelector(".player");
const video = player.querySelector(".viewer");

const progressBar = player.querySelector(".progress");
const progressFilled = player.querySelector(".progress__filled");
const playerToggle = player.querySelector(".toggle");
const playerSlider = player.querySelectorAll(".player__slider");
const skipButtons = player.querySelectorAll("[data-skip]");
