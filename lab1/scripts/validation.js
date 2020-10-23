class userTable{
    data = {};

    getJSON(){
        return this.data.stringify();
    }

    drop(){

    }

    addRecord(){

    }


}

table = userTable
const rangeX = [-5, -4,-3 , -2, -1, 0, 1, 2, 3, 4];
const rangeR = [1, 1.5, 2, 2.5, 3];

function dropTable(){
    // let nodes = $("#result tr");
    // for (let i = nodes.length-1; i > 0; i--){
    //     nodes[i].remove();
    //
    // }
}

function updateTableCookie(newRecordJSON){
    recordsJson = JSON.parse(getCookie(table));

    recordsJson.add(newRecordJSON);

    document.cookie += `table=${JSON.stringify(recordsJson)}`
}

function clearTableCookie(key, value){
    document += `${key}=${value}`;
}

function getCookie(name) {
    let matches = document.cookie.match(new RegExp(
        "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
}

function validateForm(event){
    event.preventDefault();
    let form = event.target;
    let input = form.elements['Y'];

    if (!isYValid()){
        makeWarn();
    }
    else {
        let data = {"X":form.elements['X'].value,
                    "Y": form.elements['Y'].value,
                    "R":form.elements['R'].value
        };
        let startTime = new Date();

        let response = $.get({
            url: '..//scripts//hit.php',
            data: data,
        });
        response.done(function (response){
            let scriptTime = endTime.getTime() - new Date().getTime();

            // добавляем данные о времени в поле
            responseJson = JSON.parse(response);
            responseJson["Время выполнения"] = scriptTime;
            responseJson["Время запроса"] = startTime;

            table.updateTableCookie(response);


        });
        response.error(function(){
            makeWarn();
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

function isValidInput(x, y, r){
    if ((x in rangeX)  && (r in rangeR) && (isYValid(y))){
        return true;
    }
    else{
        return false;
    }
}

function isYValid(numberStr){
    if (isCorrectNumber(numberStr)) {
        return -3 <= (Number(numberStr)) <= 5;
    }
    else{
        return false;
    }
}

function fillTable(){
    let records = decodeURIComponent(document.cookie).split("=").length;
    let table = $("#result");
    for (let i = 1; i < records; i++){
        let record = decodeURIComponent(getCookie(`record${i}`));
        record = $.parseHTML(record);
        record = record[0];
        table.append(record);
    }
}


// листенеры
document.addEventListener("load", fillTable);