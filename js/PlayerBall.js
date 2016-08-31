function PlayerBall(spec){
	Entity.call(this,spec);
	
	this.speed = (spec && spec.speed) || 1;
	
	this.isMovingUp = false;
	this.isMovingRight = false;
	this.isMovingDown = false;
	this.isMovingLeft = false;

	this.__hp = (spec && spec.hp) || 2;
	this.score = (spec && spec.score) || 0;
}

//Inherit from Base class : Entity
PlayerBall.prototype = Object.create(Entity.prototype);
PlayerBall.prototype.constructor = PlayerBall;

PlayerBall.prototype.handleInput = function(event, boolean){

	switch(event.code) {
	    case "KeyS":
	    case "ArrowDown":
			// Handle "move down"
			this.isMovingDown = boolean;
			break;
	    case "KeyW":
	    case "ArrowUp":
			// Handle "move up"
			this.isMovingUp = boolean;
			break;
	    case "KeyA":
	    case "ArrowLeft":
			// Handle "move left"
			this.isMovingLeft = boolean;
			break;
	    case "KeyD":
	    case "ArrowRight":
			// Handle "move right"
			this.isMovingRight = boolean;
			break;
	}
}

PlayerBall.prototype.move = function(){
	if(this.isMovingUp) {
		this.y -= this.speed;
	}	
	if(this.isMovingDown) {
		this.y += this.speed;
	}
	if(this.isMovingLeft) {
		this.x -= this.speed;
	}
	if(this.isMovingRight) {
		this.x += this.speed;
	}
}