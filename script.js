// Menú desplegable para pantallas pequeñas
const boton = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu");

if (boton && menu) {
  boton.addEventListener("click", () => {
    const abierto = menu.classList.toggle("abierto");
    boton.setAttribute("aria-expanded", abierto);
    boton.textContent = abierto ? "✕ Cerrar" : "☰ Menú";
  });

  // Cierra el menú al elegir una opción
  menu.querySelectorAll("a").forEach((enlace) =>
    enlace.addEventListener("click", () => {
      menu.classList.remove("abierto");
      boton.setAttribute("aria-expanded", "false");
      boton.textContent = "☰ Menú";
    })
  );
}

// Año automático en el pie de página
const anio = document.getElementById("anio");
if (anio) anio.textContent = new Date().getFullYear();
