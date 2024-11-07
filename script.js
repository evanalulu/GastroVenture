/* VARIABLES */
let screen = 0;
let isJumping = false;
let viewX = 0;
let viewY = 0;
let zoomLevel = 2;
let largeIntestineDirection = "";
let transitionAlpha = 0;
let transitioning = false;
let fadeIn = true;

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

  // Transition effect
  if (transitioning) {
    // Fade out first
    if (fadeIn) {
      transitionAlpha += 5; // Adjust speed of fade
      if (transitionAlpha >= 255) {
        fadeIn = false;
        transitionAlpha = 255;
        // Change the screen once fade-out is complete
        screen++;
      }
    } else {
      transitionAlpha -= 5; // Fade back in
      if (transitionAlpha <= 0) {
        transitioning = false;
        fadeIn = true;
        transitionAlpha = 0;
      }
    }
  }

  // Apply the fade effect
  fill(0, transitionAlpha);
  rect(0, 0, width, height); // Overlay a black rectangle to create the fade effect
}
