function Map() {

	this.collisionMap = new Array();

//	this.tileBox = new BoundingBox();

//	this.tileBox.w = 30;
//	this.tileBox.h = 30;

	this.tileW = 40;
	this.tileH = 20;
	this.layerH = 15;
}

Map.prototype.buildMap = function () {
	this.collisionMap = [];

	// [z][y][x]
	this.collisionMap[0] = new Array();
	this.collisionMap[0][0] = new Array(0,0,0,0,0,0,0);
	this.collisionMap[0][1] = new Array(0,0,0,1,0,0,0);
	this.collisionMap[0][2] = new Array(0,0,0,0,0,0,0);
	this.collisionMap[0][3] = new Array(0,0,0,0,0,0,0);
	this.collisionMap[0][4] = new Array(0,0,0,0,0,0,0);

	this.collisionMap[1] = new Array();
	this.collisionMap[1][0] = new Array(0,0,0,1,1,1,1);
	this.collisionMap[1][1] = new Array(0,0,0,1,0,0,0);
	this.collisionMap[1][2] = new Array(0,0,0,1,0,0,0);
	this.collisionMap[1][3] = new Array(0,0,0,0,0,0,0);
	this.collisionMap[1][4] = new Array(0,0,0,0,0,0,0);

	this.collisionMap[2] = new Array();
	this.collisionMap[2][0] = new Array(0,0,0,1,1,0,1);
	this.collisionMap[2][1] = new Array(0,0,0,1,1,0,0);
	this.collisionMap[2][2] = new Array(0,1,1,1,1,1,0);
	this.collisionMap[2][3] = new Array(0,0,1,1,1,1,0);
	this.collisionMap[2][4] = new Array(1,0,0,0,0,0,0);

	this.collisionMap[3] = new Array();
	this.collisionMap[3][0] = new Array(1,1,1,1,1,1,1);
	this.collisionMap[3][1] = new Array(1,1,1,1,1,1,1);
	this.collisionMap[3][2] = new Array(1,1,1,1,1,1,1);
	this.collisionMap[3][3] = new Array(1,1,1,1,1,1,1);
	this.collisionMap[3][4] = new Array(1,1,1,1,1,1,1);
};

Map.prototype.draw = function (ctx) {
	ctx.clearRect(0,0, game.resolution.w, game.resolution.h);
	fillStyle = '#000';
	ctx.fillRect(0,0, game.resolution.w, game.resolution.h);

	var mapOffsetY = 0;
	var mapOffsetX = 5 * this.tileW / 2;
	var offsetX = 0, offsetY = 0;

	for (var z = this.collisionMap.length - 1; z >= 0; z--) {
		for (var y = 0; y < this.collisionMap[z].length; y++) {
			for (var x = 0; x < this.collisionMap[z][y].length; x++) {
				offsetX = mapOffsetX + (x * this.tileW / 2) - (y * this.tileW / 2);
				offsetY = mapOffsetY + (y * this.tileH / 2) + (x * this.tileH / 2) + (z * this.layerH);

				if (this.collisionMap[z][y][x]) {
//					this.drawCube(offsetX, offsetY, ctx);
					drawCube(offsetX, offsetY, this.tileW, this.tileH, this.layerH, ctx);
				}
			}
		}
	}
};