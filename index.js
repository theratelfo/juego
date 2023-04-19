// Generar un número aleatorio entre 1 y 100
let randomNumber = Math.floor(Math.random() * 100) + 1;

// Obtener elementos del DOM
const guessInput = document.getElementById("guessInput");
const guessButton = document.getElementById("guessButton");
const output = document.getElementById("output");

// Función para comprobar el número ingresado por el usuario
function checkGuess() {
  // Obtener el número ingresado por el usuario
  let guess = parseInt(guessInput.value);

  // Comprobar si el número es válido
  if (isNaN(guess) || guess < 1 || guess > 100) {
    output.innerHTML = "Por favor ingresa un número válido entre 1 y 100.";
    return;
  }

  // Comprobar si el número es correcto
  if (guess === randomNumber) {
    output.innerHTML = `¡Felicidades! Adivinaste el número ${randomNumber}.`;
  } else {
    output.innerHTML = `Lo siento, el número que estoy pensando es ${randomNumber > guess ? "mayor" : "menor"} que ${guess}.`;
  }
}

// Asociar la función checkGuess al botón Adivina
guessButton.addEventListener("click", checkGuess);
