document.addEventListener("DOMContentLoaded", () => {
    const btnSalvar = document.querySelector("#form-login-bloco .btn-comunidade");
    const novaSenhaInput = document.getElementById("nova-senha");

    if (btnSalvar && novaSenhaInput) {
        btnSalvar.addEventListener("click", (e) => {
            e.preventDefault(); // Impede o redirecionamento imediato para validar

            const novaSenha = novaSenhaInput.value;

            if (!novaSenha) {
                alert("Por favor, introduza a sua nova palavra-passe.");
                novaSenhaInput.focus();
                return;
            }

            if (novaSenha.length < 6) {
                alert("A palavra-passe deve ter no mínimo 6 caracteres.");
                novaSenhaInput.focus();
                return;
            }

            alert("A sua palavra-passe foi alterada com sucesso! A redirecionar para a página de login...");
            window.location.href = "login.html";
        });
    }
});

