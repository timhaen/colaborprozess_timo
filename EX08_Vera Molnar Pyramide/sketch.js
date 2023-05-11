let x = 100;
let y = 100;
let tile = 200;
let squareSize = 200;

function setup() {
  createCanvas(1000, 1000);
  rectMode(CENTER);
  background(0);
  frameRate(10);
}

function draw() {
  /*translate(100, 100);
    for (let amount = 1; amount < 11; amount++) {
    for (let x = 0; x < width; x = x + tile) {
      for (let y = 0; y < height; y = y + tile) {
        console.log(amount);

        fill(255,30);
        stroke(0);
        strokeWeight(2);
        rect(
          width,
          y,
          squareSize * (0.097 * amount),
          squareSize * (0.097 * amount)
        );
      }
    }
  }
  noLoop(); */
  noStroke();

  fill(5);
  rect(width / 2, height / 2, 300, 300);
  fill(55);
  rect(width / 2, height / 2, 250, 250);
  fill(105);
  rect(width / 2, height / 2, 200, 200);
  fill(155);
  rect(width / 2, height / 2, 150, 150);
  fill(205);
  rect(width / 2, height / 2, 100, 100);
  fill(255);
  rect(width / 2, height / 2, 50, 50);
  fill(255,100);
  triangle(width/2, height/2, width/2-150, height/2-150,width/2+150, height/2-150);
  fill(100,100);
  triangle(width/2, height/2, width/2-150, height/2+150,width/2+150, height/2+150);
  fill(150,100);
  triangle(width/2, height/2, width/2-150, height/2+150,width/2-150, height/2-150);
  fill(200,100);
  triangle(width/2, height/2, width/2+150, height/2+150,width/2+150, height/2-150); 
 
  noLoop();
}

function keyPressed() {
  if (key === "s") {
    saveCanvas("quadrate", "png");
  }
}
