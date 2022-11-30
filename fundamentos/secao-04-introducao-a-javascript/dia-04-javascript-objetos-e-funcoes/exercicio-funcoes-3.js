/* Crie uma função que receba um array de inteiros e retorne o índice do menor valor.

Array de teste: [2, 4, 6, 7, 10, 0, -3];.

Valor esperado no retorno da função: 6. */

function lowerValue(array) {
    let lower = Number.POSITIVE_INFINITY;
    for (let index in array) {
        if (array[index] < lower) {
            lower = index;
        }
    }
    return lower;
}

console.log(lowerValue([2, 4, 6, 7, 10, 0, -3]));