function ScorePowerUpBall(spec){
	PowerUpBall.call(this, spec);

	this.color = (spec && spec.color) || 'black';

	this.radius = (spec && spec.radius) || 9;
}

ScorePowerUpBall.prototype = Object.create(PowerUpBall.prototype);
ScorePowerUpBall.prototype.constructor = 'ScorePowerUpBall';

ScorePowerUpBall.prototype.powerUp = function(player){
	player.score += 100;
}