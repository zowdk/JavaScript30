// data was converted to a url from a cites.json file (array), which includes city name, state name, city coordinates, and population.

const endpoint =
  "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json";

//set up array to store cities
// use fetch api to get data
const cities = [];

const prom = fetch(endpoint).then((blob) =>
  console.log(blob.json()).then((data) => cities.push(...data))
);

//filter massive array down into subset that can be listened for

function findMatches(wordToMatch, cities) {
  return cities.filter((place) => {
    //does city or state match search?
    //use regex to find out:
    // g looks through entire string
    // i looks are both upper and lowercase
    const regex = new RegExp(wordToMatch, "gi");
    return place.city.match(regex) || place.state.match(regex);
  });
}

//display function to update whenever searched values change

function displayMatches() {
  console.log(this.value);
}

const searchInput = document.querySelector(".search");
const suggestions = document.querySelector(".suggestions");

searchInput.addEventListener("change", displayMatches);
searchInput.addEventListener("keyup", displayMatches);
