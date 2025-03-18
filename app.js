// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
//Crear variable array para almacenar la lista de amigos

//Agregar lista de amigos

let listaAmigos=[];
const inputAmigo= document.getElementById("amigo");
const ulListaAmigos=document.getElementById("listaAmigos");
const ulResultado= document.getElementById("resultado");

//agregar Amigos



function agregarAmigo(){
    if (inputAmigo== ""){
        alert("Ingresar un nombre por favor");
    }


    listaAmigos.push(inputAmigo.value);
    ulListaAmigos.innerHTML += `<li>${inputAmigo.value}</li>`;

}

function sortearAmigo(){
    const random = Math.floor(Math.random() * listaAmigos.length);
    const amigoSecreto=  listaAmigos[random] ;
    ulResultado.innerHTML=`<li> El amigo secreto es ${amigoSecreto}</li>`
}






