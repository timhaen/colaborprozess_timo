let tile = 40;
let randomMax = 8;

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(60);
  angleMode(DEGREES);
}

function draw() {
  randomSeed(1); //Nimmt immer den gleichen randomSeed
  background(255);

  for (let x = 0; x < width; x = x + tile) {
    for (let y = 0; y < height; y = y + tile) {
      let abstand = int(random(-1 * randomMax, randomMax));

      if (x > width / 2) {
        strichdicke = map(x, 0, width, 30, 1);
      } else if (x < width / 2) {
        strichdicke = map(x, 0, width, 1, 30);
      }

      stroke(0);
      strokeWeight(strichdicke);
      line(x + abstand + tile, y, x + abstand, y + tile);
    }
  }
}

function keyPressed() {
  if (key === "s") {
    saveCanvas("tree", png);
  }
}
