$( window ).on("load", function () {
	Common.Init();
});

var Common = {
	modal: function (  ) {
		$("body").on("click", "[data-close-modal]", function ( e ) {
			e.preventDefault();
			$(".modal-wrap.active").removeClass("active");
		});
		$("body").on("click", "[data-target-modal]", function ( e ) {
			e.preventDefault();
			var target = $(this).attr("data-target-modal");
			var $target = $(target);

			$target.toggleClass("active");
		});
	},
	isScrolledIntoView: function (elem) {
		var docViewTop = $(window).scrollTop();
		var docViewBottom = docViewTop + screen.height;


		var elemTop = $(elem).offset().top;
		var elemBottom = elemTop + $(elem).height();

		console.log(elemTop);
		console.log(docViewBottom-100);
		return (elemTop <= docViewBottom-100);
	},
	triggerAnimation: function () {

		function handleTriggering() {
			$('[data-animate]').each(function () {
				if (Common.isScrolledIntoView($(this)) === true) {
					$(this).addClass('animated');
				}
			});
		}

		$(window).scroll(function () {
			handleTriggering();
		});
		handleTriggering();

	},
	handleLinkClick: function () {
		$("body").on("click", "a", function (e) {
			var href = $(this).attr("href");

			if ( href[0] == "#" && href.length > 1 ) {
				e.preventDefault();
				var sectionTarget = $(this).attr("href");
				var sectionPosition = $(sectionTarget).offset().top;
				$('body,html').animate({
					scrollTop : sectionPosition
				}, 500);
			}
		});
	},
	Init: function (  ) {
		this.handleLinkClick();
		this.modal();
		this.triggerAnimation();
	}
}