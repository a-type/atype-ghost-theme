$(function () {
	var $document = $(document);

	$document.scroll(function () {
		if ($document.scrollTop()) {
			$(".layout-container").addClass("scrolled");
		}
	});
});