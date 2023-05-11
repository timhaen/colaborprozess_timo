let keyCount = 0;
let rad = 1;
let tf = false;

function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
}

function draw() {
  background(220,100,100);

  if (keyCount % 2 == 0) {
    tf = false;
  } else {
    tf = true;
  }

  if (tf == false) {
    rad = rad - 1;
    if (rad < 1) {
      rad = 1;
    }
  } else {
    rad = rad + 1;
    if (rad > 100) {
      rad = 100;
    }
  }
  stroke(255);
  strokeWeight(2);
  noFill();
  rect(width / 2, height / 2, 200, 200, rad);

  noStroke();
  fill(255);
  textSize(30);
  textAlign(CENTER);
  text('PRESS F', width / 2, height / 2 - 300)

  console.log(tf);
  console.log(keyCount);
}

function keyPressed() {
  if (key === "f") {
    keyCount++;
  }
}
