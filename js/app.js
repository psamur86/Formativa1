var usuario = document.getElementsById('Usuario');
var password = document.getElementsById('passorrd');
var error = document.getElementsById('error');
error.style.color = 'red';

function perfilEnter (){
    console.log('entrando en el perfil');

    var mensajeError = [];

    if(nombre.values === null || nombre.values === ''){
        mensajeError.push('ingrese su usuario por favor');
    }

    if(pasword.values === null || pasword.values === ''){
        mensajeError.push('ingrese su password por favor');
    }

    error.innerHTML = mensajeError.join(', ');


    return false;

}

