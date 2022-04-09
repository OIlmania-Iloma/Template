let hambuger = document.querySelector(".hamburg");
let navMenu = document.querySelector(".nav-menu");


hambuger.addEventListener("click", mobileMenu);

function mobileMenu (){
    hambuger.classList.toggle("active");
    navMenu.classList.toggle("active");
   
}

let navlinks = document.querySelectorAll(".nav-link");
navlinks.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu (){
    hambuger.classList.remove("active");
    navMenu.classList.remove("active");
   
}


var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 3000); // Change image every 2 seconds
};
 
/*function initMap() {
  // The location of Uluru
  const ph = { lat:4.8472, lng:6.9746 };
  // The map, centered at Uluru
  const map = new google.maps.Map(document.getElementsByClassName("map"), { 
    zoom: 4,
    center: ph,
  });
  // The marker, positioned at Uluru
  const marker = new google.maps.Marker({
    position: ph,
    map: map,
  });
}
*/

function initMap() {
  let location = {lat:4.8472, lng:6.9746};
  let map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: location
  })
 }