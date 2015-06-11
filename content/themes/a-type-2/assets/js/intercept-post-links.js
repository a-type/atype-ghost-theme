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
});