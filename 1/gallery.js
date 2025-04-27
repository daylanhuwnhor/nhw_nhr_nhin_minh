let img1;
let img2;
let img3;
let images = [];
let index = 0; 

function preload () {
    img1= loadImage("assets/1.png");
    img2= loadImage("assets/2.jpg");
    img3= loadImage("assets/3.jpeg");

}
function setup() {
    createCanvas(400, 400);
    img1.resize(0,200);
    img2.resize(0,200);
    img3.resize(0,200);
    images = [img1, img2, img3];

  }
function draw() {
    background(220);

imageMode(CENTER);
image(
   images[index%images.length],200,120);
}

function mouseClicked() {

index = index+1;
}