function deleteArticle(articleId, nickname){
    let response = $.get({
        url: `\\dead-journal\\user\\${nickname}\\article\\${articleId}`,
        crossDomain: true
    });
    // alert(1);
    response.done(function (response){
        // alert(2);
        let form = $(`<form action='/dead-journal' method="post"  display="none" >
        <input name="navigation_state" value="2"  type="hidden">
        </form>`);
        $("body").append(form);
        form.submit();
    });



}