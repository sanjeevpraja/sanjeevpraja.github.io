$(function(){
	$(".element").typed({
		strings: ["Expedition", "Adventure", "Hiking"],
		startDelay:1500,
		typeSpeed:50,
		backDelay:1e3,
		loop:false,
		loopCount:false,
		showCursor: true,
		cursorChar: ".",
		callback : function(){
			$(".typed-cursor").hide();
		}
	});
});
