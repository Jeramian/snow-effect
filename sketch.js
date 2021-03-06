let snow = [];
let gravity;

function setup() {
  createCanvas(windowWidth, windowHeight);
  gravity = createVector(0, 0.03);
}

function draw() {
  background(0);
  snow.push(new snowFlake());
  
  fill(255,0,0)
  textSize(60);
  text('Lauren S', height/w, width/2);

  for (flake of snow) {
    flake.applyForce(gravity);
    flake.update();
    flake.render();
  }


  for (let i = snow.length - 1; i >= 0; i--) {
    if (snow[i].offScreen()) {
      snow.splice(i, 1);
    }
  }

}
