function Wall(_speed)
{
	this.x = width;
	this.moveSpeed = _speed;
	this.w = 20;
	this.gap = random(80, 200);
	this.gapY = random(this.gap + 10, height - this.gap -10 );

	this.col = color(255,255,255);

	this.update = function(){
		this.x -= this.moveSpeed;
	}

	this.show = function(){
		fill(this.col);
		rect(this.x, 0, this.w, this.gapY - this.gap/2);
		rect(this.x, this.gapY + this.gap/2, this.w, height - (this.gapY + this.gap/2));
	}
}