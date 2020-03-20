class NegociacaoService {

    constructor() {

        this._http = new HttpService();
    }

    obterNegociacoesDaSemana() {

        return new Promise((resolve, reject) => {

            this._http
                .get('negociacoes/semana')
                .then(negociacoes => {
                    console.log(negociacoes);
                    resolve(negociacoes.map(item => new Negociacao( new Date(item.data), item.quantidade, item.valor )))
                })
                .catch(erro => {                    
                    console.log(erro);
                    reject('Não foi possível importar as negociações da semana.');
                });    
        });   
    }

    obterNegociacoesDaSemanaAnterior() {
            
        return new Promise((resolve, reject) => {

            let xhr = new XMLHttpRequest();

            xhr.open('GET', 'negociacoes/anterior');

            xhr.onreadystatechange = () => {

                if( xhr.readyState == 4 ) {
                    if( xhr.status == 200 ) {
                        
                        resolve(JSON.parse(xhr.responseText)
                            .map(item => new Negociacao( new Date(item.data), item.quantidade, item.valor )));

                    } else {                    
                        console.log(xhr.responseText);  
                        reject('Não foi possível obter as negociações da semana anterior.');
                    }
                }
            };

            xhr.send();
        });  
    }

    obterNegociacoesDaSemanaRetrasada() {
            
        return new Promise((resolve, reject) => {

            let xhr = new XMLHttpRequest();

            xhr.open('GET', 'negociacoes/retrasada');

            xhr.onreadystatechange = () => {

                if( xhr.readyState == 4 ) {
                    if( xhr.status == 200 ) {
                        
                        resolve(JSON.parse(xhr.responseText)
                            .map(item => new Negociacao( new Date(item.data), item.quantidade, item.valor )));

                    } else {                    
                        console.log(xhr.responseText);  
                        reject('Não foi possível obter as negociações da semana retrasada.');
                    }
                }
            };

            xhr.send();
        });  
    }

}