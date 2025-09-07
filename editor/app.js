const canvas = document.getElementById('canvas');
const code = document.getElementById('code');
const ex = document.getElementById('export');
const ctx = canvas.getContext('2d');
const wrap = canvas.parentElement;

let drawing = false;
let showGrid = true;
let cursor = { x: 0, y: 0 };
let lines = [];
let offsetX = 0;
let offsetY = 0;
let prevPos = { x: 0, y: 0};

function resizeCanvas() {
    // set actual pixel size to match displayed size for crisp rendering
    const rect = wrap.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;
    canvas.width = Math.floor(rect.width * dpr);
    canvas.height = Math.floor(rect.height * dpr);
    canvas.style.width = rect.width + 'px';
    canvas.style.height = rect.height + 'px';
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    redraw();
}

function redraw() {
    // optional: draw grid if enabled
    if (showGrid) { drawGrid(); }
}

function drawGrid() {
    const w = canvas.width / (window.devicePixelRatio || 1);
    const h = canvas.height / (window.devicePixelRatio || 1);
    const gap = 25;
    ctx.save();
    ctx.clearRect(0, 0, w, h);
    ctx.beginPath();
    ctx.lineWidth = 0.5;
    ctx.strokeStyle = 'rgba(0,0,0,0.2)';

    let startX = -1 * (offsetX % 25);
    let startY = -1 * (offsetY % 25);

    for (let x = startX; x <= startX + w; x += gap) {
        ctx.moveTo(x, startY);
        ctx.lineTo(x, startY + h);
        if ((x + offsetX) % 100 == 0) {
            ctx.fillText(x + offsetX, x, 10);
        }
    }

    for (let y = startY; y <= startY + h; y += gap) {
        ctx.moveTo(startX, y);
        ctx.lineTo(startX + w, y);
        if ((y + offsetY) % 100 == 0) {
            ctx.fillText(y + offsetY, 0, y);
        }
    }

    ctx.stroke();
    ctx.restore();
}

function drawLine(line) {
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    ctx.beginPath();
    ctx.moveTo(line.x1 - offsetX, line.y1 - offsetY);
    ctx.lineTo(line.x2 - offsetX, line.y2 - offsetY);
    ctx.stroke();
}

// pointer helpers
function getPos(e) {
    const rect = canvas.getBoundingClientRect();
    const clientX = (e.touches ? e.touches[0].clientX : e.clientX);
    const clientY = (e.touches ? e.touches[0].clientY : e.clientY);
    return { x: clientX - rect.left, y: clientY - rect.top };
}

function codeChanged(ev) {
    console.log(ev);
}

code.addEventListener('input', (ev) => {
    let value = ev.target.value;
    try {
        lines = JSON.parse(value);
        update();
    } catch {}
});

// events
canvas.addEventListener('mousedown', (ev) => {
    if (!drawing) {
        lines.push({ x1: cursor.x, y1: cursor.y, x2: cursor.x, y2: cursor.y });
    }
    drawing = true;
});
//canvas.addEventListener('touchstart', (ev) => { drawing = true; last = getPos(ev); ev.preventDefault(); }, { passive: false });

window.addEventListener('mousemove', (ev) => {
    update(ev);
});

function update(ev = null) {
    redraw();

    if (ev) {
        // Move cursor.
        const p = getPos(ev);
        if (ev.ctrlKey) {
            let diffX = prevPos.x - p.x;
            let diffY = prevPos.y - p.y;
            offsetX += diffX;
            offsetY += diffY;
        }
        prevPos.x = p.x;
        prevPos.y = p.y;
    
        p.x += offsetX;
        p.y += offsetY;
    
        let snapX = p.x - (p.x % 25);
        cursor.x = Math.abs(snapX - p.x) < Math.abs(snapX + 25 - p.x) ? snapX : snapX + 25;
    
        let snapY = p.y - (p.y % 25);
        cursor.y = Math.abs(snapY - p.y) < Math.abs(snapY + 25 - p.y) ? snapY : snapY + 25;
    }

    drawFilledCircle(ctx, cursor.x - offsetX, cursor.y - offsetY, 5);

    if (lines.length > 0 && drawing) {
        let lastLine = lines[lines.length - 1];
        lastLine.x2 = cursor.x;
        lastLine.y2 = cursor.y;
    }

    for (let line of lines) {
        drawLine(line);
    }

    // Change code.
    code.value = JSON.stringify(lines);
}

window.addEventListener('mouseup', () => {
    drawing = false;
    if (lines.length > 0) {
        let lastLine = lines[lines.length - 1];
        if (lastLine.x1 == lastLine.x2 && lastLine.y1 == lastLine.y2) {
            lines.pop();
        }
    }
});
window.addEventListener('touchend', () => {
    drawing = false;
});

// keep canvas sized correctly
window.addEventListener('resize', resizeCanvas);
// initial
resizeCanvas();

function getDistance(x1, y1, x2, y2) {
    const dx = x2 - x1;
    const dy = y2 - y1;
    return Math.sqrt(dx * dx + dy * dy);
}

function drawFilledCircle(ctx, x, y, radius, color = "black") {
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2); // Full circle
    ctx.fill();
}

function serializeLevel(name) {
    let result = "function " + name + "()\n\tlocal level = {}\n";
    for (let line of lines) {
        result += "\ttable.insert(level, " + "{ x1 = " + line.x1 + ", y1 = " + line.y1 + ", x2 = " + line.x2 + ", y2 = " + line.y2 + " })\n"
    }
    result += "\treturn { ground = level, hole = { x = 0, y = 0 } }\n"
    result += "end\n\n"
    result += "--" + JSON.stringify(lines);
    return result
}

function getCode() {
    ex.classList.toggle("hidden");
    ex.innerHTML = "<pre>" + serializeLevel("name") + "</pre>";
}
