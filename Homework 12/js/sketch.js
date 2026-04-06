let myFont;

function preload() {
  myFont = loadFont('fonts/DarumadropOne-Regular.ttf');
}

function setup() {
  createCanvas(400, 400, WEBGL);
}

function draw() {
  background(112, 83, 176);
  
  //LIGHTING (not working?)
  //pointLight(255, 255, 255, -100, -100, 0);
    
  //TORSO
  push();
  normalMaterial();
  translate(0, 25, 0);
  rotateY(frameCount * 0.01);
  noStroke();
  fill(69, 41, 30);
  box(60, 100, 50);
  pop();
  
  //tummy
  push();
  normalMaterial();
  translate(0, 35, 10);
  rotateY(frameCount * 0.01);
  noStroke();
  fill(143, 104, 64);
  box(40, 70, 50);
  pop();
  
  //NECK
  push();
  normalMaterial();
  translate(0, -30, 0);
  rotateY(frameCount * 0.01);
  noStroke();
  fill(69, 41, 30);
  cylinder(15, 30);
  
  //collar
  push();
  normalMaterial();
  translate(0, -3, 0);
  rotateY(frameCount * 0.01);
  noStroke();
  fill(87, 164, 179);
  cylinder(18, 8);
  pop();
  
  //nametag
  push();
  normalMaterial();
  translate(0, 5, 25);
  rotateY(frameCount * 0.01);
  noStroke();
  fill(250, 212, 75);
  sphere(8);
  pop();
  
  //HEAD
  push();
  normalMaterial();
  translate(0, -55, 0);
  rotateY(frameCount * 0.01);
  noStroke();
  fill(69, 41, 30);
  sphere(50);
  pop();
  
  //eyes
  push();
  normalMaterial();
  translate(-25, -65, 40);
  rotateY(frameCount * 0.01);
  noStroke();
  fill(0, 0, 0);
  sphere(15);
  pop();
  
  push();
  normalMaterial();
  translate(25, -65, 40);
  rotateY(frameCount * 0.01);
  noStroke();
  fill(0, 0, 0);
  sphere(15);
  pop();
  
  //eye glint
  push();
  normalMaterial();
  translate(-25, -70, 50);
  rotateY(frameCount * 0.01);
  noStroke();
  fill(255, 255, 255);
  sphere(5);
  pop();
  
  push();
  normalMaterial();
  translate(-30, -60, 50);
  rotateY(frameCount * 0.01);
  noStroke();
  fill(255, 255, 255);
  sphere(3);
  pop();
  
  push();
  normalMaterial();
  translate(25, -70, 50);
  rotateY(frameCount * 0.01);
  noStroke();
  fill(255, 255, 255);
  sphere(5);
  pop();
  
  push();
  normalMaterial();
  translate(30, -60, 50);
  rotateY(frameCount * 0.01);
  noStroke();
  fill(255, 255, 255);
  sphere(3);
  pop();
  
  //eyebrows
  push();
  normalMaterial();
  translate(-12, -78, 38);
  rotateY(frameCount * 0.01);
  noStroke();
  fill(143, 104, 64);
  sphere(9);
  pop();
  
  push();
  normalMaterial();
  translate(12, -78, 38);
  rotateY(frameCount * 0.01);
  noStroke();
  fill(143, 104, 64);
  sphere(9);
  pop();
  
  //snout
  push();
  normalMaterial();
  translate(0, -35, 40);
  //rotateY(frameCount * 0.01);
  noStroke();
  fill(143, 104, 64);
  box(30, 30, 50);
  pop();
  
  push();
  normalMaterial();
  translate(0, -40, 40);
  //rotateY(frameCount * 0.01);
  noStroke();
  fill(69, 41, 30);
  box(30, 25, 50);
  pop();
  
  //nose
  push();
  normalMaterial();
  translate(0, -45, 65);
  rotateY(frameCount * 0.01);
  noStroke();
  fill(0, 0, 0);
  sphere(10);
  pop();
  
  //cheeks
  push();
  normalMaterial();
  translate(25, -35, 25);
  rotateY(frameCount * 0.01);
  noStroke();
  fill(143, 104, 64);
  sphere(20);
  pop();
  
  push();
  normalMaterial();
  translate(-25, -35, 25);
  rotateY(frameCount * 0.01);
  noStroke();
  fill(143, 104, 64);
  sphere(20);
  pop();
  
  //ears
  push();
  normalMaterial();
  translate(-30, -90, 0);
  //rotateY(frameCount * 0.01);
  noStroke();
  fill(69, 41, 30);
  plane(30, 100);
  pop();
  
  push();
  normalMaterial();
  translate(30, -90, 0);
  //rotateY(frameCount * 0.01);
  noStroke();
  fill(69, 41, 30);
  plane(30, 70);
  pop();
  
  push();
  normalMaterial();
  translate(-30, -90, 0);
  //rotateY(frameCount * 0.01);
  noStroke();
  fill(143, 104, 64);
  plane(15, 80);
  pop();
  
  push();
  normalMaterial();
  translate(30, -90, 0);
  //rotateY(frameCount * 0.01);
  noStroke();
  fill(143, 104, 64);
  plane(15, 50);
  pop();
  
  push();
  normalMaterial();
  translate(-30, -143, 0);
  //rotateY(frameCount * 0.01);
  noStroke();
  fill(247, 239, 208);
  plane(15, 8);
  pop();
  
  push();
  normalMaterial();
  translate(30, -129, 0);
  //rotateY(frameCount * 0.01);
  noStroke();
  fill(247, 239, 208);
  plane(15, 8);
  pop();
  
  //ARMS
  push();
  normalMaterial();
  translate(-50, 20, 0);
  //rotateY(frameCount * 0.01);
  noStroke();
  fill(69, 41, 30);
  plane(100, 20);
  pop();
  
  push();
  normalMaterial();
  translate(50, 20, 0);
  //rotateY(frameCount * 0.01);
  noStroke();
  fill(69, 41, 30);
  plane(100, 20);
  pop();
  
  //HANDS
  push();
  normalMaterial();
  translate(-110, 20, 0);
  //rotateY(frameCount * 0.01);
  noStroke();
  fill(143, 104, 64);
  sphere(18);
  pop();
  
  push();
  normalMaterial();
  translate(110, 20, 0);
  //rotateY(frameCount * 0.01);
  noStroke();
  fill(143, 104, 64);
  sphere(18);
  pop();
  
  push();
  normalMaterial();
  translate(-100, 28, 5);
  //rotateY(frameCount * 0.01);
  noStroke();
  fill(247, 239, 208);
  sphere(10);
  pop();
  
  push();
  normalMaterial();
  translate(100, 28, 5);
  //rotateY(frameCount * 0.01);
  noStroke();
  fill(247, 239, 208);
  sphere(10);
  pop();
  
  //LEGS
  push();
  normalMaterial();
  translate(-15, 120, 0);
  //rotateY(frameCount * 0.01);
  noStroke();
  fill(69, 41, 30);
  cylinder(10, 90);
  pop();
  
  push();
  normalMaterial();
  translate(15, 120, 0);
  //rotateY(frameCount * 0.01);
  noStroke();
  fill(69, 41, 30);
  cylinder(10, 90);
  pop();
  
  //FEET
  push();
  normalMaterial();
  translate(-20, 175, 0);
  //rotateY(frameCount * 0.01);
  noStroke();
  fill(143, 104, 64);
  sphere(20);
  pop();
  
  push();
  normalMaterial();
  translate(20, 175, 0);
  //rotateY(frameCount * 0.01);
  noStroke();
  fill(143, 104, 64);
  sphere(20);
  pop();
  
  //TAIL
  push();
  normalMaterial();
  translate(0, 80, -30);
  //rotateY(frameCount * 0.01);
  noStroke();
  fill(69, 41, 30);
  box(10, 10, 100);
  pop();
  
  push();
  normalMaterial();
  translate(0, 80, -80);
  //rotateY(frameCount * 0.01);
  noStroke();
  fill(143, 104, 64);
  box(15, 15, 20);
  pop();
  
  push();
  normalMaterial();
  translate(0, 80, -85);
  //rotateY(frameCount * 0.01);
  noStroke();
  fill(247, 239, 208);
  box(20, 20, 10);
  pop();
  
  push();
  normalMaterial();
  translate(0, 80, -90);
  //rotateY(frameCount * 0.01);
  noStroke();
  fill(247, 239, 208);
  box(15, 15, 10);
  pop();
  
  
  //TITLE and NAME
  push();
  translate(-180, -150, 0);
  fill(0, 0, 0);
  textFont(myFont);
  textSize(15); 
  text('Wybie Sprite', 20, 30);
  pop();
  
  push();
  translate(-180, -120, 0);
  fill(0, 0, 0);
  textFont(myFont);
  textSize(15); 
  text('Created by', 20, 30);
  pop();
  
  push();
  translate(-180, -100, 0);
  fill(0, 0, 0);
  textFont(myFont);
  textSize(15); 
  text('Sam Floyd', 20, 30);
  pop();
}