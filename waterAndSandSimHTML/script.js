let width, height;
let scene;
let running = false;
let loopId = null;
let paintType = "o"; // sand by default
const outputField = document.getElementById('outputField');
const inputField = document.getElementById('inputField');

// Set console dimensions. You can adjust these values.
const CONSOLE_WIDTH = 80;
const CONSOLE_HEIGHT = 40;

// Command history implementation
const commandHistory = [];
let historyIndex = -1;

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
    let output = "";
    for (let row of scene) {
        output += row.join("");
        output += "\n";
    }
    outputField.textContent = output;
}

function updateScene(scene, width, height) {
    let newScene = createScene(width, height, ".");

    const xOrder = Array.from({ length: width }, (_, i) => i);
    const yOrder = Array.from({ length: height }, (_, i) => i);
    yOrder.reverse();
    
    for (let y of yOrder) {
        const shuffledX = [...xOrder].sort(() => Math.random() - 0.5);
        for (let x of shuffledX) {
            let cell = scene[y][x];
            if (cell === "o") updateSand(scene, newScene, x, y);
            else if (cell === "~") updateWater(scene, newScene, x, y);
            else if (cell !== ".") {
                if (newScene[y][x] === ".") {
                    newScene[y][x] = scene[y][x];
                }
            }
        }
    }

    return newScene;
}

function updateSand(scene, newScene, x, y) {
    if (y + 1 < height && (scene[y + 1][x] === "." || scene[y + 1][x] === "~")) {
        // Prioritize falling straight down
        if (newScene[y + 1][x] === ".") {
            newScene[y + 1][x] = "o";
            return;
        }
    }
    
    const options = [];
    const dir = Math.random() < 0.5 ? [-1, 1] : [1, -1];

    for (const dx of dir) {
        if (y + 1 < height && x + dx >= 0 && x + dx < width &&
            (scene[y + 1][x + dx] === "." || scene[y + 1][x + dx] === "~")) {
            options.push(dx);
        }
    }

    if (options.length > 0) {
        const dx = options[Math.floor(Math.random() * options.length)];
        if (newScene[y + 1][x + dx] === ".") {
            newScene[y + 1][x + dx] = "o";
            return;
        }
    }

    // Sand settled, copy it over
    if (newScene[y][x] === ".") {
        newScene[y][x] = "o";
    }
}

function updateWater(scene, newScene, x, y) {
    // Check below
    if (y + 1 < height && scene[y + 1][x] === "." && newScene[y + 1][x] === ".") {
        newScene[y + 1][x] = "~";
        return;
    }

    // Check below-left or below-right
    const belowOptions = [];
    const dir = Math.random() < 0.5 ? [-1, 1] : [1, -1];
    for (const dx of dir) {
        if (y + 1 < height && x + dx >= 0 && x + dx < width && scene[y + 1][x + dx] === "." && newScene[y + 1][x + dx] === ".") {
            belowOptions.push(dx);
        }
    }
    if (belowOptions.length > 0) {
        const dx = belowOptions[Math.floor(Math.random() * belowOptions.length)];
        newScene[y + 1][x + dx] = "~";
        return;
    }

    // Check left or right for spreading
    const sideOptions = [];
    for (const dx of dir) {
        if (x + dx >= 0 && x + dx < width && scene[y][x + dx] === "." && newScene[y][x + dx] === ".") {
            sideOptions.push(dx);
        }
    }
    if (sideOptions.length > 0) {
        const dx = sideOptions[Math.floor(Math.random() * sideOptions.length)];
        newScene[y][x + dx] = "~";
        return;
    }

    // Water settled, copy it over to prevent it from disappearing
    if (newScene[y][x] === ".") {
        newScene[y][x] = "~";
    }
}

function loop() {
    if (!running) return;
    scene = updateScene(scene, width, height);
    drawScene(scene);
    loopId = setTimeout(loop, 80);
}

function start() {
    if (!running) {
        running = true;
        addOutput("Simulation started.");
        loop();
    }
}

function pause() {
    if (running) {
        running = false;
        clearTimeout(loopId);
        addOutput("Simulation paused.");
    }
}

function reset() {
    running = false;
    clearTimeout(loopId);
    initScene();
    addOutput("Simulation reset. Call `start()` to begin again.");
}

function initScene() {
    width = CONSOLE_WIDTH;
    height = CONSOLE_HEIGHT;
    scene = createScene(width, height);
    drawScene(scene);
}

function sand() {
    paintType = "o";
    addOutput("Painting with sand ('o'). Use `place(x, y)`.");
}

function water() {
    paintType = "~";
    addOutput("Painting with water ('~'). Use `place(x, y)`.");
}

function place(x, y) {
    x = parseInt(x);
    y = parseInt(y);
    if (x >= 0 && x < width && y >= 0 && y < height) {
        scene[y][x] = paintType;
        drawScene(scene);
        addOutput(`Placed ${paintType} at (${x}, ${y}).`);
    } else {
        addOutput(`Coordinates out of bounds. Must be between (0,0) and (${width - 1},${height - 1}).`);
    }
}

function draw(x1, y1, x2, y2) {
    const xStart = Math.max(0, Math.min(parseInt(x1), parseInt(x2)));
    const xEnd = Math.min(width - 1, Math.max(parseInt(x1), parseInt(x2)));
    const yStart = Math.max(0, Math.min(parseInt(y1), parseInt(y2)));
    const yEnd = Math.min(height - 1, Math.max(parseInt(y1), parseInt(y2)));

    for (let y = yStart; y <= yEnd; y++) {
        for (let x = xStart; x <= xEnd; x++) {
            scene[y][x] = paintType;
        }
    }
    drawScene(scene);
    addOutput(`Drew a rectangle of ${paintType} from (${xStart},${yStart}) to (${xEnd},${yEnd}).`);
}

function help() {
    const helpText = `
Available commands:
  start()           : Begin the simulation.
  pause()           : Pause the simulation.
  reset()           : Reset the scene to empty.
  sand()            : Select sand ('o') as the paint type.
  water()           : Select water ('~') as the paint type.
  place(x, y)       : Place a single particle at coordinates (x, y).
  draw(x1, y1, x2, y2) : Draw a rectangle of particles.
  help()            : Show this help message.
`;
    addOutput(helpText);
}

function addOutput(message) {
    outputField.textContent += "\n> " + message;
    outputField.scrollTop = outputField.scrollHeight;
}

function handleInput(event) {
    if (event.key === 'Enter') {
        const command = inputField.value.trim();
        if (command) {
            commandHistory.push(command);
            historyIndex = commandHistory.length;
            addOutput(`> ${command}`);
            try {
                eval(command);
            } catch (e) {
                addOutput(`Error: ${e.message}`);
            }
        }
        inputField.value = "";
    } else if(event.key === 'ArrowUp'){
        if (historyIndex > 0) {
            historyIndex--;
            inputField.value = commandHistory[historyIndex];
            event.preventDefault();
        }
    } else if (event.key === 'ArrowDown') {
        if (historyIndex < commandHistory.length - 1) {
            historyIndex++;
            inputField.value = commandHistory[historyIndex];
        } else if (historyIndex === commandHistory.length - 1) {
            historyIndex++;
            inputField.value = "";
        }
        event.preventDefault();
    }
}

inputField.removeEventListener('keypress', handleInput);
inputField.addEventListener('keydown', handleInput);

initScene();
addOutput("Welcome to the console falling sand simulation!");
addOutput("Type `help()` for a list of commands.");
