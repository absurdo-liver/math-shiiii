function trigAnglesAddSub(trigFunc, opperator, a, b) {
    if (trigFunc === 'sin') {
        if (opperator === '+') {
            console.log((Math.sin(a) + Math.sin(b)) / (1 - (Math.sin(a) * Math.sin(b))));
        } else if (opperator === '-') {
            console.log((Math.sin(a) - Math.sin(b)) / (1 + (Math.sin(a) * Math.sin(b))));
        } else {
            console.error('invalid opperator');
        }
    } else if (trigFunc === 'cos') {
        if (opperator === '+') {
            console.log((Math.cos(a) + Math.cos(b)) / (1 - (Math.cos(a) * Math.cos(b))));
        } else if (opperator === '-') {
            console.log((Math.cos(a) - Math.cos(b)) / (1 + (Math.cos(a) * Math.cos(b))));
        } else {
            console.error('invalid opperator');
        }
    } else if (trigFunc === 'tan') {
        if (opperator === '+') {
            console.log((Math.tan(a) + Math.tan(b)) / (1 - (Math.tan(a) * Math.tan(b))));
        } else if (opperator === '-') {
            console.log((Math.tan(a) - Math.tan(b)) / (1 + (Math.tan(a) * Math.tan(b))));
        } else {
            console.error('invalid opperator');
        }
    } else {
        console.error('invalid trigonometric function');
    }
}

const pi = Math.PI;
const trig = 'sin';
const opp = '+';
const a = pi / 3;
const b = (3 * pi) / 4;
trigAnglesAddSub(trig, opp, a, b);
