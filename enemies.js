function enemySetUp() {
  enemies = new Group();
  enemies.w = 10;
  enemies.h = 10;
  enemies.collider = "s";
}

function bulletSetUp() {
  bullets = new Group();
  bullets.color = "yellow";
  bullets.y = 25;
  bullets.diameter = 10;
}

function spawnEnemies(minX, maxX, minY, maxY) {
  let enemyCount = random(5);
  let enemyImages = [enemy1Img, enemy2Img, enemy3Img, enemy4Img, enemy5Img, enemy6Img];

  for (let i = 0; i < enemyCount; i++) {
    let x = random(minX, maxX);
    let y = random(minY, maxY);
    let enemyType = floor(random(enemyImages.length));
    new enemies.Sprite(enemyImages[enemyType], x, y);
  }
}

function adjustGravity() {
  if (player.y < 12) {
    world.gravity.y = 0;
    world.gravity.x = 100;
    largeIntestineDirection = "up";
  }
  if (player.x > 517) {
    world.gravity.y = 100;
    world.gravity.x = 0;
    largeIntestineDirection = "right";
  }
  if (player.y > 440 && player.y < 490) {
    world.gravity.y = 0;
    world.gravity.x = -100;
    largeIntestineDirection = "down";
  }
  if (player.x > 163 && player.x < 256 && player.y > 400) {
    world.gravity.y = 100;
    world.gravity.x = 0;
    largeIntestineDirection = "left";
  }
}

function bulletLaunch(direction) {
  bullet = new bullets.Sprite();
  bullet.x = player.x;
  bullet.y = player.y;

  if (direction == "left") {
    bullet.x = player.x - 10;
    bullet.vel.x = -3;
    bullet.vel.y = 0;
  } else if (direction == "right") {
    bullet.x = player.x + 10;
    bullet.vel.x = 3;
    bullet.vel.y = 0;
  } else if (direction == "up") {
    bullet.y = player.y - 10;
    bullet.vel.x = 0;
    bullet.vel.y = -3;
  } else if (direction == "down") {
    bullet.y = player.y + 10;
    bullet.vel.x = 0;
    bullet.vel.y = 3;
  } else {
    bullet.vel.x = -3;
  }
}

async function squareSequence() {
  await Promise.all([enemy1.move(50), enemy2.move(50)]);
  await Promise.all([enemy1.rotate(90), enemy2.rotate(180)]);
  await delay(250);

  squareSequence();
}
