/*

	TODO: 
		- COLLISION
		- BALL FACTORY
		- UI
		- 
 */


var Game = function(){
	// init objects

	var Canvas = {
		canvas: document.getElementById('canvas')
	}
	Canvas.ctx = Canvas.canvas.getContext('2d');


	var player = new PlayerBall({
		x:50,
		y:50,
		radius: 10,
		color:'red',
		speed: 3,
		ctx: Canvas.ctx
	});

	var powerUpsFactory = new PowerUpsFactory();
	var powerUpsManager = new PowerUpsManager();

	var healthPowerUp = new HealthPowerUpBall({
		x:200,
		y:200,
		ctx: Canvas.ctx
	});
	var speedPowerUp = new SpeedPowerUpBall({
		x:400,
		y:320,
		ctx: Canvas.ctx
	});

	//helper functions
	function init(){
		// Bind event handler
		document.addEventListener('keydown',function(event){
			player.handleInput(event, true);
		});
		document.addEventListener('keyup', function(event){
			player.handleInput(event, false);
		});
	}

	function onLoop(){

		player.move();
		

		Canvas.ctx.clearRect(0, 0, Canvas.canvas.width,Canvas.canvas.height);
		
		player.draw();
		healthPowerUp.draw();
		speedPowerUp.draw();
		powerUpsManager.onDraw();

		requestAnimationFrame(onLoop);
	}

	/*
		NOTE ! - GLUE CODE BETWEN FACTORY AND MANAGER
	 */
	//Schedules a new PowerUp from !! Factory !!  TO !! Manager !! every -- seconds ( in seconds not mili !!)
	function ScheduleRandomPowerUpSpawn(seconds){
		var secondsBetweenSpawn = seconds;
		//
		var powerUpTypes = [];

		powerUpTypes.push('HealthPowerUp');
		powerUpTypes.push('SpeedPowerUp');
		powerUpTypes.push('ScorePowerUp');

		function RandomPowerUpSpawn(){	

			// decide a random PowerupType
			var randomType = randomIntFromInterval(0,powerUpTypes.length-1);

			var newPowerUpInstance = powerUpsFactory.createPowerUp({
				powerUpType: powerUpTypes[randomType],
				ctx: Canvas.ctx
			});

			powerUpsManager.registerPowerUp(newPowerUpInstance, 2000);
		}
		//
		setInterval(RandomPowerUpSpawn, seconds*1000)
	}
	return {
		execute: function(){
			init();

			ScheduleRandomPowerUpSpawn(10);	// seconds

			requestAnimationFrame(onLoop);
		},
	}
}();