var car,wall;
var speed,weight;
function setup() {
  createCanvas(1500,400);
 car = createSprite(0, 200, 50, 50);
 car.shapeColor="pink"
 speed=random(55,100)
 weight=random(400,1500)
 car.velocityX=speed
 wall = createSprite(1300,200,25,100)
 
}

function draw() {
  background(255,255,255); 
 if(wall.x-car.x<(car.width+wall.width)/2){
   car.velocityX=0
   var deformation=0.5*weight*speed*speed/22500;
   if(deformation<100){
     car.shapeColor="green"
   }
   if(deformation<180&&deformation>100){
     car.shapeColor="yellow"
   }
   if(deformation>180){
     car.shapeColor="red"
   }

 }
  drawSprites();
}