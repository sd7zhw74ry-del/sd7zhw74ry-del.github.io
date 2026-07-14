const contactForm = document.querySelector("#contactForm");

const whatsappNumber = "523141483820";

contactForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const fullName = document.querySelector("#fullName").value.trim();
  const email = document.querySelector("#email").value.trim();
  const company = document.querySelector("#company").value.trim();
  const phone = document.querySelector("#phone").value.trim();
  const message = document.querySelector("#message").value.trim();

  const whatsappMessage = [
    "Hola, me interesa solicitar atencion tecnica con SerTecMec.",
    "",
    `Nombre completo: ${fullName}`,
    `Correo electronico: ${email}`,
    `Compania: ${company || "No especificada"}`,
    `Telefono / WhatsApp: ${phone}`,
    "",
    `Mensaje: ${message}`
  ].join("\n");

  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  window.open(whatsappUrl, "_blank");
});
