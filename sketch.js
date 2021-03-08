var car, wall;
var speed,weight;


function setup() {

  createCanvas(800,400);
  speed=random(55,90);
  weight=random(400,750);
  car=createSprite(50,200,50,50);
  car.shapeColor="red";
  car.velocityX=speed;
  wall=createSprite(750,200,60,height/2);
  wall.shapeColor="grey";
}

function draw() {
  background("yellow");
  
  car.x = World.mouseX;
  car.y = World.mouseY;

  car.bounceOff(edges);
  
  if (car.isTouching(wall) {
    car.shapeColor= "violet";
    wall.shapeColor= "pink";
  }
  


  drawSprites();
}