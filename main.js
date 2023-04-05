document.addEventListener("click" , showcolor);

document.getElementById("botao").addEventListener("click" , exibenome)

document.getElementById("btn-somar").addEventListener("click" , exibesoma)

function showcolor()
{
    document.body.style.backgroundColor = "pink";
}

function exibenome()
{
    let usuario = document.getElementById( "nome" ).value;
    document.getElementById( "mensagem" ).innerHTML = "Meu nome é: " + usuario;
    document.getElementById( "nome" ).value = "";
}

function somar()
{
    let digitoum = document.getElementById("numb1").value;
    let digitodois = document.getElementById("numb2").value;  
    document.getElementById("resultado1").innerHTML = document.getElementById("numb1").innerHTML + document.getElementById("numb2").innerHTML
}
