import { conectaApi } from "./main.js";

const container_cards = document.querySelector('.container_cards')

export default function constroiCard(id, titulo, preco, imagem) {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
    <img class="card_img" src="${imagem}" alt="${titulo}">
    <h2 class="card_titulo">${titulo}</h2>
    <div class="card_alinhar">
        <p class="card_preco">R$ ${preco}</p>
        <p class="apagar_card" data-id="${id}"><i class="bi bi-trash3-fill"></i></p>
    </div>`
    container_cards.appendChild(card);
        
    return card;
}

async function listaProdutos() {
    try {
        const listaApi = await conectaApi.listaProdutos();
        listaApi.forEach(elemento => container_cards.appendChild(
            constroiCard(elemento.id, elemento.titulo, elemento.preco, elemento.imagem)))
    } catch {
        document.querySelector('.error').innerHTML = `<h2 class="error">Não foi possível carregar os produtos!</h2>`
    }
}

listaProdutos();