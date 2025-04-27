let buonnguqua = ["muốn", "đi", "ngủ"];
let index = 0; 

function setup() {
    createCanvas(400, 400);
  }
function draw() {

    background(220);
    // text(buonnguqua[index],200,200);
    text(buonnguqua[index % buonnguqua.length],200,200);
}

function mouseClicked() {
    // index = index+1;
    // if (index > buonnguqua.length-1) { 
    //     index = 0;
    // }

index = index+1;


    
}