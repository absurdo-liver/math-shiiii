var result = 0;

function integrate(root1, root2, deltaX, expVar){
  let x1 = root1;
  let x2 = root2;
  let delta = (root2 - root1) / deltaX;
  for(let i = x1; i < x2; i += delta){
    let output = (((i-x1)*(i-x2))*expVar)*delta;
    result += output;
  }
  console.log(result);
}

var d = 10;

// f(x) = -0.5(x--2.5)(x-2.5)
integrate(-2.5, 2.5, d, -0.5);
// for d = 10 || 10.4166666667
// ~10.3125
// for d = 100
// ~10.415624999999993
// for d = 1000
// ~10.4166562500001


// f(x) = -0.25(x+6)(x-10)
integrate(-6, 10, d, -0.25);
// for d = 10 || 170.666666667
// ~179.27249999999998
// for d = 100
// ~181.06522499999983
// for d = 1000
// ~181.0831522500002
