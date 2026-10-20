document.addEventListener("DOMContentLoaded", () => {
    const btnRegistrarDescarte = document.querySelector("#registro-descarte .btn-registro");
    const tabelaHistorico = document.querySelector(".historico-descartes tbody");

    if (btnRegistrarDescarte && tabelaHistorico) {
        btnRegistrarDescarte.addEventListener("click", () => {
            const ponto = document.getElementById("ponto-visitado").value;
            const tipoSelect = document.getElementById("tipo-descarte");
            const tipoMaterial = tipoSelect.options[tipoSelect.selectedIndex].text;
            const quantidade = document.getElementById("quantidade-descarte").value;

            if (!ponto || !quantidade) {
                alert("Preencha todos os campos do registro de descarte!");
                return;
            }

            const novaLinha = document.createElement("tr");
            const dataAtual = new Date().toLocaleDateString("pt-BR");

            novaLinha.innerHTML = `
                <td>${dataAtual}</td>
                <td>${ponto}</td>
                <td>${tipoMaterial} (${quantidade})</td>
                <td>+20 pts</td>
                <td><span class="status-tag aprovado">Confirmado</span></td>
            `;

            tabelaHistorico.prepend(novaLinha);
            alert("Descarte registrado com sucesso! Seus pontos foram atualizados.");
            
            document.getElementById("form-descarte").reset();
        });
    }
});

