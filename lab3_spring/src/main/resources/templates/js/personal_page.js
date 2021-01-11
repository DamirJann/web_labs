$("#friends").elem.addEventListener("click", function(){
    let response = $.get({
        url: 'user/friends',
        crossDomain: true
    });
    response.done(function (response){
        alert("goods");
    });
});
