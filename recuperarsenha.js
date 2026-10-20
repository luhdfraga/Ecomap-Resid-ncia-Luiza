document.addEventListener("DOMContentLoaded", () => {
    const btnEnviar = document.querySelector("#form-login-bloco .btn-comunidade");
    const emailInput = document.getElementById("recuperar-email");

    if (btnEnviar && emailInput) {
        btnEnviar.addEventListener("click", (e) => {
            e.preventDefault(); 

            const email = emailInput.value.trim();

            if (!email) {
                alert("Por favor, introduza o seu e-mail cadastrado.");
                emailInput.focus();
                return;
            }

            // Validação simples de formato de e-mail
            if (!email.includes("@") || !email.includes(".")) {
                alert("Por favor, introduza um e-mail válido.");
                emailInput.focus();
                return;
            }

            alert(`Enviamos um link de recuperação de palavra-passe para o e-mail: ${email}`);
            window.location.href = "novasenha.html";
        });
    }
});

