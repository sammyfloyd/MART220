let idleAnimation;
let walkAnimation;
let dogImage;
let idlePaths = [];
let runPaths = [];
let myAnimation;


function preload() {
  
  for (var i = 0; i < 10; i++) {
    idlePaths[i] = "assets/dogidle/frame (" + i + ").png";
  }
  
  for (var j = 0; j < 8; j++) {
    runPaths[j] = "assets/dogrun/frame (" + j + ").png";
  }
  
}


function setup() {
  
  createCanvas(1000, 400);
  
  dogImage = new Sprite();
  dogImage.image = 'assets/dogidle/frame0.png';
  dogImage.pos.x = 200;
  dogImage.pos.y = 300;
  dogImage.scale = 1;
  dogImage.width = 100;
  dogImage.height = 100;
  dogImage.collider = 'rectangle';
  dogImage.debug = true; 
  
  myAnimation = new animationImage(100, 300, 150, 150);
  myAnimation.loadAnimation('idle', idlePaths);
  myAnimation.loadAnimation('run', runPaths);
  myAnimation.debug = true;
  
}


function update() {

    clear();

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
  
  if (kb.pressing('d')) {
    myAnimation.updatePosition('forward');
    myAnimation.drawAnimation('walk');

  if (myAnimation.isColliding(dogImage)) {
      dogImage.remove();
    }

  }
  else if (kb.pressing('a')) {
    myAnimation.updatePosition('reverse');
    myAnimation.drawAnimation('walk');
  }
  else if (kb.pressing('w')) {
    myAnimation.updatePosition('up');
    myAnimation.drawAnimation('walk');
  }
  else if (kb.pressing('s')) {
    myAnimation.updatePosition('down');
    myAnimation.drawAnimation('walk');
  }
  else {
    myAnimation.drawAnimation('idle');
  }

}