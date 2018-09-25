class spring {
  constructor(base, obj, rest, k) {
    this.base = base;
    this.obj = obj;
    this.rest = rest;
    this.k = k;
  }

  springIt() {
    let f = p5.Vector.sub(this.obj.pos, this.base.pos);
    let d = f.mag();
    let x = d-this.rest;
    f.normalize();
    f.mult(-this.k*x);
    this.obj.applyForce(f);
    f.mult(-1);
    this.base.applyForce(f);
  }

  show() {
    stroke(255);
    strokeWeight(4);
    line(this.base.pos.x, this.base.pos.y, this.obj.pos.x, this.obj.pos.y)
  }

  fixLength(min, max) {
    let springDir = p5.Vector.sub(this.obj.pos, this.base.pos);
    let currL = springDir.mag();

    if (currL<min) {
      springDir.normalize();
      springDir.mult(min);
      this.obj.pos = p5.Vector.add(this.base.pos, springDir);
      this.obj.vel.mult(0);
    } else if (currL>max) {
      springDir.normalize();
      springDir.mult(max);
      this.obj.pos = p5.Vector.add(this.base.pos, springDir);
      this.obj.vel.mult(0);
    }
  }
}
