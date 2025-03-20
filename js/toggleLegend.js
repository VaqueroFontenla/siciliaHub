const toggleModalBtn = document.getElementById("legendButton");
const modal = document.getElementById("legend");

toggleModalBtn.addEventListener("click", () => {
  modal.classList.toggle("show"); // Alterna la clase 'show'
});

window.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.classList.remove("show"); // Cierra el modal si se hace clic fuera de él
  }
});
