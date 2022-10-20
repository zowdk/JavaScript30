const panels = document.querySelectorAll(".panel");

// write a function that will toggle the class of open on panels:
// listen for panel to be hovered over or clicked?
// add class of .panel-open-active to first and last children in panel
// remove class of .panel-open-active

function toggleOpen() {
  this.classList.toggle("open");
}

panels.forEach((panel) => panel.addEventListener("click", toggleOpen));
