
function dropTable(){
    let nodes = $("#table tr");
    for (let i = nodes.length-1; i > 0; i--){
        nodes[i].remove();

    }
    document.cookie+= "table=end;max-age=0" ;
}

function makeWarn(element){
    if (!element.classList.contains("invalid")) {
        element.classList.add("invalid");
    }
}

function removeWarn(element){
    if (!element.currentTarget.classList.contains("invalid")) {
        return;
    }
    element.currentTarget.classList.remove("invalid");
}

function addRecordToTable(newRecordJSON){
    let line = $("<tr></tr>")[0];
    for (let i = 0; i < 6; i++) {
        let elem = $("<td></td>")[0];
        line.append(elem);
    }
    line.childNodes[0].innerHTML = newRecordJSON["X"];
    line.childNodes[1].innerHTML = newRecordJSON["Y"];
    line.childNodes[2].innerHTML = newRecordJSON["R"];
    line.childNodes[3].innerHTML = newRecordJSON["Hit"];
    line.childNodes[4].innerHTML = newRecordJSON["Runtime(ms)"];
    line.childNodes[5].innerHTML = newRecordJSON["Request start time"];

    let table = document.getElementById("table");
    table.appendChild(line);
}

// создаём новую запись в таблице
function updateTable(newRecordJSON) {
    addRecordToTable(newRecordJSON);
    // обновляем куки в таблице
    updateTableCookie(newRecordJSON);
}



function updateTableCookie(newRecordJSON){
    let recordsJson;
    if (getCookie("table")){
        recordsJson = JSON.parse(getCookie("table"));
    }
    else {
        recordsJson = [];
    }
    recordsJson.push(newRecordJSON);
    document.cookie = `table=${JSON.stringify(recordsJson)}`
}

function clearTableCookie(key, value){
    document.cookie += `${key}=${value}`;
}

function getCookie(name) {
    let matches = document.cookie.match(new RegExp(
        "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
}

function getBeautyTime(time){
    return `${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`
}


function validateForm(event){

    event.preventDefault();
    let form = event.target;
    let data = {"X":form.elements['X'].value,
        "Y": form.elements['Y'].value,
        "R":form.elements['R'].value
    };
    if (!isValidInput(data)){
        makeWarn(form.elements['Y']);
    }
    else {
        let startTime = new Date();
        let response = $.get({
            url: 'http://localhost:8080/lab2_war_exploded/start',
            data: data,
            crossDomain: true
        });
        response.done(function (response){
            if (response !== "invalid_data") {
                let scriptTime = new Date() - startTime;

                // добавляем данные о времени в поле
                responseJson = JSON.parse(response);
                responseJson["Runtime(ms)"] = scriptTime;
                responseJson["Request start time"] = getBeautyTime(startTime);
                updateTable(responseJson);
            }
        });
    }
}

function deleteCookie(name){
    document.cookie = `${name}=""`
}


function isCorrectNumber(numberStr){
    if (!isNaN(numberStr)){
        numberStr = numberStr.replace(/^\s+/, '').replace(/\s+$/, '');
        return String(Number(numberStr)) === numberStr;
    }
    else{
        return false;
    }

}

function isValidInput(data){
    const rangeX = [-5, -4,-3 , -2, -1, 0, 1, 2, 3, 4];
    const rangeR = [1, 2, 3, 4, 5];

    let x = data["X"];
    let y = data["Y"];
    let r = data["R"];

    if (x.length > 10 || y.length > 10 || r.length > 10){
        return false;
    }

    x = Number(x);
    y = Number(y);
    r = Number(r);

    return ((rangeX.indexOf(x) !== -1) &&
        (rangeR.indexOf(r) !== -1) &&
        (-3 <= y) && (y <= 5));
}

function fillTable(){
    let records;
    if (getCookie("table")) {
        records = JSON.parse(decodeURIComponent(getCookie("table")));
    }
    else{
        records = [];
    }

    for (let i = 0; i < records.length; i++){
        addRecordToTable(records[i]);
    }
}


// листенеры
window.addEventListener("load", fillTable);
document.getElementById("submitY").addEventListener("focus", removeWarn);
$("#data")[0].addEventListener("submit", validateForm);
