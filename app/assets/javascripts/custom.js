$(document).ready(function() {

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
