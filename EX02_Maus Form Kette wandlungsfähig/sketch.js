function setup() {
  createCanvas(800, 800);
  rectMode(CENTER);
  frameRate(60);
  angleMode(DEGREES);
}

let w = document.querySelector("#width");
let h = document.querySelector("#height");
let rot = document.querySelector("#red");
let gruen = document.querySelector("#green");
let blau = document.querySelector("#blue");
let number = document.querySelector("#number");
let rotation = document.querySelector("#rotation");


function draw() {
  let breite = w.value;
  let hoehe = h.value;
  let nr = number.value;
  let theta = rotation.value;

  background(0);

  console.log(nr);


    for (i = 0; i < nr; i++) {
    fill(rot.value, gruen.value, blau.value);
    noStroke();
    let x = mouseX;
    let y = mouseY;
    let posY = y + nr * (5 * i);
    let posX = x + i * 100;
    //push();
    //translate(0,0);
    //rotate(theta);
    ellipse(posX, posY, breite, hoehe);
    //pop();
  }
  
}

function keyPressed() {
  if (key === "s") {
    saveCanvas("myCanvas", "png");
  }
}
