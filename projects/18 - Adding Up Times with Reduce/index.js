//how do we pull timestamps out of the DOM?
// convert node list into array
// convert them to numbers
// make them into mins and secs
//add min and secs
// figure out how many how many hours and secs total

const timeNodes = [...document.querySelectorAll("[data-time]")];

const seconds = timeNodes
  .map((node) => node.dataset.time)
  .map((timeCode) => {
    // destructure timestamp into mins and secs
    const [mins, secs] = timeCode.split(":").map(parseFloat);
    return mins * 60 + secs;
  })
  .reduce((total, vidSeconds) => {
    return total + vidSeconds;
  });

let secondsLeft = seconds;
const hours = Math.floor(secondsLeft / 3600); // whole hours
secondsLeft = secondsLeft % 3600;

const mins = Math.floot(secondsLeft / 60);
secondsLeft = secondsLeft % 60;

console.log(hours, mins, secondsLeft);
