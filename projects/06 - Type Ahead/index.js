//1. Get date
//2. Set up functionality
//3. Add listeners
//4. Format population numbers and highlight matched characters

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
  const matchArray = findMatches(this.value, cities);
  const html = matchArray
    .map((place) => {
      //create regex to match city name
      // replace word that matches with span to highlight match
      const regex = new RegExp(this.value, "gi");

      return `
            <li>
                <span class="name">${place.city}, ${place.state}</span>
                <span class="population">${place.population}</span>
            </li>
        `;
    })
    .join("");
  suggestion.innerHTML = html;
}

const searchInput = document.querySelector(".search");
const suggestions = document.querySelector(".suggestions");

searchInput.addEventListener("change", displayMatches);
searchInput.addEventListener("keyup", displayMatches);
