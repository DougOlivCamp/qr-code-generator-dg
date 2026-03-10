const container = document.querySelector(".container");
const qrCodeBtn = document.querySelector("#qr-input button");
const qrCodeInput = document.querySelector("#qr-input input");
const qrCodeImg = document.querySelector("#qr-code img");

//Eventos
//Gerar QR Code
function generateQRCode() {
  const qrCodeInputValue = qrCodeInput.value.trim();
  if (!qrCodeInputValue) return;

  qrCodeBtn.innerText = "Gerando QR Code...";

  qrCodeImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrCodeInputValue}`;

  qrCodeImg.addEventListener("load", () => {
    container.classList.add("active");
    qrCodeBtn.innerText = "QR Code gerado!";
  });
}

qrCodeBtn.addEventListener("click", () => {
  generateQRCode();
});

//Gerar QR Code ao pressionar Enter
qrCodeInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    generateQRCode();
  }
});

//Limpar QR Code
qrCodeInput.addEventListener("keyup", () => {
  if (!qrCodeInput.value) {
    container.classList.remove("active");
    qrCodeBtn.innerText = "Gerar QR Code";
  }
});
