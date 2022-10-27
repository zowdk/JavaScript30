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
console.assert(1 === 2, "That is wrong!");

const p = document.querySelectorAll("p");
console.assert(p.classList.contains("ouch"), "That is wrong!");

// clearing - clear console
console.clear();

// Viewing DOM Elements - find available methods & properties on element
console.log(p);
console.dir(p); // see all methods & properties

// Grouping together
dogs.forEach((dog) => {
  console.group(`${dog.name}`); // less messy with groupCollapsed
  console.log(`This is ${dog.name}`);
  console.log(`${dog.name} is ${dog.age} years old`);
  console.log(`${dog.name} is ${dog.age * 7} dog years old`);
  console.groupEnd(`${dog.name}`); // pass same string used to define group
});
// counting - how many is this method called?
console.count("Wes");
console.count("Steeve");
console.count("Wes");
console.count("Wes");
console.count("Wes");

console.count("Steeve");
console.count("Steeve");
console.count("Wes"); // 8 times

// timing - how long does something take?
console.time("fetching data");

fetch("https://api.github.com/users/zowdk")
  .then((data) => data.json())
  .then((data) => {
    console.timeEnd("fetching data");
    console.log(data);
  });

//table - take an arr of objects, display in a table

console.table(dogs);
