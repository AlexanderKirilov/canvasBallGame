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
		speed: 4,
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

	function render(){
		Canvas.ctx.clearRect(0, 0, Canvas.canvas.width,Canvas.canvas.height);
		player.draw(Canvas.ctx);
	}
	return {
		execute: function(){
			init();

			setInterval( render , 1);
		},
	}
}();