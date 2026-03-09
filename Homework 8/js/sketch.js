var timeCheck;
var r, g, b;

let bImg;

let myFont;

let bunny;

let uImg;
let tImg;
let lImg;
let sImg;

let bushes = [];
let stars = [];

var score;
var health;

var song;
var jumpSound;
var deathSound;
var coinSound;


function preload() {
  
  uImg = loadImage('bunny/bunny sprite 1.png');
  tImg = loadImage('images/bush.png');
  sImg = loadImage('images/star.png');
  bImg = loadImage('images/background.png');
  lImg = loadImage('images/you lose.png');
  
  song = loadSound('audio/background music.wav');
  jumpSound = loadSound('audio/jump sound.wav');
  coinSound = loadSound('audio/coinsound.wav');
  hitSound = loadSound('audio/hitsound.wav');
  deathSound = loadSound('audio/death sound.wav');
  
  myFont = loadFont('fonts/light-pixel-7.ttf');
  
}


function setup() {
  createCanvas(800, 450);
  
  console.log('press space to jump, avoid the obstacles!');
  
  bunny = new Bunny();
  
  timeCheck = 0;
  
  r = 220;
  g = 220; 
  b = 220;
  
  score = 0;
  health = 50;

}


function displayStartMessage() {
  textFont(myFont);
  textSize(32);
  textAlign(CENTER, CENTER);
  fill(255, 0, 0);
  text('Bunny Jumper!', width / 2, height / 2);
  
}


function keyPressed() {
  if (key == 'p') {
  song.play();
  song.loop();
  song.setVolume(0.2);
  }
  
  if (key == ' ') {
    bunny.jump();
    jumpSound.play(); 
  }
}


function draw() {
  if (random(1) < 0.01) {
    bushes.push(new Bush());
  }
  
  if (random(1) < 0.01) {
    stars.push(new Star());
  }
  
  background(bImg);
    
  for (let t of bushes) {
    t.move();
    t.show();
    if (bunny.hits(t)) {
      console.log("you've hit a bush!");
      hitSound.play();
      hitSound.setVolume(0.5);
      health--;
    }
    
  for (let s of stars) {
    s.move();
    s.show();
    if (bunny.hits(s)) {
      console.log("you've collected a star!");
      coinSound.play();
      coinSound.setVolume(0.1);
      score++;
    }
  }
    
}

  textFont (myFont)
  textSize(15);
  text("Health: " + health, 10, 25);
  //currentTime = floor(millis()/1000);
  //text(currentTime, 10, 50);
  
  fill('black');
  textSize(15);
  text('Stars Collected: ' + score, 620, 25);
  
  //if ((currentTime - timeCheck) > 2){
    //r = random(0, 225);
    //g = random(0, 225);
    //b = random(0, 225);
    //timeCheck = currentTime;
  //}  

  //image(lImg, 100, 80, 600, 80);
  
  bunny.show();
  bunny.move();
  
  if (health == 0) {
    image(lImg, 100, 80, 600, 80);
    console.log("GAME OVER!");
    deathSound.play();
    deathSound.setVolume(0.5);
    noLoop();
  }
}
