// Write an application that allows the user to select multiple checkboxes at once:
// When user clicks one checkbox, then clicks another while holding shift,
// all boxes between the (2) boxes clicked should be selected.
// Including the (2) boxes clicked.

const checkboxes = document.querySelectorAll(".inbox input[type='checkbox']");
console.log(checkboxes);

checkboxes.forEach((checkbox) =>
  checkbox.addEventListener("click", handleCheck)
);

// checkbox.addEventListener("onclick", selectStart);

// function selectStart() {
//   console.log("it works!");
// }

// function selectEnd() {
//   KeyboardEvent.shiftKey();
// }
