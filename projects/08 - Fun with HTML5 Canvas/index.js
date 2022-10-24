const canvas = document.querySelector("#draw");

const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// base styles for stoke setting, line cap, line join
ctx.strokeStyke = "#BADA55";
ctx.lineJoin = "round";
ctx.lineCap = "round";
