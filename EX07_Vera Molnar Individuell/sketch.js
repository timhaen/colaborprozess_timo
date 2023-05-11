let x = 100;
let y = 100;
let tile = 200;
let squareSize = 200;

function setup() {
  createCanvas(1000, 1000);
  rectMode(CENTER);
  background("white");
  frameRate(10);
}

function draw() {
  translate(100, 100);
  for (let amount = 1; amount < 11; amount++) {
    for (let x = 0; x < width; x = x + tile) {
      for (let y = 0; y < height; y = y + tile) {
        console.log(amount);
/*         if(amount % 2 == 0){
          //fill(0,20);
          stroke(0);
          strokeWeight(2);
          rect(x, y, squareSize * (0.097 * amount), squareSize * (0.097 * amount));
        }else{
          fill(255,20);
          stroke('red');
          strokeWeight(2);
          rect(x, y, squareSize * (0.097 * amount), squareSize * (0.097 * amount));
        } */
        if(amount <=5){
          noFill();
          stroke(0);
          strokeWeight(3);
          rect(x, y, squareSize * (0.097 * amount), squareSize * (0.097 * amount));
        } else if (amount > 5){
          noFill();
          stroke('red');
          strokeWeight(3);
          rect(x, y, squareSize * (0.097 * amount), squareSize * (0.097 * amount));
        } 
          }
    }
  }
  noLoop();
}


function keyPressed() {
  if (key === "s") {
    saveCanvas("quadrate", "png");
  }
}
