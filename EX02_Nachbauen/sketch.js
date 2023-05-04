function setup() {
  createCanvas(900, 900); // Quadratischer Canvas mit einer Größe von 400x400 Pixeln
}

function draw() {

  // Größe und Abstand der Quadrate
  let squareSize = 300;
  let squareMargin = 0;

  // Position der ersten Quadrat-Ecke
  let x = (width - (3 * squareSize + 2 * squareMargin)) / 2;
  let y = (height - (3 * squareSize + 2 * squareMargin)) / 2;

  // Schleife zum Zeichnen der Quadrate
  for (let k = 0; k < 10; k++){
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      let x = startX + i * (squareSize + squareMargin);
      let y = startY + j * (squareSize + squareMargin);
      noFill();
      stroke(0);
      rect(x, y, squareSize, squareSize); // Zeichnet das Quadrat
    }
  }
}

for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    let x = startX + i * (squareSize + squareMargin);
    let y = startY + j * (squareSize + squareMargin);
    noFill();
    stroke(0);
    rect(x, y, squareSize, squareSize); // Zeichnet das Quadrat
  }
}
}