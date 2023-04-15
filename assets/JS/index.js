let miTabla = document.getElementById('tabla');
let name = miTabla.querySelectorAll('tr > td.nombre');
let fechaInicio = miTabla.querySelectorAll('tr > td.fInicio');
let fechaEntrega = miTabla.querySelectorAll('tr > td.fEntrega');
let tablaArray = [];

let continuar = true;
while (continuar){
    let fNombre = prompt('Ingrese el nombre del Proyecto');
    let fIniciar = prompt('Ingrese la fecha de inicio del Proyecto');
    let fEntregar = prompt('Ingrese la fecha de entrega del Proyecto');

    name[0].innerHTML = fNombre;
    fechaInicio[0].innerHTML = fIniciar;
    fechaEntrega[0].innerHTML = fEntregar;
    
    let listaTabla = {nombre: fNombre, fechaInicio: fIniciar, fechaEntrega: fEntregar};
    tablaArray.push(listaTabla); 


    let respuesta = prompt('¿Tiene más tareas por realizar (s/n)?');
    if(respuesta === 'n'){
        continuar = false;
    }
    else if(respuesta !== 's'){
        alert('Por favor entre "s" para continuar ó "n" para terminar');
    };
};

for(let i = 0; i < tablaArray.length; i++){
    name[i].innerHTML = tablaArray[i].nombre;
    fechaInicio[i].innerHTML = tablaArray[i].fechaInicio;
    fechaEntrega[i].innerHTML = tablaArray[i].fechaEntrega;
}

