document.addEventListener("DOMContentLoaded", () => {
    console.log("Página Inicial carregada com sucesso.");
    
    const botoes = document.querySelectorAll(".btn-principal");
    botoes.forEach(botao => {
        botao.addEventListener("click", (e) => {
            console.log(`Navegando para: ${botao.getAttribute("href")}`);
        });
    });
});

