document.addEventListener("DOMContentLoaded", () => {
    const formCadastroPonto = document.querySelector("#cadastro-ecoponto form");

    if (formCadastroPonto) {
        formCadastroPonto.addEventListener("submit", (e) => {
            e.preventDefault();
            
            const nomePonto = document.getElementById("nome-ponto").value;
            alert(`Solicitação de cadastro para "${nomePonto}" enviada para análise da moderação!`);
            formCadastroPonto.reset();
        });
    }
});

