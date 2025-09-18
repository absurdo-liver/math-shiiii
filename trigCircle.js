function circleCoordinate(n){
  if (!Array.isArray(n)){
    let x = Math.cos(n);
    let y = Math.sin(n);
    console.log(`(${x}, ${y})`);
  } else {
    for (let i = 0; i < n.length; i++){
      let x = Math.cos(n[i]);
      let y = Math.sin(n[i]);
      x *= 1000;
      y *= 1000;
      x = Math.round(x);
      y = Math.round(y);
      x /= 1000;
      y /= 1000;
      console.log(`(${x}, ${y})`);
    }
  }
}

var pi = Math.PI;
var a = [0, pi/6, pi/4, pi/3, pi/2];

circleCoordinate(a);

circleCoordinate(2*pi);
