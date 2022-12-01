/* Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.

Array de teste: [2, 3, 2, 5, 8, 2, 3];.

Valor esperado no retorno da função: 2. */

function mostRepeated(array) {
    let mostRepeatedInfos = [0, 0]; // [index, repetitions]
    for (let index in array) {
        // Aqui testamos quantas vezes o número se repete percorrendo toda a array para cada número
        let repetitions = 0;
        for (let indexTest in array) {
            if (array[index] === array[indexTest]) {
                repetitions += 1
            }
        }
        if (repetitions > mostRepeatedInfos[1]) {
            mostRepeatedInfos = [array[index], repetitions];
        }
    }
    return mostRepeatedInfos;
}

let mostRepeatedNumber = mostRepeated([2, 3, 2, 5, 8, 2, 3]);

console.log(mostRepeatedNumber[0], "com", mostRepeatedNumber[1], "repetições");