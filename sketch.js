var player,e1,e2,e3,bg;
var playerImge1Img,e2Img,e3Img,bgImg;
function preload(){
playerImg = loadImage("enemy40.png");
e1Img = loadImage("enemy10.png");
e2Img = loadImage("enemy20.png");
e3Img = loadImage("enemy30.png");
bgImg = loadImage("space10.png");
}


function setup(){
  createCanvas(400,400);
  bg = createSprite(200,200,400,400);
  bg.addImage("bg",bgImg);
  player = createSprite(200,375,10,10);
  player.addImage("playerImg",playerImg); 
  bg.velocityY = 4;
  bg.scale = 2.5;
}

function draw(){
  
  background("white")
 player.x = mouseX;

 if(bg.y>900){
  bg.y = bg.height/2;
 }
 //enemy1();
 //enemy2();
 //enemy3();
 var selectEnemy = Math.round(random(1,3));
 if(frameCount%100===0){
  if(selectEnemy===1){
    enemy1();
  }
  else if(selectEnemy===2){
    enemy2();
  }
  else{
    enemy3();
  }
 }
 if(keyDown("space")){
  createlaser();
 }
  drawSprites()
}

function enemy1(){
  e1 = createSprite(Math.round(random(50,350)),50,10,10);
  e1.addImage("e1",e1Img);
  e1.velocityY=1;
}
function enemy2(){
  e2 = createSprite(Math.round(random(50,350)),50,10,10);
  e2.addImage("e2",e2Img);
  e2.velocityY=1;
}
function enemy3(){
  e3 = createSprite(Math.round(random(50,350)),50,10,10);
  e3.addImage("e2",e3Img);
  e3.velocityY=1;
}

function createlaser(){
  laser = createSprite(200,350,4,6);
  laser.velocityY = -5;
  laser.x = player.x;
  laser.shapeColor = "red";
  laser.lifetime = 400/5;
}