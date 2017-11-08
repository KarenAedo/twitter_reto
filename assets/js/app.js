
function add(){

    //llamo a mi ID ingreso donde irán los pensamientos
    var ingresoElTexto = document.getElementById("ingresoElTexto").value;

    //Limpio mi cuadro de ingreso
    document.getElementById("ingresoElTexto").value = "";

    //si ingresa algo vacio retorne un alerta
    if (ingresoElTexto === ""){
    alert("Debes ingresar un pensamiento");
    }
  
    else {
    var nuevosTweets = document.createElement("div"); //hacer nuevo div contenedor
    nuevosTweets.className = "contenedor" //dando una clase al contenedor
    var nombreUsuarioSpan = document.createElement("span"); //span con el nombre de usuario
    nombreUsuarioSpan.className ="usuario"
    var fechaSpan = document.createElement("span"); //span con fecha de ingreso
    fechaSpan.className ="fecha"
    var nuevoParrafo = document.createElement("p"); //hacer nuevo parrafo

    //agrego los elementos creados(div,span y p) al contenedor
    nuevosTweets.appendChild(nombreUsuarioSpan);
    nuevosTweets.appendChild(fechaSpan);
    nuevosTweets.appendChild(nuevoParrafo);

    nombreUsuarioSpan.textContent = "Karen Aedo";
    fechaSpan.textContent = new Date() ;
    nuevoParrafo.textContent = comment;


    var timeLine = document.getElementById("lineaTiempo");
    timeLine.insertBefore(nuevosTweets, timeLine.children[0]);

   }
 }
