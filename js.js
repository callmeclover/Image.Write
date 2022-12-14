const canvas = document.getElementById('canvas')
const color = document.getElementById('color')
const ctx = canvas.getContext('2d')
    function penTool(e) {
        const color = document.getElementById('color')
        const {x, y} = canvas.getBoundingClientRect();
        const newX = e.clientX - x;
        const newY = e.clientY - y;

        ctx.beginPath();
        ctx.lineWidth = 5;
        ctx.moveTo(lastX, lastY);
        ctx.lineTo(newX, newY);
        ctx.strokeStyle = color.value;
        ctx.stroke();
        ctx.closePath();

        lastX = newX;
        lastY = newY;
    }
canvas.onmousedown = function lastcoord(e) {
            const {x, y} = canvas.getBoundingClientRect();
        lastX = e.clientX - x;
        lastY = e.clientY - y;
}
canvas.onmousemove = function draw(e) {
        const color = document.getElementById('color')
        if (e.buttons !== 1) return; // left button is not pushed yet
        penTool(e);
}
