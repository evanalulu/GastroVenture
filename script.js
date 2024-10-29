/* VARIABLES */
let screen = 0;
let isJumping = false;
let viewX = 0;
let viewY = 0;
let zoomLevel = 2;
let largeIntestineDirection = "";

/* SETUP RUNS ONCE */
function setup() {
  createCanvas(600, 400);
  world.gravity.y = 10;

  oesophagusBg = new Sprite(oesophagusBackground, -100, -2000, "n");
  oesophagusBg.scale = zoomLevel;

  stomachBg = new Sprite(stomachBackground2, -1000, 2000, "n");
  stomachBg.scale = zoomLevel;

  mazeBg = new Sprite(mazeBackground, -1000, 2000, "n");
  mazeBg.scale = zoomLevel - 0.5;

  largeIntestineBg = new Sprite(largeIntestineBackground, 3000, -2000, "n");
  largeIntestineBackground.scale = zoomLevel;

  redButton.resize(350, 100);
  gameTitle = new Sprite(redButton, width / 2, height / 2 - 80, 250, 60, "k");
  enterButton = new Sprite(pinkButton, width / 2, height / 2 + 80, 100, 40, "k");
  playerImage = new Sprite(width / 2, height / 2, 40, 40);

  playerImage.img = idleAni1;
  player = new Sprite(-100, -200);
  ground = new Sprite(-100, -300, width, 20, "s");
  platformImg.resize(50, 0);

  // Set viewX and viewY to the middle of the image
  viewX = (oesophagusBackground.width - width / 2) / 2;

  waterdropSetUp();
  enemySetUp();

  screen0Assets();
}

/* DRAW LOOP REPEATS */
function draw() {
  allSprites.debug = mouse.pressing();

  if (screen == 0) {
    drawScreen0();
  } else if (screen == 1) {
    drawScreen1();
  } else if (screen == 2) {
    drawScreen2();
  } else if (screen == 3) {
    drawScreen3();
  } else if (screen == 4) {
    drawScreen4();
  }
}
