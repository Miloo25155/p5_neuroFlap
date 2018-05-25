var bird;
var walls;
var wallsSpeed;

var wallSpawnRate;
var countRate;

var wallIndex;

function setup() {
	createCanvas(600, 450);

	wallsSpeed = 2;
	wallIndex = 0;

	bird = new Bird();
	walls = [new Wall(wallsSpeed, wallIndex)];

	wallSpawnRate = 100;
	countRate = 0;
}

function draw() {
	background(51);

	/*
	stroke(255,0,0);
	line(0, wall.gapY - wall.gap/2, width, wall.gapY - wall.gap/2);
	line(0, wall.gapY + wall.gap/2, width, wall.gapY + wall.gap/2);
	stroke(255);
	*/
 
	for (var i = 0; i < walls.length; i++) {
		if(bird.hasTouched(walls[i])){
			bird.isDead = true;
		}
		if(walls[i].x > 0 && walls[i].x < bird.pos.x - bird.siz && !bird.isDead && bird.score <= walls[i].ind){
			bird.score++;
		}
		if(walls[i].x < -300){
			walls.splice(i, 1);
		}
		if(!bird.isDead){
			walls[i].update();
		}
		walls[i].show();
	}

	if(countRate >= wallSpawnRate){
		countRate = 0;
		wallIndex++;
		walls.push(new Wall(wallsSpeed, wallIndex));
	}

	countRate++;

	bird.update();
	bird.show();

	textSize(23);
	fill(0, 119, 177);
	text("Score: " + bird.score, 13, 30);
}

function keyPressed(){
	if(key == ' '){
		if(!bird.isDead){
			bird.jump();
		}
	}
}