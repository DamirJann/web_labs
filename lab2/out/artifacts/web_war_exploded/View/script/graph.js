// get graph
function drawGraph(r) {

    var parentElement = document.getElementById("graph").parentElement;
    var canvas = document.getElementById("graph").parentElement;
    canvas.remove();
    parentElement.insertAdjacentHTML('<canvas width="440px" height="440px" id="graph"></canvas>');
    canvas = document.getElementById("graph");

    // берём инструмен для рисования
    var ctx = canvas.getContext("2d");

    // get witdth, height
    var canvas_width = canvas.width;
    var canvas_height = canvas.height;

    //рисуем координатную плоскость

    ctx.moveTo(-canvas_width/2, 0);
    ctx.lineTo(canvas_width/2, 0);
    ctx.moveTo(0, -canvas_height/2);
    ctx.lineTo(0,  canvas_height/2);


    //рисуем отметки
    var step = 40;
    ctx.font = '12px Arial';
    ctx.textAlign = 'center';
    for (let i = -5; i <= 5; i++) {
        if (i === 0) {
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
        if (i !== 0) {
            ctx.moveTo(-3, -i * step);
            ctx.lineTo(3, -i * step);
            ctx.fillText(i, -10, -i * step + 5);
        }
    }
    ctx.fillText("y", 10, -210);
    ctx.strokeStyle = ("#000000");
    ctx.stroke();

//рисуем график
    ctx.beginPath();
    r = r * step;

    ctx.moveTo(r / 2, 0);
    ctx.lineTo(r, 0);
    ctx.lineTo(r, -r / 2);
    ctx.lineTo(0, -r / 2);
    ctx.lineTo(0, -r);
    ctx.lineTo(-r / 2, 0);
    ctx.lineTo(0, 0);
    ctx.lineTo(0, r / 2);
    ctx.arc(0, 0, r / 2, -Math.PI * 3 / 2, Math.PI * 2, true);
    ctx.fillStyle = "rgba(228, 224, 228, 0.5)";
    ctx.fill();
    ctx.strokeStyle = "rgba(228, 224, 228, 0.5)";
    ctx.stroke();
    ctx.fillStyle = "#FF0000";
    ctx.closePath();

}
function drawPointByClick(event){
    var canvas = document.getElementById("graph");
    // берём инструмен для рисования
    var ctx = canvas.getContext("2d");
    var canvas_width = canvas.width;
    var canvas_height = canvas.height;
    let data = {"X": (event.layerX-canvas_width/2) / 40,
                "Y": -(event.layerY-canvas_height/2) / 40,
                "R": $("#rValue")[0].value
    };

    if (isValidInput(data)){
        // make request do add .
        let request = $.ajax({
            type: "POST",
            url: 'http://localhost:8080/start',
            data: data,
            crossDomain: true,
        });
        request.done(function (response, textStatus, jqXHR) {
            $("#table").html(response);
            drawOldPoints();
        });
    }

}

function drawPoint(x, y, r, color){
    var canvas = document.getElementById("graph");
    var ctx = canvas.getContext("2d");
    ctx.beginPath();
    ctx.arc(x, -y, 3, 0, Math.PI * 2, true);
    ctx.fillStyle = color;
    ctx.fill();
    ctx.stroke();
    ctx.closePath();

}

function drawOldPoints(){
    let step = 40;

    let records = $("#table tr");
    for (let i = 1; i < records.length; i++){
        let x = records[i].children[0].innerHTML;
        let y = records[i].children[1].innerHTML;
        let r = records[i].children[2].innerHTML;
        let color = records[i].children[3].innerHTML === "YES" ?
                    "#4bc573":"#f33b10";
        drawPoint(x*step, y*step, r, color);
    }
}

function refreshGraph(){
    var canvas = document.getElementById("graph");
    const context = canvas.getContext('2d');
    context.clearRect(-canvas.width, -canvas.height, canvas.width*2, canvas.height*2);
    drawGraph($("#rValue")[0].value)
}

var canvas = document.getElementById("graph");
var ctx = canvas.getContext("2d");
ctx.translate(canvas.width/2, canvas.height/2);
drawGraph($("#rValue")[0].value);
drawOldPoints();


// листенеры
document.getElementById("graph").addEventListener("click", drawPointByClick);
document.getElementById("rValue").addEventListener("change", refreshGraph);
