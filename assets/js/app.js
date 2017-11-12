
//moví la función desde el html a js
botonEnviar.onclick = function(){

    //textarea - donde irá el texto que se ingrese
    var ingresoElTexto = document.getElementById("ingresoElTexto").value;
    //Limpio mi cuadro de ingreso luego de dar click y guardar el texto
    document.getElementById("ingresoElTexto").value = "";
    //lineaTiempo, div vacío donde luego irán guardados los comentarios
    var lineaTiempo = document.getElementById("lineaTiempo");
    
    //quité el alert porque en realidad no me servía para el ejercicio, estaba demás

    //creo este div contenedor donde irá inserto el elemento p, para luego poder darle estilo en css
    var nuevosTweets = document.createElement("div"); //hacer nuevo div contenedor
    nuevosTweets.setAttribute("id","contenedor"); // dando un id al contenedor
    var nuevoParrafo = document.createElement("p"); //hacer nuevo parrafo
    nuevoParrafo.setAttribute("id","nuevoParrafo")
    //agrego el elemento creado al contenedor
    nuevosTweets.appendChild(nuevoParrafo);

    //enlazo el textarea con el "p" creado, que será quien guarde el texto ingresado
    nuevoParrafo.textContent = ingresoElTexto;
    //El método Node.insertBefore() inserta el nuevo elemento antes del elemento de referencia como hijo del nodo actual
    lineaTiempo.insertBefore(nuevosTweets, lineaTiempo.children[0]);
}
