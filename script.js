/* VARIABLES */
let screen = 0;
let isJumping = false;
let viewX = 0;
let viewY = 0;
let zoomLevel = 2;
let largeIntestineDirection = "";
let fade = 255;
let fadeAmount = -100;
let transitioning = false;
let dialogueActive = false;
let bossActive = false;

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

  rectumBg = new Sprite(rectumBackground, -3000, 2000, "n");
  rectumBg.scale = zoomLevel;

  textSetUp();
  waterdropSetUp();
  enemySetUp();

  screen0Assets();
}

/* DRAW LOOP REPEATS */
function draw() {
  if (screen == 0) {
    drawScreen0();
    if (transitioning) {
      fill(255, 0, 0, fade);
      noStroke();
      rect(0, 0, width, height);

      if (fade <= 0) fadeAmount = 5; // Start fading in if fully faded out
      if (fade >= 255) fadeAmount = -5; // Start fading out if fully opaque

      // transitioning = false;

      fade += fadeAmount; // Adjust fade value
    }
  } else if (screen == 1) {
    drawScreen1();
  } else if (screen == 2) {
    drawScreen2();
  } else if (screen == 3) {
    drawScreen3();
  } else if (screen == 4) {
    drawScreen4();
  } else if (screen == 5) {
    drawScreen5();
  }

  if (kb.presses("space")) {
    screen0Assets();
    screen1Assets();
    screen2Assets();
    screen3Assets();
    screen4Assets();
    screen5Assets();
  }
}
