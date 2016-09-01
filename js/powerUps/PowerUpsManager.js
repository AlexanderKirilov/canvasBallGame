function PowerUpsManager(Canvas){
	this.powerUpTypes = [];

	this.powerUpTypes.push('HealthPowerUp');
	this.powerUpTypes.push('SpeedPowerUp');
	this.powerUpTypes.push('ScorePowerUp');
	this.registeredPowerBalls = [];

	this.Canvas = Canvas;
	this.ctx = Canvas.ctx;
}

PowerUpsManager.prototype.onDraw = function() {
	console.log(this.registeredPowerBalls.length);
	this.registeredPowerBalls.forEach(function(val,index){
		var powerUpBallInstance = val['powerUpBallInstance'];

		powerUpBallInstance.draw(); 
	});
};
//power up factory method, create based on spec.powerUpType pass Spec to the current power-up constructor
PowerUpsManager.prototype.spawnPowerUp = function(spec){
	var newPowerUp;

	var powerUpType = spec.powerUpType;
	spec['ctx'] = this.ctx;
	
	switch(powerUpType)
	{
		case 'HealthPowerUp':
			newPowerUp = new HealthPowerUpBall(spec);
			break;
		case 'SpeedPowerUp':
			newPowerUp = new SpeedPowerUpBall(spec);
			break;
		case 'ScorePowerUp':
			newPowerUp = new ScorePowerUpBall(spec);
			break;
	}
	this.registeredPowerBalls.push({
		powerUpBallInstance: newPowerUp,
		timestamp: Date.now(),
	});
};

//Generate random Type + Coordinates pass Spec to Factory (spawnPowerUp)
PowerUpsManager.prototype.randomPowerUpSpawn = function(){
	// decide a random PowerupType USES UTILITIES
	var randomType = randomIntFromInterval(0, this.powerUpTypes.length-1);

	//generate random x,y coordinates
	var randX = randomIntFromInterval(0, this.Canvas.width);
	var randY = randomIntFromInterval(0, this.Canvas.height);
	
	this.spawnPowerUp({
		x: randX,
		y: randY,
		powerUpType: this.powerUpTypes[randomType]
	});
};