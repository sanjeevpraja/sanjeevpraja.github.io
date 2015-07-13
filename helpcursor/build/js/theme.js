	$(function(){
		heightAdjust();
		stickyNavbarShrink('gt-shrink');
		$('[data-toggle="tooltip"]').tooltip();
		footercollapse();
	});

// $(window).resize(function(){
// 	heightAdjust();
// 	navigation();
// 	navigationprevent();
// });

	function heightAdjust(){
		var winwidth = $(window).width();
		var winheight = $(window).height();
		var headerht = $('header').height();
		$('.gt-height-ad').css('min-height', winheight+'px');
	}

	function stickyNavbarShrink(getnav){
		var aboveHeight = 1;
		if ($(window).scrollTop() > aboveHeight){
			$('.'+getnav).addClass('fixed');
		}
		else {
			$('.'+getnav).removeClass('fixed');
		}
		/*when scroll*/
		$(window).scroll(function(){
			if ($(window).scrollTop() > aboveHeight){
				$('.'+getnav).addClass('fixed');
			}
			else {
				$('.'+getnav).removeClass('fixed');
			}
		});

		reponsiveNav(getnav);
		navigationprevent();
	}


	function reponsiveNav(getnav){
		var winwidth = $(window).width();
		if(winwidth > 768){
			$('.'+getnav+' nav .dropdown').hover(    
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
			$('.'+getnav+' nav .dropdown').unbind();
			$('.'+getnav+' nav .dropdown-menu').removeAttr('style');
		$('li.dropdown a').on('click', function (event) { //for the removal of collapse on clicking inside menu, added with removal of data-toggle="dropdown" a.dropdown-toggle 
			$(this).parent().toggleClass('open');
		});
		$('body').on('click', function (e){
			if (!$('li.dropdown').is(e.target) && $('li.dropdown').has(e.target).length === 0 && $('.open').has(e.target).length === 0
				)
			{
				$('li.dropdown').removeClass('open');
			}

			/*submenu second level, only for small device*/
			$('.'+getnav+' .gt-submenu .dropdown-menu a').click(function(){
				$(this).next().toggleClass('wk-show');
			});
		});
	}
}


/*prevents click in small device*/
function navigationprevent(){
	$('a.dropdown-toggle').click(function(event){
		var winwidth = $(window).width();
		if(winwidth < 768){
			event.preventDefault();
		}
	});
}

/*footer*/
/*collapsible footer*/
function footercollapse(){
	$("footer h4").click(function() {
		$winwidth = $(window).width();
		if($winwidth < 992){
			$(this).toggleClass("active");  
			$(this).next("div").slideToggle('medium');
		}
	});
}

function showloading(){
	$('.gt-load').show();
}
function hideloading(){
	$('.gt-load').fadeOut('slow');
}
