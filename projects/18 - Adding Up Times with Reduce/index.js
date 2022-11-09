//how do we pull timestamps out of the DOM?
// convert node list into array
// convert them to numbers
// make them into mins and secs
//add min and secs
// figure out how many how many hours and secs total

const timeNodes = [...document.querySelectorAll("[data-time]")];

const seconds = timeNodes.map((node) => node.dataset.time);
