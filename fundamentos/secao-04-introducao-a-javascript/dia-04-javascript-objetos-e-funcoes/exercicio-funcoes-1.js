/* Crie uma função que receba uma string e retorne true se for um palíndromo, ou false, se não for.

Exemplo de palíndromo: arara

verificaPalindrome('arara')

Retorno esperado: true
verificaPalindrome('desenvolvimento')

Retorno esperado: false */

function verificaPalindrome(word) {
    // Vamos reescrever a palavra invertida em outra string e depois compará-las
    let compare = '';
    for (let index = word.length - 1; index >= 0; index -= 1) {
        compare += word[index];
    }
    if (word === compare) {
        return true;
    } else {
        return false;
    }
}

console.log(verificaPalindrome('arara'));
console.log(verificaPalindrome('desenvolvimento'));