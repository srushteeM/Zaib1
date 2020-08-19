var pc , fish1 , fish2 , fish3 , fish4;
var beachy;
var fishGroup;
var shark;
var mine1,mine,mineGroup;
var score;
var health;
var h1,h2,h3,h4;
var healthbar;

function preload(){

 
  shark = loadImage("jawr.png");
  
  //mine
  mine1 = loadImage("mine.png");

  //background
  beachy = loadImage("sea background.png");
  
  //fish
  fish1 = loadImage("1.png");
  fish2 = loadImage("2.png");
  fish3 = loadImage("3.png");
  fish4 = loadImage("4.png");

  h1 = loadImage("low.png");
 h2 = loadImage("half.png");
  h3 = loadImage("medium.png");
  h4 = loadImage("full.png");
  
}

function setup() {
   createCanvas(displayWidth,displayHeight);
  //creating pc sprites
   pc = createSprite(displayWidth/2,displayHeight/2,50,50);
   pc.addImage(shark);
   pc.scale = 0.5;

  

   healthbar = createSprite(200,50,20,20);
   healthbar.addImage(h4);
   healthbar.scale=0.2;

   fishGroup = new Group();
   mineGroup = new Group();

   score=0;
   health=5;
}

function draw() {
   background(beachy);
  pc.y=mouseY;
  pc.x=mouseX;
  
   if(fishGroup.isTouching(pc)){
          for (i=0;i<fishGroup.length;i++){
        score++;
        fishGroup.get(i).destroy();
        }
  }
  if(mineGroup.isTouching(pc)){
          for (i=0;i<mineGroup.length;i++){
        health--;
        mineGroup.get(i).destroy();
        console.log(health)
        }
         
  }
switch(health){
  case 5:healthbar.addImage(h4) ;
  break;
  case 4:healthbar.addImage(h3) ;
  break;
  case 3: healthbar.addImage(h2) ;
  break;
  case 2: healthbar.addImage(h1) ;
  break;
  default:break;
  }

  spwanFish();
  spawnMines();
  drawSprites();
}
function spwanFish(){
if(frameCount % 120 === 0) {
fish = createSprite(displayWidth+5,Math.round(random(displayHeight/2+100,displayHeight)),10,40);
fish.velocityX=-2
fish.setCollider("rectangle",0,0,200,130);
    var rand = Math.round(random(1,4));
    switch(rand) {
      case 1: fish.addImage(fish1);
              break;
      case 2: fish.addImage(fish2);
              break;
      case 3: fish.addImage(fish3);
              break;
      case 4: fish.addImage(fish4);
              break;
      
      default: break;
    }   
    fishGroup.add(fish);
    fish.scale = 0.5;
    fish.lifetime=displayWidth/2;
} 
}
function spawnMines(){
 if(frameCount % 250 === 0) { 
  mine= createSprite(displayWidth+5,random(displayHeight/2+100,displayHeight),20,40)   
  mine.addImage(mine1);
  mine.setCollider("rectangle",0,0,150,100);
  mine.debug=true;
  mine.scale=0.3;
  mine.velocityX=-4;
  mineGroup.add(mine);
  mine.lifetime=displayWidth/mine.velocityX;
 
}
}

