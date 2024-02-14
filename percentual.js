const faturamentoPorEstado = {
    'SP': 67836.43,
    'RJ': 36678.66,
    'MG': 29229.88,
    'ES': 27165.48,
    'Outros': 19849.53
};

const valorTotalMensal = Object.values(faturamentoPorEstado).reduce((total, valor) => total + valor, 0);

for (const estado in faturamentoPorEstado) {
    const percentual = ((faturamentoPorEstado[estado] / valorTotalMensal) * 100).toFixed(2);
    console.log(`${estado}: ${percentual}%`);
}
