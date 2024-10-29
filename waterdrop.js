function waterdropSetUp() {
  waterDrops = new Group();
  waterDrops.w = 10;
  waterDrops.h = 10;
  waterDrops.collider = "s";
}

function spawnWaterDrops(minX, maxX, minY, maxY) {
  let dropCount = random(8);

  waterDrop.resize(50, 0);
  for (let i = 0; i < dropCount; i++) {
    let x = random(minX, maxX);
    let y = random(minY, maxY);

    new waterDrops.Sprite(waterDrop, x, y);
  }
}
