
var botao = document.getElementById("action");
botao.addEventListener("click", clicar);

function clicar(){
    var num = Number((document.getElementById("num")).value);
    var res = document.querySelector("div.res");
    res.innerHTML = "";
    var lista = document.createElement("select");

    for (var c = 1; c <= 10; c++){
        var mult = document.createElement("option");
        mult.innerHTML = `${num} X ${c} = ${num * c}`;
        lista.insertBefore(mult, null);
    }
    res.appendChild(lista);
}