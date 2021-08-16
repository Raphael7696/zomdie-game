var bg,bgImg;
var player, shooterImg, shooter_shooting;
var zombie, zombieImg;

var heart1, heart2, heart3;
var heart1Img, heart2Img, heart3Img;

var zombieGroup;



function preload(){
  
 

  shooterImg = loadImage("assets/shooter_2.png")
  shooter_shooting = loadImage("assets/shooter_3.png")

  zombieImg = loadImage("assets/zombie.png")

  bgImg = loadImage("assets/bg.jpeg")
  heart1Img=loadImage("assets/heart_1.png")
  heart2Img=loadImage("assets/heart_2.png")
  heart3Img=loadImage("assets/heart_3.png")
}

function setup() {

  
  createCanvas(windowWidth,windowHeight);

  //adding the background image
  bg = createSprite(displayWidth/2-20,displayHeight/2-40,20,20)
bg.addImage(bgImg)
bg.scale = 1.1
  

//creating the player sprite
player = createSprite(displayWidth-1150, displayHeight-300, 50, 50);
 player.addImage(shooterImg)
   player.scale = 0.3
   player.debug = true
   player.setCollider("rectangle",0,0,300,300)
   heart1=createSprite(displayWidth-150,40,20,20)
   heart1.addImage(heart1Img)
   heart1.scale=0.5
   heart2=createSprite(displayWidth-100,40,20,20)
   heart2.addImage(heart2Img)
   heart2.scale=0.5
   heart3=createSprite(displayWidth-150,40,20,20)
   heart3.addImage(heart3Img)
   heart3.scale=0.5
   zombieGroup=new Group();

   //creating sprites to depict lives remaining
  
   

    //creating group for zombies    
    
}

function draw() {
  background(0); 

  //moving the player up and down and making the game mobile compatible using touches
if(keyDown("UP_ARROW")){
  player.y=player.y-20
}
if(keyDown("DOWN_ARROW")){
  player.y=player.y+20
}
if(keyDown("LEFT_ARROW")){
  player.x=player.x-20
}
if(keyDown("RIGHT_ARROW")){
  player.x=player.x+20
} 
enemy() ; 
 
if(player.isTouching(zombieGroup)){
  player.addImage(shooter_shooting);
  zombieGroup.destroyEach();

  


} 


drawSprites();
}



//creating function to spawn zombies
  function enemy(){
    if(frameCount%50==0){
      zombie=createSprite(random(500,1100),random(100,500),40,40)
      zombie.addImage(zombieImg)
      zombie.scale=0.15
      zombieGroup.add(zombie)
    }
  }