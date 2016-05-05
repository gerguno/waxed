// HOME DROPDOWN
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

// SEMISCROLL
window.onload = function() {
	$(".image-semiscroll").semiscroll();	
}

window.onresize = function() {
	console.log('Semiscroll refreshed');
	$(".image-semiscroll").semiscroll();	
}
