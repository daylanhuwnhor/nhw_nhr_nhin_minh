let img;
// let symbols = "  .:░▒▓█";
let slider1;
let slider2;
let picker;
let myInput;

let ratio = 10;

function preload() {
  img = loadImage("assets/MINHO3.jpeg"
);
}

function setup() {
  img.resize(50, 0);
  createCanvas(windowWidth,windowHeight);
  
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
  img.loadPixels();


  for (let i = 0; i < img.height; i++) {
    for (let j = 0; j < img.width; j++) {
      idx = (i * img.width + j) * 4;
      let r = img.pixels[idx];
      let g = img.pixels[idx + 1];
      let b = img.pixels[idx + 2];
      let a = img.pixels[idx + 3];
      let grayScale = (r + g + b) / 3;
      
      let idxInput = int(map(grayScale, 0, 255, 0, myInput.value().length));
      let kyTu = myInput.value()[idxInput];
    

      fill(picker.value())
      textSize(slider1.value())
      text(kyTu, j * slider2.value(), i * slider2.value());
    }
  }
}