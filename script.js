document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll('.artigo-card');

    cards.forEach(card => {
        // Gera uma rotação aleatória entre -4 e 4 graus
        const randomRotation = (Math.random() * 8 - 4).toFixed(2);
        
        // Aplica a rotação inicial (o "caos")
        card.style.transform = `rotate(${randomRotation}deg)`;

        // Opcional: Adiciona um leve delay aleatório na transição para parecer mais orgânico
        card.style.transitionDelay = `${(Math.random() * 0.2).toFixed(2)}s`;
    });
});

// Futura integração para o Painel Administrativo
console.log("Arquivos Psicanálise: Sistema Pronto.");