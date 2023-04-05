document.addEventListener("click" , showcolor);

document.getElementById("botao").addEventListener("click" , exibenome)

document.getElementById("btn-somar").addEventListener("click" , exiberesultado)

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

function exiberesultado()
{
    let digitoum = document.getElementById("numb1").value;
    let digitodois = document.getElementById("numb2").value;  
    document.getElementById("resultado").innerHTML = parseFloat( digitoum ) + parseFloat( digitodois );
}
