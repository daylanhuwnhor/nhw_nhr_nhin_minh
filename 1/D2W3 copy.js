let vdo;

function setup() {
//   img.resize(50, 0);
  createCanvas(800,600);
  pixelDensity(1);
  vdo = createCapture(VIDEO);
  vdo.hide()
}
function draw() {
background(220);
image(vdo,0,0,800,600);

let maxSang=0
let maxX=0
let maxY=0

vdo.loadPixels();
  for (let i = 0; i < vdo.height; i++) {
    for (let j = 0; j < vdo.width; j++) {
      let idx = (i * vdo.width + j) * 4;
      let r = vdo.pixels[idx];
      let g = vdo.pixels[idx + 1];
      let b = vdo.pixels[idx + 2];
      let a = vdo.pixels[idx + 3];
      let grayScale = (r + g + b) / 3;

      let avg = (r+g+b)/3
      if (avg>maxSang) {
        maxSang = avg;
        maxX = j;
        maxY = i;
      }
    }
}

translate(maxX, maxY)
circle (maxX,maxY,20);

}