//Modularização (ES modules)
import { categoria, listaDeGastosPorCategoria } from "./classes.js";
import { valorNegativo, atualizarInterface } from "./util.js";
// POO
const gastoPorCategoria = new listaDeGastosPorCategoria(
    new categoria ("alimentacao"),
    new categoria ("transporte"),
    new categoria ("lazer"),
    new categoria ("outros"),
)
//Manipulação do DOM
const formulario = document.querySelector("form");
formulario.addEventListener('submit', (evento) => {
    //Prevenção do comportamento
    evento.preventDefault();

    const valorInformado = parseFloat(formulario.elements.valor.value);
    const categoriaInformada = formulario.elements.categoria.value;

    if(valorNegativo(valorInformado)){
        alert("Valor inválido! o valor não pode ser negativo.");
        return;
    }
    const categoria = gastoPorCategoria.obterCategoriaPorNome(categoriaInformada);
    console.log(categoria);
    categoria.adicionarValor(valorInformado);

    atualizarInterface(gastoPorCategoria);
    formulario.reset();
})