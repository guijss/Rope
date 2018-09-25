let p = [];
let s = [];
let g;
let dragging;

function setup() {
  createCanvas(windowWidth,windowHeight);
  for (var i = 0; i < 50; i++) {
      p[i] = new particle(400+(10*i),50,2);
      if (i>0) {
        s[i] = new spring(p[i-1], p[i], 10, 0.01);
      }
    }
  g = createVector(0, 5);
}

function draw() {
  background(50);
  for (var i = 0; i < p.length; i++) {
    p[i].applyForce(g);
    if (i>0) {
      s[i].springIt();
    }
    p[0].lock();
    p[i].update();
    if (i>0) {
      s[i].fixLength(2,10);
      s[i].show();
    }
    p[0].drag();
    p[0].show();
  }
}

function mousePressed() {
  //for (var j = 0; j < p.length; j++) {
    p[0].clicked();
  //}
}

function mouseReleased() {
  //for (var j = 0; j < p.length; j++) {
    p[0].stopDragging();
  //}
}
