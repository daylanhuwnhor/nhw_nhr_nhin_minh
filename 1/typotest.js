let font;
let points;


function preload() {
   font= loadFont("assets/DelaGothicOne-Regular.ttf")
}

function setup() {
    createCanvas(windowWidth,windowHeight);
    points = font.textToPoints("NhoXiu",50,height/2,300,{
        sampleFactor: 0.05,
        simplifyThresold: 0,
    });


}

function draw() {
background(220);
for (let i=0; i<points.length; i=i+1) {
    let distance = dist(mouseX,mouseY, points[i].x, points[i].y)
    let size = map (distance,0,500,100,0)
    if (size<0) {size=0

    }
    circle(points[i].x, points[i].y, size);
    }




}