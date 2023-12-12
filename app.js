let listaDeNumerosSorteados = [];
let numeroLimiteDeSorteios = 100;
let numeroSecreto = numeroAleatorio();

function numeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random()* numeroLimiteDeSorteios + 1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

    if (quantidadeDeElementosNaLista == numeroLimiteDeSorteios) {
        listaDeNumerosSorteados = [];
    }
    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return numeroAleatorio();
    }
    else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados)
        return numeroEscolhido;
    }
};
console.log(numeroSecreto);
let chutes = 1;

function exibirTexto(tag, texto) {
    let titulo = document.querySelector(tag);
    titulo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
};

function textoInicial() {
    exibirTexto('h1', 'JOGO DO NÚMERO SECRETO!');
    exibirTexto('p', `ESCOLHA UM NÚMERO DE 1 À ${numeroLimiteDeSorteios}`);
}

textoInicial();


function verificarChute() {
    let chute = document.querySelector('input').value;
    let tentativa = (chutes == 1) ? 'tentativa!' : 'tentativas!';
    let mensagem = `Você descobriu o número secreto! com ${chutes} ${tentativa}!`;
        if (numeroSecreto == chute)
            {exibirTexto('h1','ACERTOU!');
             exibirTexto('p', mensagem);
            document.getElementById('reiniciar').removeAttribute('disabled');
        }
        else {
            if(chute > numeroSecreto) {exibirTexto('p', 'O número secreto é menor!')}
            else{exibirTexto('p', 'O número secreto é maior!')};
            chutes ++;
            limparCampo();
        }      
};

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
};

function reiniciarJogo() {
    numeroSecreto = numeroAleatorio();
    chutes = 1;
    limparCampo();
    textoInicial();
    document.getElementById('reiniciar').setAttribute('disabled',true)
};
