let img;
let chuoiKytu = "█ // .:░▒▓█"

function preload() {
    img = loadImage("assets/MINHO5 RESIZE.jpg");

}

function setup() {
    createCanvas(windowWidth, windowHeight);
    noLoop();
}

function draw() {
    img.loadPixels();
    background(220);
    image(img, 0, 0);

    for (let i = 0; i < img.height; i++) {
        for (let j = 0; j < img.width; j++) {
            idx = (i * img.width + j) * 4;

            //Do sang trung binh
            let r = img.pixels[idx];
            let g = img.pixels[idx+1];
            let b = img.pixels[idx+2];

            let avg = (r+g+b)/3

            let chuoiKytuIndex = int(map(avg, 0, 255, 0, chuoiKytu.length));
            let kytu = chuoiKytu[chuoiKytuIndex];
           
           
            fill(r,g,b);
            textSize(12);
            text( kytu, j*15, i*15);

        }
    }

    img.updatePixels();



}