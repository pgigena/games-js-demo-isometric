function Character() {
	this.pos = new Vector();
	this.prevPos = new Vector();
	this.animations = new Array();

	this.bounds = new Vector();

	this.currentAnimationIndex = 1;
}

Character.prototype.updateSpeed = function (modifierVelocity) {
};

Character.prototype.updatePosition = function () {
	this.prevPos.x = this.pos.x;
	this.prevPos.y = this.pos.y;

	this.pos.x += this.velocity.x;
	this.pos.y += this.velocity.y;
};

Character.prototype.draw = function (ctx) {
	//	this.animations[this.currentAnimationIndex].draw(this.pos.x, this.pos.y, ctx);

	var height = this.bounds.h;
	var width = this.bounds.w;
	var depth = this.bounds.d;

var mapOffsetX = 5 * 40 / 2;
var mapOffsetY = 0;

var offsetX = mapOffsetX + (this.pos.x * 40 / 2) - (this.pos.y * 40 / 2);
var offsetY = mapOffsetY + (this.pos.y * 20 / 2) + (this.pos.x * 20 / 2) + (this.pos.z * 15);

	var tileOffsetX = offsetX + 40 / 2;
	var tileOffsetY = offsetY + 20 / 2 - depth / 2;


//	ctx.strokeStyle = '#f00';
//	ctx.fillStyle = '#0f0';
	ctx.fillStyle = '#6cf';
	ctx.beginPath();
	ctx.moveTo(tileOffsetX, tileOffsetY);
	ctx.lineTo(tileOffsetX + width / 2, tileOffsetY + depth / 2);
	ctx.lineTo(tileOffsetX, tileOffsetY + depth);
	ctx.lineTo(tileOffsetX - width / 2, tileOffsetY + depth / 2);
	ctx.closePath();
	ctx.fill();
//	ctx.stroke();

	// SW face
	ctx.fillStyle = '#39f';
	ctx.beginPath();
	ctx.moveTo(tileOffsetX - width / 2, tileOffsetY + depth / 2);
	ctx.lineTo(tileOffsetX, tileOffsetY + depth);
	ctx.lineTo(tileOffsetX, tileOffsetY + depth + height);
	ctx.lineTo(tileOffsetX - width / 2, tileOffsetY + depth / 2 + height);
	ctx.closePath();
	ctx.fill();
//	ctx.stroke();

	// SE face
	ctx.fillStyle = '#06f';
	ctx.beginPath();
	ctx.moveTo(tileOffsetX + width / 2, tileOffsetY + depth / 2);
	ctx.lineTo(tileOffsetX + width / 2, tileOffsetY + depth / 2 + height);
	ctx.lineTo(tileOffsetX, tileOffsetY + depth + height);
	ctx.lineTo(tileOffsetX, tileOffsetY + depth);
	ctx.closePath();
	ctx.fill();
//	ctx.stroke();
};

Character.prototype.changeAnimation = function (animationIndex) {
//	this.animations[this.currentAnimationIndex].end();
//
//	this.currentAnimationIndex = animationIndex;
//	this.animations[animationIndex].start();
};