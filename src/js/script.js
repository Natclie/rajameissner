


//SLIDER
document.addEventListener("DOMContentLoaded", function () {
    const slider = document.getElementById("vertical-slider");
    const images = slider.children;
    let index = 0;
  
    function changeImage() {
      index = (index + 1) % images.length;
      slider.style.transform = `translateY(-${index * 100}%)`;
    }
  
    setInterval(changeImage, 3000);
  });
  


