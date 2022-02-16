
var trex ,trex_running;
var ground,groundimage;
function preload(){
  trex_running=loadAnimation("trex1.png","trex3.png","trex4.png");

}

function setup(){
  createCanvas(600,200);
  
  //create a trex sprite
 trex=createSprite(50,160,40,60);
 trex.addAnimation("running",trex_running);
 trex.scale=0.5;

 ground=createSprite(300,190,600,20);
}

function draw(){
  background("blue")
  
  if (keyDown("space")){
    trex.velocityY=-5;
  }
  trex.velocityY=trex.velocityY+0.4;

  trex.collide(ground);
  drawSprites();
}
