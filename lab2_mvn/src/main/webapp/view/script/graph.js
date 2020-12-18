// get graph
function drawGraph(r) {
    let canvas = document.getElementById("graph");
    // берём инструмен для рисования
    let ctx = canvas.getContext("2d");
    ctx.save();
    ctx.translate(canvas.width / 2, canvas.height / 2);
    ctx.clearRect(-canvas.width, -canvas.height, canvas.width * 2, canvas.height * 2);
    // get witdth, height
    let canvas_width = canvas.width;
    let canvas_height = canvas.height;

    //рисуем координатную плоскость
    ctx.beginPath();
    ctx.moveTo(-canvas_width / 2, 0);
    ctx.lineTo(canvas_width / 2, 0);
    ctx.moveTo(0, -canvas_height / 2);
    ctx.lineTo(0, canvas_height / 2);


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
    ctx.strokeStyle = "#000000";

    ctx.stroke();
    ctx.closePath();
    //рисуем график
    ctx.beginPath();
    r = r * step;

    // ctx.strokeStyle = "rgba(243,59,16,0.5)";
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
    ctx.strokeStyle = "rgba(0,0,0,0.82)";
    ctx.stroke();

    ctx.closePath();

    ctx.restore();
}

function drawPointByClick(event) {
    let canvas = document.getElementById("graph");
    // берём инструмен для рисования
    let ctx = canvas.getContext("2d");
    let canvas_width = canvas.width;
    let canvas_height = canvas.height;
    let data = {
        "X": (event.layerX - canvas_width / 2) / 40,
        "Y": -(event.layerY - canvas_height / 2) / 40,
        "R": $('input[name=R]:checked').val()
    };

    if (isValidInput(data)) {
        // make request do add .
        let request = $.ajax({
            type: "POST",
            url: '/start',
            data: data,
            crossDomain: true,
        });
        request.done(function (response, textStatus, jqXHR) {
            $("#table").html(response);
            drawOldPoints();
        });
    }

}

function drawPoint(x, y, r, color) {

    let canvas = document.getElementById("graph");
    let ctx = canvas.getContext("2d");
    ctx.save();
    ctx.translate(canvas.width / 2, canvas.height / 2);
    ctx.beginPath();
    ctx.arc(x, -y, 3, 0, Math.PI * 2, true);
    ctx.fillStyle = color;
    ctx.fill();
    ctx.stroke();
    ctx.closePath();
    ctx.restore();

}

function drawOldPoints() {
    let step = 40;

    let records = $("#table tr");
    for (let i = 1; i < records.length; i++) {
        let x = records[i].children[0].innerHTML;
        let y = records[i].children[1].innerHTML;
        let r = records[i].children[2].innerHTML;
        let color = records[i].children[3].innerHTML === "YES" ?
            "#4bc573" : "#f33b10";
        drawPoint(x * step, y * step, r, color);
    }
}

function refreshGraph() {
    drawGraph($('input[name=R]:checked').val());
    drawOldPoints();
}



drawGraph($('input[name=R]:checked').val());
drawOldPoints();

// листенеры
document.getElementById("graph").addEventListener("click", drawPointByClick);

// document.getElement("rValue")addEventListener("change", refreshGraph);
