class particle {
  constructor(x,y,m) {
    this.mass = m;
    this.pos = createVector(x, y);
    this.vel = createVector(0, 0);
    this.acc = createVector(0, 0);
    this.dragging = false;
  }

  show() {
    let dia = 50;
    noStroke();
    fill(255,0,0);
    ellipse(this.pos.x, this.pos.y, dia);
    noStroke();
    fill(255);
    text('Drag', this.pos.x-14, this.pos.y-6);
    text('Me!', this.pos.x-10, this.pos.y+12);
  }

  update() {
    let damper = 0.98;
    //this.vel.limit(10);
    this.vel.add(this.acc);
    this.vel.mult(damper);
    this.pos.add(this.vel);
    this.acc.mult(0);
  }

  applyForce(force) {
    let af = force.copy();
    af.mult(this.mass);
    //console.log(f);
    this.acc.add(af);
  }

  lock() {
    this.vel = createVector(0, 0);
    this.acc = createVector(0, 0);
  }

  clicked() {
    if(dist(mouseX,mouseY,this.pos.x,this.pos.y)<=25) {
      this.dragging = true;
    }
  }

  stopDragging() {
    this.dragging = false;
  }

  drag() {
    if (this.dragging) {
      this.pos.x = mouseX;
      this.pos.y = mouseY;
    }
  }
}
