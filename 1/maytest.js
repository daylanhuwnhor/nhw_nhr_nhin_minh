let may1, may2, may3, may4;
let may;
let vdotexture;
let index = 0; 
let textday = ["một", "ngày", "đẹp", "trời"];

function preload() {
    may1 = loadImage("assets/MAY1.jpg");
    may2 = loadImage("assets/MAY2.png");
    may3 = loadImage("assets/MAY3.png");
    may4 = loadImage("assets/MAY4.png");
    vdotexture = createVideo("assets/texture.mov");
}

function setup() {
    createCanvas(960, 700);
   
    may = [may1, may2, may3, may4];
    vdotexture.loop();
    vdotexture.hide();

}

function keyPressed() {
    if (keyCode === LEFT_ARROW) { 
        index = index + 1;
    } else if (keyCode === RIGHT_ARROW) { 
        index = index - 1;
    }

    // if (index < 0) {
    //     index += may.length;
    // }

    if (index < 0) {
        index = may.length -1;
    }

}

function draw() {
    
    background(0);

    imageMode(CORNER);
    image(may[index % may.length], 0, 40);

    push();
    blendMode(DODGE);
    image(vdotexture, 0, 40, may1.width, may1.height); 
    pop();

    // push();
    // fill(238, 255, 0)
    // textAlign(CENTER, TOP);
    // textSize(12)
    // text(" /Một ngày đẹp trời/\n/Rủ mình/\n/...về chơi/\n/ *O^O* /",width/2,height-100)
    // pop();

    push();
    textAlign(CENTER, TOP);
    fill(238, 255, 0)
    textSize(12)
    text(textday[index % textday.length],width/2,height-100)
    pop();
}