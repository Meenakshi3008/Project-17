
var monkey , monkeyimage;
var banana ,bananaImage;
var obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var ground;
var score;
var survivalTime=0;

function preload(){
  
  monkeyimage =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}
function setup() {
  createCanvas(600,600);
  monkey=createSprite(80,315,10,10);
  monkey.addAnimation("moving",monkeyimage);
  monkey.scale=0.2;

  ground=createSprite(300,373,900,6);
  ground.velocityX=-4;
 
      ground.x=ground.width/2;
      
  if (ground.x>100)
     {
       ground.x=300;
     }
   obstacleGroup = createGroup();
  FoodGroup = createGroup();
  
  
 
}


function draw() {
  background("white");
stroke("white");
  textSize(20);
  fill("white");
  text("score: "+ score,500,50);
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate())
  text("survival time: "+ survivalTime, 100,50);
  console.log(monkey.y);
    monkey.velocityY = monkey.velocityY + 0.8
  monkey.collide(ground);
if (ground.x<0){
      ground.x=ground.width/2;
      }
if(keyDown("space") && monkey.y >= 100) {
        monkey.velocityY = -12;
}

  
  food();
  drawSprites();
}
function food(){

  
  if (frameCount % 80 === 0) {
     banana = createSprite(600,100,40,10);
    banana.y = Math.round(random(120,200));
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -3;
    banana.lifetime = 200;
   
   FoodGroup.add(banana);
    }

}
function obstacles(){
  
  if (frameCount % 300 === 0) {
     obstacle = createSprite(600,100,40,10);
    obstacle.y = Math.round(random(10,60));
    obstacle.addImage(obstacleImage);
    obstacle.scale = 0.3;
    obstacle.velocityX = -3;
    obstacle.lifetime = 134;

    obstacleGroup.add(obstacle);
    
}


}





