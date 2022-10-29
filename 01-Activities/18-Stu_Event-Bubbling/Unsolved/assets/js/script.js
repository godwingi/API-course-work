// TODO: Which element is the following line of code selecting?
//This code is selecting the carouselbox class, which is where the picture is located.
var carousel = document.querySelector(".carouselbox");
// TODO: Which element is the following line of code selecting?
//This selects the buttons and links it to the carousel box that holds the images
var next = carousel.querySelector(".next");
var prev = carousel.querySelector(".prev");
var index = 0;
var currentImage;

var images = [
  "https://picsum.photos/300/200",
  "https://picsum.photos/300/201",
  "https://picsum.photos/300/202",
  "https://picsum.photos/300/203"
];

carousel.style.backgroundImage = "url('https://picsum.photos/300/200')";

function navigate(direction) {
  index = index + direction;
  if (index < 0) { 
    index = images.length - 1; 
  } else if (index > images.length - 1) { 
    index = 0;
  }
  currentImage = images[index];
  carousel.style.backgroundImage = "url('" + currentImage + "')";
}

// TODO: Describe the functionality of the following event listener.
//When clicked the image becomes bigger
carousel.addEventListener("click", function() {
  window.location.href = images[index];
});

// TODO: Describe the functionality of the following event listener.
//to go to the next image
next.addEventListener("click", function(event) {
  // TODO: To not automatically make the image bigger when clicking next
  event.stopPropagation();

  navigate(1);
});

// TODO: Describe the functionality of the following event listener.
//to go to the previous picture
prev.addEventListener("click", function(event) {
    // TODO: What would happen if we didn't add the following line of code?
    //same as above, prevents the image from becoming bigger when clicking the previous button
  event.stopPropagation();

  navigate(-1);
});

navigate(0);
