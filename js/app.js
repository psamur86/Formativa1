$(document).ready(function() {

    var usuarios = [
      { username: "usuario1", password: "contraseña1" },
      { username: "usuario2", password: "contraseña2" },
      { username: "usuario3", password: "contraseña3" },
      { username: "usuario4", password: "contraseña4" },
      { username: "usuario5", password: "contraseña5" }
    ];
  
    $("#boton-enviar").click(function(event) {
      event.preventDefault();
      
      var username = $("#usuario").val();
      var password = $("#contraseña").val();
      var usuarioValido = false;
      
      for (var i = 0; i < usuarios.length; i++) {
        if (username === usuarios[i].username && password === usuarios[i].password) {
          usuarioValido = true;
          break;
        }
      }
      
      if (usuarioValido) {
        window.location.href = "index.html";
      } else {
        $("#mensaje-error").text("Nombre de usuario o contraseña incorrectos.");
      }
    });
  
  });
  