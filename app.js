//se mandan traer los elementos del HTML al JS
var boton = document.getElementById("sent-text");
var text = document.getElementById("text");
var newParraf = document.getElementById("container");
var letterCount = document.getElementById("characteres");
//version 0.0.1
//se agrega el evento click en el boton de tweet para que imprima los mensajes
boton.addEventListener("click", twittear)

function twittear(event) {
   if (text.value) {
     var parraf = document.createElement("p");
     var divContainer = document.createElement("div");
     parraf.textContent = text.value;
     divContainer.appendChild(parraf);
     newParraf.appendChild(divContainer);
     divContainer.classList.add("content");
     // texto.value = "";
     parraf.style.marginLeft = '14px';
    // parrafo.style.border = '10px';
   }
};
// version 0.0.2
//se agrega un contador que lleva la cuenta regresiva
text.addEventListener("keyup", countCharacters);

function countCharacters(event){
  var count = 0;
  // var letter = text.value.length;
  count = text.value.length;
  letterCount.value = 140 - count;
/*
version 0.0.3
1.-Si pasa los 140 caracteres se desabilita el boton y cambia de color
2. si para los 120 caracteres, mostrar el boton en otro color
... etc */
    if ( count > 140) {
        boton.disabled = true;
        letterCount.style.color = "black";
        boton.style.color = 'grey';
        boton.style.background = 'lightgrey';
    } else if (count >  119 && count < 130) {
        letterCount.style.color = "orange";
    } else if (count > 129 && count < 140) {
        letterCount.style.color = "red";
    } else {
        boton.disabled = false;
        letterCount.style.color = "blue";
        boton.style.color = 'white';
        boton.style.background = '#6ad2f3'
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
boton.addEventListener("click", showHour)
function showHour(event){
  momentoActual = new Date();
  hora = momentoActual.getHours();
  minuto = momentoActual.getMinutes();
  segundo = momentoActual.getSeconds();

  horaImprimible = hora + ' : ' + minuto + ' : ' + segundo;
  document.getElementById('showHour').innerHTML = horaImprimible;
};
