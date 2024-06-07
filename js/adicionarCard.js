import { conectaApi } from "./main.js";

const formulario = document.querySelector('.adc_cards_container_inputs')

async function adicionarCard(evento) {
    evento.preventDefault()

    const titulo = document.querySelector('.input__titulo').value
    const preco = document.querySelector('.input__preco').value
    const imagem = document.querySelector('.input__imagem').value

    try {
        await conectaApi.criaCard(titulo, preco, imagem)
    } catch (e) {
        alert(e)
    }
}

formulario.addEventListener('submit', evento => adicionarCard(evento))