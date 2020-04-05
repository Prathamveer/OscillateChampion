class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,80,80);
    this.image = loadImage("cannonball.png");
  }

  display() {
    if(keyCode===32){
    this.body.position.x = mouseX;
    this.body.position.y = mouseY;
    }
    super.display();
  }
}
