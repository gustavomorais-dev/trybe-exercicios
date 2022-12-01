/* Crie uma função que receba uma frase como parâmetro e retorne a maior palavra da frase. 
Exemplo:
longestWord('Antônio foi no banheiro e não sabemos o que aconteceu') // retorna 'aconteceu' */

const longestWord = (phrase) => {
    let longest = '';
    for (let word of phrase.split(' ')) {
        if (word.length > longest.length) {
            longest = word;
        }
    }
    return longest;
} 

console.log(longestWord('Antônio foi no banheiro e não sabemos o que aconteceu'));