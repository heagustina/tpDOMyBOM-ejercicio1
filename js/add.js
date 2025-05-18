let numeroMagico = null;

document.getElementById("comienzaElJuego").addEventListener("click", () => {
  numeroMagico = Math.floor(Math.random() * 100) + 1; // Número entre 1 y 100
  document.getElementById("areaDeJuego").classList.remove("d-none");
  alert("Juego comenzado. Ingresa un número del 1 al 100.");
});

document.getElementById("submitGuess").addEventListener("click", () => {
  const numeroUsuario = parseInt(document.getElementById("userInput").value);

  if (isNaN(numeroUsuario)) {
    alert("Por favor, ingresa un número válido.");
    return;
  }

  if (numeroUsuario === numeroMagico) {
    alert("¡Felicitaciones! Adivinaste el número mágico.");
  } else if (numeroUsuario < numeroMagico) {
    alert("El número es mayor que " + numeroUsuario);
  } else {
    alert("El número es menor que " + numeroUsuario);
  }
});

document.getElementById('cambiarTema').addEventListener('click', () => {
    alert('Funcionalidad de cambiar tema está en construcción');
  });
