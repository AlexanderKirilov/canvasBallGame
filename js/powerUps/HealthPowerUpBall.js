function HealthPowerUpBall(spec){
	PowerUpBall.call(this, spec);

	this.color = (spec && spec.color) || 'green';

	this.radius = (spec && spec.radius) || 13;
}

HealthPowerUpBall.prototype = Object.create(PowerUpBall.prototype);
HealthPowerUpBall.prototype.constructor = 'HealthPowerUpBall';

HealthPowerUpBall.prototype.powerUp = function(player){
	player.hp+=1;
}