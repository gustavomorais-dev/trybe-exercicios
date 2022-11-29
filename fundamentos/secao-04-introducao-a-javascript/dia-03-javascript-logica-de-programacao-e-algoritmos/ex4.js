/* Um número primo é um número inteiro maior do que 1 que possui somente dois divisores, ou seja, é divisível por 1 e por ele mesmo. Sabendo disso, escreva um algoritmo que imprima no console o maior número primo entre 2 e 50. */

const number = 50;
let higherPrimeNumber = Number.NEGATIVE_INFINITY;
let numberOfDivisors;

for (let index = 2; index <= number; index += 1) {
    // Conta a quantidade de divisores que o index atual possui
    numberOfDivisors = 0;
    for (let divisor = 1; divisor <= index; divisor += 1) {
        if (index % divisor == 0) {
            numberOfDivisors += 1;
        }
    }
    // Verifica se o número testado é primo
    if (numberOfDivisors == 2) {
        // É primo, então vamos verificar se ele é o maior número primo entre os já testados
        if (index > higherPrimeNumber) {
            higherPrimeNumber = index;
        }
    }
}

console.log("O maior número primo entre 2 e " + number + " é " + higherPrimeNumber);