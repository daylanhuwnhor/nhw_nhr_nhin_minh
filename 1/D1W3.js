let spaceX = 60;
let spaceY = 60;



function setup() {
  // createCanvas(400, 400);
   createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
  angleMode(DEGREES);
}

function draw() {
  background(220);
  noFill();

  let angle = 0;
  for (let j = 1; j < height / spaceY; j=j+1) {
    for (let i = 1; i < width / spaceX; i=i+1) {
      push();
      translate(i * spaceX, j * spaceY);
      rotate(angle);
      stroke(0,0,0);
      square(0, 0, 100);
      angle = angle + 0.5;
      pop();
    }
  }


}
