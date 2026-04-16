document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll('.artigo-card');
    
    cards.forEach(card => {
        // Gera rotação aleatória entre -3 e 3 graus para o "caos" inicial
        const randomRot = (Math.random() * 6 - 3).toFixed(2);
        card.style.transform = `rotate(${randomRot}deg)`;
    });
});
