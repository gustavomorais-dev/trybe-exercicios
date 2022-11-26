/* Iremos utilizar esse array para realizar os próximos exercícios. */

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

/* 1 - Percorra o array imprimindo todos os valores nele contidos com a função console.log(); */
console.log("_________________ Exercício 1 _________________")

for (let number of numbers) {
    console.log(number);
}

/* 2 - Some todos os valores contidos no array e imprima o resultado; */
console.log("_________________ Exercício 2 _________________")

let soma1 = 0;

for (let number of numbers) {
    soma1 += number;
}

console.log(soma1)
