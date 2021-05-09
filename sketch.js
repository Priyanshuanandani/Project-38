var blueB, blueballoonImage;
var redB, redballoonImage;
var greenB, greenballoonImage;
var pinkB, pinkballoonImage;
var bow, bowImage;
var background, backgroundImage;
var arrowGroup, arrowImage;
var score;


function preload() {

  backgroundImage = loadImage("background0.png");
  blueballoonImage = loadImage("blue_balloon0.png");
  redballoonImage = loadImage("red_balloon0.png");
  greenballoonImage = loadImage("green_balloon0.png");
  pinkballoonImage = loadImage("pink_balloon0.png");
  bowImage = loadImage("bow0.png");
  arrowImage = loadImage("arrow0.png")

}

function setup() {

  createCanvas(400, 400);
  background = createSprite(0, 0, 400, 400);
  background.addImage("background", backgroundImage);
  background.velocityX = -4;
  background.scale = 2.5;
  bow = createSprite(385, 180, 20, 20);
  bow.addImage("bow", bowImage);
  bow.scale = 1;

  score = 0;
  
redB = new Group();
blueB = new Group();
greenB = new Group();
pinkB = new Group();
arrowGroup = new Group();


}

function draw() {



  if (background.x < 0) {
    background.x = background.width / 2;
  }


  bow.y = World.mouseY;

  var select_balloon = Math.round(random(1, 4));
  console.log(select_balloon);

  if (World.frameCount % 80 === 0) {
    if (select_balloon === 1) {
      redBalloon();
    } else if (select_balloon === 2) {
      greenBalloon();
    } else if (select_balloon === 3) {
      blueBalloon();
    } else {
      pinkBalloon();
    }
  }

  if (keyDown("space")) {
   createArrow();
    
  }

  if (arrowGroup.isTouching(pinkB)) {
      pinkB.destroyEach();
      arrowGroup.destroyEach();
      score = score+0.5;
      }
  if (arrowGroup.isTouching(redB)) {
      redB.destroyEach();
      arrowGroup.destroyEach();
      score = score+1.5;
      }
  if (arrowGroup.isTouching(greenB)) {
      greenB.destroyEach();
      arrowGroup.destroyEach();
      score = score+1;
      }
  if (arrowGroup.isTouching(blueB)) {
      blueB.destroyEach();
      arrowGroup.destroyEach();
      score = score+2;
      }
  
  
  createEdgeSprites();
  drawSprites();

  function createArrow() {

    var arrow = createSprite(360, 100, 5, 10);
    arrow.addImage(arrowImage);
    arrow.x = 360;
    arrow.y = bow.y;
    arrow.velocityX = -6;
    arrow.scale = 0.3;
    arrow.lifetime = 70;
    arrowGroup.add(arrow);

  }
  
  function redBalloon() {

    var red = createSprite(0, Math.round(random(20, 370)), 10, 10);
    red.addImage(redballoonImage);
    red.velocityX = 3;
    red.lifetime = 150;
    red.scale = 0.1;
    redB.add(red);
  }

  function greenBalloon() {

    var green = createSprite(0, Math.round(random(20, 370)), 10, 10);
    green.addImage(greenballoonImage);
    green.velocityX = 3;
    green.lifetime = 150;
    green.scale = 0.1;
    greenB.add(green);
  }

  function blueBalloon() {

    var blue = createSprite(0, Math.round(random(20, 370)), 10, 10);
    blue.addImage(blueballoonImage);
    blue.velocityX = 3;
    blue.lifetime = 150;
    blue.scale = 0.1;
    blueB.add(blue);

  }

  function pinkBalloon() {

    var pink = createSprite(0, Math.round(random(20, 370)), 10, 10);
    pink.addImage(pinkballoonImage);
    pink.velocityX = 3;
    pink.lifetime = 150;
    pink.scale = 1.3;
    pinkB.add(pink);
  }
  textsize = 15;
  fill("black");
  text("Score :" + score, 270, 30);
}