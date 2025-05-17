let img;
// let symbols = "  .:░▒▓█";
let slider1;
let slider2;
let picker;
let myInput;
let capture;



function preload() {
  img = loadImage("assets/MINHO3.jpeg"
);
}

function setup() {
  img.resize(50, 0);
  createCanvas(windowWidth,windowHeight);
  capture = createCapture(VIDEO);

  let ratio = capture.width/capture.height;
  capture.size(50,50/ratio);

  slider1 = createSlider(5,40,10,1);
  slider1.position(400,300);

  slider2 = createSlider(2,50,0,5);
  slider2.position(400,400);

  picker = createColorPicker('deeppink');
  picker.position(400,500);

  myInput = createInput("  .:░▒▓█");
  myInput.position(400,600);
}

function draw() {
  background(255);
  capture.loadPixels();


  for (let i = 0; i < img.height; i++) {
    for (let j = 0; j < img.width; j++) {
      idx = (i * img.width + j) * 4;
      let r = capture.pixels[idx];
      let g = capture.pixels[idx + 1];
      let b = capture.pixels[idx + 2];
      let a = capture.pixels[idx + 3];
      let grayScale = (r + g + b) / 5;
      
      let idxInput = int(map(grayScale, 0, 255, 0, myInput.value().length));
      let kyTu = myInput.value()[idxInput];
    

      fill(picker.value())
      textSize(slider1.value())
      text(kyTu, j * slider2.value(), i * slider2.value());
    }
  }
}