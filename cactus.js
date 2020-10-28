class Cactus {
  constructor() {
    this.r = 100;
    this.x = width;
    this.y = height - this.r;
  }

  move() {
    this.x -= 6;
  }

  show() {
    image(cImg, this.x, this.y, this.r, this.r);
    //circle(this.x+this.r/2,this.y+this.r/2,this.r);
  }
}