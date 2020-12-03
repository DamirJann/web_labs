var grid_size = 25;

// get graph
var canvas = document.getElementById("graph");
// берём инструмен для рисования
var ctx = canvas.getContext("2d");

// get witdth, height
var canvas_width = canvas.width;
var canvas_height = canvas.height;

//рисуем координатную плоскость
ctx.moveTo(0, canvas_height/2);
ctx.lineTo(canvas_width, canvas_height/2);
ctx.moveTo(canvas_width/2, 0);
ctx.lineTo(canvas_width/2, canvas_height);

ctx.translate(canvas_width/2, canvas_height/2);

//рисуем отметки
var step = 40;
ctx.font = '12px Arial';
ctx.textAlign = 'center';
for (let i = -5; i <= 5; i++) {
    if (i === 0){
        ctx.fillText(i, i * step + 5, 12);
        continue;
    } else {
        ctx.moveTo(i * step, -3);
        ctx.lineTo(i * step, 3);
        ctx.fillText(i, i * step, 14);
    }
}
ctx.fillText("x", 215, 14);
for (let i = -5; i <= 5; i++) {
    if (i !== 0){
        ctx.moveTo(-3, -i * step);
        ctx.lineTo(3, -i * step);
        ctx.fillText(i, -10, -i * step+5);
    }
}
ctx.fillText("y", 10, -210);
ctx.strokeStyle = ("#000000");
ctx.stroke();

//рисуем график
ctx.beginPath();
var x = 3 * step;
var y = 5 * step;
var r = 4 * step;

ctx.moveTo(r/2, 0);
ctx.lineTo(r, 0);
ctx.lineTo(r, -r/2);
ctx.lineTo(0, -r/2);
ctx.lineTo(0, -r);
ctx.lineTo(-r/2, 0);
ctx.lineTo(0, 0);
ctx.lineTo(0, r/2);
ctx.arc(0, 0, r/2, - Math.PI * 3 / 2,  Math.PI * 2, true);
ctx.fillStyle = "rgba(228, 224, 228, 0.5)";
ctx.fill();
ctx.strokeStyle = "rgba(228, 224, 228, 0.5)";
ctx.stroke();


ctx.fillStyle = "#FF0000";