/* PRELOAD LOADS FILES */
function preload() {
  // Background Images
  homeBackground = loadImage("assets/backgrounds/homeBg2.png");
  oesophagusBackground = loadImage("assets/backgrounds/oesophagus.png");
  stomachBackground = loadImage("assets/backgrounds/stomachBg.png");
  mazeBackground = loadImage("assets/backgrounds/maze.png");
  largeIntestineBackground = loadImage("assets/backgrounds/large_intestine.png");
  rectumBackground = loadImage("assets/backgrounds/rectum.png");
  endBackground = loadImage("assets/backgrounds/endBg2.gif");
  endConfettiImg = loadImage("assets/backgrounds/endConfetti.gif");

  // Enemies
  enemy1Img = loadImage("assets/enemies/FungalMyconid.gif");
  enemy2Img = loadImage("assets/enemies/DeathSlime.gif");
  enemy3Img = loadImage("assets/enemies/OchreJelly.gif");
  enemy4Img = loadImage("assets/enemies/RedCap.gif");
  enemy5Img = loadImage("assets/enemies/ShriekerMushroom.gif");
  enemy6Img = loadImage("assets/enemies/StoneTroll.gif");
  toxicBubbleImg = loadImage("assets/enemies/toxicBubble.gif");
  mucusMonsterImg = loadImage("assets/enemies/mucusMonster.gif");
  finalBossImg = loadImage("assets/enemies/finalBoss.gif");

  // Objects
  platformImg = loadImage("assets/objects/nerve_platform.png");
  alkaline = loadImage("assets/objects/alkaline.gif");
  bubbleImg = loadImage("assets/objects/bubble.png");
  waterDrop = loadImage("assets/objects/waterDrop.gif");
  bulletImg = loadImage("assets/objects/bullet.gif");

  // UI
  pinkButton = loadImage("assets/UI/pinkButton.png");
  redButton = loadImage("assets/UI/redButton.png");
  dialogueBoxImg = loadImage("assets/UI/dialogue.png");
  customCursor = loadImage("assets/UI/cursor.png");

  // Idle Animation
  idleAni1 = loadImage("assets/idle/idle1.png");
  idleAni2 = loadImage("assets/idle/idle2.png");
  idleAni3 = loadImage("assets/idle/idle3.png");
  idleAni4 = loadImage("assets/idle/idle4.png");

  // Left Walk-imation
  lwalk1 = loadImage("assets/walk/lwalk1.png");
  lwalk2 = loadImage("assets/walk/lwalk2.png");
  lwalk3 = loadImage("assets/walk/lwalk3.png");
  lwalk4 = loadImage("assets/walk/lwalk4.png");
  lwalk5 = loadImage("assets/walk/lwalk5.png");
  lwalk6 = loadImage("assets/walk/lwalk6.png");
  lwalk7 = loadImage("assets/walk/lwalk7.png");
  lwalk8 = loadImage("assets/walk/lwalk8.png");

  // Right Walk-imation
  rwalk1 = loadImage("assets/walk/rwalk1.png");
  rwalk2 = loadImage("assets/walk/rwalk2.png");
  rwalk3 = loadImage("assets/walk/rwalk3.png");
  rwalk4 = loadImage("assets/walk/rwalk4.png");
  rwalk5 = loadImage("assets/walk/rwalk5.png");
  rwalk6 = loadImage("assets/walk/rwalk6.png");
  rwalk7 = loadImage("assets/walk/rwalk7.png");
  rwalk8 = loadImage("assets/walk/rwalk8.png");

  // Forward Walk-imation
  fwalk1 = loadImage("assets/walk/fwalk1.png");
  fwalk2 = loadImage("assets/walk/fwalk2.png");
  fwalk3 = loadImage("assets/walk/fwalk3.png");
  fwalk4 = loadImage("assets/walk/fwalk4.png");
  fwalk5 = loadImage("assets/walk/fwalk5.png");
  fwalk6 = loadImage("assets/walk/fwalk6.png");
  fwalk7 = loadImage("assets/walk/fwalk7.png");
  fwalk8 = loadImage("assets/walk/fwalk8.png");

  // Backward Walk-imation
  bwalk1 = loadImage("assets/walk/bwalk1.png");
  bwalk2 = loadImage("assets/walk/bwalk2.png");
  bwalk3 = loadImage("assets/walk/bwalk3.png");
  bwalk4 = loadImage("assets/walk/bwalk4.png");
  bwalk5 = loadImage("assets/walk/bwalk5.png");
  bwalk6 = loadImage("assets/walk/bwalk6.png");
  bwalk7 = loadImage("assets/walk/bwalk7.png");
  bwalk8 = loadImage("assets/walk/bwalk8.png");

  // Left Jump-imation
  ljump1 = loadImage("assets/jump/ljump1.png");
  ljump2 = loadImage("assets/jump/ljump2.png");
  ljump3 = loadImage("assets/jump/ljump3.png");
  ljump4 = loadImage("assets/jump/ljump4.png");
  ljump5 = loadImage("assets/jump/ljump5.png");

  // Right Jump-imation
  rjump1 = loadImage("assets/jump/rjump1.png");
  rjump2 = loadImage("assets/jump/rjump2.png");
  rjump3 = loadImage("assets/jump/rjump3.png");
  rjump4 = loadImage("assets/jump/rjump4.png");
  rjump5 = loadImage("assets/jump/rjump5.png");

  // Swim Idle Animation
  swim_idle1 = loadImage("assets/swim_idle/swim_idle1.png");
  swim_idle2 = loadImage("assets/swim_idle/swim_idle2.png");
  swim_idle3 = loadImage("assets/swim_idle/swim_idle3.png");
  swim_idle4 = loadImage("assets/swim_idle/swim_idle4.png");
  swim_idle5 = loadImage("assets/swim_idle/swim_idle5.png");
  swim_idle6 = loadImage("assets/swim_idle/swim_idle6.png");
  swim_idle7 = loadImage("assets/swim_idle/swim_idle7.png");

  // Left Swim-imation
  lswim1 = loadImage("assets/swim/lswim1.png");
  lswim2 = loadImage("assets/swim/lswim2.png");
  lswim3 = loadImage("assets/swim/lswim3.png");
  lswim4 = loadImage("assets/swim/lswim4.png");
  lswim5 = loadImage("assets/swim/lswim5.png");
  lswim6 = loadImage("assets/swim/lswim6.png");

  // Right Swim-imation
  rswim1 = loadImage("assets/swim/rswim1.png");
  rswim2 = loadImage("assets/swim/rswim2.png");
  rswim3 = loadImage("assets/swim/rswim3.png");
  rswim4 = loadImage("assets/swim/rswim4.png");
  rswim5 = loadImage("assets/swim/rswim6.png");
  rswim6 = loadImage("assets/swim/rswim6.png");

  // FX
  flowFx = loadImage("assets/fx/flow_fx.gif");
  flowFx2 = loadImage("assets/fx/flow_fx2.gif");
  flowFx3 = loadImage("assets/fx/flow_fx3.gif");
  squeezeFx = loadImage("assets/fx/squeeze.gif");
  endFx = loadImage("assets/fx/endPop.gif");
  endFx2 = loadImage("assets/fx/endPop2.png");

  // Fonts
  forwa = loadFont("assets/fonts/FFFFORWA.TTF");
  vcr = loadFont("assets/fonts/VCR_OSD_MONO_1.001.ttf");

  // Sounds
  soundFormats("mp3");
  lobbySound = loadSound("assets/sound/lobby.mp3");
  backgroundSound = loadSound("assets/sound/background.mp3");
  slowHeartBeat = loadSound("assets/sound/slowHeartbeat.mp3");
  hoverSound = loadSound("assets/sound/hover.mp3");
  clickSound = loadSound("assets/sound/click.mp3");
  landSound = loadSound("assets/sound/land.mp3");
  crystalSound = loadSound("assets/sound/crystal.mp3");
  splashSound = loadSound("assets/sound/splash.mp3");
  bubbleSound = loadSound("assets/sound/bubbling.mp3");
  swimSound = loadSound("assets/sound/swim.mp3");
  shootSound = loadSound("assets/sound/shoot.mp3");
  hitSound = loadSound("assets/sound/hit.mp3");
  deathSound = loadSound("assets/sound/death.mp3");
  fallSound = loadSound("assets/sound/fall.mp3");
  transitionSound = loadSound("assets/sound/transition.mp3");
  walkWaterSound = loadSound("assets/sound/walkWater.mp3");
  flowSound = loadSound("assets/sound/flow.mp3");
  waterCollectSound = loadSound("assets/sound/waterCollect.mp3");
  mobBounceSound = loadSound("assets/sound/mobBounce.mp3");
  mobSlimeSound = loadSound("assets/sound/mobSlime.mp3");
  bossRoarSound = loadSound("assets/sound/bossRoar.mp3");
  bossWalkSound = loadSound("assets/sound/bossWalk.mp3");
  fartSound = loadSound("assets/sound/fart.mp3");
}

function resizeImages() {
  idleAni1.resize(150, 0);
  idleAni2.resize(150, 0);
  idleAni3.resize(150, 0);
  idleAni4.resize(150, 0);

  lwalk1.resize(150, 0);
  lwalk2.resize(150, 0);
  lwalk3.resize(150, 0);
  lwalk4.resize(150, 0);
  lwalk5.resize(150, 0);
  lwalk6.resize(150, 0);
  lwalk7.resize(150, 0);
  lwalk8.resize(150, 0);

  rwalk1.resize(150, 0);
  rwalk2.resize(150, 0);
  rwalk3.resize(150, 0);
  rwalk4.resize(150, 0);
  rwalk5.resize(150, 0);
  rwalk6.resize(150, 0);
  rwalk7.resize(150, 0);
  rwalk8.resize(150, 0);
}

function aniSetUp() {
  idleAni = loadAnimation(idleAni1, idleAni2, idleAni3, idleAni4);

  lWalkAni = loadAnimation(lwalk1, lwalk2, lwalk3, lwalk4, lwalk5, lwalk6, lwalk7, lwalk8);
  rWalkAni = loadAnimation(rwalk1, rwalk2, rwalk3, rwalk4, rwalk5, rwalk6, rwalk7, rwalk8);
  fWalkAni = loadAnimation(fwalk1, fwalk2, fwalk3, fwalk4, fwalk5, fwalk6, fwalk7, fwalk8);
  bWalkAni = loadAnimation(bwalk1, bwalk2, bwalk3, bwalk4, bwalk5, bwalk6, bwalk7, bwalk8);

  lJumpAni = loadAnimation(ljump1, ljump2, ljump3, ljump4, ljump5);
  rJumpAni = loadAnimation(rjump1, rjump2, rjump3, rjump4, rjump5);

  swimIdleAni = loadAnimation(swim_idle2, swim_idle3, swim_idle4, swim_idle5, swim_idle6, swim_idle7);
  lSwimAni = loadAnimation(lswim1, lswim2, lswim3, lswim4, lswim5, lswim6);
  rSwimAni = loadAnimation(rswim1, rswim2, rswim3, rswim4, rswim5, rswim6);

  player.anis.frameDelay = 8;

  player.addAnis({
    lWalk: lWalkAni,
    rWalk: rWalkAni,
    fWalk: fWalkAni,
    bWalk: bWalkAni,
    lJump: lJumpAni,
    rJump: rJumpAni,
    idle: idleAni,
    rSwim: rSwimAni,
    lSwim: lSwimAni,
    swimIdle: swimIdleAni,
  });

  player.pixelPerfect = true;
}

function backgroundSetUp() {
  oesophagusBg = new Sprite(oesophagusBackground, -100, -2000, "n");
  oesophagusBg.scale = zoomLevel;

  stomachBg = new Sprite(stomachBackground, -1000, 2000, "n");
  stomachBg.scale = zoomLevel;

  mazeBg = new Sprite(mazeBackground, -1000, 2000, "n");
  mazeBg.scale = zoomLevel - 0.5;

  largeIntestineBg = new Sprite(largeIntestineBackground, 3000, -2000, "n");
  largeIntestineBackground.scale = zoomLevel;

  rectumBg = new Sprite(rectumBackground, -3000, 2000, "n");
  rectumBg.scale = zoomLevel;
}
