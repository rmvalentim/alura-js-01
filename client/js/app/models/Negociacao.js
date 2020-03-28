"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Negociacao = function () {
    function Negociacao(data, quantidade, valor) {
        _classCallCheck(this, Negociacao);

        // Cria um novo objeto data para não ser uma referencia 
        // e permitir alteração no objeto externo
        this._data = new Date(data.getTime());
        this._quantidade = quantidade;
        this._valor = valor;

        // Congela o objeto para obter efeito somente leitura apos instanciado
        Object.freeze(this);
    }

    _createClass(Negociacao, [{
        key: "equals",
        value: function equals(outraNegociacao) {
            return JSON.stringify(this) == JSON.stringify(outraNegociacao);
        }
    }, {
        key: "volume",
        get: function get() {
            return this._valor * this._quantidade;
        }

        // Retorna uma nova data baseada na data inicial para impedir alteração no dado original

    }, {
        key: "data",
        get: function get() {
            return new Date(this._data.getTime());
        }
    }, {
        key: "quantidade",
        get: function get() {
            return this._quantidade;
        }
    }, {
        key: "valor",
        get: function get() {
            return this._valor;
        }
    }]);

    return Negociacao;
}();
//# sourceMappingURL=Negociacao.js.map