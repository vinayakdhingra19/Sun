function setup() {
  createCanvas(800,400);
  sun = new Sun(400,200);
  
}

function draw() {
  background(255,255,255);  
  drawSprites();
}
sun.display();