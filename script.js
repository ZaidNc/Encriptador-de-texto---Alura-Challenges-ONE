// Función para encriptar texto
function encryptText(text) {
  return text
    .replace(/e/g, "enter")
    .replace(/i/g, "imes")
    .replace(/a/g, "ai")
    .replace(/o/g, "ober")
    .replace(/u/g, "ufat");
}

// Función para desencriptar texto
function decryptText(text) {
  return text
    .replace(/enter/g, "e")
    .replace(/imes/g, "i")
    .replace(/ai/g, "a")
    .replace(/ober/g, "o")
    .replace(/ufat/g, "u");
}

document.addEventListener("DOMContentLoaded", () => {
  const textInput = document.getElementById("textInput");
  const resultText = document.getElementById("resultText");

  // Encriptar texto al hacer clic en el botón
  document.getElementById("encryptButton").addEventListener("click", () => {
    const encryptedText = encryptText(textInput.value);
    resultText.textContent = encryptedText;
  });

  // Desencriptar texto al hacer clic en el botón
  document.getElementById("decryptButton").addEventListener("click", () => {
    const decryptedText = decryptText(textInput.value);
    resultText.textContent = decryptedText;
  });

  // Copiar texto al portapapeles
  document.getElementById("copyButton").addEventListener("click", () => {
    navigator.clipboard
      .writeText(resultText.textContent)
      .then(() => {
        alert("Texto copiado!");
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
      });
  });
});
