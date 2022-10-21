// data was converted to a url from a cites.json file (array), which includes city name, state name, city coordinates, and population.

const endpoint =
  "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json";

//set up array to store cities
// use fetch api to get data
const cities = [];

const prom = fetch(endpoint).then((blob) =>
  console.log(blob.json()).then((data) => console.log(data))
);
