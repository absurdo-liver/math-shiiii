let width, height;
let scene;
let running = false;
let loopId = null;
let paintType = "o"; // sand by default

// Set console dimensions. You can adjust these values.
const CONSOLE_WIDTH = 80;
const CONSOLE_HEIGHT = 40;

function createScene(width, height, fill = ".") {
  let scene = [];
  for (let y = 0; y < height; y++) {
    let row = [];
    for (let x = 0; x < width; x++) {
      row.push(fill);
    }
    scene.push(row);
  }
  return scene;
}

function drawScene(scene) {
  // Clear the console and redraw the entire scene
  console.clear();
  let output = "";
  for (let row of scene) {
    output += row.join("");
    output += "\n";
  }
  console.log(output);
}

function updateScene(scene, width, height) {
  for (let y = height - 2; y >= 0; y--) {
    for (let x = 0; x < width; x++) {
      let cell = scene[y][x];
      if (cell === "o") updateSand(scene, x, y);
      else if (cell === "~") updateWater(scene, x, y);
    }
  }
}

function updateSand(scene, x, y) {
  if (y + 1 >= height) return;
  if (scene[y + 1][x] === ".") {
    scene[y + 1][x] = "o";
    scene[y][x] = ".";
  } else if (scene[y + 1][x] === "~") {
    scene[y + 1][x] = "o";
    scene[y][x] = "~";
  } else {
    let options = [];
    if (x > 0 && (scene[y + 1][x - 1] === "." || scene[y + 1][x - 1] === "~")) options.push(-1);
    if (x < width - 1 && (scene[y + 1][x + 1] === "." || scene[y + 1][x + 1] === "~")) options.push(1);
    if (options.length > 0) {
      let dx = options[Math.floor(Math.random() * options.length)];
      if (scene[y + 1][x + dx] === "~") {
        scene[y + 1][x + dx] = "o";
        scene[y][x] = "~";
      } else {
        scene[y + 1][x + dx] = "o";
        scene[y][x] = ".";
      }
    }
  }
}

function updateWater(scene, x, y) {
  if (y + 1 >= height) return;
  if (scene[y + 1][x] === ".") {
    scene[y + 1][x] = "~";
    scene[y][x] = ".";
  } else {
    let options = [];
    if (y + 1 < height && x > 0 && scene[y + 1][x - 1] === ".") options.push([-1, 1]);
    if (y + 1 < height && x < width - 1 && scene[y + 1][x + 1] === ".") options.push([1, 1]);
    if (x > 0 && scene[y][x - 1] === ".") options.push([-1, 0]);
    if (x < width - 1 && scene[y][x + 1] === ".") options.push([1, 0]);
    if (options.length > 0) {
      let [dx, dy] = options[Math.floor(Math.random() * options.length)];
      scene[y + dy][x + dx] = "~";
      scene[y][x] = ".";
    }
  }
}

function loop() {
  if (!running) return;
  updateScene(scene, width, height);
  drawScene(scene);
  loopId = setTimeout(loop, 80);
}

function start() {
  if (!running) {
    running = true;
    console.log("Simulation started.");
    loop();
  }
}

function reset() {
  running = false;
  clearTimeout(loopId);
  initScene();
  console.log("Simulation reset. Call start() to begin again.");
}

function initScene() {
  width = CONSOLE_WIDTH;
  height = CONSOLE_HEIGHT;
  scene = createScene(width, height);
  drawScene(scene);
}

// User interaction functions exposed to the console
function sand() {
  paintType = "o";
  console.log("Painting with sand ('o'). Use `place(x, y)`.");
}

function water() {
  paintType = "~";
  console.log("Painting with water ('~'). Use `place(x, y)`.");
}

function place(x, y) {
  if (x >= 0 && x < width && y >= 0 && y < height) {
    scene[y][x] = paintType;
    drawScene(scene);
  } else {
    console.log(`Coordinates out of bounds. Must be between (0,0) and (${width - 1},${height - 1}).`);
  }
}

// Initial setup
initScene();
console.log("Welcome to the console falling sand simulation!");
console.log("Type `start()` to begin the simulation.");
console.log("To add elements, use `sand()` or `water()` to select, then `place(x, y)`.");
console.log("Other commands: `reset()`.");
