$(document).ready(function(e){

	$('#popup').fadeIn();
	$('#popup, #popup .close').click(function(){
		$('#popup').fadeOut();
	});

	$('#popup .popup-content').click(function (e) {
		e.stopPropagation();
	});

	// nav menu //

	$('.menu').click(function(){
		$('#header').find('.nav').toggleClass('active');
	})

	$('.shopping-list').click(function(){
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

	$('.icon-button.fliter').click(function(){
		$('.filter').addClass('show');
		$('.cover').fadeIn();
	})

	$('.icon-button.categoried').click(function(){
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
	
	$('.search').click(function(){
		$('.search-panel').addClass('show');
		$('.cover').fadeIn();		
	})

	$('.cover, .close-search').click(function(e){
		e.stopPropagation();
		$('.search-panel').removeClass('show');
		$('.cover').fadeOut();
	})

	

	//delete and cancel button

	$('.delete').on('click', function(){
		$(this).closest('li').remove();
		$(this).closest('tr').remove();
	})

});