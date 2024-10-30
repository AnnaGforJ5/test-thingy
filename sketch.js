function setup() {
  let canvas = createCanvas(500, 400);
  canvas.parent("canvas")
  background(220,15,90);
}

function draw() {
  fill(100, 150, 200);
  circle(mouseX,mouseY,15);
}

function mousePressed(){
  background(220,15,90);
}
