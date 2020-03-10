class Negociacao {

    constructor(data, quantidade, valor) {

        // Cria um novo objeto data para não ser uma referencia 
        // e permitir alteração no objeto externo
        this._data = new Date(data.getTime());
        this._quantidade = quantidade;
        this._valor = valor;

        // Congela o objeto para obter efeito somente leitura apos instanciado
        Object.freeze(this);
    }

    get volume() {
        return this._valor * this._quantidade;
    }

    // Retorna uma nova data baseada na data inicial para impedir alteração no dado original
    get data() {
        return new Date(this._data.getTime());
    }

    get quantidade() {
        return this._quantidade;
    }

    get valor() {
        return this._valor;
    }
} 