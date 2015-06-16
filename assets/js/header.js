// the header processing.js sketch!

function headerSketch (processing) {
	var $canvas = $("#headerSketch");
	var bg;
	var icon;
	var circleSize = 0;
	var masked = false;

	processing.setup = function () {
		processing.size($canvas.width(), $canvas.height());
		bg = processing.loadImage(headerImage);
		icon = processing.loadImage(iconImage);
	};

	function crop (image, w, h) {
		return image.get((image.width - w) / 2, (image.height - h) / 2, w, h);
	}

	processing.draw = function () {
		if (!masked && icon.loaded && bg.loaded) {
			masked = true;
			if (bg.width - icon.width > bg.height - icon.height) {
				var ratio = bg.height / icon.height;
				bg.resize(bg.width * ratio, bg.height * ratio);
			}
			else {
				var ratio = bg.width / icon.width;
				bg.resize(bg.width * ratio, bg.height * ratio);
			}
			bg = crop(bg, icon.width, icon.height);
			bg.updatePixels();
			bg.mask(icon);
		}

		processing.background(255);
		var size = $canvas.height() / 2;
		processing.image(bg, ($canvas.width() - size) / 2, ($canvas.height() - size) / 2, size, size);
	};
}

$(function () {
	var processingCanvas = document.getElementById("headerSketch");

	if (processingCanvas) {
		var p = new Processing(processingCanvas, headerSketch);
	}
})