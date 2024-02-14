const minhaString = "string invertida";

function inverterString(string) {
    let novaString = '';
    for (let i = string.length - 1; i >= 0; i--) {
        novaString += string[i];
    }
    return novaString;
}

const stringInvertida = inverterString(minhaString);
console.log("String invertida:", stringInvertida);
