document.addEventListener("DOMContentLoaded", () => {
    const botoesAprovar = document.querySelectorAll("button");

    botoesAprovar.forEach(botao => {
        if (botao.textContent.trim() === "Aprovar") {
            botao.addEventListener("click", (e) => {
                const linha = e.target.closest("tr");
                const statusTag = linha.querySelector(".status-tag");
                
                statusTag.className = "status-tag aprovado";
                statusTag.style.backgroundColor = "";
                statusTag.style.color = "";
                statusTag.textContent = "Confirmado";
                
                e.target.textContent = "Aprovado";
                e.target.style.backgroundColor = "#ccc";
                e.target.disabled = true;

                alert("Solicitação de coleta aprovada com sucesso!");
            });
        }
    });

    const botoesSalvar = document.querySelectorAll("button[type='submit'], .secao-form button");
    botoesSalvar.forEach(btn => {
        btn.addEventListener("click", (e) => {
            if(btn.textContent.includes("Salvar") || btn.textContent.includes("Atualizar")) {
                e.preventDefault();
                alert("Alterações salvas com sucesso no sistema do EcoPonto!");
            }
        });
    });
});

