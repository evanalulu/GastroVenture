let dialogueIndex = 0;
let dialogueBox;

function textSetUp() {
  titleText = createDiv("");
  titleText.position(565, height / 2 + 147);
  titleText.style("font-size", "20px");
  titleText.style("color", "#ffffff");
  titleText.addClass("custom-font");

  enterText = createDiv("");
  enterText.position(603, height / 2 + 228);
  enterText.style("font-size", "12px");
  enterText.style("color", "#ffffff");
  enterText.addClass("custom-font");

  mapText = createDiv("");
  mapText.position(385, height / 2 + 10);
  mapText.style("font-size", "15px");
  mapText.style("color", "#ffffff");
  mapText.addClass("custom-font");
}

// OESOPHAGUS
let screen1Dialogues = [
  "Welcome to the esophagus!",
  "You’re now traveling down through a process \ncalled peristalsis. Peristalsis is a series of \nmuscle contractions that pushes food and \nliquid down towards the stomach.",
  "In the esophagus, you’re safe for now.\nThere’s no acid here, but once you \nreach the stomach, you’ll need to be \nprepared for a much harsher environment.",
  "To survive in the stomach’s acidic environment, \nyou’ll need to collect special items \n Look for alkaline crystals as you \ntravel through the esophagus.",
  "These alkaline crystals will help neutralize the \nstomach’s acid, protecting you from damage.",
  "Stay alert for any obstacles along the way.\nRemember, the journey through the digestive \nsystem isn’t easy!",
  "Good luck as you continue your descent!\nWith each step, you’re learning more about \nhow the body digests food.",
];

// STOMACH
let screen2Dialogues = [
  "You’ve entered the stomach!",
  "The stomach is a powerful organ where digestion \nreally kicks into high gear.",
  "In here, the stomach releases digestive juices, \nincluding strong acids and enzymes.\nThese break down food into smaller, \nabsorbable nutrients.",
  "The environment is extremely acidic –\ntoo harsh for most things to survive.\nGood thing you collected those alkaline crystals!\nIt's bubble will help you survive \n for a short time.",
  "Watch out for enemies!\nThese represent harmful bacteria or pathogens \nthat may try to take you down.",
  "Press SPACE to shoot them and defend yourself",
  "Travel down to end after shooting all enemies.\nStay alert and good luck!",
];

// SMALL INTESTINES
let screen3Dialogues = [
  "Welcome to the small intestine!",
  "This is where most nutrient absorption happens\nas food particles pass through.",
  "The small intestine is long and winding,\nwhich helps increase the surface area for\nmaximum absorption of nutrients.",
  "Your mission here is to make it through\nthe maze of the small intestine!",
  "Good luck! The journey is almost over,\nand you’re one step closer to completing\nthe digestive system journey!",
];

// LARGE INTESTINES
let screen4Dialogues = [
  "Welcome to the large intestine!",
  "Here, water is absorbed from food waste. \nStrong muscles push the waste toward the rectum.",
  "Follow the flow to complete your journey!\n Collect as much water as you can to stay hydrated!",
  "You’re almost at the end of the digestive tract!\n Good luck!",
];

// RECTUM
let screen5Dialogues = [
  "You're in the rectum, the last stretch \nof the journey!",
  "Run to the end to reach the anus and escape!",
  "Watch out for obstacles and the \nfinal boss chasing you!",
  "Almost there—don't let the boss catch you!",
];
