$(function(){
	/*testimonial- owlCarousel initialization*/
	$('.wk-partner').owlCarousel({
		lazyLoad: true,

		//items: 4,
		responsive: {
					0:{
						items:1
					},
					320:{
						items:2// Two items from 320px up to 479px
					},
				    480:{
				    	items:3// Two items from 480px up to 677px
				    },

				    678:{
				    	items:4 // Three items from 677px up to 959px
				    },

				    960:{
				    	items:5 // Five items from 960px up
				    }
				  },

		autoplay: true,
		autoplayTimeout: 2000,
		autoplayHoverPause: true,
		smartSpeed: 500,
		fluidSpeed: 500,
		loop: true,
		slideBy: 1,
		dots: false,
		stopOnHover: true,



		
	});
});


