//food images
let images = [];
let totalImages = 3;
let folder1 = "images/";
let index = 0;

//run frames
let runFrames = [];
let totalrFrames = 8;
let folder2 = "assets/dogrun/";
let frameIndex = 0;

//idle frames
let idleFrames = [];
let totaliFrames = 10;
let folder3 = "assets/dogidle/";



let speed = 5;
var x = 0;
var y = 0;
var count = 0;


function preload() {

  //food images loop
  for (let i = 0; i < totalImages; i++){
    let path = folder1 + "img" + i + ".png";
    images.push(loadImage(path));
  }
  
  //animation loop
  for (var i = 0; i < 10; i++) {
    idleFrames[i] = (folder3 + "frame" + i + ".png");
    runFrames[i] = (folder2 + "frame" + i + ".png");

  }
  
}



function setup() {
  createCanvas(600, 600);
  
}



function draw() {
  
  
  background(220);
  
  noStroke();
  fill(162, 216, 246);
  rect(0, 0, 600, 600);
  
  //food images display
  for (let i = 0; i < images.length; i++){
    image(images[i], i * 200, 0 , 200, 200);
  }
  
  console.log(frameCount);
  if (frameCount % speed === 0) {
      count = (count + 1) % idleFrames.length;
    }
  
  
  //key pressed
  if (keyIsPressed) {
    if (key == "a") {

      x -= speed;
     image(idleFrames[count], x, y);
    if (key == "w") {
        y -= speed;
     image(idleFrames[count], x, y);
    }
    if (key == "d") {
      x += speed;
     image(idleFrames[count], x, y);
    }
    if (key == "s") {
         y += speed;
     image(idleFrames[count], x, y);
    }
   
  }
   else
    {
      image(idleFrames[count], x, y);
    }
  }

function timeIt() {
  count++;
  if (count >= idleFrames.length) {
    count = 0;
  }
}
}