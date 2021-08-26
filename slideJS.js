var slideIndex = 0;
var slides = document.getElementsByClassName("Containers");

for (var i = 0; i < slides.length; i++)
{
    slides[i].style.display = "none";
}
showSlides();

function showSlides() 
  {
      if (slideIndex >= 0)
      {
          slides[slideIndex].style.display="none";
      }
      if (slideIndex >= (slides.length - 1))
      {
          slideIndex = -1;
      }
      slides[++slideIndex].style.display="block";
      setTimeout(showSlides, 2000);
  }
  /*
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace("enable", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += "enable";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
  */
