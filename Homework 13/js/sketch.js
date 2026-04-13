let steve;

let palette1;
let palette2;
let palette3;
let palette4;
let palette5;

let myFont;

let circles = [];
let boxes = [];
let cylinders = [];
let cones = [];
let ellipsoids = [];

let mousex = 0;
let mousey = 0;
let mousez = 0;


function setup() {
  createCanvas(400, 400, WEBGL);
  
  //steve
  steve = loadModel('assets/steve.obj', true);
  
  //palettes
  palette1 = loadImage('assets/textures/palette1.png');
  palette2 = loadImage('assets/textures/palette2.png');
  palette3 = loadImage('assets/textures/palette3.png');
  palette4 = loadImage('assets/textures/palette4.png');
  palette5 = loadImage('assets/textures/palette5.png');
  
  myFont = loadFont('assets/fonts/DarumadropOne-Regular.ttf');

  //circles
  for (let i = 0; i < 5; i++) {
    circles.push({
      x: random(-100, 100),
      y: random(-100, 100),
      z: random(70, 100),
      size: random(10, 30)
    });
  }
  
  //boxes
  for (let i = 0; i < 5; i++) {
    boxes.push({
      x: random(-100, 100),
      y: random(-100, 100),
      z: random(70, 100),
      size: random(10, 30)
    });
  }
  
  //cylinders
  for (let i = 0; i < 5; i++) {
    cylinders.push({
      x: random(-100, 100),
      y: random(-100, 100),
      z: random(70, 100),
      size: random(10, 30)
    });
  }
  
  //cones
  for (let i = 0; i < 5; i++) {
    cones.push({
      x: random(-100, 100),
      y: random(-100, 100),
      z: random(70, 100),
      size: random(10, 30)
    });
  }
  
  //ellipsoids
  for (let i = 0; i < 5; i++) {
    ellipsoids.push({
      x: random(-100, 100),
      y: random(-100, 100),
      z: random(70, 100),
      size: random(10, 30)
    });
  }
  
}



function draw() {
  background(220);
  
  //steve
  push();
  scale(0.5); 
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  normalMaterial();
  model(steve);
  pop();
  
  //circles
  for (let c of circles) {
    push();
    noStroke();
    normalMaterial();
    texture(palette1);
    rotateY(frameCount * 0.01);
    translate(mousex, mousey, mousez);
    sphere(c.size);
    pop();
  }
  
  //boxes
  for (let b of boxes) {
    push();
    noStroke();
    normalMaterial();
    texture(palette2);
    rotateY(frameCount * 0.03);
    translate(mousex, mousey, mousez);
    box(b.size);
    pop();
  }
  
  //cylinders
  for (let k of cylinders) {
    push();
    noStroke();
    normalMaterial();
    texture(palette3);
    rotateY(frameCount * 0.05);
    translate(mousex, mousey, mousez);
    cylinder(k.size);
    pop();
  }
  
  //cones
  for (let s of cones) {
    push();
    noStroke();
    normalMaterial();
    texture(palette4);
    rotateY(frameCount * 0.07);
    translate(mousex, mousey, mousez);
    cone(s.size);
    pop();
  }
  
  //ellipsoids
  for (let e of ellipsoids) {
    push();
    noStroke();
    normalMaterial();
    texture(palette5);
    rotateY(frameCount * 0.09);
    translate(mousex, mousey, mousez);
    ellipsoid(e.size);
    pop();
  }
  
  //TITLE and NAME
  push();
  translate(-180, -200, 0);
  fill(0, 0, 0);
  textFont(myFont);
  textSize(15); 
  text('Steve', 20, 30);
  pop();
  
  push();
  translate(-180, -170, 0);
  fill(0, 0, 0);
  textFont(myFont);
  textSize(15); 
  text('Created by', 20, 30);
  pop();
  
  push();
  translate(-180, -150, 0);
  fill(0, 0, 0);
  textFont(myFont);
  textSize(15); 
  text('Sam Floyd', 20, 30);
  pop();
  
}


function mousePressed() {
  mousex = random(-350, 300);
  mousey = random(-200, 200);
  mousez = random(-100, 100);
}