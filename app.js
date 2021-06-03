
//Agregar un elemento a la lista

var form = document.getElementById('formAgregar');
var lista = document.getElementById('items');
var filtro = document.getElementById('filtro');

//Evento submit del formulario
form.addEventListener('submit',agregarItem);
//Evento click de la lista
lista.addEventListener('click',eliminarItem);
//Evento del teclado en el campo de filtro
filtro.addEventListener('keyup',filtrarItems);

