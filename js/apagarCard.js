import { conectaApi } from "./main.js";

document.addEventListener('DOMContentLoaded', () => {
    const container_cards = document.querySelector('.container_cards');

    container_cards.addEventListener('click', async (evento) => {
        if (evento.target.closest('.apagar_card')) {
            const btnApagar = evento.target.closest('.apagar_card');
            const id = btnApagar.getAttribute('data-id');
            const card = btnApagar.closest('.card');

            try {
                await conectaApi.excluirProduto(id);
                card.remove();
            } catch (error) {
                alert('Erro ao excluir o produto')
                console.error("Erro ao excluir o produto: ", error);
            }
        }
    });
});
