$(function () {
	$(".post-link").click(function (e) {
		var $container = $(".layout-container");
		var href = this.href;
		$container.on("transitionend", function () {
			window.location.href = href;
		});
		$container.addClass("leaving");

		e.preventDefault();
		return false;
	});

	$(".newer-posts,.older-posts").click(function (e) {
		var $container = $(".page-content,.post-content");
		var href = this.href;
		$container.on("transitionend", function () {
			window.location.href = href;
		});
		$container.addClass("navigating");

		e.preventDefault();
		return false;
	});

	var $document = $(document);

	$document.scroll(function () {
		if ($document.scrollTop()) {
			$(".layout-container").addClass("scrolled");
		}
	});
});