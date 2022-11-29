/* Considere o array de strings abaixo:
let array = ['java', 'javascript', 'python', 'html', 'css'];
Utilize a estrutura de repetição for para escrever dois algoritmos: um que imprima no console a maior palavra desse array e outro que imprima a menor. Considere o número de caracteres de cada palavra. */

let array = ['java', 'javascript', 'python', 'html', 'css'];
let smallestWord = ['', Number.POSITIVE_INFINITY];
let biggestWord = ['', Number.NEGATIVE_INFINITY];

for (let index = 0; index < array.length; index += 1) {
   if (array[index].length < smallestWord[1]) {
        smallestWord[0] = array[index];
        smallestWord[1] = array[index].length;
   }
   if (array[index].length > biggestWord[1]) {
        biggestWord[0] = array[index];
        biggestWord[1] = array[index].length;
   }
}

console.log("A menor palavra é '" + smallestWord[0] + "', com " + smallestWord[1] + " letras.");
console.log("A maior palavra é '" + biggestWord[0] + "', com " + biggestWord[1] + " letras.");