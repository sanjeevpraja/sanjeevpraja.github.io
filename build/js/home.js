$(function(){
	var stellarActivated = false;
	homeparallax();
	waypoint();
	sectionTitle();
	wkTab();

	productisotope();

	compassRotate('.wk-compass');

	$(window).resize(function(){
		location.reload();
		homeparallax();
		eachHr();
		productisotopeDefault();
		//$.stellar('refresh');
	});

	function homeparallax(){
		$('.wk-lc-search, .wk-lc-search > .container').removeAttr('style');	
		if ($(window).width() <= 733){
			if (stellarActivated == true){
				$(window).data('plugin_stellar').destroy();
				stellarActivated = false;
			}
			//$('.wk-home-component').css('top', '80px');
		}
		else{
			$('.wk-home-component').removeAttr('style');	
			if (stellarActivated == false) {

				$.stellar({
					horizontalScrolling: false,
					horizontalOffset: 0,
					responsive: true,
					scrollProperty: 'scroll',
					//positionProperty: 'position',
					hideDistantElements: false
				});

				$(window).data('plugin_stellar').init();
				$.stellar('refresh');
				stellarActivated = true;
			}
			
		}
	
	/*	
	if($(window).width() > 1024){
		$(window).stellar({
			horizontalScrolling: false,
			horizontalOffset: 0,
			verticalOffset: 0,
			hideDistantElements: false,
		});
}*/
}
});



function waypoint(){
	/*waypoint animation for feature icons*/
	$('.wp-1').waypoint(function() {
		$('.wp-1').addClass('animated flipInX');
	}, {
		offset: '75%'
	});
}


/*animated menu cursor*/
function sectionTitle(){
	eachHr();
	$('.wk-title ul li').mouseenter(function(){
		var hrWidth = $(this).width();
		var hroffset = $(this).position();
		var hrleft = hroffset.left; 
		$(this).parents('.wk-title').find('hr').animate({
			left: hrleft,
			width: hrWidth
		}, 150, function(){
		});
	});
	$('.wk-title ul').mouseleave(function(){
		eachHr();
		setTimeout(function(){
			eachHr();
		}, 500)
	});
}

function eachHr(){
	$('.wk-title hr').each(function(){
		if($(this).parents('.wk-title').find('ul li').hasClass('active')){
			var hrWidth = $(this).parents('.wk-title').find('li.active').width();
			var hroffset =$(this).parents('.wk-title').find('li.active').position();
			var hrleft = hroffset.left; 
			$(this).width(hrWidth);
			$(this).css('left', hrleft+'px');
		}
		else{
			var hrWidth = $(this).parents('.wk-title').find('.wk-h3').width();
			var hroffset = $(this).parents('.wk-title').find('.wk-h3').position();
			var hrleft = hroffset.left; 
			$(this).width(hrWidth);
			$(this).css('left', hrleft+'px');
		}
	});	
}

/*isotope*/
function productisotopeDefault(){
	/*use this function on window resize only*/
	$('#iso-container').isotope({
		itemSelector: '.col-md-3'
	});
}
function productisotope(){
	/*use this function on document ready resize only*/
	//**do not use wk-title class
	$('.wk-iso ul li').click(function(){
		$('.wk-iso ul li').removeClass('active');
		$('.wk-iso ul li').removeClass('active');
		$(this).addClass('active');
		var filterValue = $(this).attr('data-filter');
		$('#iso-container').isotope({
			filter: '.'+filterValue,
			resizesContainer: true,
			resizable: true
		});
	});
}


/*location search tab feature*/
function wkTab(){
	//**do not use wk-title
	$('.wk-tab li').click(function(){
		$('.wk-title ul li').removeClass('active');
		$('.wk-tab li').removeClass('active');
		$(this).addClass('active');
		var dataTab = $(this).attr('data-tab');
		$('.wk-tab-pane').removeClass('active');
		$('#'+dataTab).addClass('active');
	})
}

/*compass rotation*/

function compassRotate(elementID){

	var $rota = $(elementID),
	degree = 0,
	timer;

	function spin() {    
		$rota.css({ transform: 'rotate(' + degree + 'deg)'});
		plusOrMinus = Math.random() < 0.5 ? -1 : 1;
		randAngle = Math.floor(Math.random()*70+50) * plusOrMinus;
		randDelay = Math.floor(Math.random()*1000+2000);
		timer = setTimeout(function() {
			degree += randAngle;
            spin(); // loop it
        },randDelay);
	}

    spin();    // run it!

};