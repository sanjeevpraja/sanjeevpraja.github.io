(function() {
	"use strict";
	$(document).ready(function(){
		var supportList = $('.supported-list');
		supportList.owlCarousel({
			animateOut: 'fadeOut',
			autoplay: true,
			loop:true,
			dots:false,
			nav:false,
			responsive:{  
				320: {
					items: 1 
				},
				400: {
					items: 2
				},
				540:{
					items: 3 
				},
				960:{
					items: 5 
				}
			}
		});


		var testimonial = $(".testimonial");
		testimonial.owlCarousel({
			animateOut: 'fadeOut',
			autoplay: true,
			items:1,
			margin:30,
			loop:true,
			dots:false,
			nav:true,
			navText: ['<span class="icon-arrow-left"><span>','<span class="icon-arrow-right"><span>'],
			stagePadding:0
		});

		var heights = $('.feature-list').map(function ()
		{
			return $(this).height();
		}).get(),
		maxHeight = Math.max.apply(null, heights);
		$('.feature-list').height(maxHeight);


		var heights = $('.feature-benefit-list').map(function ()
		{
			return $(this).height();
		}).get(),
		maxHeight = Math.max.apply(null, heights);
		$('.feature-benefit-list').height(maxHeight);
	});

})();