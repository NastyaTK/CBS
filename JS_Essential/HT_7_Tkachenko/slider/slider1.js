let slider = document.getElementById("slider-wrap");
let sliderElements = slider.children;
let sliderElementsCount = slider.childElementCount;
let arrowBack = document.getElementById("arrow-back");
let arrowForward = document.getElementById("arrow-forward");
let startShowElement = 0;
function displayElement() {
  for (let i = 0; i < sliderElementsCount; i++) {
    if (i == startShowElement) {
      sliderElements[i].style.display = "block";
    } else {
      sliderElements[i].style.display = "none";
    }
  }
  return startShowElement;
}
displayElement();

arrowBack.onclick = function() {
  if (startShowElement == 0) {
    startShowElement = sliderElementsCount - 1;
  } else {
    startShowElement--;
  }
  displayElement();
}
arrowForward.onclick = function(){
    if(startShowElement == sliderElementsCount-1){
        startShowElement = 0;
    } else{
        startShowElement++;
    }
    displayElement();
}
