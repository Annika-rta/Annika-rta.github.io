var ballx = 300;
var bally = 300;
var ballSize = 40;
var score = 0;
var gameState = "L1";
var catImg;
var foodImg;

function setup() {
  createCanvas(600, 600);
  textAlign(CENTER);
  textSize(20);
  noCursor();

  catImg = loadImage('data/tabby.png');
  foodImg = loadImage('data/food.png');
} // end setup

function draw() {
  background(220);

  if (gameState == "L1") {
    levelOne();
  }
  if (gameState == "L2") {
    levelTwo();
  }
  if (gameState == "L3") {
    levelThree();
  }
  if (gameState == "win") {
    winGame();
  }

  text(("Score: " + score), width / 2, 40);

  // Draws tabby.png centered on your mouse cursor
  image(catImg, mouseX - 25, mouseY - 35, 50, 70);

} // end draw

function levelOne() {
  text("Level 1", width / 2, height - 20);
  var distToBall = dist(ballx, bally, mouseX, mouseY);
  if (distToBall < ballSize / 2) {
    ballx = random(width);
    bally = random(height);
    score = score + 1;
  }
  if (score > 5) {
    gameState = "L2";
  }

  image(foodImg, ballx - (ballSize * 1.3) / 2, bally - ballSize / 2, ballSize * 1.3, ballSize);
  line(ballx, bally, mouseX, mouseY);

} // end level one

function levelTwo() {
  background(200, 100, 0);
  text("Level 2", width / 2, height - 20);
  var distToBall = dist(ballx, bally, mouseX, mouseY);
  if (distToBall < ballSize / 2) {
    ballx = random(width);
    bally = random(height);
    score = score + 1;
  }
  if (score > 10) {
    gameState = "L3";
  }

  image(foodImg, ballx - (ballSize * 1.3) / 2, bally - ballSize / 2, ballSize * 1.3, ballSize);
} // end level two

function levelThree() {
  background(200, 100, 200);
  text("Level 3", width / 2, height - 20);
  var distToBall = dist(ballx, bally, mouseX, mouseY);
  if (distToBall < ballSize / 2) {
    ballx = random(width);
    bally = random(height);
    ballSize = max(ballSize - 1, 15); // Shrinks down to 15px minimum so it never disappears!
    score = score + 1;
  }
  if (score > 49) {
    gameState = "win";
  }

  image(foodImg, ballx - (ballSize * 1.3) / 2, bally - ballSize / 2, ballSize * 1.3, ballSize);

} // end level three

function winGame() {
  background(100, 220, 150);

  text(("Congrats you Win!!"), width / 2, 60);

} // end winGame
