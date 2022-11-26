/* Iremos utilizar esse array para realizar os próximos exercícios. */

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

/* 1 - Percorra o array imprimindo todos os valores nele contidos com a função console.log(); */
console.log("_________________ Exercício 1 _________________");

for (let number of numbers) {
    console.log(number);
}

/* 2 - Some todos os valores contidos no array e imprima o resultado; */
console.log("_________________ Exercício 2 _________________");

let soma = 0;

for (let number of numbers) {
    soma += number;
}

console.log(soma);

/* 3 - Calcule e imprima a média aritmética dos valores contidos no array;

A média aritmética é o resultado da soma de todos os elementos dividido pelo número total de elementos. */
console.log("_________________ Exercício 3 _________________");

let media = soma/numbers.length

console.log(media);

/* 4 - Com base no código que acabou de gerar, faça com que, caso o valor final seja maior que 20, imprima a mensagem: “valor maior que 20”. Caso não seja, imprima a mensagem: “valor menor ou igual a 20”; */
console.log("_________________ Exercício 4 _________________");

if (media > 20) {
    console.log("Valor maior que 20")
} else {
    console.log("Valor menor ou igual a 20")
}