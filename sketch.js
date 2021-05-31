var bballoon,rballoon,pballoon,gballoon;
var balloon,balloon2,balloon3,balloon4;
var background1,background2;
var bow,bow2;
var arrow2;
var randomballoons;
var score;
var arrowGroup,rballoonGroup,bballoonGroup,pballoonGroup,gballoonGroup;

function preload(){

  bballoon=loadImage("blue_balloon0.png");
  gballoon=loadImage("green_balloon0.png");
  pballoon=loadImage("pink_balloon0.png");
  rballoon=loadImage("red_balloon0.png");
  bow2=loadImage("bow0.png");
  background2=loadImage("background0.png");
  arrow2=loadImage("arrow0.png");  
}

function setup() {
  
  createCanvas(600, 600);
  
  //creating background
  background1=createSprite(300,20,300,20);
  background1.addImage(background2);
  background1.scale=3;
  
  //creating bow
  bow=createSprite(550,300,50,50);
  bow.addImage(bow2);
  
  //score value
  score=0;
  
  //creating groups for arrows and balloons
  arrowGroup= new Group();
  bballoonGroup=new Group();
  pballoonGroup= new Group();
  rballoonGroup= new Group();
  gballoonGroup= new Group(); 
}

function draw() {
  
  //background colour
  background("white");
  
  //velocity for the background
  background1.velocityX=-5;
  
  //for infinite background
  if (background1.x<0){
  background1.x=background1.width/2;
  }
  
  //bow moves vertically using the mouse
  bow.y=mouseY;
  
  //press space to shoot arrows
  if (keyDown("space")){
    arrow();
  }
  
  //spawning balloons at random locations
  randomballoons = Math.round(random(1,4));
  if (frameCount % 80 === 0){
    if (randomballoons == 1){
      createred (); 
    } else if (randomballoons == 3){ 
      createblue ();
    } else if (randomballoons == 4){ 
      createpink ();
    } else{
      creategreen ();
    }
  }
  
  //arrow touching the red balloon
  if (arrowGroup.isTouching(rballoonGroup)){
    //destroying the red balloon and the arrow
    rballoonGroup.destroyEach();
    arrowGroup.destroyEach();
    //adding the score
    score=score+1;
  }
  
  //arrow touching the green balloon
  if (arrowGroup.isTouching(gballoonGroup)){
    //destroying the green ballon and the arrow
    gballoonGroup.destroyEach();
    arrowGroup.destroyEach();
    //adding the score
    score=score+3;
  }
  
  //arrow touching the blue balloon
  if (arrowGroup.isTouching(bballoonGroup)){
    //destroying the blue balloon an the arrow
    bballoonGroup.destroyEach();
    arrowGroup.destroyEach();
    //adding points
    score=score+4;
  }
  
  //aroow touching the pink balloon
  if (arrowGroup.isTouching(pballoonGroup)){
    //destroying the pink balloon and the arrow
    pballoonGroup.destroyEach();
    arrowGroup.destroyEach();
    //adding points 
    score=score+2;
  }
   
  //to draw sprites
  drawSprites(); 
  
  //printing the value of score    
  text("Score:"+score,270,30);
  
}

  //creating arrow
  function arrow() {
    var arrow=createSprite(500,100,5,10);
    arrow.y=bow.y;
    arrow.addImage(arrow2);         
    arrow.velocityX=-6;
    arrow.scale=0.3;
    arrow.lifetime=80;
    //adding arrows to the group
    arrowGroup.add(arrow);
    
  }

  //creating red balloons
  function createred() {
    balloon2=createSprite(0,Math.round(random(50,560)),50,50);
    balloon2.addImage(rballoon);
    balloon2.velocityX=6;
    balloon2.scale=0.11; 
    balloon2.depth=bow.depth;
    bow.depth=bow.depth+1;
    balloon2.lifetime=100;
    //adding red balloons to the group
    rballoonGroup.add(balloon2);
  }
  
  //creating blue balloons
  function createblue(){
    balloon=createSprite(0,Math.round(random(50,560)),50,50);
    balloon.addImage(bballoon);
    balloon.velocityX=5;
    balloon.scale=0.11;
    balloon.depth=bow.depth;
    bow.depth=bow.depth+1;
    balloon.lifetime=120;
    //adding blue balloons to the group
    bballoonGroup.add(balloon);
  }

  //cr  eating green balloons
  function creategreen(){
    balloon4=createSprite(0,Math.round(random(50,560)),50,50);
    balloon4.addImage(gballoon);
    balloon4.velocityX=6;
    balloon4.scale=0.1;
    balloon4.depth=bow.depth;
    bow.depth=bow.depth+1;
    balloon4.lifetime=100;
    //adding green balloons to the group
    gballoonGroup.add(balloon4);
  }

  //creating pink balloons
  function createpink () {
    balloon3=createSprite(0,Math.round(random(50,560)),50,50);
    balloon3.addImage(pballoon);
    balloon3.velocityX=5;
    balloon3.scale=1.3;
    balloon3.depth=bow.depth;
    bow.depth=bow.depth+1;
    balloon3.lifetime=120;
    //adding pink balloons to the group
    pballoonGroup.add(balloon3);
  }


