function Entity(spec){
	this.x = (spec && spec.x) || 0;
	this.y = (spec && spec.y) || 0;
	this.radius = (spec && spec.radius) || 5;

	this.color = (spec && spec.color) || '#000';

	this.ctx = (spec && spec.ctx);
}

Entity.prototype.draw = function(){
	this.ctx.save();
	this.ctx.beginPath();
	
	this.ctx.arc(this.x, this.y, this.radius, 0, 2*Math.PI);
	
	this.ctx.fillStyle = this.color;
	this.ctx.fill();
	
	this.ctx.restore();
}