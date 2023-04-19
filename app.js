var rut= document.getElementById("rut");
var nombre= document.getElementById("nombre");
var apellidop = document.getElementById("apellidop");
var apellidom = document.getElementById("apellidom");
var edad = document.getElementById("edad");
var genero = document.getElementById("genero");
var celular = document.getElementById("celular");
var motivacion = document.getElementById("motivacion");
var error = document.getElementById("error");
var carta = document.getElementById("carta");
error.style.color = "red";


// function enviarFormulario(){
//   console.log("Enviando formulario...");
    
//    var mensajesError= [];

//    if(nombre.value == null || nombre.value == ""){
//        mensajesError.push('Ingresa tu nombre');
//    }

//    if(password.value == null || password.value == ""){
//       mensajesError.push('Ingresa tu contraseña');
//    }
    
//    error.innerHTML = mensajesError.join(',');


//    return false;

//} 


var form = document.getElementById("formulario");
    form.addEventListener("submit",function(evt){
        evt.preventDefault();
        var mensajesError= [];

            if(rut.value == null || rut.value == "" || rut.value.length < 9 || rut.value.length > 10 ){
                mensajesError.push('Vuelve a ingresar tu Rut');
            }
        
            if(nombre.value == null || nombre.value == "" || nombre.value.length <= 3 || nombre.value.length >= 20 ){
                mensajesError.push('Vuelve a ingresar tu Nombre');
            }

            if(apellidop.value == null || apellidop.value == "" || apellidop.value.length >= 20 || apellidop.value.length <= 3 ){
                mensajesError.push('Vuelve a ingresar tu Apellido Paterno');
            }
            
            if(apellidom.value == null || apellidom.value == "" || apellidom.value.length >= 20 || apellidom.value.length <= 3 ){
                mensajesError.push('Vuelve a ingresar tu Apellido Materno');
            }

            if(edad.value == null || edad.value == "" || edad.value > 36 || edad.value < 17 ){
                mensajesError.push('Vuelve a ingresar tu Edad');
            }

            if(genero.value == null || genero.value == "" || genero.value == 0 ){
                mensajesError.push('Selecciona un genero');
            }

            if(celular.value == null || celular.value == "" || celular.value.length >= 13 || celular.value.length <= 8 ){
                mensajesError.push('Vuelve a ingresar tu Celular');
            }
            
            error.innerHTML = mensajesError.join(', ');
    })


function crearCarta() {

  const cartaCampo = document.getElementById('carta');
  const carta = `Estimados señores,

Me dirijo a ustedes con el fin de presentar mi candidatura para el puesto de apoyo ambiental en Chiloé.

Mi nombre es ${nombre.value} ${apellidop.value} ${apellidom.value}, mi RUT es ${rut.value}. Tengo ${edad.value} años y soy de género ${genero.value}. Me motiva postular al trabajo porque ${motivacion.value}.

Agradezco su atención y quedo a su disposición para cualquier consulta.

Atentamente,
${nombre.value} ${apellidop.value} ${apellidom.value}`;

  cartaCampo.value = carta;
}