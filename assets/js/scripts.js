(function ($, undefined) {
	// $('body').flowtype();
	$('#fullpage').fullpage({
		resize: false,
		slideSelector: '.js-slide',
		scrollOverflow: true,
        css3: true,
        scrollingSpeed: 2000,
        paddingTop: '50px',
        paddingBottom: '50px',
        slidesNavigation: true,
        autoScrolling: false,
        sectionsColor: ['#fff', '#a5c250', '#fff']
	});

	// $('.js-typed').typed({
	// 	strings: ['Websites', 'Mobile Apps', 'Awesome Stuff'],
	// 	typeSpeed: 75,
	// 	backSpeed: 75,
	// 	loop: true,
	// 	loopCount: false,
	// 	showCursor: false
	// });

	/**
	 *
	 */
	var home = $('.home');
	var nav = $('.js-topBar');

	/**
	 * Hide navigation
	 */
	nav.fadeOut('fast');

	/**
	 * Hide selector on scroll
	 * ; for the home text
	 */
	$(window).scroll(function () {
		var _this = $(this);

		fadeOnScroll(_this);
		fadeNav(_this);
	})

	/**
	 * Fades elements on scroll
	 */
	function fadeOnScroll(_this) {
		var divident 	= (function() {
			if( _this.height() < 320 || _this.width() < 480) {
				return 2;
			}

			if( _this.height() < 480 || _this.width() < 600) {
				return 2.5;
			}

			return 4;
		})();

	    var scrollVar = _this.scrollTop() / divident;

	    $('.js-fadeOnScroll').css({'opacity':( 100 - scrollVar )/100});
	}

	/**
	 * Fades in / out the navigation
	 */
	function fadeNav(_this) {
		if( _this.scrollTop() >= home.height() ) {
			nav.fadeIn('slow');
		} else {
			nav.fadeOut();
		}
	}
})(jQuery);