let vdo;
let threshold = 200
let silder;
let rTarget, gTarget, bTarget

function setup() {
//   img.resize(50, 0);
  createCanvas(800,600);
  pixelDensity(1);
  vdo = createCapture(VIDEO);
  vdo.hide()

  slider = createSlider(200,255,200,5);
  rTarget = 130;
  gTarget = 90;
  bTarget =70;
}
function draw() {
background(220);
image(vdo,0,0,800,600);

let sumX=0
let sumY=0
let count=0;
threshold = slider.value();

vdo.loadPixels();
  for (let i = 0; i < vdo.height; i++) {
    for (let j = 0; j < vdo.width; j++) {
      let idx = (i * vdo.width + j) * 4;
      let r = vdo.pixels[idx];
      let g = vdo.pixels[idx + 1];
      let b = vdo.pixels[idx + 2];
    
      let distance = dist(r,g,b,rTarget,gTarget,bTarget);


      // let avg = (r+g+b)/3

      if (distance>threshold) {
        count = count+ 1;
        sumX = sumX + j;
        sumY = sumY + i;
      }
    }
}

locationX = sumX/ count;
locationY = sumY/ count;

// textAlign(CENTER, CENTER);
// textSize(40);
// text("💖",locationX,locationY);
circle (locationX,locationY,20);

}