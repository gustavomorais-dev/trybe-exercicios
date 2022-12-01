/* Faça um programa que receba uma string em algarismos romanos e retorne o número que a string representa.

Atenção! Esse exercício já apareceu no processo seletivo de uma grande multinacional!

Dicas:

Uma string é um array de caracteres, então cada elemento do array é uma letra.
O valor de cada numeral romano é:
| I   | 1    |
| --- | ---- |
| IV  | 4    |
| V   | 5    |
| IX  | 9    |
| X   | 10   |
| XL  | 40   |
| L   | 50   |
| XC  | 90   |
| C   | 100  |
| CD  | 400  |
| D   | 500  |
| CM  | 900  |
| M   | 1000 |
Que tal criar um objeto que associe cada letra a um numeral para fácil consulta?

Atenção! Quando você tem um número pequeno à direita de um número grande, eles devem ser somados. Exemplo: XI = 10 + 1 = 11. No entanto, se o número pequeno está à esquerda de um número maior que ele, ele deve ser subtraído. Exemplo: IX = 10 - 1 = 9.
*/

const dictionary = {
    I:  1,
    V:  5,
    X:  10,
    L:  50,
    C:  100,
    D:  500,
    M:  1000
}

//Função principal
function romanToNumber(roman) {
    let romanArray = roman.split("");
    //Primeiro convertemos as letras em números
    for (let index = 0; index < romanArray.length; index += 1) {
        romanArray[index] = findRomanInDictionary(romanArray[index])
    }
    //Agora processamos os números para fazer a conversão final
    let numberConverted = 0;
    for (let index = 0; index < romanArray.length; index += 1) {
        if (romanArray[index] < romanArray[index+1]) {
            numberConverted -= romanArray[index];
        } else {
            numberConverted += romanArray[index];
        }
    }
    return numberConverted;
}

//Esta é a função responsável por buscar um algarismo romano no dicionário e retornar o número correspondente
function findRomanInDictionary(roman) {
    for (let key in dictionary){
        if (key == roman){
            return dictionary[key]; // Retornamos o número correspondente ao encontrá-lo
        }
    }
}


console.log(romanToNumber('MCMXXI'));