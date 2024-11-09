function setup() {
  createCanvas(600, 400);
  world.gravity.y = 10;

  backgroundSetUp();
  textSetUp();
  waterdropSetUp();
  enemySetUp();

  screen0Assets();
}

/* DRAW LOOP REPEATS */
function draw() {
  if (screen > 0) {
    // backgroundSound.play();
    // slowHeartBeat.setVolume(0.4);
  }
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
  } else if (screen == 5) {
    drawScreen5();
  } else if (screen == 6) {
    drawScreen6();
  }

  cursor.moveTowards(mouse, 1);

  // if (kb.presses("space")) {
  //   screen0Assets();
  //   screen1Assets();
  //   screen2Assets();
  //   screen3Assets();
  //   screen4Assets();
  //   screen5Assets();
  // }
}

function playBackgroundMusic() {
  slowHeartBeat.play();
  slowHeartBeat.loop();
  slowHeartBeat.setVolume(0.5);
  backgroundSound.play();
  backgroundSound.loop();
  backgroundSound.setVolume(0.5);
  // userStartAudio();
}
