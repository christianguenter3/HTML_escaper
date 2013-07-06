

$(document).ready(function() {
	$('#formatted').append($('#raw').text());
	$('.textarea').resizable();
	//$('#accordion').accordion();
	$('h3').hide();
	$('.button')
		.button()
		.height("30px")
		.width("150px")
		.click(function( event ) {
			$('form').submit();
		});
});		