function debounce(func, wait = 20, immediate = true) {
  var timeout;
  return function () {
    var context = this,
      args = arguments;
    var later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

//select all images
const sliderImages = document.querySelectorAll(".slide-in");

//Write a function checkSlide that runs every time user scrolls
function checkSlide(e) {
  console.log(e);
}
//  use debounce to limit how much this check runs. hundreds of events can cause performance issues:

window.addEventListener("scoll", debounce(checkSlide));
