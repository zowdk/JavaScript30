const hero = document.querySelector(".hero");
const text = hero.querySelector("h1");
const walk = 100; //100px

function shadow(e) {
  //get width and height of the hero using destructuring
  //   const width = hero.offsetWidth;
  //   const height = hero.offsetHeight;

  const { offsetWidth: width, offsetHeight: height } = hero;
  let { offsetX: x, offsetY: y } = e;

  if (this !== e.target) {
    x = x + e.target.offsetLeft;
    y = y + e.target.offsetTop;
  }

  //how far should the text shadow go? how many pixels at most should it be stretched?
  // if 100 is total walk distance, walk range is between -50 and 50:
  const xWalk = Math.round((x / width) * walk - walk / 2);
  const yWalk = Math.round((y / height) * walk - walk / 2);

  text.style.textShadow = `
  ${xWalk}px ${yWalk}px 0 rgba(255, 0, 255, 0.7),
  ${xWalk * -1}px ${yWalk}px 0 rgba(0, 255, 255, 0.7),
  ${yWalk}px ${xWalk}px 0 rgba(0, 255, 0, 0.7),
  ${yWalk * -1}px ${xWalk}px 0 rgba(0, 0, 255, 0.7),
  `;

  console.log(x, y);
}

hero.addEventListener("mousemove", shadow);
