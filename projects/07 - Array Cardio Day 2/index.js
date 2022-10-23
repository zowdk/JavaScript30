// ## Array Cardio Day 2

const people = [
  { name: "Wes", year: 1988 },
  { name: "Kait", year: 1986 },
  { name: "Irv", year: 1970 },
  { name: "Lux", year: 2015 },
];

const comments = [
  { text: "Love this!", id: 523423 },
  { text: "Super good", id: 823423 },
  { text: "You are the best", id: 2039842 },
  { text: "Ramen is my fav food ever", id: 123523 },
  { text: "Nice Nice Nice!", id: 542328 },
];

// Some and Every Checks
// 1.  Array.prototype.some() // is at least one person 19 or older?
const isAdult = people.some(function (person) {
  const currentYear = new Date.getFullYear();
  if (currentYear - person.year >= 18) {
    return true;
  }
});
console.log({ isAdult });

const isLegalAdult = people.some((person) => {
  const thisYear = new Date.getFullYear();
  return thisYear - person.year >= 18;
});
// 2. Array.prototype.every() // is everyone 19 or older?

// 3. Array.prototype.find()
// 4. Find is like filter, but instead returns just the one you are looking for
// 5. find the comment with the ID of 823423

// 6. Array.prototype.findIndex()
// 7. Find the comment with this ID
// 8. delete the comment with the ID of 823423
