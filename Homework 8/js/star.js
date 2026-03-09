class Star {
  
  constructor() {
    this.r = 70;
    this.x = width;
    this.y = 150;  
  }
  
  move() {
    this.x -= 3;
    
  }
  
  show() {
    image(sImg, this.x, this.y, this.r, this.r)
    
  }
  
}