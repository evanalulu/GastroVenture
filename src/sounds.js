function screen0Sounds() {
  if (gameTitle.mouse.hovers() || enterButton.mouse.hovers()) {
    hoverSound.play();
  }
  if (gameTitle.mouse.presses() || enterButton.mouse.presses()) {
    clickSound.play();
  }
}

let lastBouncePlayTime = 0;
let lastSlimePlayTime = 10;
const bounceInterval = 800;
const slimeInterval = 450;

function screen5Sounds() {
  let currentTime = millis();

  if (currentTime - lastBouncePlayTime > bounceInterval) {
    mobBounceSound.setVolume(0.5);
    mobBounceSound.play();
    lastBouncePlayTime = currentTime;
  }

  if (currentTime - lastSlimePlayTime > slimeInterval) {
    mobSlimeSound.setVolume(0.1);
    mobSlimeSound.play();
    lastSlimePlayTime = currentTime;
  }
}
