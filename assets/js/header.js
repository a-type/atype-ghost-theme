$(function () {
	var isMobile = window.matchMedia("(max-width: 959px)");
	if (!isMobile.matches) {
		var image = $(".clip-image");
		image.css("width", image.css("height"));

		image.on("transitionend", function () {
			if (image.css("opacity") === "0") {
				image.hide();
			}
			else {
				image.show();
			}
		})

		$(window).mousemove(function (e) {
			if (image.css("display") !== "none") {
				var width = $(window).width();
				var pctX = (e.pageX - (width / 2)) / width;

				var height = $(window).height();
				var pctY = (e.pageY - (height / 2)) / height;

				image.css("background-position-x", (pctX * 50) + "%");
				image.css("background-position-y", (pctY * 25) + "%");
			}
		});
	}

	var $document = $(document);

	$document.scroll(function () {
		if ($document.scrollTop()) {
			$(".layout-container").addClass("scrolled");
		}
	});
});