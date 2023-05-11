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

  ellipse(mouseX, mouseY, 100,100);
  translate(100, 100);
  
  for (let amount = 1; amount < 11; amount++) {
    for (let x = 0; x < width; x = x + tile) {
      for (let y = 0; y < height; y = y + tile) {
        console.log(amount);
        fill(0,50);
        noStroke();
        strokeWeight(2);
        rect(x, y, squareSize * (0.097 * amount), squareSize * (0.097 * amount));
      }
    }
  }
}


function keyPressed() {
  if (key === "s") {
    saveCanvas("quadrate", "png");
  }
}
