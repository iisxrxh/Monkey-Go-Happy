var PLAY = 1;
var END = 0;
var gameState = PLAY;

var monkey , monkey_running
var banana ,bananaImage, rock, rockI;
var bananaG, obstacleGroup;
var score;
var ground,groundI;
var trees, treesI;
var gameOver, gameOverI;
var jumpSound, bananaSound, gameOverSound;
var invisibleGround;

var greenSnake,greenSnakeI, pinkSnake, pinkSnakeI;

var score;
var bananasCollected;


function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
  
  groundI = loadImage("groundI.png")
  
  treesI = loadImage("treesI.png");
  
  rockI = loadImage("obstacle.png");
  
  greenSnakeI = loadImage("greenSnakeI.png");
  pinkSnakeI  = loadImage("pinkSnakeI.png");
 
}



function setup() {
  createCanvas(500, 500);
  
  bananaG = new Group();
  rockG = new Group();

  

  
  
  trees = createSprite(0, 25, 6000, 400);
  trees.addImage(treesI);
  trees.scale = 2.5;
  
  ground = createSprite(300,480,6000,6000);
  ground.addImage(groundI);
  ground.scale = 2;
  
  invisibleGround = createSprite(0,405,2000, 5);
  invisibleGround.visible = false;
  
  monkey = createSprite(30, 370, 20, 20);
  monkey.addAnimation("running" ,monkey_running);
  monkey.scale = 0.1;
  
  
score = 0;
bananasCollected = 0;
  
  monkey.setCollider("circle", 0, 0, 50);
  monkey.debug = false;
  
}


function draw() {
  
  background("lightBlue");
  
  monkey.collide(invisibleGround);
  
  text("Survival Time = "+score, 390, 170 )
  text("BananasIn = "+ bananasCollected, 400, 150);

  if(gameState === PLAY){
    

    trees.velocityX = -4;

    ground.velocityX = -4;
    score = score + Math.round(getFrameRate()/60);
  if(keyDown("space")&& monkey.y >= 200) {
    monkey.velocityY = -13;
  }
     monkey.velocityY = monkey.velocityY + 0.8
  
  
  
  if (ground.x < 0){
    ground.x = ground.width/2;
  }
    
      if (trees.x < 0){
    trees.x = trees.width/2;
  }
    

    if(monkey.isTouching(bananaG)){
      bananasCollected = bananasCollected + 1;
      bananaG.destroyEach();
      
    }
    
  }
  

    

    
   
  
  
  
     rockS();
      bananaS();
  
drawSprites()}

function bananaS() {
  //write code here to spawn the clouds
  if (frameCount % 120 === 0) {
     banana = createSprite(600,Math.round(random(100,300)),40,10);
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -3;
    
     //assign lifetime to the variable
    banana.lifetime = 300;
    
    //adjust the depth
    banana.depth = monkey.depth;
    monkey.depth = monkey.depth + 1;
    
    bananaG.add(banana);
    

    }
}

function rockS() {
  
   if (frameCount % 60 === 0) {
 
     rock = createSprite(500,410,40,10);
    rock.addImage(rockI);
    rock.scale = 0.1;
    rock.velocityX = -3;
    
     //assign lifetime to the variable
    rock.lifetime = 300;
    
      rockG.add(rock);
    

   } 
}









