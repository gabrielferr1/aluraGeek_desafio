async function listaProdutos() {
    const conexao = await fetch("http://localhost:3000/produtos");
    const conexaoConvertida = await conexao.json();

    return conexaoConvertida;
}

async function criaCard(titulo, preco, imagem) {
    const conexao = await fetch("http://localhost:3000/produtos", {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            titulo: titulo,
            preco: preco, 
            imagem: imagem
        })
    });

    if (!conexao.ok) { 
        throw new Error("Não foi possível enviar os produtos!")
    }

    const conexaoConvertida = conexao.json();

    return conexaoConvertida;
}

async function excluirProduto(id) {
    const conexao = await fetch(`http://localhost:3000/produtos/${id}`, {
        method: "DELETE"
    });

    if (!conexao.ok) {
        throw new Error("Não foi possível excluir o produto!");
    }
}

export const conectaApi = {
    listaProdutos,
    criaCard,
    excluirProduto
}

const esconderCardAdicionar = document.querySelector('#esconderCardAdicionar'); 
const mostrarCardAdicionar = document.querySelector('#mostrarCardAdicionar');

mostrarCardAdicionar.addEventListener('click', () => {
    document.querySelector('.adicionar_cards').style.display = 'flex';
});

esconderCardAdicionar.addEventListener('click', () => {
    document.querySelector('.adicionar_cards').style.display = 'none';
});
