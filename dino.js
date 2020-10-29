class Dino{
  constructor(){
    this.r=100;
    this.x=this.r;
    this.y=height-this.r;
    this.vy=0;
    this.gravity=0.5;
    this.score=0;
  }
  
  jump(){
    if(this.y===height-this.r){
      this.vy=-15;
    }
  }
  
  hits(cactus){
    return collideCircleCircle(this.x+this.r*0.5, this.y+this.r*0.5, this.r, cactus.x+cactus.r*0.5, cactus.y+cactus.r*0.5, cactus.r);
  }
  move(){
    this.y+=this.vy;
    this.vy+=this.gravity;
    this.y=constrain(this.y,0,height-this.r);
  }
  
  show() {
    image(dImg,this.x,this.y,this.r,this.r);
    //circle(this.x+this.r*0.5,this.y+this.r*0.5,this.r);
  }
  
}