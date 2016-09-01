/*
	TODO: 
		- COLLISION !!
			-Power up

		- UI

		-Manager
			-Kill powerUps after x seconds
 */
var Game = function(){
	// init objects

	var Canvas = {
		canvas: document.getElementById('canvas')
	}
	Canvas.ctx = Canvas.canvas.getContext('2d');
	Canvas.width = Canvas.canvas.width;
	Canvas.height = Canvas.canvas.height;

	var player = new PlayerBall({
		x:50,
		y:50,
		radius: 10,
		color:'red',
		speed: 3,
		ctx: Canvas.ctx
	});

	var powerUpsManager = new PowerUpsManager(Canvas);

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
		
		Canvas.ctx.clearRect(0, 0, Canvas.width,Canvas.height);
		
		player.draw();
		powerUpsManager.onDraw();

		requestAnimationFrame(onLoop);
	}

	function scheduleRandomPowerUpSpawn(seconds){

		setInterval(powerUpsManager.randomPowerUpSpawn.bind(powerUpsManager), seconds*1000)
	}

	return {
		execute: function(){
			init();

			scheduleRandomPowerUpSpawn(5);	// seconds

			requestAnimationFrame(onLoop);
		},
	}
}();