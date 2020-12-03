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
var step = canvas_width/10;
move(-canvas_width/2, 0);
for (let i = -5; i <= 5; i++) {
    ctx.lineTo()
}

ctx.strokeStyle = ("#000000");

ctx.stroke();