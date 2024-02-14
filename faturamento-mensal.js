const fs = require('fs');

function calcularEstatisticasFaturamento(faturamentoDiario) {
    const valoresFaturamento = faturamentoDiario.map(dia => dia.valor).filter(valor => valor !== 0);
    const diasNoMes = valoresFaturamento.length;
    const somaFaturamento = valoresFaturamento.reduce((total, valor) => total + valor, 0);
    const menorFaturamento = Math.min(...valoresFaturamento);
    const maiorFaturamento = Math.max(...valoresFaturamento);
    const mediaMensal = somaFaturamento / diasNoMes;
    const diasAcimaDaMedia = valoresFaturamento.filter(valor => valor > mediaMensal).length;

    return {
        menorFaturamento: menorFaturamento,
        maiorFaturamento: maiorFaturamento,
        diasAcimaDaMedia: diasAcimaDaMedia
    };
}

function lerArquivoJSON(caminhoArquivo) {
    try {
        const conteudoArquivo = fs.readFileSync(caminhoArquivo, 'utf8');
        const dadosJSON = JSON.parse(conteudoArquivo);
        return dadosJSON;
    } catch (erro) {
        console.error('Erro ao ler o arquivo JSON:', erro);
        return null;
    }
}

const caminhoArquivo = 'dados.json';

const faturamentoDiario = lerArquivoJSON(caminhoArquivo);

if (faturamentoDiario !== null) {
    const estatisticas = calcularEstatisticasFaturamento(faturamentoDiario);
    console.log("Menor faturamento:", estatisticas.menorFaturamento);
    console.log("Maior faturamento:", estatisticas.maiorFaturamento);
    console.log("Número de dias acima da média mensal:", estatisticas.diasAcimaDaMedia);
}
