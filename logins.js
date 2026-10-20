document.addEventListener("DOMContentLoaded", () => {
    const btnLogin = document.querySelector(".btn-comunidade");
    const emailInput = document.querySelector("input[type='email']");
    const senhaInput = document.querySelector("input[type='password']");

    if (btnLogin) {
        btnLogin.addEventListener("click", () => {
            if (!emailInput.value || !senhaInput.value) {
                alert("Por favor, preencha o e-mail e a senha.");
                return;
            }

            alert("Login realizado com sucesso! Redirecionando...");
            if (window.location.pathname.includes("loginecoponto")) {
                window.location.href = "areaecoponto.html";
            } else {
                window.location.href = "perfil.html";
            }
        });
    }
});

