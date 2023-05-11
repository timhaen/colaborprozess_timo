let img;
let pixels;

function preload() {
  img = loadImage("cindy-small.jpg");
}

function setup() {
  createCanvas(img.width, img.height);
  image(img, 0, 0);
  pixelDensity(1);
}

function draw() {
  background(220);
  //image(img, 0, 0);
  img.loadPixels();

  if (img.pixels.length / 2)
    /*     let pix = img.pixels[23];
    let b = brightness(pix);
    console.log(b); */
    //anzal pixel in der Breite = 4*width = 2048
    console.log(img.pixels.x);

    for (let i = 0; i < img.pixels.length; i += 4) {
      if (i < img.pixels.length / 2) {
        img.pixels[i + 0] = 255;
      } else {
        img.pixels[i + 0] = 0;
      };

      if (img.pixels.x < 1024) {
        img.pixels[i + 2] = 255;
      } else {
        img.pixels[i + 2] = 120;
      };
      };

  img.updatePixels();

  image(img, 0, 0);

  // loadPixels https://p5js.org/reference/#/p5.Image/loadPixels
  // loop through Pixel Array
  // change Pixels in some way, for exp. swap red and blue channel
  // Color data is stored [r,g,b,a]
  // updatePixels https://p5js.org/reference/#/p5.Image/updatePixels
  // display updated image https://p5js.org/reference/#/p5/image
}

function keyPressed() {
  if (key === "s") {
    saveCanvas("bild", "png");
  }
}
