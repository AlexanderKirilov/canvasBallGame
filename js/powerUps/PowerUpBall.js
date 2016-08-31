function PowerUpBall(spec){
	Entity.call(this, spec);

}
PowerUpBall.prototype = Object.create(Entity.prototype);
PowerUpBall.prototype.constructor = PowerUpBall;

PowerUpBall.prototype.powerUp = function(player){
	throw new Error('Overwrite powerUp method -- powerUpBall Abstract class');
};