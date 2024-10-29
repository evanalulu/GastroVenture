function movePlayer() {
  if (kb.presses("left")) player.changeAni("lWalk");
  if (kb.presses("right")) player.changeAni("rWalk");
  if (kb.presses("up") && player.ani.name === "left") player.changeAni("lJump");
  if (kb.presses("up") && player.ani.name === "right") player.changeAni("rJump");

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
    player.changeAni("idle");
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
  if (kb.presses("left")) player.changeAni("lSwim");
  if (kb.presses("right")) player.changeAni("rSwim");
  if (kb.presses("up") && player.ani.name === "left") player.changeAni("lJump");
  if (kb.presses("up") && player.ani.name === "right") player.changeAni("rJump");

  if (kb.pressing("left")) {
    player.vel.x = -3;
    if (kb.presses("space")) bulletLaunch("left");
  } else if (kb.pressing("right")) {
    player.vel.x = 3;
    if (kb.presses("space")) bulletLaunch("right");
  } else if (kb.pressing("up")) {
    player.vel.y = -3;
  } else if (kb.pressing("down")) {
    player.vel.y = 3;
  } else {
    player.vel.x = 0;
    player.vel.y = 0;
    player.changeAni("swimIdle");
  }

  if (player.x > 597) player.x = 597;
  // if (player.x < 0) player.x = 0;
  if (player.y > 510) player.y = 510;
  if (player.y < 108) player.y = 108;
}

function mazePlayer() {
  if (kb.presses("left")) player.changeAni("lWalk");
  if (kb.presses("right")) player.changeAni("rWalk");

  if (kb.pressing("left")) {
    player.vel.x = -5;
  } else if (kb.pressing("right")) {
    player.vel.x = 5;
  } else if (kb.pressing("up")) {
    player.vel.y = -5;
  } else if (kb.pressing("down")) {
    player.vel.y = 5;
  } else {
    player.vel.x = 0;
    player.vel.y = 0;
    player.changeAni("idle");
  }
}
