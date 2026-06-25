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