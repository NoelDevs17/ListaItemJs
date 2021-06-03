
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


//Función para agregar un Item a la lista
function agregarItem(e){
    e.preventDefault();
    var newItem = document.getElementById('item').value;

    var li = document.createElement('li');
    li.className = 'list-group-item';
    li.appendChild(document.createTextNode(newItem));

    var botonDel = document.createElement('button');
    botonDel.className = 'btn btn-danger btn-sm float-right eliminar';
    botonDel.appendChild(document.createTextNode('X'));

    li.appendChild(botonDel);   

    lista.appendChild(li);
}

//Función para eliminar un Item de la lista
function eliminarItem(e){
    if(e.target.classList.contains('eliminar')){
        if(confirm('¿Seguro que desea eliminar el elemento')){
            var li = e.target.parentElement;
            lista.removeChild(li);
        }        
    }
}