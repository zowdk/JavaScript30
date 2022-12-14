const inventors = [
  { first: "Albert", last: "Einstein", year: 1879, passed: 1955 },
  { first: "Isaac", last: "Newton", year: 1643, passed: 1727 },
  { first: "Galileo", last: "Galilei", year: 1564, passed: 1642 },
  { first: "Marie", last: "Curie", year: 1867, passed: 1934 },
  { first: "Johannes", last: "Kepler", year: 1571, passed: 1630 },
  { first: "Nicolaus", last: "Copernicus", year: 1473, passed: 1543 },
  { first: "Max", last: "Planck", year: 1858, passed: 1947 },
  { first: "Katherine", last: "Blodgett", year: 1898, passed: 1979 },
  { first: "Ada", last: "Lovelace", year: 1815, passed: 1852 },
  { first: "Sarah E.", last: "Goode", year: 1855, passed: 1905 },
  { first: "Lise", last: "Meitner", year: 1878, passed: 1968 },
  { first: "Hanna", last: "Hammarström", year: 1829, passed: 1909 },
];

const people = [
  "Bernhard, Sandra",
  "Bethea, Erin",
  "Becker, Carl",
  "Bentsen, Lloyd",
  "Beckett, Samuel",
  "Blake, William",
  "Berger, Ric",
  "Beddoes, Mick",
  "Beethoven, Ludwig",
  "Belloc, Hilaire",
  "Begin, Menachem",
  "Bellow, Saul",
  "Benchley, Robert",
  "Blair, Robert",
  "Benenson, Peter",
  "Benjamin, Walter",
  "Berlin, Irving",
  "Benn, Tony",
  "Benson, Leana",
  "Bent, Silas",
  "Berle, Milton",
  "Berry, Halle",
  "Biko, Steve",
  "Beck, Glenn",
  "Bergman, Ingmar",
  "Black, Elk",
  "Berio, Luciano",
  "Berne, Eric",
  "Berra, Yogi",
  "Berry, Wendell",
  "Bevan, Aneurin",
  "Ben-Gurion, David",
  "Bevel, Ken",
  "Biden, Joseph",
  "Bennington, Chester",
  "Bierce, Ambrose",
  "Billings, Josh",
  "Birrell, Augustine",
  "Blair, Tony",
  "Beecher, Henry",
  "Biondo, Frank",
];

// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's:

//write a function that takes an object and returns an arr of inventors born between 1500 and 1599
// loop through incoming object:
// if inventors.year >= 1500 AND inventors.year < 1599,
// push name to inventorsList
//return inventorsList

const fifteen = inventors.filter(function (inventor) {
  if (inventor.year >= 1500 && inventor.year < 1599) {
    return true;
  }
});
console.table(fifteen);

// reduce this solution further:

const fifteenReduced = inventors.filter((inventor) => {
  inventor.year >= 1500 && inventor.year < 1599;
});

console.table(fifteenReduced);

// Array.prototype.map()
// 2. Give us an array of the inventors first and last names

//setup new arr for full names
//loop through inventors:
// map inventors.first and inventors.last

const fullNames = inventors.map(
  (inventor) => `${inventor.first} + ${inventor.last}`
);

// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest

//loop through array of inventors and use 'bubbling' to sort oldest to youngest

const ordered = inventors.sort(function (a, b) {
  if (a.year > b.year) {
    return 1;
  } else {
    return -1;
  }
});

console.table(ordered);

// reduce this solution further:

const orderedReduced = inventors.sort((a, b) => (a.year > b.year ? 1 : -1));

// Array.prototype.reduce()
// 4. How many years did all the inventors live all together?

//loop through array and get the totalYears for each inventor
// use reduce to return the sum of all totalYears

const totalYears = inventors.reduce((total, inventor) => {
  return total + (inventor.passed - inventor.year);
}, 0);

console.log(totalYears);

// 5. Sort the inventors by years lived
//who lived the longest?
// loop through inventors and sort based on difference in lifespan

const oldest = inventors.sort(function (a, b) {
  const lastGuy = a.passed - a.year;
  const nextGuy = b.passed - b.year;
  if (lastGuy > nextGuy) {
    return 1;
  } else {
    return -1;
  }
});
console.table(oldest);

// alternative solution:

const eldest = inventors.sort(function (a, b) {
  const oldestGuy = a.passed - a.year;
  const nextOldestGuy = b.passed - b.year;

  return oldestGuy > nextOldestGuy ? 1 : -1;
});
// console.table(eldest);

// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris

// get DOM elements by class name from html
// get list of links within DOM elements
//convert (node)list into arr
// convert list of links to list of names by mapping over each link
// filter names list for entries that include 'de'

// const category = document.querySelector(".mw-category");
// const links = Array.from(category.querySelectorAll("a"));
// const de = links
//   .map((link) => link.textContent)
//   .filter((streetName) => streetName.includes("de"));

// console.log(de);

// 7. sort Exercise
// Sort the people alphabetically by last name

// convert str (each name) into arr of char with split
//destructure with square brackets
const alpha = people.sort(function (lastPerson, nextPerson) {
  const [aLast, aFirst] = lastPerson.split(", ");
  const [bLast, bFirst] = nextPerson.split(", ");
  return aLast > bLast ? 1 : -1;
});

// 8. Reduce Exercise
// Sum up the instances of each of these
const data = [
  "car",
  "car",
  "truck",
  "truck",
  "bike",
  "walk",
  "car",
  "van",
  "bike",
  "walk",
  "car",
  "van",
  "car",
  "truck",
];
// write a function that takes an obj and item as parameters
// if there is no instance, set obj[item] to 0
// increment instances by 1

// set up blank object

// set up variable for total instances = 0
// loop through arr
// if instance matches, increase counter

const transport = data.reduce(function (obj, item) {
  if (!obj[item]) {
    obj[item] = 0;
  }

  obj[item]++;
  return obj;
}, {});

console.log(transport);
