/* ===== TrueForm - Scripts ===== */

// Menú hamburguesa (responsive)
function toggleMenu() {
  const links = document.getElementById("navLinks");
  if (links) links.classList.toggle("open");
}

// Mostrar / ocultar contraseña
function togglePassword(checkbox, inputId) {
  const input = document.getElementById(inputId);
  if (input) input.type = checkbox.checked ? "text" : "password";
}

// Validación simple de formularios
function handleForm(event, mensaje) {
  event.preventDefault();
  const form = event.target;

  // Validar coincidencia de contraseñas si existen
  const pass = form.querySelector('[name="password"]');
  const pass2 = form.querySelector('[name="password2"]');
  if (pass && pass2 && pass.value !== pass2.value) {
    alert("Las contraseñas no coinciden.");
    return false;
  }

  alert(mensaje || "¡Enviado con éxito!");
  form.reset();
  return false;
}
