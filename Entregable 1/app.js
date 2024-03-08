const readlineSync = require("readline-sync");

function adivina_numero_secreto() {
  const numero_secreto = Math.floor(Math.random() * 100) + 1;
  let intentos = 0;

  while (true) {
    const numero_usuario = readlineSync.question("divina el número secreto entre 1 y 100: ");
    intentos++;

    console.clear();

    if (numero_usuario < numero_secreto) {
      console.log("El número es demasiado bajo. Intenta nuevamente.");
    } else if (numero_usuario > numero_secreto) {
      console.log("El número es demasiado alto. Intenta nuevamente.");
    } else {
      console.log(`Felicidades, has adivinado el número secreto en ${intentos} intentos!`);
      break;
    }

  }
}

adivina_numero_secreto();
