$(function() {

	$('.intro-slider').slick({
		dots: true,
		infinite: true,
		arrows: true,
		speed: 300,
		slidesToShow: 1
	});

	$('.menu li a').on('click', function(e) {
		var href = $(this).attr('href');

		$('body').removeClass('menu-openned');

		var h = $(window).height();

		$('body,html').animate({
			scrollTop: $(href).offset().top - $('.header').outerHeight()
		}, 700);

		return false;
	});

	$('.menu-toggler').on('click', function(e) {
		$('body').toggleClass('menu-openned');

		var h = $(window).height();

		$('.menu-wrapper, .menu-wrapper__inner').css('height', h - 60);
	});
	
});
