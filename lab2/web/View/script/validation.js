function dropTable(){
    $.ajax({
        type: "DELETE",
        url: 'http://localhost:8080/lab2_war_exploded/start',
        crossDomain: true
    });
    let nodes = $("#table tr");
    for (let i = nodes.length-1; i > 0; i--){
        nodes[i].remove();

    }
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
        // make request do add .
        let request =$.ajax({
            type: "POST",
            url: 'http://localhost:8080/lab2_war_exploded/start',
            data: data,
            crossDomain: true,
        });
        request.done(function(response, textStatus, jqXHR){
            $("#table").html(response);
        });
    }
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
    const rangeX = [-3 , -2, -1, 0, 1, 2, 3, 4, 5];
    const rangeR = [1, 2, 3, 4, 5];

    let x = data["X"];
    let y = data["Y"];
    let r = data["R"];

    if (x.length > 10 || y.length > 10 || r.length > 10){
        return false;
    }

    // check on spaces and so on...
    if (!isCorrectNumber(x) || !isCorrectNumber(y) || !isCorrectNumber(r)){
        return false;
    }

    x = Number(x);
    y = Number(y);
    r = Number(r);

    return ((rangeX.indexOf(x) !== -1) &&
        (rangeR.indexOf(r) !== -1) &&
        (-3 <= y) && (y <= 5));
}


// листенеры
document.getElementById("submitY").addEventListener("focus", removeWarn);
$("#data")[0].addEventListener("submit", validateForm);
