/* Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.

Array de teste: ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];. 
Valor esperado no retorno da função: Fernanda.
*/

function biggestName(array) {
    let biggest = ['', Number.NEGATIVE_INFINITY];
    for (let index in array) {
        if (array[index].length > biggest[1]) {
            biggest[0] = array[index];
            biggest[1] = array[index].length;
        }
    }
    return biggest;
}

let biggest = biggestName(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']);

console.log(biggest[0], 'com', biggest[1], 'caracteres.');