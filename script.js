
var botao = document.getElementById("action");
botao.addEventListener("click", clicar);

function clicar(){
    var n = document.getElementById("num");
    if (n.value.length == 0){
        window.alert("Por favor, informe um número!");
    }
    else{
        var num = Number(n.value);
        var res = document.querySelector("div.res");
        res.innerHTML = "";
        var lista = document.createElement("select");

        for (var c = 1; c <= 10; c++){
            var mult = document.createElement("option");
            mult.innerHTML = `${num} X ${c} = ${num * c}`;
            mult.value = `tab${c}`;
            lista.appendChild(mult);
        }
        lista.size = "10";
        res.appendChild(lista);
    }
}