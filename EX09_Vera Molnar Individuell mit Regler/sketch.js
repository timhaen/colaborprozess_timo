let x = 100;
let y = 100;
let tile = 200;
tileCircle = 250
let squareSize = 200;

function setup() {
  createCanvas(1000, 1000);
  rectMode(CENTER);
  frameRate(10);
  angleMode(DEGREES)
}

let nr = document.querySelector("#nr");
let nr1 = document.querySelector("#nr1");

function draw() {
  background(0);

  let nummer = nr.value;
  let nummer1 = nr1.value;

  //Rechtecke
  push();
  translate(100, 100);
  for (let amount = 1; amount < 11; amount++) {
    for (let x = 0; x < width; x = x + tile) {
      for (let y = 0; y < height; y = y + tile) {
        console.log(amount);

        noFill();
        stroke(255);
        strokeWeight(2);
        rect(
          x,
          y,
          squareSize * (0.097 * amount),
          squareSize * (0.097 * amount)
        );
      }
    }
  }
  pop();

  //Kreise rot
  for (let amount = 1; amount < nummer; amount++) {
    noFill();
    stroke(255, 0, 0);
    ellipse(width / 2, height / 2, 10 * amount, 10 * amount);
  }

  //Kreise gelb
  
   for (let amount = 1; amount < nummer1; amount++) {
    for (let x = width/4; x <= width/4*3; x = x + tileCircle) {
      for (let y = height/4; y <= height/4*3; y = y + tileCircle) {
        push();
        translate(x,y)
        noFill();
        rotate(45)
        stroke(255, 255, 0);
        rect(0, 0, 10 * amount, 10 * amount);
        pop();
      }
    }
  }
}

function keyPressed() {
  if (key === "s") {
    saveCanvas("quadrate", "png");
  }
}
