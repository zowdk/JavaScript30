const canvas = document.querySelector("#draw");

const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// base styles
ctx.strokeStyke = "#BADA55"; // drawing color
ctx.lineJoin = "round"; // end of line drawn should be round
ctx.lineCap = "round"; // round line when it meets another line

// dummy variables

let isDrawing = false;
