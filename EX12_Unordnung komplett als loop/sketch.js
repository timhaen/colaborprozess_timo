let x = 100;
let y = 100;
let squaresize = 1000 / 5 - 7;
let radius = 0;
let rot = 0;

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

  for (let x = 0; x < 5; x++) {
    for (let y = 0; y < 5; y++) {
      for (let i = 0; i < 10; i++) {
        if (x == 1 && y == 3) {
          if (i !== 0) {
            if (clicked) {
              rect(x * 100 + 50, y * 100 + 50, (i + 1) * 10, (i + 1) * 10, radius, radius, radius, radius);
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
              rect(x * 100 + 50, y * 100 + 50, (i + 1) * 10, (i + 1) * 10, radius, radius, radius, radius);
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
              rect(x * 100 + 50, y * 100 + 50, (i + 1) * 10, (i + 1) * 10, radius, radius, radius, radius);
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
            rect(x * 100 + 50, y * 100 + 50, (i + 1) * 10, (i + 1) * 10, radius, radius, radius, radius);
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

if(frameCount%2.5==0){
    radius = radius + 1;
    rot = rot + 5;
    if (radius > 100) {
      radius = 100
    }
  }
  

}



function mouseClicked(fxn) { clicked = !clicked }



function keyPressed() {
  if (key === "s") {
    saveCanvas("quadrate", "png");
  }
}
