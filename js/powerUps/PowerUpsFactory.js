/**
 * [FactoryPowerUp description]
 * @param {options object} spec 
 *        -spec.powerUpType :
 *        		-'HealthPowerUp'
 *        		-'SpeedPowerUp'
 *        		-'ScorePowerUp'
 */
function PowerUpsFactory(spec){

}

PowerUpsFactory.prototype.createPowerUp = function(spec){
	var newPowerUp;
	switch(spec.powerUpType){
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

	return newPowerUp;
};