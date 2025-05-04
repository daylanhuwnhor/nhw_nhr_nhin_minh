let img2;
// let chuoiKytu = "SHINee-Minho@@"
let chuoiKytu = "     .:░▒▓█"
// let chuoiKytu = "      ...../////     "

function preload() {
    img2 = loadImage("./assets/MINHO2.jpg");

}

function setup() {
    createCanvas(windowWidth, windowHeight);
    // img2.resize(windowHeight,0)
    // imageMode(CENTER);
    noLoop();
}

function draw() {
    img2.loadPixels();
    background(220);
    // image(img2, windowWidth/2, windowHeight/2);
    image(img2, 0, 0);

    for (let i = 0; i < img2.height; i++) {
        for (let j = 0; j < img2.width; j++) {
            idx = (i * img2.width + j) * 4;

            //Do sang trung binh
            let r = img2.pixels[idx];
            let g = img2.pixels[idx+1];
            let b = img2.pixels[idx+2];

            let avg = (r+g+b)/5

            let chuoiKytuIndex = int(map(avg, 0, 255, 0, chuoiKytu.length));
            let kytu = chuoiKytu[chuoiKytuIndex];
           
           
            fill(r,g,b);
            textSize(5);
            text( kytu, j, i);

        }
    }

    img2.updatePixels();



}