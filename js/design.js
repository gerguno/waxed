// http://www.w3schools.com/howto/howto_js_dropdown.asp

$('.dropdown').click(function() {
	$(this).next().css('top', ($(this).offset().top - 33));
	$('.dropdown').not(this).next().fadeOut();
	$(this).next().fadeToggle();
});

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropdown')) {
  		$('.dropdown-content').fadeOut();
    }
}


