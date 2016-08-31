function PowerUpsManager(){
	this.registeredPowerBalls = [];
}

PowerUpsManager.prototype.registerPowerUp = function(powerUpBallInstance, timeToLive){
	this.registeredPowerBalls.push({
		powerUpBallInstance: powerUpBallInstance,
		timeToLive: timeToLive
	})
};

PowerUpsManager.prototype.onDraw = function() {
	console.log(this.registeredPowerBalls.length);
	this.registeredPowerBalls.forEach(function(val,index){
		var powerUpBallInstance = val['powerUpBallInstance'];

		powerUpBallInstance.draw(); 
	});
};