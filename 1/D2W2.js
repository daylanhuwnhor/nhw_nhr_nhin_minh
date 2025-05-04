let img1;

function preload() {
    img1 = loadImage("./assets/MINHO2.jpg");

}

function setup() {
    createCanvas(windowWidth, windowHeight);
}

function draw() {
background(0)
img1.resize(windowHeight/7,0)
image(img1, windowWidth/2, 0);
}