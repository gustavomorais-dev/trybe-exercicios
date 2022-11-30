/* Crie uma função que receba um array de inteiros e retorne o índice do maior valor.

Array de teste: [2, 3, 6, 7, 10, 1];.

Valor esperado no retorno da função: 4. */

function higherValue(array) {
    let high = Number.NEGATIVE_INFINITY;
    for (let index in array) {
        if (array[index] > high) {
            high = index;
        }
    }
    return high;
}

console.log(higherValue([2, 3, 6, 7, 10, 1]));