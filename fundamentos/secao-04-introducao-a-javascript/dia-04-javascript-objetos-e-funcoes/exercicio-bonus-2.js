/* Crie uma função chamada arrayOfNumbers que receberá a variável vector como parâmetro.
let vector = [[1, 2], [3,4,5,6], [7,8,9,10]];
Através de um loop for, percorra essa variável, busque os números pares e os adicione a um novo array, que deverá ser retornado ao final pela função. */

let vector = [[1, 2], [3, 4, 5, 6], [7, 8, 9, 10, 10]];

function arrayOfNumbers(vector) {
    let evenArray = [];
    for (index = 0; index < vector.length; index += 1) {
        for (indexInside = 0; indexInside < vector[index].length; indexInside += 1) {
            if (vector[index][indexInside] % 2 === 0) {
                if (!evenArray.includes(vector[index][indexInside])) { // Essa condição impede que números iguais sejam inseridos mais de uma vez (bônus :))
                    evenArray.push(vector[index][indexInside]);
                }
            }
        }
    }
    return evenArray;
}

console.log(arrayOfNumbers(vector));