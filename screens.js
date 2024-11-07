// HOME SCREEN
function screen0Assets() {
  redButton.resize(350, 100);

  gameTitle = new Sprite(redButton, width / 2, height / 2 - 80, 250, 60, "k");
  textFont(forwa);
  gameTitle.textSize = 20;
  gameTitle.text = "Gastro Venture";

  buttonTest.resize(100, 40);
  enterButton = new Sprite(buttonTest, width / 2, height / 2 + 80, 100, 40, "k");
  playerImage = new Sprite(width / 2, height / 2, 40, 40);

  playerImage.img = idleAni1;
  ground = new Sprite(-100, -300, width, 20, "s");
  platformImg.resize(50, 0);

  // Set viewX and viewY to the middle of the image
  viewX = (oesophagusBackground.width - width / 2) / 2;
}

function drawScreen0() {
  background(homeBackground);

  enterButton.layer = 2;
  gameTitle.layer = 1;

  if (enterButton.mouse.presses()) {
    screen1Assets();
  }
}

// OESOPHAGUS
function screen1Assets() {
  enterButton.x = -2100;
  playerImage.x = -2000;
  gameTitle.x = -3000;

  // Background Set up
  oesophagusBg.pos = { x: width / 2, y: height / 2 };

  player = new Sprite(-100, -200);
  player.w = 20;
  player.h = 20;
  player.rotationLock = true;

  aniSetUp();

  // Walls of Oesophagus
  leftWall = new Sprite(viewX - 65, height / 2, 5, height * 2, "s");
  rightWall = new Sprite(viewX + 370, height / 2, 5, height * 2, "s");
  leftWall.color = "brown";
  rightWall.color = "brown";

  // Platforms
  platforms = new Group();
  platforms.h = 5;
  platforms.w = 30;
  platforms.collider = "s";

  // Crystals
  crystals = new Group();
  crystals.w = 25;
  crystals.h = 25;
  crystals.collider = "s";

  alkaline.resize(45, 0);

  let platformCount = 10;
  gap = height / platformCount;
  for (let i = 1; i < platformCount; i++) {
    num = random(leftWall.x, rightWall.x);
    num2 = floor(random(0, 3));
    new platforms.Sprite(platformImg, num, height - i * gap);

    if (num2 == 0) {
      new crystals.Sprite(alkaline, num, height - i * gap - 10);
    }
  }
  player.pos = { x: platforms[platformCount - 2].x, y: platforms[platformCount - 2].y };

  screen = 1;
}

function drawScreen1() {
  camera.on();
  camera.y = player.y;

  // Display the portion of the image based on the viewX and viewY offsets
  image(oesophagusBackground, 0, 0, width, height, viewX, viewY, displayWidth, displayHeight);

  // Move player
  movePlayer();

  // Collect alkaline
  crystals.map((crystal) => {
    if (player.overlaps(crystal)) {
      crystal.remove();
    }
  });

  camera.off();

  if (player.y > height - 20) {
    transitioning = true;
    screen2Assets();
  }
}

// STOMACH
function screen2Assets() {
  platforms.remove();
  leftWall.remove();
  rightWall.remove();
  oesophagusBg.remove();
  camera.off();

  crystals.map((crystal) => {
    crystal.remove();
  });

  stomachBg.pos = { x: width / 2, y: height / 2 };

  let boundaryPoints = [
    [-35, 190],
    [65, 190],
    [65, 165],
    [95, 165],
    [95, 140],
    [115, 140],
    [115, 120],
    [120, 120],
    [140, 120],
    [140, 85],
    [170, 80],
    [170, -65],
    [-45, 203],
    [-83, 205],
    [-189, 308],
  ];
  let boundaryPoints2 = [
    [605, 180],
    [580, 180],
    [580, 220],
    [560, 220],
    [560, 270],
    [540, 270],
    [540, 310],
    [520, 310],
    [520, 330],
    [500, 330],
    [500, 350],
    [480, 350],
    [480, 373],
    [461, 373],
    [461, 396],
    [443, 396],
    [443, 420],
    [420, 420],
    [420, 440],
    [398, 440],
    [398, 457],
    [356, 457],
    [356, 480],
    [298, 480],
    [298, 504],
    [155, 504],
    [155, 483],
    [81, 483],
    [81, 463],
    [39, 463],
    [39, 439],
    [-2, 439],
    [-2, 418],
    [-24, 418],
    [-24, 397],
    [-62, 397],
    [-62, 375],
    [-83, 375],
    [-83, 355],
    [-103, 355],
    [-103, 328],
    [-122, 328],
    [-122, 308],
    [-164, 308],
  ];

  boundary = new Sprite(boundaryPoints, "s");
  boundary2 = new Sprite(boundaryPoints2, "s");
  boundary.color = color(255, 255, 255, 0);
  boundary2.color = color(255, 255, 255, 0);

  player.pos = { x: 370, y: -60 };
  world.gravity.y = 1;
  player.vel.y = 20;
  isFalling = true;
  // player.y = height/2;

  bubble = new Sprite(bubbleImg, player.x, player.y, 50, 50, "n");

  enemy1 = new Sprite(enemy1Img, 134, 200, 10, 10);
  enemy2 = new Sprite(enemy2Img, 440, 327, 10, 10);
  squareSequence();

  bulletSetUp();

  screen = 2;
}

// SMALL INTESTINES
function drawScreen2() {
  console.log(mouse.x, mouse.y);
  if (isFalling) {
    // Check if player has reached the liquid (y position 108 is the top of the liquid)
    if (player.y > 104) {
      world.gravity.y = 0;
      player.y = 108; // Stop at the liquid surface
      player.vel.y = 0; // Stop downward movement
      isFalling = false; // Stop falling
    }
  }

  camera.on();
  camera.x = player.x;
  camera.y = player.y;

  bubble.x = player.x;
  bubble.y = player.y;

  // Calculate display width and height for zooming
  let displayWidth = width / zoomLevel;
  let displayHeight = height / zoomLevel;

  // Constrain viewX and viewY to stay within the image's boundaries
  viewX = constrain(viewX, 0, stomachBackground2.width - displayWidth);
  viewY = constrain(viewY, 0, stomachBackground2.height - displayHeight);

  // Display the portion of the image based on the viewX and viewY offsets
  image(stomachBackground2, 0, 0, width, height, viewX, viewY, displayWidth, displayHeight);

  // Move player
  swimPlayer();

  bullets.map((bullet) => {
    if (bullet.collides(enemy1)) {
      enemy1.remove();
      bullet.remove();
    } else if (bullet.collides(enemy2)) {
      enemy2.remove();
      bullet.remove();
    } else if (bullet.collides(boundary) || bullet.collides(boundary2)) {
      bullet.remove();
    }
  });

  if (player.collides(enemy1) || player.collides(enemy2)) {
    player.pos = { x: 350, y: 108 };
  }

  if (player.x < -140 && player.y > 230) {
    screen3Assets();
  }

  camera.off();
}

//
function screen3Assets() {
  stomachBg.remove();
  boundary.remove();
  boundary2.remove();

  mazeBg.pos = { x: width / 2, y: height / 2 };
  player.pos = { x: 125, y: -85 };

  let upperBoundaryPts = [
    [19, -119],
    [611, -115],
    [642, -71],
    [635, 192],
    [616, 214],
    [541, 206],
    [532, 137],
    [400, 137],
    [400, 4],
    [368, 4],
    [368, 132],
    [333, 132],
    [333, -5],
    [298, -5],
    [298, 160],
    [419, 160],
    [444, 190],
    [443, 272],
    [400, 270],
    [398, 203],
    [314, 203],
    [314, 541],
    [27, 541],
    [-9, 494],
    [-16, 261],
    [11, 238],
    [83, 238],
    [106, 263],
    [100, 424],
    [120, 425],
    [124, 186],
    [142, 168],
    [195, 168],
    [195, 4],
    [-20, 4],
  ];
  upperBoundary = new Sprite(upperBoundaryPts, "s");
  upperBoundary.color = color(255, 255, 255, 0);

  let lowerBoundaryPts = [
    [19, -119],
    [-21, -52],
    [591, -52],
    [593, 172],
    [570, 172],
    [570, 178],
    [570, 107],
    [551, 97],
    [436, 97],
    [436, -12],
    [418, -42],
    [280, -42],
    [256, -14],
    [256, 489],
    [32, 485],
    [32, 287],
    [51, 287],
    [51, 447],
    [78, 477],
    [152, 477],
    [173, 438],
    [173, 316],
    [165, 316],
    [165, 284],
    [194, 284],
    [194, 438],
    [223, 477],
    [244, 462],
    [244, 264],
    [220, 237],
    [179, 237],
    [179, 222],
    [220, 222],
    [244, 193],
    [244, -13],
    [222, -41],
    [-24, -41],
  ];
  lowerBoundary = new Sprite(lowerBoundaryPts, "s");
  lowerBoundary.color = color(255, 255, 255, 0);

  screen = 3;
}

function drawScreen3() {
  console.log(mouse.x, mouse.y);
  camera.on();
  camera.x = player.x;
  camera.y = player.y;

  image(mazeBackground, 0, 0, width, height, viewX, viewY, displayWidth, displayHeight);
  mazePlayer();

  camera.off();

  if (player.x < -27) {
    screen4Assets();
  }
}

// LARGE INTESTINES
function screen4Assets() {
  mazeBg.remove();
  player.pos = { x: 68, y: 353 };
  upperBoundary.remove();
  lowerBoundary.remove();

  largeIntestineBg.pos = { x: width / 2, y: height / 2 };

  let boundaryPts = [
    [24, 363],
    [24, -69],
    [44, -69],
    [44, -89],
    [63, -89],
    [63, -109],
    [121, -109],
    [121, -89],
    [161, -89],
    [161, -69],
    [182, -69],
    [182, -50],
    [380, -50],
    [380, -69],
    [439, -69],
    [439, -90],
    [478, -90],
    [478, -109],
    [537, -109],
    [537, -109],
    [537, -90],
    [557, -90],
    [557, -33],
    [578, -33],
    [578, 405],
    [556, 405],
    [556, 443],
    [538, 443],
    [538, 463],
    [497, 463],
    [497, 484],
    [280, 484],
    [280, 504],
    [320, 504],
    [320, 522],
    [338, 522],
    [338, 641],
    [300, 641],
    [300, 601],
    [280, 601],
    [280, 582],
    [241, 582],
    [241, 562],
    [200, 562],
    [200, 544],
    [181, 544],
    [181, 524],
    [161, 524],
    [161, 444],
    [182, 444],
    [181, 444],
    [181, 427],
    [201, 427],
    [201, 406],
    [238, 406],
    [238, 383],
    [438, 383],
    [438, 365],
    [438, 48],
    [418, 48],
    [418, 69],
    [161, 69],
    [161, 49],
    [121, 49],
    [121, 363],
    [101, 363],
    [101, 386],
    [43, 386],
    [43, 363],
    [24, 363],
  ];
  boundary = new Sprite(boundaryPts, "s");
  boundary.color = color(255, 255, 255, 0);

  flowFx.resize(150, 0);
  flowFx2.resize(150, 0);
  flowFx3.resize(150, 0);

  flow1 = new Sprite(flowFx, 59, 310, "n");
  flow2 = new Sprite(flowFx2, 75, 100, "n");
  flow3 = new Sprite(flowFx, 198, -14, "n");
  flow4 = new Sprite(flowFx2, 398, 9, "n");
  flow5 = new Sprite(flowFx2, 520, 100, "n");
  flow6 = new Sprite(flowFx, 520, 250, "n");
  flow7 = new Sprite(flowFx3, 478, 411, "n");
  flow8 = new Sprite(flowFx3, 235, 500, "n");
  flow9 = new Sprite(flowFx, 347, 423, "n");

  spawnWaterDrops(25, 122, 46, 358);
  spawnEnemies(25, 122, 46, 358);

  spawnWaterDrops(155, 495, -45, 45);
  spawnEnemies(155, 495, -45, 45);

  spawnWaterDrops(462, 578, 48, 392);
  spawnEnemies(462, 578, 48, 392);

  spawnWaterDrops(260, 435, 384, 482);
  spawnEnemies(260, 435, 384, 482);

  world.gravity.y = -100;
  screen = 4;
}

function drawScreen4() {
  camera.on();
  camera.x = player.x;
  camera.y = player.y;
  mazePlayer();
  camera.off();

  flow1.rotation = 270;
  flow2.mirror.y = true;
  flow4.rotation = 90;
  flow4.mirror.x = true;
  flow6.rotation = 90;
  flow8.mirror.x = true;
  flow9.mirror.x = true;

  waterDrops.map((waterDrop) => {
    if (player.collides(waterDrop)) {
      waterDrop.remove();
    }
  });

  enemies.map((enemy) => {
    if (player.collides(enemy)) {
      enemy.remove();
    }
  });

  adjustGravity();

  if (kb.presses("space")) {
    bulletLaunch(largeIntestineDirection);
  }
}
