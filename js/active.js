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

	$('i.icon-th').click(function(){
		$('.filter').addClass('show');
		$('.cover').fadeIn();
	})

	$('#product-list i.icon-list').click(function(){
		$('.categories').addClass('show');
		$('.cover').fadeIn();
	})

	$('.close-menu').click(function(){
		$('.filter, .categories').removeClass('show');
		$('.cover').fadeOut();
	})

	$('.cover').click(function(){
		$('.close-menu').click();
    })
    
    $('.hover button').click(function(){
		if ($(this).is('.heart')){
			$(this).children('i').toggleClass('icon-heart');
			$(this).toggleClass('btn-tap');
		}
		else {
			$(this).toggleClass('btn-tap');			
		}
    })

	//delete and cancel button

	$('.delete').on('click', function(){
		$(this).closest('li').remove();
		$(this).closest('tr').remove();
	})

});