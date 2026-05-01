function generarTablas(){
    let contenido = "";
    let contenedor = document.getElementById("tablas");
    let numero = parseInt(document.getElementById("txtNumb").value);
    for (let i = 1; i<=12; i++){
        contenido = contenido + "<div class='fila'>"+ numero +" x " + i +" = "+ (numero * i) + "</div>";
    }
    contenedor.innerHTML = contenido;
}