//Funções utilitárias
const obterElemento = (id) => document.getElementById(id);
//Função pura
export const valorNegativo = (valor) => valor < 0;

const formataMoeda = (valor) => valor.toFixed(2).replace('.', ',');

export const atualizarInterface = (gastoPorCategoria) => {
    const categorias = gastoPorCategoria.categorias;
    categorias.forEach(({nome, valor}) =>{
        const elemento = obterElemento(nome);
        elemento.textContent = `${nome}: R$ ${formataMoeda(valor)}`
    });

    const elementoTotal = obterElemento("total");
    elementoTotal.textContent = `Total: R$ ${formataMoeda(gastoPorCategoria.obterTotal())}`
} 