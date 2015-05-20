Function.prototype.subclass = function (base) {
	var c = Function.prototype.subclass.nonconstructor;
	c.prototype = base.prototype;
	this.prototype = new c();
};
Function.prototype.subclass.nonconstructor = function () {
};

function createCanvas (id, w, h, zIndex) {
	var canvas = document.createElement('canvas');
	canvas.id = id;
	canvas.width = w;
	canvas.height = h;
	canvas.style = "z-index: " + zIndex + ";";

	document.body.appendChild(canvas);
	return canvas.getContext('2d');
}

function drawCube(x, y, w, h, wallH, ctx) {
	var layerH = wallH;
	var tileW = w;
	var tileH = h;

	var tileOffsetX = x + tileW / 2;
	var tileOffsetY = y;

	ctx.strokeStyle = '#f00';
	ctx.lineWidth = 0.25;

	ctx.fillStyle = '#6f6';
	ctx.beginPath();
	ctx.moveTo(tileOffsetX, tileOffsetY);
	ctx.lineTo(tileOffsetX + tileW / 2, tileOffsetY + tileH / 2);
	ctx.lineTo(tileOffsetX, tileOffsetY + tileH);
	ctx.lineTo(tileOffsetX - tileW / 2, tileOffsetY + tileH / 2);
	ctx.closePath();
	ctx.fill();
	ctx.stroke();

	// SW face
	ctx.fillStyle = '#6c6';
	ctx.beginPath();
	ctx.moveTo(tileOffsetX - tileW / 2, tileOffsetY + tileH / 2);
	ctx.lineTo(tileOffsetX, tileOffsetY + tileH);
	ctx.lineTo(tileOffsetX, tileOffsetY + tileH + layerH);
	ctx.lineTo(tileOffsetX - tileW / 2, tileOffsetY + tileH / 2 + layerH);
	ctx.closePath();
	ctx.fill();
	ctx.stroke();

	// SE face
	ctx.fillStyle = '#696';
	ctx.beginPath();
	ctx.moveTo(tileOffsetX + tileW / 2, tileOffsetY + tileH / 2);
	ctx.lineTo(tileOffsetX + tileW / 2, tileOffsetY + tileH / 2 + layerH);
	ctx.lineTo(tileOffsetX, tileOffsetY + tileH + layerH);
	ctx.lineTo(tileOffsetX, tileOffsetY + tileH);
	ctx.closePath();
	ctx.fill();
	ctx.stroke();
}

function Timer(callback, delay) {
	var timerId, start, remaining = delay;

	this.pause = function () {
		window.clearTimeout(timerId);
		remaining -= new Date() - start;
	};

	this.resume = function () {
		start = new Date();
		window.clearTimeout(timerId);
		timerId = window.setTimeout(callback, remaining);
	};

	this.stop = function () {
		window.clearInterval(timerId);
	};

	this.resume();
}