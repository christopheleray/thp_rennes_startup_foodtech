$(document).ready(function() {
var slideIndex = 0;
showSlides();

	$(function () {
		$("#presentation").show();
		$("#menu").hide();
		$("#images").hide();
	});

	$("#btn-presentation").on('click', function() {
		$("#presentation").show();
		$("#menu").hide();
		$("#images").hide();
	});

	$("#btn-menu").on('click', function() {
		$("#menu").show();
		$("#presentation").hide();
		$("#images").hide();
	});

	$("#btn-divers").on('click', function() {
		$("#images").show();
		$("#presentation").hide();
		$("#menu").hide();
	});

});

	
	var slideIndex = 1;
  showSlides(slideIndex);
  // Next/previous controls
  function plusSlides(n) {
    showSlides(slideIndex += n);
  }

  // Thumbnail image controls
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; 
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1} 
    slides[slideIndex-1].style.display = "block"; 
    setTimeout(showSlides, 3000); // Change image every 2 seconds
}


