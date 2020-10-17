$(document).ready(function(e){

	$('#popup').fadeIn();
	$('#popup, #popup .close').click(function(){
		$('#popup').fadeOut();
	});

	// nav menu //

	$('.menu').click(function(){
		$('#header').find('.nav').toggleClass('active');
	})

	$('.cart').click(function(){
		$('.panel').addClass('show');
		$('.cover').fadeIn();		
	})

	$('.cover').click(function(e){
		e.stopPropagation();
		$('.panel').removeClass('show');
		$('.cover').fadeOut();
	})

	$('.dropdown-title').click(function(){
		$(this).closest('div').siblings('ul').toggleClass('active');
	})

	// slider //


	$('.dropdown button').click(function(){
		$('.dropdown-menu').toggleClass('show');	
	})

	//delete and cancel button

	$('.delete').on('click', function(){
		$(this).closest('li').remove();
		$(this).closest('tr').remove();
	})

});