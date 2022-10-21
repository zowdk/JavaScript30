const panels = document.querySelectorAll(".panel");

// write a function that will toggle the class of open on panels:
// listen for panel to be hovered over or clicked?
// add class of .panel-open-active to first and last children in panel
// remove class of .panel-open-active

function toggleOpen() {
  this.classList.toggle("open");
}

function toggleActive(e) {
  if (e.propertyName.includes("flex")) {
    this.classList.toggle("open-active");
  }
}

panels.forEach((panel) => panel.addEventListener("click", toggleOpen));

// listen for transition end event before animating text:
panels.forEach((panel) =>
  panel.addEventListener("transitionend", toggleActive)
);
