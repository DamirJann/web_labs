function publishArticle(nickname){
    data = {
        "title": $("#title textarea")[0].value,
        "description": $("#description textarea")[0].value,
        "full_text": $("#full_text textarea")[0].value
    };
    let response = $.post({
        url: `/dead-journal/user/${nickname}/article/`,
        crossDomain: true,
        data: data
    });
    response.done(function (response){
        let form = $(`<form action='/dead-journal' method="post"  display="none" >
            <input name="navigation_state" value="2" type="hidden">
            </form>`);
        $("body").append(form);
        form.submit();
    });
}