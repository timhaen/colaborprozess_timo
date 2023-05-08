let x = 100;
let y = 100;
let squareSize = 19.5;

function setup() {
  createCanvas(1000, 1000);
  rectMode(CENTER); // Quadratischer Canvas mit einer Größe von 400x400 Pixeln
  background(255, 255, 255);
}

function draw() {
  console.log(frameCount);

  // Position der ersten Quadrat-Ecke

  // Schleife zum Zeichnen der Quadrate
  //for (let k = 0; k < 10; k++){
  //for (let i = 0; i < 9; i++) {
  //for (let j = 0; j < 3; j++) {
  noFill();
  stroke(0);
  strokeWeight(2);
  rect(x, y, squareSize); // Zeichnet das Quadrat

  stroke(255);
  strokeWeight(5);
  rect(width / 2, height / 2, 60, 60);
  rect(300, height / 2, 40, 40);
  rect(300, 700, 20, 20); 

  x = x + 200;

  if (x > 1000) {
    x = 100;
    y = y + 200;
  }
  if (y > 1000) {
    x = 100;
    y = 100;
    squareSize = squareSize + 19.5;
  }
  if (frameCount == 250) {
    noLoop();
  }
}
//}
//}
//}

function keyPressed() {
  if (key === "s") {
    saveCanvas("quadrate", "png");
  }
}
