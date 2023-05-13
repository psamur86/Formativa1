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
          usuarioValido = true ;
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



// Conectar al servidor de Socket.io
const socket = io();

// Manejar el envío de mensajes desde el formulario de chat
document.querySelector('#chat-input form').addEventListener('submit', (event) => {
  event.preventDefault();
  const input = event.target.querySelector('input[type="text"]');
  const message = input.value;
  input.value = '';
  socket.emit('chat-message', message);
});

// Mostrar los mensajes en la pantalla del chat
function addMessageToChat(message) {
  const chatMessages = document.querySelector('#chat-messages');
  const messageElement = document.createElement('div');
  messageElement.innerText = message;
  chatMessages.appendChild(messageElement);
}

// Manejar la recepción de mensajes desde el servidor
socket.on('chat-message', (message) => {
  addMessageToChat(message);
});


<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d26656.56952533336!2d-70.6335647!3d-33.36920739999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2scl!4v1683946869920!5m2!1ses-419!2scl" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
  