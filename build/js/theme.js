$(function(){
	heightAdjust();
	navigation();
	navigationprevent();
	stickyNavbarShrink();
});

$(window).resize(function(){
	heightAdjust();
	navigation();
	navigationprevent();
});

function heightAdjust(){
	var winwidth = $(window).width();
	var winheight = $(window).height();
	var headerht = $('header').height();
	$('.wk-height-ad').css('min-height', winheight+'px');
		
		/*if(winwidth > winheight){
			$('.wk-height-ad').css('min-height', winheight+'px');
		}
		else{
		//$('.wk-height-ad, .wk-main-img > .container').css('height', 'auto');
		$('.wk-height-ad').css('min-height', '600px');
		}
		*/
}

function stickyNavbarShrink(){
	/*Use outerHeight() instead of height() if have padding*/
	var aboveHeight;
	if($('.wk-shrink-nav').hasClass('transparent')){
		aboveHeight = $(window).height();
	}
	else{
		aboveHeight = $('.wk-infobar').outerHeight();
	}
	if ($(window).scrollTop() > aboveHeight){
		$('.wk-shrink-nav').removeClass('normal');
		$('.wk-shrink-nav').addClass('fixed');
	}
	else {
		$('.wk-shrink-nav').removeClass('fixed');
		$('.wk-shrink-nav').addClass('normal');
	}
	/*when scroll*/
	$(window).scroll(function(){
		if ($(window).scrollTop() > aboveHeight){
			$('.wk-shrink-nav').removeClass('normal');
			$('.wk-shrink-nav').addClass('fixed');
		}
		else {
			$('.wk-shrink-nav').removeClass('fixed');
			$('.wk-shrink-nav').addClass('normal');
		}
	});
}


/*Navigation*/
function navigation(){
	var winwidth = $(window).width();
	if(winwidth > 768){
		$('nav .dropdown').hover(    
			function(){   
				$('.dropdown-menu', this).stop( true, true ).slideDown('fast');
				$('.dropdown').removeClass('open');
				$(this).toggleClass('open');
				$('b', this).toggleClass('caret caret-up');                
			},
			function(){
			//$('.dropdown-menu', this).stop( true, true ).fadeOut('slow');
			$('.dropdown-menu', this).stop( true, true ).hide();
			$(this).removeClass('open'); 
			$('b', this).toggleClass('caret caret-up');       
		});
	}
	else{
		$('nav .dropdown').unbind();
		$('nav .dropdown-menu').removeAttr('style')
		$('li.dropdown a').on('click', function (event) { //for the removal of collapse on clicking inside menu, added with removal of data-toggle="dropdown" a.dropdown-toggle 
			$(this).parent().toggleClass('open');
		});
		$('body').on('click', function (e){
			if (!$('li.dropdown').is(e.target) 
				&& $('li.dropdown').has(e.target).length === 0 
				&& $('.open').has(e.target).length === 0
				)
			{
				$('li.dropdown').removeClass('open');
			}

			/*submenu second level, only for small device*/
			$('.wk-submenu .dropdown-menu a').click(function(){
				$(this).next().toggleClass('wk-show');
			});
		});
	}
}

function navigationprevent(){
	$('a.dropdown-toggle').click(function(event){
		var winwidth = $(window).width();
		if(winwidth < 768){
			event.preventDefault();
		}
	});
}