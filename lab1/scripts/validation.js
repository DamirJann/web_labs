function isYValid(inputText){
    correctedValues = [];
    for (let i = -3; i < 6; i++){
        correctedValues.push(i);
    }
    return correctedValues.indexOf(Number(inputText)) !== -1;
}



document.getElementById("submitButton").addEventListener("click", function(event){

    form = document.getElementsByTagName("input")[0];
    if (!isYValid(form.value)){
        form.setAttribute("class", "invalid");
    }
    else{
        form.removeAttribute("class");
    }



});

