let particles = [];




function setup() {
  createCanvas(600, 600);
  
  for (let i = 0; i < 50; i++) {
    particles.push(new Particle(random(width), random(height)));
  }

}




function draw() {
  background(220);
  
  
  //sky
  noStroke();
  fill(106, 90, 205);
  square(0, 0, 600);
  
  
  //pink sun ring 
  noStroke();
  fill(238, 130, 238);
  circle(300, 400, 650);
  
  //blue sun ring 
  noStroke();
  fill(106, 177, 236);
  circle(300, 400, 450);
  
  
  //sun outer
  noStroke();
  fill(255, 165, 0);
  circle(300, 400, 250);
  
  //sun inner
  noStroke();
  fill(255, 221, 0);
  circle(300, 400, 100);
  
  
  //grass
  noStroke();
  fill(60, 179, 113);
  square(0, 400, 600);
  
  
  //grass line 1
  noStroke();
  fill(31, 99, 71);
  rect(50, 400, 40, 200);
  
  //grass line 2
  noStroke();
  fill(31, 99, 71);
  rect(150, 400, 40, 200);
  
  //grass line 3
  noStroke();
  fill(31, 99, 71);
  rect(250, 400, 40, 200);
  
  //grass line 4
  noStroke();
  fill(31, 99, 71);
  rect(350, 400, 40, 200);
  
  //grass line 5
  noStroke();
  fill(31, 99, 71);
  rect(450, 400, 40, 200);
  
  //grass line 6
  noStroke();
  fill(31, 99, 71);
  rect(550, 400, 40, 200);
  
  
  //light grass line 1
  noStroke();
  fill(61, 233, 131);
  rect(30, 400, 20, 200);
  
  //light grass line 2
  noStroke();
  fill(61, 233, 131);
  rect(130, 400, 20, 200);
  
  //light grass line 3
  noStroke();
  fill(61, 233, 131);
  rect(230, 400, 20, 200);

  //light grass line 4
  noStroke();
  fill(61, 233, 131);
  rect(330, 400, 20, 200);
  
  //light grass line 5
  noStroke();
  fill(61, 233, 131);
  rect(430, 400, 20, 200);
  
  //light grass line 6
  noStroke();
  fill(61, 233, 131);
  rect(530, 400, 20, 200);
  
  
  //tree 1
  noStroke();
  fill(39, 78, 64);
  triangle(0, 400, 15, 260, 30, 400);
  
  //tree 2
  noStroke();
  fill(39, 78, 64);
  triangle(90, 400, 110, 130, 130, 400);
  
  //tree 3
  noStroke();
  fill(39, 78, 64);
  triangle(190, 400, 210, 310, 230, 400);
  
  //tree 4
  noStroke();
  fill(39, 78, 64);
  triangle(290, 400, 310, 210, 330, 400);
  
  //tree 5
  noStroke();
  fill(39, 78, 64);
  triangle(390, 400, 410, 350, 430, 400);
  
  //tree 6
  noStroke();
  fill(39, 78, 64);
  triangle(490, 400, 510, 250, 530, 400);
  
  //tree 7
  noStroke();
  fill(39, 78, 64);
  triangle(590, 400, 610, 210, 630, 400);
  
  
  fill(0);
    textSize(25);
    text("Sam Floyd",460,575);
    text("Sunset Fireflies",20,40);
  
  
  for (let i = 0; i < particles.length; i++) {
    particles[i].update();
    particles[i].display();
  }
}




function mouseMoved() {
  for (let i = 0; i < particles.length; i++) {
    particles[i].hover(mouseX, mouseY);
  }
}

function mouseClicked() {
  for (let i = 0; i < particles.length; i++) {
    particles[i].click(mouseX, mouseY);
  }
}

class Particle {
  constructor(x, y) {
    this.pos = createVector(x, y);
    this.vel = createVector(random(-1, 1), random(-1, 1));
    this.acc = createVector();
    this.r = random(5, 30);
    this.alpha = 50;
    this.hovering = false;
    this.clicked = false;
    this.color = color(220, 255, 170, 100);
    this.glowIntensity = random(50, 255);
    this.glowDirection = random() > 0.5 ? 1 : -1;
  }

  update() {
    if (this.hovering) {
      this.alpha = lerp(this.alpha, 255, 0.1);
    } else {
      this.alpha = lerp(this.alpha, 50, 0.1);
    }
    if (this.clicked) {
      let force = createVector(random(-5, 5), random(-5, 5));
      this.acc.add(force);
      this.vel.limit(10);
    }
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.mult(0);

    // Update glow intensity and direction
    this.glowIntensity += this.glowDirection;
    if (this.glowIntensity >= 255 || this.glowIntensity <= 50) {
      this.glowDirection *= -1;
    }
  }

  display() {
    noStroke();
    fill(red(this.color), green(this.color), blue(this.color), this.glowIntensity);
    ellipse(this.pos.x, this.pos.y, this.r);
  }

  hover(x, y) {
    let d = dist(x, y, this.pos.x, this.pos.y);
    if (d < 50) {
      this.hovering = true;
    } else {
      this.hovering = false;
    }
  }

  click(x, y) {
    let d = dist(x, y, this.pos.x, this.pos.y);
    if (d < 50) {
      this.clicked = true;
    }
  }
}
