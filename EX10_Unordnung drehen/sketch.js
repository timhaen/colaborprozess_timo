let x = 100;
let y = 100;
let tile = 200;
tileCircle = 250;
let squareSize = 200;

function setup() {
  createCanvas(1000, 1000);
  rectMode(CENTER);
  frameRate(10);
  angleMode(DEGREES);
}

let nr = document.querySelector("#nr");
let nr1 = document.querySelector("#nr1");
let turn = document.querySelector("#rotate");

function draw() {
  background(255);

  let nummer = nr.value;
  let nummer1 = nr1.value;
  let theta = turn.value;

  //Kreise rot
  for (let amount = 1; amount < nummer; amount++) {
    noFill();
    strokeWeight(2)
    stroke(0);
    ellipse(width / 2, height / 2, 10 * amount, 10 * amount);
  }

  //Kreise gelb
  for (let amount = 1; amount < nummer1; amount++) {
    for (let x = width / 4; x <= (width / 4) * 3; x = x + tileCircle) {
      for (let y = height / 4; y <= (height / 4) * 3; y = y + tileCircle) {
        push();
        translate(x, y);
        noFill();
        rotate(45);
        stroke(0, 120);
        ellipse(0, 0, 10 * amount, 10 * amount);
        pop();
      }
    }
  }

  //Rechtecke
  for (let amount = 1; amount < 11; amount++) {
    for (let x = 100; x < width; x = x + tile) {
      for (let y = 100; y < height; y = y + tile) {
        push();
        translate(x, y);
        rotate(theta);
        noFill();
        stroke(0);
        strokeWeight(2);
        rect(
          0,
          0,
          squareSize * (0.097 * amount),
          squareSize * (0.097 * amount)
        );
        pop();
      }
    }
  }

  //1% Unordnung
  push();
  stroke(255);
  strokeWeight(5);
  push();
  rotate(theta);
  translate(width / 2, height / 2);
  rect(0, 0, 60, 60);
  pop();
  push();
  rotate(theta);
  translate(300, height / 2);
  rect(0, 0, 40, 40);
  pop();
  push();
  rotate(theta);
  translate(300, 700);
  rect(0, 0, 20, 20);
  pop();
}

function keyPressed() {
  if (key === "s") {
    saveCanvas("quadrate", "png");
  }
}
