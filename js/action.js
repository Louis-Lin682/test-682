$(document).ready(function () {
  
  $('.featured-slide').slick({
		arrows: false,
	});

	$('.prev').click(function(){
		$(this).closest('.featured').find('.featured-slide').slick('slickPrev');
	})

	$('.next').click(function(){
		$(this).closest('.featured').find('.featured-slide').slick('slickNext');
	})


    $('.aboutslide').slick({
        autoplay: true,
		    dots: true,
});

    $('.slider-for').slick({
        asNavFor: '.slider-nav',
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true
      });
    $('.slider-nav').slick({
        asNavFor: '.slider-for',
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        focusOnSelect: true
      });
    });