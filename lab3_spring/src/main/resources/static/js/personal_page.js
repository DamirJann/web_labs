// $("#friends")[0].addEventListener("click", function(){
//     let response = $.post({
//         url: 'friends',
//         crossDomain: true
//     });
//     response.done(function (response){
//         $("#block_container")[0].innerHTML = response;
//     });
// });



$("#title_head span").click(navigate);

function navigate(){
    let response = $.post({
        url: this.id,
        crossDomain: true
    });
    response.done(function (response){
        $("#block_container")[0].innerHTML = response;
    });
}
