// Write an application that allows the user to select multiple checkboxes at once:
// When user clicks one checkbox, then clicks another while holding shift,
// all boxes between the (2) boxes clicked should be selected.
// Including the (2) boxes clicked.

const checkboxes = document.querySelectorAll(".inbox input[type='checkbox']");
console.log(checkboxes);

let lastChecked = function handleCheck(e) {
  // check if shift key was held down
  // AND make sure box is being checked
  let inBetween = false;
  if (e.shiftKey && this.checked) {
    //loop through every checkbox:
    // look for first box checked
    // and check all boxes in between first and last
    checkboxes.forEach((checkbox) => {
      console.log(checkbox);
      if (checkbox === this || checkbox === lastChecked) {
        inBetween = !inBetween;
      }
    });
  }

  lastChecked = this;
};

checkboxes.forEach((checkbox) =>
  checkbox.addEventListener("click", handleCheck)
);

// function selectStart() {
//   console.log("it works!");
// }

// function selectEnd() {
//   KeyboardEvent.shiftKey();
// }
