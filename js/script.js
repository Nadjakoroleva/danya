let z;
let x;
let y;
let r,g,b;

function setup() {
  createCanvas(1000, 1000);
  x = random(10, 1000);
  y = random(10, 1000);
  z = random(10,100);
  r = random(0,100);
  g = random(0,100);
  b = random(0,100);
  
 background(29, 60, 180);
}
function draw() {
fill(r,g,b);
  ellipse(x,y,z,z);
x = random(10, 1000);
  y = random(10, 1000);
  z = random(10,100);
  r = random(0,100);
  g = random(0,100);
  b = random(0,100);

}
