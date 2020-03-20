class NegociacaoService {

    obterNegociacoesDaSemana( cb ) {
        
        let xhr = new XMLHttpRequest();

        xhr.open('GET', 'negociacoes/semana');

        xhr.onreadystatechange = () => {

            if( xhr.readyState == 4 ) {
                if( xhr.status == 200 ) {
                    
                    cb(null, JSON.parse(xhr.responseText)
                        .map(item => new Negociacao( new Date(item.data), item.quantidade, item.valor )));

                } else {                    
                    console.log(xhr.responseText);  
                    cb('Não foi possível obter as negociações.', null);
                }
            }
        };

        xhr.send();
    }
}