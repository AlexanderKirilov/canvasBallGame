function PlayerBall(spec){
	this.speed = (spec && spec.speed) || 3;

	Entity.call(this,spec);
}

//Inherit from Base class : Entity
PlayerBall.prototype = Object.create(Entity.prototype);
PlayerBall.prototype.constructor = PlayerBall;

PlayerBall.prototype.handleInput = function(event, boolean){

	var pressedKey = event.key.toLowerCase();
	switch(pressedKey){
		case 'w':
			this.y -= this.speed;
			break;
		case 'd':
			this.x += this.speed;
			break;
		case 's':
			this.y += this.speed;
			break;
		case 'a':
			this.x -= this.speed;
			break;
	}
}