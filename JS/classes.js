
export class categoria{
    // Encapsulemento de dados privados
    #nome
    #valor
    constructor(nome){
        this.#nome = nome;
        this.#valor = 0;
    }
    // Uso de getters
    get valor(){
        return this.valor;
    }
    get nome(){
        return this.nome;
    }
    // Manipulação de estado
    adicionarvalor(valor){
        this.valor += parseFloat(valor);
    }
}

export class listaDeGastosPorCategoria{
    #categorias;
    //Rest operator
    constructor(... categorias){
        this.#categorias = categorias;
    }
    get categorias(){
        return this.#categorias
    }
    obterCategoriaPorNome(nome){
        //Programação funcional
        return this.#categorias.find((categoria)=> categoria.nome == nome);
    }
    obterTotal(){
        //Redução de dados com reduce
        return this.#categorias.reduce((total, categoria)=> total + categoria.valor, 0);
    }
}