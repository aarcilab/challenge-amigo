// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
//Crear variable array para almacenar la lista de amigos


let amigos=[];

function agregarAmigo(){ 
    let obtenerAmigo= document.getElementById("amigo").value;

    if(typeof obtenerAmigo == "string" && obtenerAmigo.length == 0){
        alert("Por favor, inserte un nombre.");
    }else{
        amigos.push(obtenerAmigo);
        console.log(amigos);
    }
    limpiarImput();
}

function limpiarImput() {

document.getElementById("amigo").value = "";

}

function mostrarAmigos(){
    document.getElementById("listaAmigos").value = "amigos";

}

