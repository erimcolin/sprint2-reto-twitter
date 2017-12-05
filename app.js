//se mandan traer los elementos del HTML al JS
var boton = document.getElementById("sent-text");
var texto = document.getElementById("text");
var nuevoParrafo = document.getElementById("contenedor");
var contadorLetras = document.getElementById("contadorDeCaracteres");

//version 0.0.1
//se agrega el evento click en el boton de tweet para que imprima los mensajes
boton.addEventListener("click", twittear)

function twittear(event) {
   if (texto.value) {
     var parrafo = document.createElement("p");
     var divContenedor = document.createElement("div");
     parrafo.textContent = texto.value;
     divContenedor.appendChild(parrafo);
     nuevoParrafo.appendChild(divContenedor);
     divContenedor.classList.add("content");
     texto.value = "";
     parrafo.style.marginLeft = '14px';
    // parrafo.style.border = '10px';

  /*   (function () {
       var fecha = new Date();
       document.write(fecha);
     } ())
*/

     /*falta darle estilos al nuevo parrafo para que se acomoden
     debajo del contenedor, con un margen a la izquiera */
   }
};
// version 0.0.2
//se agrega un contador que lleva la cuenta regresiva
texto.addEventListener("keyup", contadorCaracteres);

function contadorCaracteres(event){
  var contador = 0;
  var letra = texto.value.length;
  contador = texto.value.length;
  contadorLetras.value = 140 - contador;
/*
version 0.0.3
1.-Si pasa los 140 caracteres se desabilita el boton
2. si para los 120 caracteres, mostrar el boton en otro color
... etc */
    if ( contador > 140) {
    boton.disabled = true;
    contadorLetras.style.color = "black";
    //boton.style.color = 'grey';
    } else if (contador >  119 && contador < 130) {
        contadorLetras.style.color = "orange";
    } else if (contador > 129 && contador < 140) {
        contadorLetras.style.color = "red";
    } else {
        boton.disabled = false;
        contadorLetras.style.color = "blue";
    }
};

/*version 0.0.4
al presionar enter el textarea crece de acuerdo al tamaño del texto */
var textarea = document.querySelector('textarea');
textarea.addEventListener('keydown', autosize);

function autosize(){
  var el = this;
  setTimeout(function(){
    el.style.cssText = 'height:auto; padding:0';
    el.style.cssText = 'height:' + el.scrollHeight + 'px';
  }, 0);
};

// agregar la hora
// var tiempo = moment("2016-01-01").format("MMM Do YY");
// console.log(tiempo);

function mostrarHora(){
  momentoActual = new Date();
  hora = momentoActual.getHours();

  horaImprimible = hora + ' : ';
  document.getElementById('mostrarHora').innerHTML = horaImprimible;
};
