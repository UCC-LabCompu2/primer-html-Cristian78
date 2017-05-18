/**
 * Created by Agus on 6/5/2017.
 */

/**
 * Convierte de una unidad a otra, el valor inesperado por el usuario.
 * Ej. Si el usuario ingresa metro, el valor se convierte en yarda, pie y pulgada
 * Descripción
 * @method convertirunidades
 * @param txt (string de la unidad que se esta ingresando)
 */
function convertirunidades(txt) {
    var contenido;
    var metro, pie, yarda, pulgada;
    contenido = document.getElementById(txt).value;

    if(isNaN(contenido)){
        alert("El valor inesperado en " + txt + "no es valido.");
        document.getElementById('metro').value = "";
        document.getElementById('pie').value = "";
        document.getElementById('yarda').value = "";
        document.getElementById('pulgada').value = "" ;
    }
    else{
        switch (txt) {

        }
    }
    //alert(contenido);

    switch (txt) {
        case "metro":
            document.getElementById('pie').value = contenido*3.28084;
            document.getElementById('yarda').value = contenido*1.09361;
            document.getElementById('pulgada').value = contenido*39.3701 ;
            break;

        case "pie":
            document.getElementById('metro').value = contenido*0.03048;
            document.getElementById('yarda').value = contenido*0.33333;
            document.getElementById('pulgada').value = contenido*12 ;
            break;

        case "yarda":
            document.getElementById('metro').value = contenido*0.9144;
            document.getElementById('pie').value = contenido*3;
            document.getElementById('pulgada').value = contenido*36 ;
            break;

        case "pulgada":
            document.getElementById('metro').value = contenido*0.0254;
            document.getElementById('pulgada').value = contenido*0.083333;
            document.getElementById('yarda').value = contenido*0.02778 ;
            break;
    }
}
/**
 * Convierte de radianes a grados
 * @method conversosGradosRadianes
 * @param unidad [grados | radianes]
 * @param valor
 */
function conversorGradosRadianes(unidad, valor) {
    var valor_radianes, valor_grados;

    valor = valor.replace(',','.');

    if (isNaN(valor)){
        alert("El valor ingresado en "+ unidad +"es invalido.")
        valor_grados = "";
        valor_radianes = "";
    }

    if (unidad=="grados"){
        valor_radianes = valor* Math.PI/180;
        valor_grados = valor;
    }
    else if (unidad=="radianes"){
        valor_grados = valor*180/Math.PI;
        valor_radianes = valor;
    }

    document.conver_RaGra.unid_grados.value = valor_grados;
    document.conver_RaGra.unid_radianes.value = valor_radianes;

}

/**
 * Mostrar u Ocultar un Dic segun la opcion seleccionada
 * en un radio button
 * @method mostrar_ocultar
 * @param accion [mostrarDiv | ocultarDiv]
 */

function mostrar_ocultar (accion) {

    if (accion=="mostrarDiv"){
        document.getElementById("elDiv").style.display = 'block';
    }
    if (accion=="ocultarDiv"){
        document.getElementById("elDiv").style.display = 'none';
    }
}

function dibujarCirculoCuadrado() {

    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");

    var ancho = canvas.width;
    var alto = canvas.height;

    ctx.beginPath();
    ctx.strokeStyle = "#4cff59";
    ctx.fillStyle = "#41cc0f";

    //Dibujar Cuadrado

    ctx.rect(10, alto-40, 30, 30);
    ctx.stroke();
    ctx.fill();
    ctx.closePath();

    //Dibujar Circulo

    ctx.beginPath();
    ctx.strokeStyle = "#4cff59";
    ctx.fillStyle = "#41cc0f";

    ctx.arc(ancho/2, alto/2, 30, 0, Math.PI*2);
    ctx.stroke();
    ctx.fill();
    ctx.closePath();

}

function dibujarCuadriculado() {
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");

    var ancho = canvas.width;
    var alto = canvas.height;
    //Lineas verticales
    ctx.beginPath();
    for(var i=0; i<ancho;){
        ctx.moveTo(i, 0);
        ctx.lineTo(i, alto);
        i=i+10;
    }

    //Lineas Horizontales
    for(var i=0; i<ancho;){
        ctx.moveTo(0, i);
        ctx.lineTo(ancho, i);
        i=i+10;
    }

    ctx.strokeStyle = "#ff5b2d";
    ctx.stroke();
    ctx.closePath();

}

function dibujarImagen(){
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");

    var coorX = Number(document.getElementById("posicionX"));
    var coorY = Number(document.getElementById("posicionY"));

    var img = new Image();
    img.src = 'imagenes/auto.png';

    ctx.beginPath();
    ctx.drawImage(img, coorX, coorY,30 ,30);
    ctx.closePath();


}