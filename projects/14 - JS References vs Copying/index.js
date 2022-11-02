// start with strings, numbers and booleans
let age = 100;
let age2 = age;
console.log(age, age2); // 100, 100
age = 200;
console.log(age, age2); // 200, 100

let name = "wes";
let name2 = name;
console.log(name, name2); // wes wes
name = "wesley";
console.log(name, name2); // wesley wes

// ==> changing the original value doesn't update the variable that references the original value

// Let's say we have an array
const players = ["Wes", "Sarah", "Ryan", "Poppy"];

// and we want to make a copy of it.
const team = players;
console.log(players, team);
team[3] = "Lux";
console.log(team); // 'Wes', 'Sara', 'Ryan', 'Lux'
console.log(players); // 'Wes', 'Sara', 'Ryan', 'Lux'

// ==> unlike strings, updating values in arrays changes the original and the copy referenced

// You might think we can just do something like this:

// however what happens when we update that array?

// now here is the problem!

// oh no - we have edited the original array too!

// Why? It's because that is an array reference, not an array copy. They both point to the same array!

// So, how do we fix this? We take a copy instead!
const team3 = players.slice(); // make a copy with slice

// one way

// or create a new array and concat the old one in
const team4 = [].concat(players); // concatenate in existing array into new array

// or use the new ES6 Spread
const team5 = [...players];

const team6 = Array.from(players); // make copy from players array

// now when we update it, the original one isn't changed

// The same thing goes for objects, let's say we have a person object

// with Objects
const person = {
  name: "Wes Bos",
  age: 80,
};

// and think we make a copy:
const captain = person; // this makes a reference to person, not a copy
captain.number = 99;
console.log(person); // {name: "Wes Bos", age: 80, number: 99};

// how do we take a copy instead?
//with Object.assign()
//Object.assign({blank object}, original-object, {new properties});
const cap2 = Object.assign({}, person, { number: 99 });

// We will hopefully soon see the object ...spread
const cap3 = { ...person }; // shallow copy

// Things to note - this is only 1 level deep - both for Arrays and Objects. lodash has a cloneDeep method, but you should think twice before using it.
const wes = {
  name: "wes",
  age: 100,
  social: {
    twitter: "@wesbos",
    facebook: "wesbos.developer",
  },
};

console.log(wes);

//make a copy of wes that does not update the original

const dev = Object.assign({}, wes);
dev.social.twitter = "@coolman";

console.log(dev.social); // '@coolman'
console.log(wes.social); // '@coolman' oh no!

// shallow copies are only 1 level deep, meaning..
// use clone to make a deep copy of every level
