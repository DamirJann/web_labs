function dropTable(){
    $.ajax({
        type: "DELETE",
        url: 'http://localhost:8080/start',
        crossDomain: true
    });
    let nodes = $("#table tr");
    for (let i = nodes.length-1; i > 0; i--){
        nodes[i].remove();

    }
    refreshGraph();
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
            url: 'http://localhost:8080/start',
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
    const rangeR = [1, 2, 3, 4, 5];
    let r = data["R"];
    r = Number(r);

    return (rangeR.indexOf(r) !== -1);
}

// листенеры
document.getElementById("submitY").addEventListener("focus", removeWarn);
$("#data")[0].addEventListener("submit", validateForm);