class Sun{
    constructor(x, y)
    {
      
      this.body = Bodies.ellipse(x, y,20,10);
      
      
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      pos.x = mouseX;
      pos.y = mouseY;
      push();
      translate(pos.x, pos.y);
      ellipseMode(CENTER);
      strokeWeight(3);
      fill(255);
      rotate(angle);
      ellipse(pos.x,pos.y,20,10);
      pop();
    }
  };