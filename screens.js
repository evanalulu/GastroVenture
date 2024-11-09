let screen;
let isJumping = false;
let viewX = 0;
let viewY = 0;
let zoomLevel = 2;
let largeIntestineDirection = "";
let dialogueActive = false;
let bossActive = false;
let soundPlayed = false;

// HOME SCREEN
function screen0Assets() {
  redButton.resize(300, 80);

  gameTitle = new Sprite(redButton, width / 2, height / 2 - 25, 250, 60, "k");
  enterButton = new Sprite(pinkButton, width / 2, height / 2 + 45, 100, 40, "k");

  playerImage = new Sprite(width / 2, height / 2, 40, 40);

  playerImage.img = idleAni1;
  platformImg.resize(50, 0);

  viewX = (oesophagusBackground.width - width / 2) / 2;

  titleText.html("Gastro-Venture");
  enterText.html("Enter the Mouth!");

  lobbySound.play();
  lobbySound.loop();

  screen = 0;
}

function drawScreen0() {
  background(homeBackground);
  screen0Sounds();
  if (enterButton.mouse.presses()) {
    screen1Assets();
  }
}

// OESOPHAGUS
function screen1Assets() {
  lobbySound.stop();
  enterButton.x = -2100;
  playerImage.x = -2000;
  gameTitle.x = -3000;
  titleText.hide();
  enterText.hide();

  // Background Set up
  oesophagusBg.pos = { x: width / 2, y: height / 2 };

  player2 = new Sprite(-20000, 0, 60, 60);

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
  player.bounciness = -100;

  mapText.html("Oesophagus");

  // Dialogue box set up
  dialogueBoxImg.resize(width / 1.5, 0);
  dialogueBox = new Sprite(dialogueBoxImg, width / 2, height / 4 - 100, width / 4, height / 4, "n");
  textFont(vcr);
  textSize(15);
  fill("white");
  dialogueBox.text = screen1Assets[dialogueIndex];

  camera.y = player.y;
  dialogueActive = true;

  playBackgroundMusic();

  screen = 1;
}

function drawScreen1() {
  if (dialogueActive) {
    if (mouse.presses()) {
      clickSound.play();
      dialogueIndex += 1;
    }
    dialogueBox.text = screen1Dialogues[dialogueIndex];
    if (dialogueIndex == screen1Dialogues.length) {
      dialogueIndex = 0;
      dialogueBox.y = 6000;
      dialogueActive = false;
    }
  } else {
    movePlayer();
  }

  camera.on();
  camera.y = player.y;

  image(oesophagusBackground, 0, 0, width, height, viewX, viewY, displayWidth, displayHeight);
  // Collect alkaline
  crystals.map((crystal) => {
    if (player.overlaps(crystal)) {
      crystalSound.setVolume(0.5);
      crystalSound.play();
      crystal.remove();
    }
  });

  platforms.map((platform) => {
    if (player.collides(platform)) {
      landSound.setVolume(0.5);
      landSound.play();
    }
  });

  if (player.y > height - 20) {
    transitioning = true;
    screen2Assets();
  }

  camera.off();
}

// STOMACH
function screen2Assets() {
  fallSound.setVolume(0.05);
  fallSound.play();

  platforms.remove();
  leftWall.remove();
  rightWall.remove();
  oesophagusBg.remove();
  crystals.remove();
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

  bubble = new Sprite(bubbleImg, player.x, player.y, 50, 50, "n");

  enemy1 = new Sprite(enemy1Img, 134, 200, 10, 10);
  enemy2 = new Sprite(enemy2Img, 440, 327, 10, 10);
  squareSequence();

  bulletSetUp();

  mapText.html("Stomach");

  dialogueActive = true;
  dialogueBox.pos = { x: 385, y: -5 };

  bubbleSound.setVolume(0.3);
  bubbleSound.play();
  bubbleSound.loop();

  screen = 2;
}

function drawScreen2() {
  if (isFalling) {
    // Check if player has reached the liquid (y position 108 is the top of the liquid)
    if (player.y > 104) {
      world.gravity.y = 0;
      player.y = 108; // Stop at the liquid surface
      player.vel.y = 0;
      isFalling = false;
    }
  }
  if (player.y == 108 && !soundPlayed) {
    splashSound.play();
    soundPlayed = true;
  }

  camera.on();
  camera.x = player.x;
  camera.y = player.y;
  bubble.x = player.x;
  bubble.y = player.y;

  if (dialogueActive) {
    if (!isFalling) {
      player.vel.x = 0;
      player.vel.y = 0;
    }
    if (mouse.presses()) {
      clickSound.play();
      dialogueIndex += 1;
    }
    dialogueBox.text = screen2Dialogues[dialogueIndex];
    if (dialogueIndex == screen2Dialogues.length - 1) {
      dialogueIndex = 0;
      dialogueBox.y = 6000;
      dialogueActive = false;
    }
  } else {
    // Move player
    swimPlayer();
  }

  let displayWidth = width / zoomLevel;
  let displayHeight = height / zoomLevel;

  viewX = constrain(viewX, 0, stomachBackground.width - displayWidth);
  viewY = constrain(viewY, 0, stomachBackground.height - displayHeight);

  image(stomachBackground, 0, 0, width, height, viewX, viewY, displayWidth, displayHeight);

  bullets.map((bullet) => {
    if (bullet.collides(enemy1)) {
      enemy1.remove();
      bullet.remove();
      hitSound.play();
    } else if (bullet.collides(enemy2)) {
      enemy2.remove();
      bullet.remove();
      hitSound.play();
    } else if (bullet.collides(boundary) || bullet.collides(boundary2)) {
      bullet.remove();
    }
  });

  if (player.collides(enemy1) || player.collides(enemy2)) {
    player.pos = { x: 350, y: 108 };
    deathSound.play();
  }

  if (player.x < -140 && player.y > 230) {
    screen3Assets();
  }

  camera.off();
}

// SMALL INTESTINES
function screen3Assets() {
  transitionSound.play();
  stomachBg.remove();
  boundary.remove();
  boundary2.remove();
  enemies.remove();
  enemy1.remove();
  enemy2.remove();
  bubbleSound.stop(0);
  bubble.x = 3000;
  soundPlayed = false;

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

  mapText.html("Small Intestine");

  dialogueActive = true;
  dialogueBox.pos = { x: 116, y: -180 };
  walkWaterSound.rate(1.5);
  screen = 3;
}

function drawScreen3() {
  camera.on();
  camera.x = player.x;
  camera.y = player.y;

  if (dialogueActive) {
    if (mouse.presses()) {
      clickSound.play();
      dialogueIndex += 1;
    }
    dialogueBox.text = screen3Dialogues[dialogueIndex];
    if (dialogueIndex == screen3Dialogues.length - 1) {
      dialogueIndex = 0;
      dialogueBox.y = 6000;
      dialogueActive = false;
    }
  } else {
    image(mazeBackground, 0, 0, width, height, viewX, viewY, displayWidth, displayHeight);
    mazePlayer();

    camera.off();

    if (player.x < -27) {
      screen4Assets();
    }
  }
}

// LARGE INTESTINES
function screen4Assets() {
  isWalking = false;
  walkWaterSound.stop();
  mazeBg.remove();
  player.pos = { x: 68, y: 353 };
  upperBoundary.remove();
  lowerBoundary.remove();
  transitionSound.play();

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
  // spawnEnemies(25, 122, 46, 358);

  spawnWaterDrops(155, 495, -45, 45);
  // spawnEnemies(155, 495, -45, 45);

  spawnWaterDrops(462, 578, 48, 392);
  // spawnEnemies(462, 578, 48, 392);

  spawnWaterDrops(260, 435, 384, 482);
  // spawnEnemies(260, 435, 384, 482);

  mapText.html("Large Intestine");

  dialogueActive = true;
  dialogueBox.pos = { x: 79, y: 270 };

  flowSound.play();
  flowSound.loop();

  screen = 4;
}

function drawScreen4() {
  if (dialogueActive) {
    if (mouse.presses()) {
      clickSound.play();
      dialogueIndex += 1;
    }
    dialogueBox.text = screen4Dialogues[dialogueIndex];
    if (dialogueIndex == screen4Dialogues.length - 1) {
      dialogueIndex = 0;
      dialogueBox.y = 6000;
      dialogueActive = false;
      world.gravity.y = -100;
    }
  } else {
    mazePlayer();
    adjustGravity();
  }

  camera.on();
  camera.x = player.x;
  camera.y = player.y;
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
      waterCollectSound.setVolume(0.4);
      waterCollectSound.play();
      waterDrop.remove();
    }
  });

  enemies.map((enemy) => {
    if (player.collides(enemy)) {
      enemy.remove();
    }
  });

  if (player.y > 620) {
    screen5Assets();
  }
}

// RECTUM
function screen5Assets() {
  walkWaterSound.stop();
  flow1.remove();
  flow2.remove();
  flow3.remove();
  flow4.remove();
  flow5.remove();
  flow6.remove();
  flow7.remove();
  flow8.remove();
  flow9.remove();
  boundary.remove();
  waterDrops.remove();
  largeIntestineBg.remove();
  transitionSound.play();

  world.gravity.y = 0;
  player.vel.x = 0;
  player.vel.y = 0;

  player.pos = { x: width / 2, y: height / 2 };
  rectumBg.pos = { x: width / 2, y: height / 2 };

  let boundaryPts = [
    [-53, -193],
    [653, -193],
    [653, 743],
    [577, 743],
    [577, 783],
    [537, 783],
    [537, 821],
    [458, 821],
    [458, 899],
    [339, 899],
    [339, 975],
    [261, 975],
    [261, 899],
    [223, 899],
    [223, 859],
    [143, 859],
    [143, 823],
    [61, 823],
    [61, 784],
    [23, 784],
    [23, 741],
    [-53, 741],
    [-53, 193],
  ];
  boundary = new Sprite(boundaryPts, "s");
  boundary.color = color(255, 255, 255, 0);

  mapText.html("Rectum");

  toxicBubbleImg.resize(55, 55);
  obstacle1 = new Sprite(toxicBubbleImg, 590, 290, 40, 40);
  obstacle1.vel.x = -3;
  obstacle1.rotationLock = true;

  mucusMonsterImg.resize(65, 65);
  obstacle2 = new Sprite(mucusMonsterImg, 0, 460, 65, 65);
  obstacle2.vel.x = 4;
  obstacle2.rotationLock = true;

  finalBossImg.resize(200, 0);
  finalBoss = new Sprite(finalBossImg, 590, 670, 50, 50);
  finalBoss.vel.x = -5;
  finalBoss.rotationLock = true;

  dialogueActive = true;
  dialogueBox.pos = { x: width / 2, y: height / 2 + 100 };

  bossWalkSound.setVolume(0.7);
  bossWalkSound.play();
  bossWalkSound.loop();

  screen = 5;
}

function drawScreen5() {
  console.log(mouse.x, mouse.y);

  if (dialogueActive) {
    if (mouse.presses()) {
      clickSound.play();
      dialogueIndex += 1;
    }
    dialogueBox.text = screen5Dialogues[dialogueIndex];
    if (dialogueIndex == screen5Dialogues.length - 1) {
      dialogueIndex = 0;
      dialogueBox.y = 6000;
      dialogueActive = false;
    }
  } else {
    mazePlayer();
  }

  camera.on();

  camera.x = player.x;
  camera.y = player.y + 150;
  camera.off();

  obstacle1.mirror.x = true;
  obstacle2.mirror.x = true;

  obstacle1.vel.y = 0;
  obstacle2.vel.y = 0;

  if (obstacle1.x < 0) {
    obstacle1.x = 590;
  }

  if (obstacle2.x > 590) {
    obstacle2.x = 0;
  }

  if (player.y >= 540 && !soundPlayed) {
    bossActive = true;
    soundPlayed = true;
    bossRoarSound.play();
  }

  if (bossActive) {
    let distance = dist(player.x, player.y, finalBoss.x, finalBoss.y);

    if (distance > 40) {
      finalBoss.direction = finalBoss.angleTo(player);
      finalBoss.speed = 5;
    } else if (distance < 30) {
      finalBoss.speed = 0;
    }

    if (kb.pressing("right")) finalBoss.mirror.x = true;
    else finalBoss.mirror.x = false;
  } else {
    if (finalBoss.x < 0) {
      finalBoss.x = 590;
    }
  }

  screen5Sounds();

  if (player.collides(obstacle1) || player.collides(obstacle2) || player.collides(finalBoss)) {
    player.pos = { x: width / 2, y: height / 2 };
    deathSound.play();
  }

  if (player.y > 960) {
    screen6Assets();
  }
}

// END SCREEN
function screen6Assets() {
  bossWalkSound.stop();
  backgroundSound.stop();
  flowSound.stop();
  slowHeartBeat.stop();
  walkWaterSound.stop();
  boundary.remove();
  obstacle1.remove();
  obstacle2.remove();
  finalBoss.remove();
  rectumBg.remove();
  mapText.html("The End");

  squeezeFx.resize(70, 0);
  squeezeEffect = new Sprite(squeezeFx, 245, 1171, 70, 70, "n");
  endConfetti = new Sprite(endConfettiImg, 320, 1140, "n");
  endText = new Sprite(endFx, width / 2, 1313 - height / 2, "n");
  ground = new Sprite(width / 2 - 30, 1315, width, 2, "s");

  world.gravity.y = 10;
  player.y = 1192;
  player.vel.y = -6;
  player.vel.x = 1;

  fartSound.play();
  lobbySound.setVolume(0.6);
  lobbySound.play();
  lobbySound.loop(0);

  screen = 6;
}

function drawScreen6() {
  console.log(mouse.x, mouse.y);
  background(endBackground);
  if (player.collides(ground)) {
    squeezeEffect.remove();
    endConfetti.remove();
    endText.img = endFx2;
    player.changeAni("idle");
    dialogueActive = true;
    dialogueBox.pos = { x: width / 2 - 10, y: 1313 - height / 2 };
  }

  if (dialogueActive) {
    if (mouse.presses()) {
      clickSound.play();
      dialogueIndex += 1;
    }
    dialogueBox.text = screen6Dialogues[dialogueIndex];
    if (dialogueIndex == screen6Dialogues.length) {
      dialogueIndex = 0;
      dialogueBox.y = 6000;
      dialogueActive = false;
    }
  }
}
