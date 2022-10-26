const dogs = [
  { name: "Snickers", age: 2 },
  { name: "hugo", age: 8 },
];

function makeGreen() {
  const p = document.querySelector("p");
  p.style.color = "#BADA55";
  p.style.fontSize = "50px";
}

// Regular
console.log("hello");

// Interpolated - using %s
console.log("hello, I am a %s string!", "💩 ");
// console.log(`hello, I am a ${var}`);

// Styled - using %c
console.log(
  "%c I am some great text",
  "font-size: 50px; background: red; text-shadow: 10px 10px 0 blue;"
);

// warning!
console.warn("OH NOES!");

// Error :|
console.error("Zut!");

// Info
console.info("crocodiles eat 3-4 people per year");

// Testing - only returns if something is not true
console.assert(1 === 1, "That is wrong!");

// clearing

// Viewing DOM Elements

// Grouping together

// counting

// timing
