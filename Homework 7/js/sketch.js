//dogidle animation
let frames = [];
let totalFrames = 10
let frameIndex = 0
let speed = 16;

//dogrun animation
let frames2 = [];
let totalFrames2 = 8;
let frameIndex2 = 0;
let speed2 = 36;

//dog position
var x = 10;
var y = 280;
var w = 280;
var h = 10;

//food images
let imgs = [];
let imgIndex = 0;
let totalImgs = 3;

//food score + misc
var p;
var score;

//boundary
let boundary = 30;

//timer
var timerValue = 60;
var startButton;


function preload () {
  
  //dogidle
  for (let i = 0; i < totalFrames; i++) {
    frames[i] = loadImage('assets/dogidle/' +  'frame' + i + '.png')
  }
  
  //dogrun
  for (let i = 0; i < totalFrames2; i++) {
    frames2[i] = loadImage('assets/dogrun/' + 'frame' + i + '.png')
  }
  
  //food
  for (let i = 0; i < totalImgs; i++) {
    imgs[i] = loadImage('images/' + 'img' + i + '.png');
  }
  
} //END PRELOAD


function setup() {
  
  //canvas
  createCanvas(1000, 400);
  
  //timer
  textAlign(CENTER);
  setInterval(timeIt, 1000);
  
  //framerate
  //frameRate(2);
  
  //food imgs (WORK IN PROGRESS)
  //for (var i = 0; i < totalImgs; i++){
    //imgs[i] = new Collector(random(width), random(height), 50);
  //}
  
  //food score + misc
  //p = new Player();
  //score = 0;
  
} //END SETUP


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
  
  
  //sprite movement
  if (keyIsPressed && key == "d") {
    image(frames2[frameIndex2], x+=5, y, 50, 50);
    
    if (frameCount % speed === 0) {
      frameIndex2++;
    }
    
    if (frameIndex2 >= frames2.length) {
      frameIndex2 = 0;
    }
  }
  
  if (keyIsPressed && key == "a") {
    image(frames2[frameIndex2], x-=5, y , 50, 50);
  
    if (frameCount % speed === 0) {
      frameIndex2++;
    }
  
    if (frameIndex2 >= frames2.length) {
      frameIndex2 = 0;
    }
  }
  
  if (keyIsPressed && key == "w") {
    image(frames2[frameIndex2], 50, 50 , w+=5, h);
  
    if (frameCount % speed === 0) {
      frameIndex2++;
    }
  
    if (frameIndex2 >= frames2.length) {
      frameIndex2 = 0;
    }
  }
  
  if (keyIsPressed && key == "s") {
    image(frames2[frameIndex2], 50, 50 , w, h-=5);
  
    if (frameCount % speed === 0) {
      frameIndex2++;
    }
  
    if (frameIndex2 >= frames2.length) {
      frameIndex2 = 0;
    }
  }
  
  if(!keyIsPressed) {
    image(frames[frameIndex], x, y, 50, 50);
    
    if(frameCount % speed === 0) {
      frameIndex++;
    }
    
    if (frameIndex >= frames.length) {
      frameIndex = 0;
    }
  }
  
  
  //boundary
  if (x < boundary) {
    x = boundary
  } else if (x > width - boundary) {
      x = width - boundary;
    }

  //timer
  if (timerValue <= 60) {
    fill( 0, 0, 0);
    text(timerValue + " SECONDS", width/2, height/2);
  }
  
  if (timerValue == 0) {
    fill( 0, 0, 0);
    text("GAME OVER", width/2, height/2 +15);
  }
  
  //instructions
  fill ( 0, 0, 0);
  text("Collect the food before the timer runs out!", width/2, 30);
  
  
  }
  
  //food imgs + collision (WORK IN PROGRESS)
  p.move();
  
  for (var i = 0; i < imgs.length; i++){
    imgs[i].move();
    imgs[i].display();
    if (p.collide(imgs[i].x, imgs[i].y, i)> 0){
      imgs[i].cc = color(random(255), random(255), random(255));
      imgs[i].x = width+random(50);
      imgs[i].y = random(height);
      score++;
    } 
  
  //score (WORK IN PROGRESS)
  //p.display();
  
  //fill('black');
  //textSize(30);
  //text("Score is: " + score, 20, 30);
  
  
} //END DRAW


//timer
function timeIt() {
  if (timerValue > 0) {
    timerValue--;
  }
} // END TIMEIT


//collector class (WORK IN PROGRESS)
//class Collector{
  //constructor(tx, ty, sz){
    //this.x = tx;
    //this.y = ty;
    //this.sz = sz;
    //this.cc = "red";
  //}
  
  //move(){
    //if (this.x > -50){
      //this.x -= 5;
    //}
    //else{
      //this.x = width + random(50);
    //}
  //}
  
  //display(){
    //fill(this.cc);
    //ellipse(this.x, this.y, this.sz, this.sz);
  //}
//}


//player class (WORK IN PROGRESS)
//class Player{
  //constructor(){
    //this.x = width/2;
    //this.y = height/2;
    //this.sz = 50;
    //this.cc = "green";
  //}
  
  //collide(cx, cy, id){
    //if (dist(this.x, this.y, cx, cy) < //this.sz){
      //console.log("hit" + id);
      //return 1;
    //}
    //else{
      //return 0;
    //}
  //}

  //display(){
    //fill('green');
    //ellipse(this.x, this.y, this.sz, //this.sz);
  //}
  
//}


