class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.path=[]
    this.image = loadImage("sprites/bird.png");
    this.smoke=loadImage("sprites/smoke.png")
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;
position=[this.body.position.x,this.body.position.y]
this.path.push(position)
    super.display();
    image(this.smoke,200,80)
  }
}
