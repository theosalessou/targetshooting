var gameState = 0;
var score = 0;
var arrowsLeft = 5;

var menu, game;

var target, targetImg;
var goldTarget, goldenTargetImg;

var bowShoot, bowReloadSound;
var targetAppear, goldenTargetAppear;

function preload() {
    backgroundImg = loadImage("../folds/assets/images/background.jpg");

    targetImg = loadImage("../folds/assets/images/targetImg.png");
    goldenTargetImg = loadImage("../folds/assets/images/goldenTargetImg.png");

    bowShootSound = loadSound("../folds/assets/sounds/bowShoot.wav");
    bowReloadSound = loadSound("../folds/assets/sounds/bowReload.wav");

    targetAppear = loadSound("../folds/assets/sounds/targetAppear.mp3");
    goldenTargetAppear = loadSound("../folds/assets/sounds/goldenTargetAppear.mp3");
}
function setup() {
  createCanvas(windowWidth, windowHeight);
  
    menu = new Menu();

}

function draw() {
  background(backgroundImg);

  if (gameState === 1 && !game) {
    game = new Game();
}


  drawSprites();
}

function keyPressed() {
  if (key === 'r' || key === 'R') {
    game.reloadArrows();
  }
}
