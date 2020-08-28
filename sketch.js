var fixedRect,movingRect;

function setup() {
  createCanvas(800,800);
  fixedRect=createSprite(500, 100, 100, 50);
  movingRect=createSprite(500,700,100,50);

  fixedRect.shapeColor='red';
  movingRect.shapeColor='green';

  fixedRect.velocityY=5;
  movingRect.velocityY=-5;
}

function draw() {
  background(0);  

bounceOff(fixedRect,movingRect);

  drawSprites();
}

