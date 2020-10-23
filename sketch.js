var car, wall;
var speed, weight;

function setup() {
  createCanvas(16000,400);
speed=random(60,61)
weight=random(2260,2261)

 car=createSprite(50, 200, 50, 50);
car.velocityX = speed;

wall=createSprite(1500,200,60,height/2);
wall.shapeColor=(80,80,80);

}

function draw() {
  background(255,255,255);  

if(wall.x-car.x < (car.width+wall.width)/2)
{
  car.velocityX=0;
  var deformation=180 * weight * speed* speed/22509;
  
  if(deformation<100)
  {
    car.shapeColor=color("green");
  }

  
  if(deformation<180 && deformation>100) {
  car.shapeColor=color("yellow"); 
}
  
  
  if(deformation>180)
  {
    car.shapeColor=color("red");
  }
  }
  drawSprites();
}
