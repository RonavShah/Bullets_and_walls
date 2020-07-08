var bullet,wall
var speed,weight,thichness



function setup() {
  createCanvas(800,400);

   speed = random(25,70);
  weight = random(400,1500);
  thickness = random(23,83);
 
  wall = createSprite(800,200,thichness,height/2);
  bullet = createSprite(50, 200, 50, 10);

}

function draw() { 

  
  background(255,255,255); 
  
  drawSprites();

  bullet.velocityX = speed;
  
if(hasCollided(bullet,wall))
{

  bullet.velocityX = 0;
  bullet.velocityY = 0;
  var damage = 0.5 * weight * speed * speed/(thichness * thichness * thichness);

  if(damage>10)
  {

   wall.shapeColour = colour(255,0,0);

  } if(damage<10)
   {
   
     wall.shapeColour = colour(0,255,0);


   }

}



  
}

function hasCollided(buller,wall)
{

bulletRightEdge = bullet.x + bullet.width;
wallLeftEdge = wall.x;
if(bulletRightEdge>=wallLeftEdge)
 {

return true
 }else
  {

return false;
  }

}