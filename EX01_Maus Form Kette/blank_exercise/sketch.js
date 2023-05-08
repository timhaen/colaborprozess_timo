function setup() {
  createCanvas(800, 800);
  rectMode(CENTER);
  frameRate(60);
}

function draw() {
  let rand = random(-10, 10);

  //sinus welle fängt unten an _-_-, cosinus oben -_-_-
  let sinus = sin(frameCount / 10);
  let sinus2 = sin(frameCount / 5);

  let n = noise(sinus, sinus2);

  background("#e64b65");
  //fill("#3e14a7");
  noFill();
  strokeWeight(2);
  stroke(sinus * 255,sinus * 255,0);
  let x = mouseX;
  let y = mouseY;

  console.log(y)
  for (i = 0; i < 7; i++) {
    let posY = y + sinus * (5 * i);
    let posX = x + i * 100;
    
    if (i % 2 == 0) {
      ellipse(posX, posY, 100, 100);
    }
    else{
      rect(posX, posY, 100, 100);
    }

  }
}

function keyPressed() {
  if (key === "s") {
    saveCanvas("myCanvas", "png");
  }
}
