let tile = 40;
let randomMax = 8;

let strokeScale = d3.scaleLinear()
  .domain([-10, 0, 10])
  .range(['red', 'yellow', 'blue']);

  
let strokeWheigtScale = d3.scaleLinear()
.domain([-10, 0, 10])
.range([1, 20, 1]);

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
      let strichfarbe = map(x, 0, width, -10, 10);
      let strichdicke = map(x, 0, width, -10, 10);

      stroke(strokeScale(strichfarbe));
      strokeWeight(strokeWheigtScale(strichdicke));
      line(x + abstand + tile, y, x + abstand, y + tile);
    }
  }
}

function keyPressed(){
  if(key === 's'){
    saveCanvas('tree', png);
  }
}
