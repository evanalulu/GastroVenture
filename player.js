function movePlayer() {
  if (kb.presses("left")) player.changeAni("lWalk");
  if (kb.presses("right")) player.changeAni("rWalk");
  if (kb.presses("up") && player.ani.name === "left") player.changeAni("lJump");
  if (kb.presses("up") && player.ani.name === "right") player.changeAni("rJump");

  if (kb.presses("up") && !isJumping) {
    player.vel.y = -6;
    isJumping = true;
  }

  if (kb.pressing("left")) {
    player.vel.x = -3;
  } else if (kb.pressing("right")) {
    player.vel.x = 3;
  } else {
    player.vel.x = 0;
    player.changeAni("idle");
  }
  // Check if player is grounded
  if (player.collides(platforms)) {
    isJumping = false; // Player is on the ground again
  }

  if (player.x > width) player.x = width;
  if (player.y > height) player.y = height;
  if (player.y < 0) player.y = 0;
}

function swimPlayer() {
  if (kb.presses("left")) player.changeAni("lSwim");
  if (kb.presses("right")) player.changeAni("rSwim");
  if (kb.presses("up") && player.ani.name === "left") player.changeAni("lJump");
  if (kb.presses("up") && player.ani.name === "right") player.changeAni("rJump");

  if (kb.pressing("left")) {
    player.vel.x = -3;
    if (kb.presses("space")) {
      bulletLaunch("left");
      shootSound.play();
    }
  } else if (kb.pressing("right")) {
    player.vel.x = 3;
    if (kb.presses("space")) {
      bulletLaunch("right");
      shootSound.play();
    }
  } else if (kb.pressing("up")) {
    player.vel.y = -3;
  } else if (kb.pressing("down")) {
    player.vel.y = 3;
  } else {
    player.vel.x = 0;
    player.vel.y = 0;
    player.changeAni("swimIdle");
  }
  if (kb.presses("left") || kb.presses("right") || kb.presses("up") || kb.presses("down")) {
    swimSound.setVolume(0.7);
    swimSound.play();
  }

  if (player.x > 597) player.x = 597;
  if (player.y > 510) player.y = 510;
  if (player.y < 108) player.y = 108;
}

let isWalking = false;
function mazePlayer() {
  if (kb.presses("left")) player.changeAni("lWalk");
  if (kb.presses("right")) player.changeAni("rWalk");
  if (kb.presses("up")) player.changeAni("bWalk");
  if (kb.presses("down")) player.changeAni("fWalk");

  if (kb.pressing("left") || kb.pressing("right") || kb.pressing("up") || kb.pressing("down")) {
    player.vel.x = kb.pressing("left") ? -5 : kb.pressing("right") ? 5 : player.vel.x;
    player.vel.y = kb.pressing("up") ? -5 : kb.pressing("down") ? 5 : player.vel.y;

    if (!isWalking) {
      walkWaterSound.setVolume(0.5);
      walkWaterSound.loop();
      walkWaterSound.play();
      isWalking = true;
    }
  } else {
    player.vel.x = 0;
    player.vel.y = 0;
    player.changeAni("idle");

    if (isWalking) {
      walkWaterSound.stop();
      isWalking = false;
    }
  }
}
