let myCanvas;
let ball, vel;
function setup() {
  myCanvas = createCanvas(500,500);
  myCanvas.parent('gamePanel');
  ball = createVector(250,250);
  vel = createVector(-1,0);
  vel.rotate(random(-30,30));
  vel.setMag(5);
}


function draw() {
  background(100,50,50);
  ball.add(vel);
  if(ball.x < 10) vel.reflect(createVector(1,0));
  if(ball.x > 490) vel.reflect(createVector(-1,0));
  if(ball.y < 10) vel.reflect(createVector(0,1));
  if(ball.y > 490) vel.reflect(createVector(0,-1));

  fill(0);
  noStroke();
  ellipse(ball.x,ball.y,20,20);

  if(abs(ball.x-450) <15/2+20/2&&abs(ball.y-mouseY) <75/2+20/2) {
    vel.set(-1,0);
    vel.rotate(radians(random(-60,60)));
    vel.setMag(5);
  }
  fill(100,50,200);
  rectMode(CENTER);
  rect(450,mouseY,15,75);
}