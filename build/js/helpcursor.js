(function($) {
	$.fn.helpcursor = function(options) {
		var defaults = $.extend({
			position : 'left',
			color: '',
			msg : 'Help Cursor text'
		}, options );
		
		return this.each(function() {
			if(defaults.color != null){
				var html = '<div class="gt-help '+defaults.position+'" style="color:'+defaults.color+'">'
				html += defaults.msg
				html += '<span class="icon-handdrawn-arr-'+defaults.position+'"></span>'
				html += '</div>';
			}
			else{
				var html = '<div class="gt-help '+defaults.position+'">'
				html += defaults.msg
				html += '<span class="icon-handdrawn-arr-'+defaults.position+'"></span>'
				html += '</div>';
			}
			$(this).addClass('helpcursor').append(html);
		});
	};
}(jQuery));