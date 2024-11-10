let dialogueIndex = 0;
let dialogueBox;

function textSetUp() {
  cursor = new Sprite(customCursor, mouse.x, mouse.y, 10, 10, "n");
  mouse.visible = false;

  titleText = createDiv("");
  titleText.position(635, height / 2 + 188);
  titleText.style("font-size", "20px");
  titleText.style("color", "#ffffff");
  titleText.addClass("custom-font");

  enterText = createDiv("");
  enterText.position(670, height / 2 + 269);
  enterText.style("font-size", "12px");
  enterText.style("color", "#ffffff");
  enterText.addClass("custom-font");

  mapText = createDiv("");
  mapText.position(445, height / 2 + 45);
  mapText.style("font-size", "15px");
  mapText.style("color", "#ffffff");
  mapText.addClass("custom-font");
}

// OESOPHAGUS
let screen1Dialogues = [
  "Welcome to the esophagus! \nPress anywhere on the screen to get started.",
  "You’re moving down through peristalsis, a \nwave of muscle contractions pushing \nfood to the stomach.",
  "Move using ARROW KEYS. \nCollect alkaline crystals to help survive \nthe acidic stomach ahead. Watch out \nfor obstacles! \nGood luck!",
];

// STOMACH
let screen2Dialogues = [
  "Welcome to the stomach!",
  "Here, powerful acids break down food. \nLuckily, your alkaline crystals have \nturned into alkali-bubbles.",
  "Beware of enemies, harmful bacteria & pathogens! \nPress SPACE to shoot and stay safe. Reach the end!",
];

// SMALL INTESTINES
let screen3Dialogues = [
  "Welcome to the small intestine!",
  "This is where most nutrient absorption happens\nas food particles pass through.",
  "The small intestine is long and winding,\nwhich helps increase the surface area for\nmaximum absorption of nutrients.",
  "Your mission here is to make it through\nthe maze of the small intestine!",
];

// LARGE INTESTINES
let screen4Dialogues = [
  "Welcome to the large intestine!",
  "Here, water is absorbed from food waste. \nStrong muscles push the waste toward the rectum.",
  "Follow the flow to complete your journey!\n Collect as much water as you can to stay hydrated!",
];

// RECTUM
let screen5Dialogues = [
  "You're in the rectum, the last stretch \nof the journey!",
  "Run to the end to reach the anus and escape!",
  "Watch out for obstacles and the \nfinal boss chasing you!",
  "Almost there—don't let the boss catch you!",
];

// END
let screen6Dialogues = [
  "Congrats! You’ve conquered \nthe digestive tract!",
  "From mouth to rectum, \nyou tackled every challenge.",
  "Thanks for playing Gastro-Venture!",
];
