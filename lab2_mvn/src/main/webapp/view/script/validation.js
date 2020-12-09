function dropTable() {
    $.ajax({
        type: "DELETE",
        url: 'https://damp-brushlands-79183.herokuapp.com/start',
        crossDomain: true
    });
    let nodes = $("#table tr");
    for (let i = nodes.length - 1; i > 0; i--) {
        nodes[i].remove();
    }
    refreshGraph();
}

function isValidInput(data) {
    const rangeR = [1, 2, 3, 4, 5];
    let x = data["X"];
    let y = data["Y"];
    let r = data["R"];

    r = Number(r);
    x = Number(x);
    y = Number(y);
    return (rangeR.indexOf(r) !== -1) &&
        (x >= -3) && (x <= 5) && (y >= -3) && (y <= 5);
}