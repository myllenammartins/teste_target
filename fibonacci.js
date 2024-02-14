function verificaSequenciaFibonacci(numero) {
    let anterior = 0;
    let atual = 1;
    let proximo;

    while (atual < numero) {
        proximo = anterior + atual;
        anterior = atual;
        atual = proximo;
    }

    if (atual === numero) {
        return `${numero} pertence à sequência de Fibonacci.`;
    } else {
        return `${numero} não pertence à sequência de Fibonacci.`;
    }
}

const numeroInformado = 13;
console.log(verificaSequenciaFibonacci(numeroInformado));
