function SpeedPowerUpBall(spec){
	PowerUpBall.call(this, spec);

	this.color = (spec && spec.color) || 'yellow';

	this.radius = (spec && spec.radius) || 13;
}

SpeedPowerUpBall.prototype = Object.create(PowerUpBall.prototype);
SpeedPowerUpBall.prototype.constructor = 'SpeedPowerUpBall';

SpeedPowerUpBall.prototype.powerUp = function(player){
	player.speed *= 2;
}