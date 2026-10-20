document.addEventListener("DOMContentLoaded", () => {
    const formAgendar = document.querySelector("#registro-descarte form");

    if (formAgendar) {
        formAgendar.addEventListener("submit", (e) => {
            e.preventDefault();
            
            const nome = document.getElementById("nome-solicitante").value;
            const data = document.getElementById("data-coleta").value;

            if (!nome || !data) {
                alert("Por favor, preencha os campos obrigatórios.");
                return;
            }

            alert(`Obrigado, ${nome}! Sua solicitação de coleta para o dia ${data} foi enviada com sucesso.`);
            formAgendar.reset();
        });
    }
});

