//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let lista = [];// Lista dos o Nomes que serão Sortedos


function adicionarAmigo (){
    let nome = document.getElementById("amigo").value; //variavel de captação do nome no campo input<amigo>
    lista.push(nome);//incluindo Valores (nome) na Lista
    document.getElementById("listaAmigos").innerHTML = lista;

    function limparCampo(){
        document.getElementById("amigo").value = "";
    }
    limparCampo();
}

function sortearAmigo(){  
    let aleatorio = Math.floor(Math.random() * lista.length);
    let sorteado = (lista[aleatorio]);
    document.getElementById("resultado").innerHTML = sorteado;
    document.getElementById("listaAmigos").innerHTML = "";

}