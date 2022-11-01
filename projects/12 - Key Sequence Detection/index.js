//basis of setting up a key sequencing detection

let pressed = [];
const secretCode = "wesbos";

window.addEventListener("keyup", (e) => {
  console.log(e.key);
  pressed.push(e.key);
  console.log(pressed);
  pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length); //search only for char length of secretcode, not log every key pressed
  if (pressed.join("").includes(secretCode)) {
    console.log("DING DING! Got it!");
    cornify.add(); //hilarious reward for typing correct sequence
  }
});
