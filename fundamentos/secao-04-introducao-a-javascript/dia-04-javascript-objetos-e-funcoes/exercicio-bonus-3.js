/* A partir do array de frutas basket, retorne um objeto que contenha o nome da fruta como chave e a quantidade de vezes que ela aparece no array como valor. Por exemplo, o array [‘Melancia’, ‘Abacate’, ‘Melancia’, ‘Melancia’, ‘Uva’], deverá retornar { Melancia: 3, Abacate: 1, Uva: 1 } quando passado como argumento para a função.

Em seguida, imprima esse resultado na tela com uma mensagem no seguinte formato: Sua cesta possui: x Melancias, x Abacates... */

const basket = [
    'Melancia', 'Abacate', 'Melancia', 'Melancia', 'Uva', 'Laranja',
    'Jaca', 'Pera', 'Melancia', 'Uva', 'Laranja', 'Melancia',
    'Banana', 'Uva', 'Pera', 'Abacate', 'Laranja', 'Abacate',
    'Banana', 'Melancia', 'Laranja', 'Laranja', 'Jaca', 'Uva',
    'Banana', 'Uva', 'Laranja', 'Pera', 'Melancia', 'Uva',
    'Jaca', 'Banana', 'Pera', 'Abacate', 'Melancia', 'Melancia',
    'Laranja', 'Pera', 'Banana', 'Jaca', 'Laranja', 'Melancia',
    'Abacate', 'Abacate', 'Pera', 'Melancia', 'Banana', 'Banana',
    'Abacate', 'Uva', 'Laranja', 'Banana', 'Abacate', 'Uva',
    'Uva', 'Abacate', 'Abacate', 'Melancia', 'Uva', 'Jaca',
    'Uva', 'Banana', 'Abacate', 'Banana', 'Uva', 'Banana',
    'Laranja', 'Laranja', 'Jaca', 'Jaca', 'Abacate', 'Jaca',
    'Laranja', 'Melancia', 'Pera', 'Jaca', 'Melancia', 'Uva',
    'Abacate', 'Jaca', 'Jaca', 'Abacate', 'Uva', 'Laranja',
    'Pera', 'Melancia', 'Jaca', 'Pera', 'Laranja', 'Jaca',
    'Pera', 'Melancia', 'Jaca', 'Banana', 'Laranja', 'Jaca',
    'Banana', 'Pera', 'Abacate', 'Uva',
];


// Função responsável por retornar um objeto com a cesta "formatada" como foi pedido
function fruitCounter(basket) {
    let object = {};
    for (let fruit of basket) {
        if (typeof object[fruit] != "undefined") {
            object[fruit] += 1;
        } else {
            object[fruit] = 1;
        }
    }
    return object;
}

// Função responsável por formar a string que será impressa
function basketInfos(object) {
    let string = 'Sua cesta possui: ';
    let keyPosition = 1; // ** Apenas para formatar o final da string com "."
    for (key in object) {
        string += object[key] + " " + key + "s";
        // ** Apenas para formatar o final da string com "."         --------
        if (keyPosition < Object.keys(object).length) {
            string += ", ";
        } else {
            string += ".";
        }
        keyPosition += 1;
        // ** Apenas para formatar o final da string com "."         --------
    }
    return string;
}

const formattedBasket = fruitCounter(basket);

console.log(basketInfos(formattedBasket));
