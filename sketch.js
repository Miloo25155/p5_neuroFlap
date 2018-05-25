var bird;
var walls;
var wallsSpeed;

var wallSpawnRate;
var countRate;

var score;


function setup() {
	createCanvas(600, 450);

	wallsSpeed = 2;

	bird = new Bird();
	walls = [new Wall(wallsSpeed)];

	wallSpawnRate = 100;
	countRate = 0;

	score = 0;
}

function draw() {
	background(51);

	/*stroke(255,0,0);
	line(0, wall.gapY - wall.gap/2, width, wall.gapY - wall.gap/2);
	line(0, wall.gapY + wall.gap/2, width, wall.gapY + wall.gap/2);
	stroke(255);*/

	bird.update();
	bird.show();

	for (var i = 0; i < walls.length; i++) {
		if(bird.hasTouched(walls[i])){
			bird.isDead = true;
		} else{
			
		}

		walls[i].update();
		walls[i].show();

		if(walls[i].x < -300){
			walls.splice(i, 1);
		}
	}

	if(countRate >= wallSpawnRate){
		countRate = 0;
		walls.push(new Wall(wallsSpeed));
	}

	countRate++;
}

function keyPressed(){
	if(key == ' '){
		if(!bird.isDead){
			bird.jump();
		}
	}
}