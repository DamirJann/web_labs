const rangeY = [-3 , -2, -1, 0, 1, 2, 3, 4, 5];

document.getElementById("data").addEventListener("submit", function (event){
    // validateForm(document.getElementsByTagName("input")[0]);
    validateForm(event);
});



function validateForm(event){
    let form = event.target;
    let input = form.elements['Y'];

    if (!input){
        input.setAttribute("class", "invalid");
    }
    else{
        let data = [form.elements['X'], form.elements['Y'], form.elements['R']];
        $.ajax({
            url:'http://localhost:63342/lab1/scripts/hit.php?_ijt=tnu33npsl884v43qs1b6eoo87u',
            data:{data},
            success: function(isInArea){
                if (isInArea === true){
                    addToTable(data);
                }
            },
            type: 'GET'
        });
    }
}

function addToTable(){
    console.log("!!!!!!!!!!!!");
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

function isYValid(numberStr){
    if (isCorrectNumber(numberStr)) {
        return rangeY.indexOf(Number(numberStr)) !== -1;
    }
    else{
        return false;
    }
}

function makeWarn(input){
    let form = document.getElementsByTagName("input")[0];
    if (!isYValid(form.value)){
        form.setAttribute("class", "invalid");
        event.preventDefault();
    }
    else{
        form.removeAttribute("class");
    }
}

function removeWarn(form){
    if (form.hasAttribute("class")) {
        form.removeAttribute("class");
    }
}
