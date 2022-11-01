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
  //loop over every img, figure out where each img needs to be displayed
  sliderImagees.array.forEach((sliderImage) => {
    //do math to figure out if image is displayed or not:
    //how far is page being scrolled down? get pixel level for where user is relative to bottom of page:
    const slideInAt =
      window.scrollY + window.innerHeight - sliderImage.height / 2; //slide img in at mid-point
    console.log(slideInAt);

    //where is img bottom? what if scrolling from bottom to top?
    // offset top: how far is image top relative to top of page?
    const imgageBottom = sliderImage.offsetTop + sliderImage.height;

    //is the img half shown?
    const isHalfShown = slideInAt > sliderImage.offsetTop;
  });
}
//  use debounce to limit how much this check runs. hundreds of events can cause performance issues:
window.addEventListener("scoll", debounce(checkSlide));
