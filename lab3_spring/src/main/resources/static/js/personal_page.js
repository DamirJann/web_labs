$("#title_head span").click(navigate);

function changeDescriptionInfo(){
    // change text -> textarea
    let textElem = $("#description .text")[0];
    let oldDescription = textElem.innerText;
    textElem.innerHTML = "<textarea>" +
                            oldDescription +
                         "</textarea>";
    // remove "change" button and add save, cancel buttons
    $("#user_info .buttonBlock")[0].innerHTML = "<button id='save'  onclick='saveDescriptionInfo()'>" + "Сохранить"+ "</button>" +
                                            "<button id='cancel' onclick='cancelDescriptionChange()'>" + "Отменить" + "</button>";

}

function saveDescriptionInfo(newDescriptionText=$("#description .text textarea")[0].value){
    $("#description .text")[0].innerHTML = `<text>${newDescriptionText}</text>`;
    $("#user_info .buttonBlock")[0].innerHTML = "<button onclick=\"changeDescriptionInfo()\">изменить</button>"
    // change main block
    data = {"description": newDescriptionText};

    let response = $.post({
        url: `\\dead-journal\\user\\info`,
        crossDomain: true,
        data: data
    });

}

function  cancelDescriptionChange(){
    let oldDescriptionText=$("#description .text textarea")[0].innerHTML;
    $("#description .text")[0].innerHTML = `<text>${oldDescriptionText}</text>`;
    $("#user_info .buttonBlock")[0].innerHTML = "<button onclick=\"changeDescriptionInfo()\">изменить</button>"

}

function navigate(){

    // highlight clicked button and remove old highlight
    $("#title_head span").each((index, value) => {
        if (value.classList.contains("highlighted")){
            value.classList.remove("highlighted");
        }
    });
    this.className += " " + "highlighted";



    // change main block
    let response = $.get({
        url: `dead-journal\\${this.id}`,
        crossDomain: true
    });
    response.done(function (response){
        $("#block_container")[0].innerHTML = response;
    });
}

function launchAtStart(){
    let chosenElem = $("#title_head span.highlighted")[0];
    // change main block
    let response = $.get({
        url: `dead-journal\\${chosenElem.id}`,
        crossDomain: true
    });
    response.done(function (response){
        $("#block_container")[0].innerHTML = response;
    });
}

launchAtStart();