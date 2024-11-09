function setup() {
  createCanvas(600, 400);

  backgroundSetUp();
  textSetUp();
  waterdropSetUp();
  enemySetUp();

  screen0Assets();
}

/* DRAW LOOP REPEATS */
function draw() {
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
}
