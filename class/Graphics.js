function Graphics() {
};

Graphics.drawCube = function (x, y, width, depth, height, ctx) {
	var layerH = height;
	var tileW = width;
	var tileH = depth;

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
};