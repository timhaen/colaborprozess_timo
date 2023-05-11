let x = 100;
let y = 100;
let squaresize = 1000 / 5 - 7;
let rot = 0;
let keyCount = 0;
let rad = 1;
let tf = false;

function setup() {
  createCanvas(1000, 1000);
  rectMode(CENTER);
  background('white');
  angleMode(DEGREES);
}

let clicked = false

function draw() {
  console.log(frameCount);
  stroke(0);
  noFill();
  strokeWeight(1);
  background(255)

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
    if (rad > 50) {
      rad = 50;
    }
  }

  for (let x = 0; x < 5; x++) {
    for (let y = 0; y < 5; y++) {
      for (let i = 0; i < 10; i++) {
        if (x == 1 && y == 3) {
          if (i !== 0) {
            if (clicked) {
              push();
              translate(x * 100 + 50, y * 100 + 50)
              rotate(rot)
              rect(0, 0, (i + 1) * 10, (i + 1) * 10, rad);
              pop();
            } else {
              noFill();
              push();
              translate(x * 100 + 50, y * 100 + 50);
              rotate(rot)
              rect(0,0, (i + 1) * 10)
              pop();             }
          }
        } else if (x == 1 && y == 2) {
          if (i !== 1) {
            if (clicked) {
              push();
              translate(x * 100 + 50, y * 100 + 50)
              rotate(rot)
              rect(0, 0, (i + 1) * 10, (i + 1) * 10, rad);
              pop();
            } else {
              noFill();
              push();
              translate(x * 100 + 50, y * 100 + 50);
              rotate(rot)
              rect(0,0, (i + 1) * 10)
              pop();              }
          }
        } else if (x == 2 && y == 2) {
          if (i !== 3) {
            if (clicked) {
              push();
              translate(x * 100 + 50, y * 100 + 50)
              rotate(rot)
              rect(0, 0, (i + 1) * 10, (i + 1) * 10, rad);
              pop();
            } else {
              noFill();
              push();
              translate(x * 100 + 50, y * 100 + 50);
              rotate(rot)
              rect(0,0, (i + 1) * 10)
              pop();   
            }
          }
        } else {
          if (clicked) {
            push();
            translate(x * 100 + 50, y * 100 + 50)
            rotate(rot)
            rect(0, 0, (i + 1) * 10, (i + 1) * 10, rad);
            pop();
          } else {
            noFill();
            push();
            translate(x * 100 + 50, y * 100 + 50);
            rotate(rot)
            rect(0,0, (i + 1) * 10)
            pop();          }
        }
      }
    }
  }
  console.log(tf);
  console.log(keyCount);

  rot = rot + 1;

  console.log(rot)
}

function mouseClicked(fxn) { clicked = !clicked }

function keyPressed() {
  if (key === "s") {
    saveCanvas("quadrate", "png");
  }
  if (key === "f") {
    keyCount++;
  }
}
