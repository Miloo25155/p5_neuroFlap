function Bird()
{
	this.pos = createVector(70, height/2);
	this.vel = createVector();
	this.acc = createVector();

	this.gravity = createVector(0, 0.4);
	this.jumpForce = createVector(0, -11);
	this.maxYVelocity = 8;

	this.siz = 30;

	this.score = 0;
	this.isDead = false;

	this.update = function(){
		this.addForce(this.gravity);
		this.vel.add(this.acc);
		if(this.vel.y > this.maxYVelocity){
			this.vel.y = this.maxYVelocity;
		} else if(this.vel.y < -this.maxYVelocity){
			this.vel.y = -this.maxYVelocity;
		}

		this.pos.add(this.vel);
		this.acc.mult(0);

		if(this.pos.y > height){
			this.pos.y = height;
			this.isDead = true;
		} else if(this.pos.y < 0){
			this.pos.y = 0;
			this.isDead = true;
		}
	}

	this.addForce = function(force){
		this.acc.add(force);
	}

	this.show = function(){
		push();
		fill(255);
		translate(this.pos.x, this.pos.y);
		ellipse(0, 0, this.siz);
		pop();
	}

	this.jump = function(){
		this.vel.add(this.jumpForce);
	}

	this.hasTouched = function(wall){
		if(this.pos.x + this.siz/2 > wall.x && this.pos.x + this.siz/2 < wall.x + wall.w){
			if((this.pos.y + this.siz/2 > 0 && this.pos.y + this.siz/2 < wall.gapY - wall.gap/2) || (this.pos.y + this.siz/2 > wall.gapY + wall.gap/2 && this.pos.y + this.siz/2  < height)){
				return true;
			}
		}
		return false;
	}
}