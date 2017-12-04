//se mandan traer los elementos del HTML al JS
var boton = document.getElementById("enviarTexto");
var texto = document.getElementById("textoAInsertar");
var nuevoParrafo = document.getElementById("contenedor");
var contadorLetras = document.getElementById("contadorDeCaracteres");

//se agrega el evento click en el boton de tweet para que imprima los mensajes
boton.addEventListener("click", twittear)

function twittear(event) {
   if (texto.value) {
     var parrafo = document.createElement("p");
     var div = document.createElement("div");

     parrafo.textContent = texto.value;
     div.appendChild(parrafo);
     nuevoParrafo.appendChild(div);
     div.classList.add("content");
     texto.value = "";

     /*falta darle estilos al nuevo parrafo para que se acomoden
     debajo del contenedor, con un margen a la izquiera */
   }
};

//se agrega un contador que lleva la cuenta regresiva
texto.addEventListener("keyup", contadorCaracteres);

function contadorCaracteres(event){
  var contador = 0;
  var letra = texto.value.length;
  contador = texto.value.length;
  contadorLetras.value = 140 - contador;

    if ( contador > 140) {
    boton.disabled = true;
    } else if (contador >  119 && contador < 130) {
        contadorLetras.style.color = "orange";
    } else if (contador > 129 && contador < 140) {
        contadorLetras.style.color = "red";
    } else {
        boton.disabled = false;
        contadorLetras.style.color = "black";
    }
};

// y agregar la hora 
//var tiempo = moment().format('MMMM Do YYYY, h:mm:ss a');
