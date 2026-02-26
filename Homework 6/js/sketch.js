//food images
let images = [];
let totalImages = 3;
let folder1 = "images/";
let index = 0;

//animation frames
let frames = [];
let totalFrames = 8;
let folder2 = "assets/dogrun/";
let frameIndex = 0;

//animation speed
let speed = 5;

//barrio-regular font
let myFont;

function preload() {

  //food images loop
  for (let i = 0; i < totalImages; i++){
    let path = folder1 + "img" + i + ".png";
    images.push(loadImage(path));
  }
  
  //animation loop
  for (let i = 0; i < totalFrames; i++) {
    frames[i] = loadImage(folder2 + "frame" + i + ".png");
  }
  
  //font
  myFont = loadFont('assets/Barrio-Regular.ttf');

}



function setup() {
  createCanvas(600, 600);
  
}



function draw() {
  background(220);
  
  //BG
  noStroke();
  fill(162, 216, 246);
  rect(0, 0, 600, 600);
  

  //food images display
  for (let i = 0; i < images.length; i++){
    image(images[i], i * 200, 0 , 200, 200);
  }
  
  
  //animation display
  image(frames[frameIndex], 1, 100);

  if (frameCount % speed === 0) {
    frameIndex++;

    if (frameIndex >= frames.length) {
      frameIndex = 0;
    }
  }
  

  //name
  fill(0);
    textFont(myFont);
    textSize(25);
    text("Sam Floyd",460,580);

}