currentSlideIndex = 0;
let prevArrow = document.getElementById("btn-prev");
let nextArrow = document.getElementById("btn-next");

prevArrow.addEventListener("click", function(){sliderChange(-1)});
nextArrow.addEventListener("click", function(){sliderChange(1)});

function sliderChange(n){
  let sliders = document.getElementsByClassName("slider-items");
  switch(currentSlideIndex + n){
    case -1: currentSlideIndex= sliders.length-1; break;
    case sliders.length: currentSlideIndex= 0; break;
    default: currentSlideIndex +=n; break;
  }
  for(let i = 0; i < sliders.length; i++)
  {
    sliders[i].classList.add("hidden");
  }
  sliders[currentSlideIndex].classList.remove("hidden");
}

