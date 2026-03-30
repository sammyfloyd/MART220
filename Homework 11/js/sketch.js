//sprite objects
let dog;
let dogAni;
let bones;
let logs;
let bees;
let blood;

//image objects
let boneImg;
let logImg;
let beeImg;

//score 
let score;


/////////////////////////////////////////////////////////////
function preload() {
  
  dogAni = loadAni(imageSequence("assets/dogrun/frame", 8));
  
  boneImg = loadImage("assets/bone.png");
  
  logImg = loadImage("assets/log.png");
  
  beeImg = loadImage("assets/bee.png");
  
}

////////////////////////////////////////////////////////////
function setup() {

  createCanvas(1000, 400);
  
  //sprite
  dog = new Sprite();
  dog.addAni(dogAni);
  dog.scale = 0.25;
  dog.w = 35;
  dog.h = 75;
  dog.rotationLock = true;
  dog.debug = true;
  dog.health = 5;
  
  //collectables
  bones = new Group();
  bones.image = boneImg;
  bones.scale = 0.05;
  bones.x = () => random(width);
  bones.y = () => random(height);
  bones.diameter = boneImg.width * 0.8;
  bones.amount = 10;
  
  dog.collides(bones, boneHit);
  
  //obstacles
  logs = new Group();
  logs.image = logImg;
  logs.scale = 0.01;
  logs.x = () => random(width);
  logs.y = () => random(height);
  logs.diameter = logImg.width * 0.8;
  logs.amount = 5;
  
  dog.collides(logs, logHit);
  
  //enemies
  bees = new Group();
  bees.image = beeImg;
  bees.scale = 0.05;
  bees.x = () => random(width);
  bees.y = () => random(height);
  bees.diameter = beeImg.width * 0.8;
  bees.amount = 5;
  bees.health = 2;
  
  dog.collides(bees, beeHit);
  
  //score
  score = 0;
  
  //blood particles
  blood = new Group ();
  blood.diameter = 4;
  blood.x = () => dog.x;
  blood.y = () => dog.y;
  blood.vel.x = () => random(-5, 5);
  blood.vel.y = () => random(-5, 5);
  blood.life = 30;
  blood.fill = 'red';
  
}

////////////////////////////////////////////////////////////
function draw() {
  
  //background
  background(163,212,255);
  
  //sun 
  noStroke();
  fill(237,165,103);
  circle(500, 250, 250)
  
  //grass
  noStroke();
  fill(92,184,122);
  rect(0, 250, width, height/2);
  
  //movements
  if (kb.pressing('left')) dog.x -=5;
  if (kb.pressing('right')) dog.x +=5;
  if (kb.pressing('up')) dog.y -=5;
  if (kb.pressing('down')) dog.y +=5;
  
  //instructions
  fill('black');
  text('Hit the bees twice to kill them, eat bones when your health gets low!', 325, 30);
  
  //score
  fill('black');
  text('Score: ' + score, 20, 30);
  
  //health
  fill('black');
  text('Health: ' + dog.health, 930, 30);
  
  //dog health + game over
  if (dog.health == 0) {
    fill('black');
    rect(0, 0, width, height);
    textAlign(CENTER);
    textSize(40);
    stroke('black');
    fill('white');
    text("GAME OVER", width/2, height/2-50);
    text("Better luck next time!", width/2, height/2+50);
  }  
  
  //win game
  if (bees.amount == 0) {
    fill('black');
    rect(0, 0, width, height);
    textAlign(CENTER);
    textSize(40);
    stroke('black');
    fill('white');
    text("YOU WIN!", width/2, height/2-50);
    text("Good job defeating the bees!", width/2, height/2+50);
  }
  
  //blood particles
  if (dog.collides(bees, beeHit)) {
    blood.amount = 50;
  }
  
}

/////////////////////////////////////////////////////////
function imageSequence(prefix, numberOfFrames, ext=".png") {
  let sequence = [];
  for (let i = 0; i < numberOfFrames; i++) {
    sequence[i] = prefix + i + ext;
  }
  return sequence;
}

////////////////////////////////////////////////////////////
function boneHit(dog, bone) {
  score++;
  dog.health++;
  bone.remove();
}

///////////////////////////////////////////////////////
function logHit(dog, log) {
}

/////////////////////////////////////////////////////
function beeHit(dog, bee) { 
  dog.health--;
  bees.health--;
  if (bees.health == 0) {
  bees.remove();
  }
}

//END//