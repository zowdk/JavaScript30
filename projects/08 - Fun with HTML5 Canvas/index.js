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
let lastX = 0;
let lastY = 0;
let hue = 0;

function draw(e) {
  if (!isDrawing) return;
  console.log(e);
  ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;

  ctx.beginPath();
  //start from
  ctx.moveTo(lastX, lastY);
  //go to
  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.stroke();
  ctx.lineWidth = 100;

  //written in fancy es6 destructuring [lastX, lastY] = [e.offsetX, e.offsetY];
  lastX = e.offsetX;
  lastY = e.offsetY;
  hue++;
}

// click & drag functionality
canvas.addEventListener("mousedown", (e) => {
  isDrawing = true;

  [lastX, lastY] = [e.offsetX, e.offsetY];
});

canvas.addEventListener("mousemove", draw);
canvas.addEventListener("mouseup", () => (isDrawing = false));
canvas.addEventListener("mouseout", () => (isDrawing = false));
