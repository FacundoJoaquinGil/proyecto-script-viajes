import {barcelona, roma, paris, londres} from './ciudades.js'

let elementos = document.querySelectorAll('a')
let tituloElemento = document.getElementById('titulo')
let subtituloElemento = document.getElementById('subtitulo')
let parrafoElemento = document.getElementById('parrafo')
let precioElemento = document.getElementById('precio')

elementos.forEach(function(elemento){
    elemento.addEventListener ('click', function(){
            
        let ciudades = obtenerCiudades(this.textContent)

        tituloElemento.innerHTML = ciudades.titulo
        subtituloElemento.innerHTML = ciudades.subtitulo
        parrafoElemento.innerHTML = ciudades.parrafo
        precioElemento.innerHTML = ciudades.precio
        
    });       
});

function obtenerCiudades(elemento){
    let ciudades = {
        'Barcelona': barcelona,
        'Roma': roma,
        'París': paris,
        'Londres': londres,
        'Precio': precio
    };

    return ciudades[elemento]
}

