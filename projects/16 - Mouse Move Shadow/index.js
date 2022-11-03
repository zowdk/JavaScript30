const hero = document.querySelector(".hero");
const text = hero.querySelector("h1");

function shadow(e) {
  //get width and height of the hero using destructuring
  //   const width = hero.offsetWidth;
  //   const height = hero.offsetHeight;

  const { offsetWidth: width, offsetHeight: height } = hero;
}

hero.addEventListener("mousemove", shadow);
