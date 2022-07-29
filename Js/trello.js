
$(document).ready(function()
{
    /*
    $("button").click(function()
    {
        Temp();
    });
    */
});

window.onload = function () {
    console.log("hello");
    Temp();
}

/*
<div class="flex-l1">
    <p class="t1">&#12288<i class="fa fa-info"></i>&#12288讯息</p>
    <div class="flex-l2">
        <p class="t2">MAPLE 开发工具 Alpha1</p>
        <p class="t3">https://github.com/FuseFun/mdk</p>
    </div>
</div>
*/

var GenCards = function (json)
{
    for (var key in json)
    {
        var card = json[key];
        console.log(card);

        document.getElementById(`${card.idList}`).innerHTML += `<div class="flex-l2"><p class="t2">${card.name}</p>${card.desc}</div><p style="margin:20px"></p>`;
    }
}

var GenColumns = function (json)
{
    for (var key in json)
    {
        var column = json[key];
        var columnId = column.id; // "62e42b4104e9bc5be0ed65f4"

        document.getElementById("mdkLogs").innerHTML = `<div class="flex-l1"><p class="t1">&#12288<i class="fa fa-info"></i>&#12288${column.name}</p><div id=${column.id}></div></div>`;

        // https://api.trello.com/1/lists/62e42b7e3fc76a08542f8213/cards
        fetch(`https://api.trello.com/1/lists/${columnId}/cards`)
            .then(response => response.json())
            .then(json => {
                console.log(json);
                GenCards(json);
            })
            .catch(err => {
                // error.
            });
    }
}

var Temp = function()
{
    fetch('https://api.trello.com/1/boards/62e42b4104e9bc5be0ed65f4/lists')
        .then(response => response.json())
        .then(json => {
            console.log(json);
            GenColumns(json);
        })
        .catch(err => {
            // error.
        });
};