let vdo;
let threshold = 200
let silder;
let lyrics = `
Ngày đó
Nếu tôi về đất mẹ lộng gió
Người có nhớ tôi không
Vì gió thổi ngược chiều đứt mất cành diều
Dù tiếc nuối nhiều điều
Chỉ cần em không khóc
Tôi sẽ bình an trôi đi
Có người giả tiếng con chim nhại
Có người hứa ở lại rồi cũng đi mãi (đi mãi)
Không nói chuyện đúng sai
Tìm một động thái để mong chờ
Tìm một cảm xúc giờ chỉ còn trong mơ
Là em hay tôi bơ thờ
Không một ai níu chân tôi lại
Không một ai nhớ hôm tôi chợt biến mất (biến mất)
Chỉ có em đến thăm tôi
Có người sẽ nói tôi ngây dại
Khi họ tìm thấy tôi ở trên gác mái
Tặng em một nhánh hoa lan e ngại gieo vào thiên thai
Ngày đó
Nếu tôi về đất mẹ lộng gió
Người có nhớ tôi không
Vì gió thổi ngược chiều đứt mất cành diều
Dù tiếc nuối nhiều điều
Chỉ cần em không khóc
Tôi sẽ bình an trôi đi
`


function setup() {
//   img.resize(50, 0);
  createCanvas(800,600);
  pixelDensity(1);
  vdo = createCapture(VIDEO,{flipped: true});
  vdo.hide()

  slider = createSlider(200,255,200,5);
}
function draw() {
background(0);
image(vdo,0,0,800,600);

let sumX=0
let sumY=0
let count=0;
threshold = slider.value();

vdo.loadPixels();
  for (let i = 0; i < vdo.height; i = i+1) {
    for (let j = 0; j < vdo.width; j = j+1) {
      let idx = (i * vdo.width + j) * 4;
      let r = vdo.pixels[idx];
      let g = vdo.pixels[idx + 1];
      let b = vdo.pixels[idx + 2];
    //   let a = vdo.pixels[idx + 3];
    //   let grayScale = (r + g + b) / 3;

      let avg = (r+g+b)/3

      if (avg>threshold) {
        count = count+ 1;
        sumX = sumX + j;
        sumY = sumY + i;
      }
    }
}

locationX = sumX/ count;
locationY = sumY/ count;

circle (locationX,locationY,100);

textAlign(CENTER, CENTER);
textSize(40);
text(lyrics,width/2,height/2)

// text("💖",locationX,locationY);




}