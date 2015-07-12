$(function(){
	gtTab();
});

/*location search tab feature*/
function gtTab(){
	//**do not use wk-title
	$('.gt-tab li').click(function(){
		$('.gt-title ul li').removeClass('active');
		$('.gt-tab li').removeClass('active');
		$(this).addClass('active');
		var dataTab = $(this).attr('data-tab');
		$('.gt-tab-pane').removeClass('active');
		$('#'+dataTab).addClass('active');
	});
}