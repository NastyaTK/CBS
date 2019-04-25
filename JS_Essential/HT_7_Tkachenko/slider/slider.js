let slider = document.getElementById("slider-wrap");
let arrowBack = document.getElementById("arrow-back-button");
let arrowForward = document.getElementById("arrow-forward-button");
let sliderChildrenArray = slider.children;
let sliderChildrenCount = slider.childElementCount;
let displayElementsArray = [0, 2];
function displaySliderElements() {
  for (let i = 0; i < sliderChildrenCount; i++) {
    if (i < displayElementsArray[0] || i > displayElementsArray[1]) {
      sliderChildrenArray[i].style.display = "none";
    } else {
      sliderChildrenArray[i].style.display = "block";
    }
  }
  return displayElementsArray;
}
displaySliderElements();
arrowBack.onclick = function() {
  if (displayElementsArray[0] > 0) {
    displayElementsArray[0]--;
    displayElementsArray[1]--;
    displaySliderElements();
  }
};
arrowForward.onclick = function() {
  if (displayElementsArray[1] < sliderChildrenCount - 1) {
    displayElementsArray[0]++;
    displayElementsArray[1]++;
    displaySliderElements();
  }
};
