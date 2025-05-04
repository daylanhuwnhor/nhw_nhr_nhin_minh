let img1;

function preload() {
    img1 = loadImage("assets/MINHO.jpg");

}

function setup() {
    createCanvas(windowWidth, windowHeight);
}

function draw() {
// imageMode(CENTER);
background(0)
// image(img1,0,0)
img1.resize(windowHeight,0)
image(img1, windowWidth/5, 0);

let e= img1.get(mouseX, mouseY)
// console.log(e);

fill(e);
rect(10,10,200,200)

let c = img1.get(mouseX-20, mouseY-20, 200, 200) 
// console.log(c)
image(c, 400, 500, 500, 500);

}
