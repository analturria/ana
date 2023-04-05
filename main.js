document.addEventListener("click" , showcolor);

document.getElementById("botao").addEventListener("click" , exibenome);

document.getElementById("btn-somar").addEventListener("click" , exiberesultado);

document.getElementById("btn-subtrair").addEventListener("click" , exiberesultado2);

document.getElementById("btn-multiplicar").addEventListener("click" , exiberesultado3);

document.getElementById("btn-dividir").addEventListener("click" , exiberesultado4);

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

function exiberesultado2()
{
    let n1 = document.getElementById("n1").value;
    let n1 = document.getElementById("n2").value;  
    document.getElementById("resultado2").innerHTML = parseFloat( n1 ) - parseFloat( n2 );
}

function exiberesultado3()
{
    let nu1 = document.getElementById("nu1").value;
    let nu2 = document.getElementById("nu2").value;  
    document.getElementById("resultado3").innerHTML = parseFloat( nu1 ) * parseFloat( nu2 );
}

function exiberesultado4()
{
    let num1 = document.getElementById("numb1").value;
    let num2 = document.getElementById("numb2").value;  
    document.getElementById("resultado4").innerHTML = parseFloat( num1 ) / parseFloat( num2 );
}