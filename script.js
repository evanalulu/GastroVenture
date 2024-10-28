/* VARIABLES */
let screen = 0;
let isJumping = false;
let viewX = 0;  // x offset for the portion of the image being viewed
let viewY = 0;  // y offset for the portion of the image being viewed
let zoomLevel = 2;

/* PRELOAD LOADS FILES */
function preload() {
    // Background Images
    homeBackground = loadImage('assets/homeBg.png');
    oesophagusBackground = loadImage('assets/oesophagus.png');
    stomachBackground = loadImage('assets/stomach2.png');
    stomachBackground2 = loadImage('assets/stomachBg3.png');
    mazeBackground = loadImage('assets/maze.png');
    largeIntestineBackground = loadImage('assets/large_intestine.png');

    // Enemies
    enemy1Img = loadImage('assets/enemies/FungalMyconid.gif');
    enemy2Img = loadImage('assets/enemies/DeathSlime.gif');

    // Objects
    platformImg = loadImage('assets/nerve_platform.png');

    // UI
    pinkButton = loadImage('assets/UI/pinkButton.png');
    redButton = loadImage('assets/UI/redButton.png');

    // Idle Animation
    idleAni1 = loadImage('assets/idle/idle1.png');
    idleAni2 = loadImage('assets/idle/idle2.png');
    idleAni3 = loadImage('assets/idle/idle3.png');
    idleAni4 = loadImage('assets/idle/idle4.png')

    // Left Walk-imation
    lwalk1 = loadImage('assets/walk/lwalk1.png');
    lwalk2 = loadImage('assets/walk/lwalk2.png');
    lwalk3 = loadImage('assets/walk/lwalk3.png');
    lwalk4 = loadImage('assets/walk/lwalk4.png');
    lwalk5 = loadImage('assets/walk/lwalk5.png');
    lwalk6 = loadImage('assets/walk/lwalk6.png');
    lwalk7 = loadImage('assets/walk/lwalk7.png');
    lwalk8 = loadImage('assets/walk/lwalk8.png');

    // Right Walk-imation
    rwalk1 = loadImage('assets/walk/rwalk1.png');
    rwalk2 = loadImage('assets/walk/rwalk2.png');
    rwalk3 = loadImage('assets/walk/rwalk3.png');
    rwalk4 = loadImage('assets/walk/rwalk4.png');
    rwalk5 = loadImage('assets/walk/rwalk5.png');
    rwalk6 = loadImage('assets/walk/rwalk6.png');
    rwalk7 = loadImage('assets/walk/rwalk7.png');
    rwalk8 = loadImage('assets/walk/rwalk8.png');

    // Left Jump-imation
    ljump1 = loadImage('assets/jump/ljump1.png');
    ljump2 = loadImage('assets/jump/ljump2.png');
    ljump3 = loadImage('assets/jump/ljump3.png');
    ljump4 = loadImage('assets/jump/ljump4.png');
    ljump5 = loadImage('assets/jump/ljump5.png');

    // Right Jump-imation
    rjump1 = loadImage('assets/jump/rjump1.png');
    rjump2 = loadImage('assets/jump/rjump2.png');
    rjump3 = loadImage('assets/jump/rjump3.png');
    rjump4 = loadImage('assets/jump/rjump4.png');
    rjump5 = loadImage('assets/jump/rjump5.png');

    // Swim Idle Animation
    swim_idle1 = loadImage('assets/swim_idle/swim_idle1.png');
    swim_idle2 = loadImage('assets/swim_idle/swim_idle2.png');
    swim_idle3 = loadImage('assets/swim_idle/swim_idle3.png');
    swim_idle4 = loadImage('assets/swim_idle/swim_idle4.png');
    swim_idle5 = loadImage('assets/swim_idle/swim_idle5.png');
    swim_idle6 = loadImage('assets/swim_idle/swim_idle6.png');
    swim_idle7 = loadImage('assets/swim_idle/swim_idle7.png');

    // Left Swim-imation
    lswim1 = loadImage('assets/swim/lswim1.png');
    lswim2 = loadImage('assets/swim/lswim2.png');
    lswim3 = loadImage('assets/swim/lswim3.png');
    lswim4 = loadImage('assets/swim/lswim4.png');
    lswim5 = loadImage('assets/swim/lswim5.png');
    lswim6 = loadImage('assets/swim/lswim6.png');

    // Right Swim-imation
    rswim1 = loadImage('assets/swim/rswim1.png');
    rswim2 = loadImage('assets/swim/rswim2.png');
    rswim3 = loadImage('assets/swim/rswim3.png');
    rswim4 = loadImage('assets/swim/rswim4.png');
    rswim5 = loadImage('assets/swim/rswim6.png');
    rswim6 = loadImage('assets/swim/rswim6.png');

    // Fonts
    forwa = loadFont('assets/fonts/FFFFORWA.TTF');
    vcr = loadFont('assets/fonts/VCR_OSD_MONO_1.001.ttf');

    test = loadImage('assets/test.png');
}

/* SETUP RUNS ONCE */
function setup() {
    createCanvas(600,400);
    world.gravity.y = 10;

    oesophagusBg = new Sprite(oesophagusBackground, -100,-2000, 'n');
    oesophagusBg.scale = zoomLevel;

    stomachBg = new Sprite(stomachBackground2, -1000, 2000, 'n');
    stomachBg.scale = zoomLevel;

    mazeBg = new Sprite(mazeBackground, -1000, 2000, 'n');
    mazeBg.scale = 1.5;

    largeIntestineBg = new Sprite(largeIntestineBackground, 3000, -2000, 'n');
    largeIntestineBackground.scale = zoomLevel;

    redButton.resize(350, 100);
    gameTitle = new Sprite(redButton, width/2, height/2 - 80, 250, 60, 'k');
    enterButton = new Sprite(pinkButton, width/2, height/2 + 80, 100, 40, 'k');
    playerImage = new Sprite(width/2, height/2, 40, 40);

    playerImage.img = idleAni1;
    player = new Sprite(-100, -200);
    ground = new Sprite(-100, -300, width, 20,  's');
    //   playButton = new player(width/2, height/2, 100, 50, 'k');
    platformImg.resize(50,0);

    // Set viewX and viewY to the middle of the image
    viewX = (oesophagusBackground.width - width/2) / 2;  // Center horizontally
    // viewY = (oesophagusBackground.height - height) / 2; // Center vertically// viewY = oesophagusBackground.height / 2 - height / 2; // Center vertically

    screen0Assets();

}

/* DRAW LOOP REPEATS */
function draw() {
    allSprites.debug = mouse.pressing();

         if (screen == 0) { drawScreen0(); } 
    else if (screen == 1) { drawScreen1(); } 
    else if (screen == 2) { drawScreen2(); }
    else if (screen == 3) { drawScreen3(); }
    else if (screen == 4) { drawScreen4(); }

}

/* FUNCTIONS */
function screen0Assets() {
    textFont(forwa);
    // gameTitle.text = "Journey to the \nCenter of the Digestive Tract"
    // gameTitle.textOffset.y = -10;
    enterButton.text = "Start Game!";
}

function drawScreen0() {
    background(homeBackground);

    enterButton.layer = 2;
    gameTitle.layer = 1;
    textAlign(CENTER, CENTER);  // Align text to center
    textSize(13);  // Set text size
    text("Journey to the", gameTitle.x, gameTitle.y - 23); 
    text("Center of the Digestive Tract", gameTitle.x, gameTitle.y);
    if (enterButton.mouse.presses()) {
        screen1Assets();
    }
}

function screen1Assets() {
    enterButton.x = -1000;
    playerImage.x = -2000;
    gameTitle.x = -3000;

    // Background Set up
    oesophagusBg.pos = { x: width/2, y: height/2 };

    player.x = width/2;
    // ground.pos = { x: width/2, y: height - 20 }
    player.y = height/2;
    player.w = 20;
    player.h = 20;
    player.rotationLock = true;

    aniSetUp();

    // Walls of Oesophagus
    leftWall = new Sprite(viewX - 65, height/2, 5, height * 2, 's');
    rightWall = new Sprite(viewX + 370, height/2, 5, height * 2, 's');
    leftWall.color = 'brown';
    rightWall.color = 'brown';

    // Platforms
    platforms = new Group();
    platforms.h = 5;
    platforms.w = 30;
    platforms.color = "blue";
	platforms.collider = "s";
    screen = 1;

    let platformCount = 10;
    gap = height / platformCount;
    for (let i = 1; i < platformCount; i++) {
      num = random(leftWall.x , rightWall.x);
      num2 = floor(random(0,3));
      new platforms.Sprite(platformImg, num, height - i * gap);
    }
    player.pos = { x: platforms[platformCount - 2].x, y: platforms[platformCount - 2].y };
}

function drawScreen1() {
    camera.on();
    camera.y = player.y;

    // Display the portion of the image based on the viewX and viewY offsets
    image(oesophagusBackground, 0, 0, width, height, viewX, viewY, displayWidth, displayHeight);

    // Move player
    movePlayer();

    camera.off();

    if (player.y > height - 20) {
        screen2Assets();
    }
}


function screen2Assets() {
    platforms.remove();
    leftWall.remove();
    rightWall.remove();
    oesophagusBg.remove();
    camera.off();

    stomachBg.pos = { x: width/2, y: height/2 };

    let boundaryPoints = [
        [-35, 190], [65, 190], [65, 165], [95, 165], [95, 140], [115, 140], [115, 120],
        [120, 120],[140, 120],[140, 85],[170, 80],[170, -65], [-45, 203], [-83, 205], [-189, 308]
    ];
    let boundaryPoints2 = [
        [605, 180],[580, 180],[580, 220],[560, 220],[560, 270],[540, 270],[540, 310],[520, 310],
        [520, 330],[500, 330],[500, 350],[480, 350],[480, 373], [461, 373], [461, 396], [443, 396],
        [443, 420], [420, 420], [420, 440], [398, 440], [398, 457], [356, 457], [356, 480], 
        [298, 480], [298, 504], [155, 504], [155, 483], [81, 483], [81, 463], [39, 463], [39, 439],
        [-2, 439], [-2, 418], [-24, 418], [-24, 397], [-62, 397], [-62, 375], [-83, 375], [-83, 355],
        [-103, 355],[-103, 328], [-122, 328], [-122, 308], [-164, 308]  
    ];

    boundary = new Sprite(boundaryPoints, 's');
    boundary2 = new Sprite(boundaryPoints2, 's');
    boundary.color = color(255, 255, 255, 0);
    boundary2.color = color(255, 255, 255, 0);

    player.vel.y = 20;
    isFalling = true;
    // player.y = height/2;

    enemy1 = new Sprite(enemy1Img, 134, 200, 10, 10);
    enemy2 = new Sprite(enemy2Img, 440, 327, 10, 10);
    squareSequence();

    bulletSetUp();

    screen = 2;
}

function drawScreen2() {

    if (isFalling) {
        // Check if player has reached the liquid (y position 108 is the top of the liquid)
        if (player.y >= 108) {
            world.gravity.y = 0;
            player.y = 108;  // Stop at the liquid surface
            player.vel.y = 0;  // Stop downward movement
            isFalling = false;  // Stop falling
        }
    }

    camera.on();
    camera.x = player.x;
    camera.y = player.y;

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

    for (let bullet of bullets) {
        if (bullet.collides(enemy1)) {
            enemy1.remove();
            bullet.remove();
        }
        if (bullet.collides(enemy2)) {
            enemy2.remove();
            bullet.remove();
        }
        if (bullet.collides(boundary) || bullet.collides(boundary2 )) {
            bullet.remove();
        }
        if (bullet.x > 600 || bullet.y > 400) bullet.remove();
    }

    if (player.collides(enemy1) || player.collides(enemy2)) {
        player.pos = { x: 350, y: 108};
    }

    if (kb.presses('n')) {
        screen3Assets();
    }

    camera.off();
}

function screen3Assets() {
    stomachBg.remove();
    boundary.remove();
    boundary2.remove();

    mazeBg.pos = { x: width/2, y: height/2 };
    player.pos = { x: 125, y: -85 };

    let upperBoundaryPts = [
        [19, -119], [611, -115], [642, -71], [635, 192], [616, 214], [541, 206], [532, 137], [400, 137], [400, 4], [368, 4], [368, 132], [333, 132], [333, -5], [298, -5], [298, 160], [419, 160], [444, 190], [443, 272], 
        [400, 270], [398, 203], [314, 203], [314, 541], [27, 541], [-9, 494], [-16, 261], [11, 238], [83, 238], [106, 263], [100, 424], [120, 425], [124, 186], [142, 168], [195, 168], [195, 4], [-20, 4], [], [], 
    ];
    upperBoundary = new Sprite(upperBoundaryPts, 's');
    upperBoundary.color = color(255, 255, 255, 0);

    let lowerBoundaryPts = [
        [19, -119], [-21, -52], [591, -52], [593, 172] , [570, 172], [570, 178], [570, 107], [551, 97], [436, 97], [436, -12], [418, -42], [280, -42], [256, -14], [256, 489], [32, 485], [32, 287], [51, 287], [51, 447], [78, 477], [152, 477], 
        [173, 438], [173, 316], [165, 316], [165, 284], [194, 284], [194, 438], [223, 477], [244, 462], [244, 264], [220, 237], [179, 237], [179, 222], [220, 222], [244, 193], [244, -13], [222, -41], [-24, -41], [], [],  
    ];
    lowerBoundary = new Sprite(lowerBoundaryPts, 's');
    lowerBoundary.color = color(255, 255, 255, 0);

    screen = 3;
}

function drawScreen3() {
    camera.on();
    camera.x = player.x;
    camera.y = player.y;

    image(mazeBackground, 0, 0, width, height, viewX, viewY, displayWidth, displayHeight);
    mazePlayer();

    camera.off();

    if (kb.presses('n')) {
        screen4Assets();
    }
}

function screen4Assets() {
    mazeBg.remove();
    player.pos = { x: width/2, y: height/2 };
    upperBoundary.remove();
    lowerBoundary.remove();

    largeIntestineBg.pos = { x: width/2, y: height/2 };

    let outerBoundaryPts = [
        [24, 363], [24, -69], [44, -69], [44, -89], [63, -89], [63, -109], [121, -109], [121, -89], [161, -89], [161, -69], [182, -69], [182, -50], [380, -50], [380, -69], [439, -69], 
        [439, -90], [478, -90], [478, -109], [537, -109], [537, -109], [537, -90], [557, -90], [557, -33], [578, -33], [578, 405], [556, 405], [556, 443], [538, 443], [538, 463], [497, 463], [497, 484], [280, 484], [280, 504], [320, 504], [320, 522], 
        [338, 522], [338, 641], [300, 641], [300, 601], [280, 601], [280, 582], [241, 582], [241, 562], [200, 562], [200, 544], [181, 544], [181, 524], [161, 524], [161, 444], [182, 444], [181, 444], [181, 427], [201, 427], [201, 406],
        [238, 406], [238, 383], [438, 383], [438, 365], [438, 48], [418, 48], [418, 69], [161, 69], [161, 49], [121, 49], [121, 363], [101, 363], [101, 386], [43, 386], [43, 363], [24, 363]
    ];
    outerBoundary = new Sprite(outerBoundaryPts, 's');
    outerBoundary.color = 'red';
    // outerBoundary.color = color(255, 255, 255, 0);

    screen = 4;
}

function drawScreen4() {
    camera.on();
    camera.x = player.x;
    camera.y = player.y;

    // image(largeIntestineBg, 0, 0, width, height, viewX, viewY, displayWidth, displayHeight);
    mazePlayer();

    console.log(mouse.x, mouse.y);

    camera.off();
}

function movePlayer() {
    if (kb.presses('left')) player.changeAni('lWalk');
    if (kb.presses('right')) player.changeAni('rWalk');
    if (kb.presses('up') && player.ani.name === 'left') player.changeAni('lJump');
    if (kb.presses('up') && player.ani.name === 'right') player.changeAni('rJump');

    if (kb.presses("up") && !isJumping) {
        player.vel.y = -6;
        isJumping = true; // Player is now in the air
    }

    if (kb.pressing("left")) {
        player.vel.x = -3;
    } else if (kb.pressing("right")) {
        player.vel.x = 3;
    } else {
        player.vel.x = 0;
        player.changeAni('idle');
    }
    // Check if player is grounded
    if (player.collides(platforms)) {
        isJumping = false; // Player is on the ground again
    }

    if (player.x > width) player.x = width;
    // if (player.x < 0) player.x = 0;
    if (player.y > height) player.y = height;
    if (player.y < 0) player.y = 0; 
}

function swimPlayer() {
    if (kb.presses('left')) player.changeAni('lSwim');
    if (kb.presses('right')) player.changeAni('rSwim');
    if (kb.presses('up') && player.ani.name === 'left') player.changeAni('lJump');
    if (kb.presses('up') && player.ani.name === 'right') player.changeAni('rJump');


    if (kb.pressing('left')) {
        player.vel.x = -3;
        if (kb.presses('space')) bulletLaunch('left');
    } else if (kb.pressing("right")) {
        player.vel.x = 3;
        if (kb.presses('space')) bulletLaunch('right');
    } else if (kb.pressing("up")) {
        player.vel.y = -3;
    } else if (kb.pressing("down")) {
        player.vel.y = 3;
    } else {
        player.vel.x = 0;
        player.vel.y = 0;
        player.changeAni('swimIdle');
    }

    if (player.x > 597) player.x = 597;
    // if (player.x < 0) player.x = 0;
    if (player.y > 510) player.y = 510;
    if (player.y < 108) player.y = 108; 
}

function mazePlayer() {
    if (kb.presses('left')) player.changeAni('lWalk');
    if (kb.presses('right')) player.changeAni('rWalk');

    if (kb.pressing("left")) {
        player.vel.x = -5;
    } else if (kb.pressing("right")) {
        player.vel.x = 5;
    } else if (kb.pressing('up')) {
        player.vel.y = -5;
    } else if (kb.pressing('down')) {
        player.vel.y = 5;
    }else {
        player.vel.x = 0;
        player.vel.y = 0;
        player.changeAni('idle');
    }
}

function enemySetUp() {
    enemies = new Group();
    enemies.w = 10;
    enemies.h = 10;
}

function bulletSetUp() {
    bullets = new Group();
    bullets.color = 'yellow';
	bullets.y = 25;
	bullets.diameter = 10;
}

function bulletLaunch(direction) {
    bullet  = new bullets.Sprite();
    bullet.x = player.x;
    bullet.y = player.y;

    if (direction == 'left') {
        bullet.x = player.x - 10;
        bullet.vel.x = -3;
        bullet.vel.y = 0; 
    } else if (direction == 'right') {
        bullet.x = player.x + 10;
        bullet.vel.x = 3;
        bullet.vel.y = 0;
    } else { 
        bullet.vel.x = -3; 
    }
  }

function aniSetUp() {
    idleAni = loadAnimation(idleAni1, idleAni2, idleAni3, idleAni4);
    lWalkAni = loadAnimation(lwalk1, lwalk2, lwalk3, lwalk4, lwalk5, lwalk6, lwalk7, lwalk8);
    rWalkAni = loadAnimation(rwalk1, rwalk2, rwalk3, rwalk4, rwalk5, rwalk6, rwalk7, rwalk8);
    lJumpAni = loadAnimation(ljump1, ljump2, ljump3, ljump4, ljump5);
    rJumpAni = loadAnimation(rjump1, rjump2, rjump3, rjump4, rjump5);

    swimIdleAni = loadAnimation(swim_idle2, swim_idle3, swim_idle4, swim_idle5, swim_idle6, swim_idle7);
    lSwimAni = loadAnimation(lswim1, lswim2, lswim3, lswim4, lswim5, lswim6);
    rSwimAni = loadAnimation(rswim1, rswim2, rswim3, rswim4, rswim5, rswim6);

    player.anis.frameDelay = 8;

    player.addAnis({
		lWalk: lWalkAni,
        rWalk: rWalkAni,
        lJump: lJumpAni,
        rJump: rJumpAni,
        idle: idleAni,
        rSwim: rSwimAni,
        lSwim: lSwimAni,
        swimIdle: swimIdleAni
	});

    player.pixelPerfect = true;

}

function resizeImages() {
    idleAni1.resize(150,0);
    idleAni2.resize(150,0);
    idleAni3.resize(150,0);
    idleAni4.resize(150,0);

    lwalk1.resize(150,0);
    lwalk2.resize(150,0);
    lwalk3.resize(150,0);
    lwalk4.resize(150,0);
    lwalk5.resize(150,0);
    lwalk6.resize(150,0);
    lwalk7.resize(150,0);
    lwalk8.resize(150,0);

    rwalk1.resize(150,0);
    rwalk2.resize(150,0);
    rwalk3.resize(150,0);
    rwalk4.resize(150,0);
    rwalk5.resize(150,0);
    rwalk6.resize(150,0);
    rwalk7.resize(150,0);
    rwalk8.resize(150,0);
}

async function squareSequence() {
    // Move both enemies concurrently
	await Promise.all([
        enemy1.move(50),
        enemy2.move(50)
    ]);

    // Rotate both enemies concurrently
	await Promise.all([
        enemy1.rotate(90),
        enemy2.rotate(180)
    ]);

    // Add a delay if needed
    await delay(250);

    // Call the sequence again
	squareSequence();
}