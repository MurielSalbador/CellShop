document.addEventListener("DOMContentLoaded", function () { 
  Toastify({
    text: "¡Bienvenido y Gracias por Contactarnos!",
    duration: 2200,
    destination: "contacto.html",
    newWindow: true,
    close: true,
    gravity: "top", 
    position: "right", 
    stopOnFocus: true,
    style: {
      background: "linear-gradient(to right, #009, #0098d9)",
    },
    onClick: function () {},
  }).showToast();

  // Agregando eventos a los campos de entrada
  document.getElementById("name").addEventListener("blur", validarNombre);
  document.getElementById("email").addEventListener("blur", validarEmail);
  document.getElementById("phone").addEventListener("blur", validarTelefono);
  document.getElementById("motivo").addEventListener("change", validarMotivo);
  document.getElementById("mensaje").addEventListener("blur", validarMensaje);
  document.querySelector("form").addEventListener("submit", validarFormulario);
});

function validarNombre() {
  const nombre = document.getElementById("name").value.trim();
  const nombreRegex = /^[ A-Za-záéíóúÁÉÍÓÚÑñ]+$/;

  if (nombre === "") {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Por favor, completa el campo de nombre.",
    });
  } else if (!nombreRegex.test(nombre)) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Por favor, ingresa solo letras en el campo de nombre.",
    });
  }
}

function validarEmail() {
  const email = document.getElementById("email").value.trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (email === "") {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Por favor, completa el campo de correo.",
    });
  } else if (!emailRegex.test(email)) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Por favor, ingresa un correo válido.",
    });
  }
}

function validarTelefono() {
  const telefono = document.getElementById("phone").value.trim();
  const telefonoRegex = /^[0-9]+$/;

  if (telefono === "") {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Por favor, completa el campo de teléfono.",
    });
  } else if (!telefonoRegex.test(telefono)) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "El teléfono debe contener solo números.",
    });
  }
}

function validarMotivo() {
  const motivo = document.getElementById("motivo").value;

  if (motivo === "") {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Por favor, selecciona un motivo de consulta.",
    });
  }
}

function validarMensaje() {
  const mensaje = document.getElementById("mensaje").value.trim();

  if (mensaje === "") {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Por favor, completa el campo de mensaje.",
    });
  }
}

function validarFormulario(e) {
  e.preventDefault(); // Evita el envío del formulario si hay errores

  const nombre = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const telefono = document.getElementById("phone").value.trim();
  const motivo = document.getElementById("motivo").value;
  const mensaje = document.getElementById("mensaje").value.trim();

  if (nombre === "" || email === "" || telefono === "" || motivo === "" || mensaje === "") {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Por favor, completa todos los campos antes de enviar.",
    });
  } else {
    Swal.fire({
      icon: "success",
      title: "¡Formulario enviado!",
      text: "Gracias por contactarnos. Te responderemos pronto.",
    });
    e.target.submit(); // Envía el formulario si todo está validado
  }
}
