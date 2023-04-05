document.addEventListener("click" , showcolor);

document.getElementById("botão").addEventListener("click" , exibenome)

function showcolor()
{
    document.body.style.backgroundColor = "pink";
}

function exibenome()
{
    let usuario = document.getElementById( "nome" ).value;
    document.getElementById( "mensagem" ).innerText = "Meu nome é:" + usuario;
    document.getElementById( "nome" ).value = "";
}
