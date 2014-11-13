(function($) {

	function equalize() {
		$('.equalize-window').css('min-height', $(window).height())
	}
	$(function() {
		equalize();

	})
	$(window).resize(function() {
		equalize();
	})
	// $('a.link-scroll').click(function(e) {
	// 	e.preventDefault();
	// 	var pos = EPPZScrollTo.elementVerticalClientPositionById($(this).attr('href'));
	// 	EPPZScrollTo.scrollVerticalTickToPosition(pos, 0);
	// 	// e.preventDefault();
	// 	// alert($(this).attr('href'));
 //  //   $()[0].scrollIntoView();
	// })
	$('a.link-scroll').on('click', function(event) {
    var target = $(this).attr('href');
    if( target.length ) {
      event.preventDefault();
      $('html, body').animate({
        scrollTop: $(target).offset().top
      }, 500);
		}	
	});

})(window.jQuery);