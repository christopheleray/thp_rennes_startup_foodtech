$(document).ready(function() {
var slideIndex = 0;
showSlides();



	$(function () {
		$("#btn-presentation").addClass("opacity");
		$("#presentation").show();
		$("#menu").hide();
		$("#images").hide();
	});

	$("#btn-presentation").on('click', function() {
		$("#btn-presentation").addClass("opacity");
		$("#presentation").show();
		$("#menu").hide();
		$("#btn-menu").removeClass("opacity");
		$("#btn-divers").removeClass("opacity");
		$("#images").hide();
	});

	$("#btn-menu").on('click', function() {
		$("#btn-menu").addClass("opacity");
		$("#menu").show();
		$("#presentation").hide();
		$("#btn-presentation").removeClass("opacity");
		$("#btn-divers").removeClass("opacity");
		$("#images").hide();
	});

	$("#btn-divers").on('click', function() {
		$("#btn-divers").addClass("opacity");
		$("#images").show();
		$("#presentation").hide();
		$("#btn-menu").removeClass("opacity");
		$("#btn-presentation").removeClass("opacity");
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
    setTimeout(showSlides, 5000); // Change image every 2 seconds
}
