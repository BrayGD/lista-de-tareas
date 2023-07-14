const inputText = document.getElementById("agregar-tareas");
const botonAgregar = document.querySelector("button");
const listaTareas = document.getElementById("lista-de-tareas");




function  agregarTarea(){
    if (inputText.value){
        let tareaNueva = document.createElement("div");
        tareaNueva.classList.add("tarea");

        let texto = document.createElement("p");
        texto.innerText = inputText.value;
        tareaNueva.appendChild(texto);

        let iconos = document.createElement("div");
        iconos.classList.add("iconos");
        tareaNueva.appendChild(iconos);

        let completar = document.createElement("i");
        completar.classList.add("bi", "bi-check-circle-fill", "icono-completar");
        completar.addEventListener ("click", completarTarea)

        let eliminar = document.createElement("i");
        eliminar.classList.add("bi", "bi-trash3-fill", "icono-eliminar");
        eliminar.addEventListener("click", eliminarTarea);

        iconos.append(completar, eliminar);

        listaTareas.appendChild(tareaNueva);
}else{
    alert("No procrastines, por favir ingresa uno de tus pendientes y trabaja en ello");
}
}

function completarTarea(e){
    let tarea = e.target.parentNode.parentNode;
    tarea.classList.toggle("completada");

}

function eliminarTarea(e){
    let tarea = e.target.parentNode.parentNode;
    tarea.remove();

}



botonAgregar.addEventListener("click", agregarTarea);
inputText.addEventListener("keydown", (e) =>{
    if (e.key ==="Enter"){
        agregarTarea();
    }
} )

