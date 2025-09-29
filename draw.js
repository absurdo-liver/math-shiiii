let whitespace = `
`;
// empty = ◎
// filled = ◉
let layer1 = ['◎','◎','◎','◎','◎','◎','◎','◎','◎','◎','◎','◎'];
let layer2 = ['◎','◎','◎','◎','◎','◎','◎','◎','◎','◎','◎','◎'];
let layer3 = ['◎','◎','◎','◎','◎','◎','◎','◎','◎','◎','◎','◎'];
let layer4 = ['◎','◎','◎','◎','◎','◎','◎','◎','◎','◎','◎','◎'];
let layer5 = ['◎','◎','◎','◎','◎','◎','◎','◎','◎','◎','◎','◎'];
let scene = [layer1,layer2,layer3,layer4,layer5];


function drawPoint(x,y,data){
  if(y < 1 || y > 5){return}
  if(x < 1 || x > 12){return}
  
  //locate & draw point
  scene[y-1][x-1] = data;
}

function renderer(){
  let sceneOut = [layer1.join(''),layer2.join(''),layer3.join(''),layer4.join(''),layer5.join('')];
  console.log(sceneOut.join(whitespace));
  console.log();
}

renderer();

for (let i = 1; i <=12 ; i+=2){
  drawPoint(i,1,'◉');
  drawPoint(i,3,'◉');
  drawPoint(i,5,'◉');
  drawPoint(i+1,2,'◉');
  drawPoint(i+1,4,'◉');
}

renderer();
