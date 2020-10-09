var fixedRect, movingRect;

var deadblock
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 200, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(600,400,80,90);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  deadblock = createSprite(300,500,80,30);
 
  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;

}

function draw() {
  background(0,0,0);  
  //movingRect.x = World.mouseX;
  //movingRect.y = World.mouseY;

if (it(deadblock,movingRect)){

  movingRect.shapeColor = "red";
  deadblock.shapeColor = "red";

}
else {
  movingRect.shapeColor = "green";
  deadblock.shapeColor = "green";
}
  
  
b(movingRect,fixedRect);

  drawSprites();
}



