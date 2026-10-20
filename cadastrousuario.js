document.addEventListener("DOMContentLoaded", () => {
    const btnCadastrar = document.querySelector(".btn-comunidade");
    const senhaInput = document.getElementById("senha-usuario");
    const nomeInput = document.getElementById("nome-usuario");
    const emailInput = document.getElementById("email-usuario");

    if (btnCadastrar) {
        btnCadastrar.addEventListener("click", () => {
            if (!nomeInput.value || !emailInput.value || !senhaInput.value) {
                alert("Por favor, preencha todos os campos!");
                return;
            }

            if (senhaInput.value.length < 6) {
                alert("A senha precisa ter no mínimo 6 caracteres.");
                return;
            }

            alert(`Cadastro realizado com bem-vindo, ${nomeInput.value}! Redirecionando para o login...`);
            window.location.href = "login.html";
        });
    }
});

