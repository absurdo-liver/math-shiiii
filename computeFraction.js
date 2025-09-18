function toFraction(n, showAllTrue) {
  let denominator = 1000000000;
  if(!Array.isArray(n)){
    if(!Number.isInteger(n)){
      for(i = 1; i < denominator; i++){
        let num = n;
        num *= i;
        let check = Number.isInteger(num);
        if(check){
          console.log(n + ' = ' + num + "/" + i);
          break;
        } else {
          if(showAllTrue){
            num = num.toFixed(1);
            console.log(n + ' != ' + num + "/" + i);
          }
        }
      }
    } else {
      console.log(n);
    }
  } else {
    for(let t = 0; t < n.length; t++){
      let m = n[t];
      if(!Number.isInteger(m)){
        for(i = 1; i < denominator; i++){
          let num = m;
          num *= i;
          let check = Number.isInteger(num);
          if(check){
            console.log(m + ' = ' + num + "/" + i);
            break;
          } else {
            if(showAllTrue){
              num = num.toFixed(1);
              console.log(m + ' != ' + num + "/" + i);
            }
          }
        }
      } else {
        console.log(m);
      }
    }
  }
}

//toFraction(7.8, true);
//([2.3,7.8,9.9], false);
//computes up to 1,000,000,000 as denominator
toFraction(946384/99999999);


