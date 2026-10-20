document.addEventListener("DOMContentLoaded", () => {
    const filtroCidade = document.getElementById("filtro-cidade");
    const mapaPlaceholder = document.querySelector(".mapa-placeholder");

    if (filtroCidade && mapaPlaceholder) {
        filtroCidade.addEventListener("change", (e) => {
            const cidadeSelecionada = e.target.options[e.target.options.selectedIndex].text;
            mapaPlaceholder.innerHTML = `📍 Carregando EcoPontos para: <strong>${cidadeSelecionada}</strong>...`;
            
            setTimeout(() => {
                mapaPlaceholder.innerHTML = `✅ EcoPontos carregados com sucesso para <strong>${cidadeSelecionada}</strong>! (Simulação de Mapa Interativo)`;
            }, 1000);
        });
    }
});

