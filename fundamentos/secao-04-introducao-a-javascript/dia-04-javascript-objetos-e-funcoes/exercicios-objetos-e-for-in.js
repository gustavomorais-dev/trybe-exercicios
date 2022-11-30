/* Usando o objeto abaixo, faça os exercícios a seguir: */

let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};
//Resoluções

console.log('______________________________________ Exercício 1 ______________________________________');
/* Imprima no console uma mensagem de boas-vindas para a personagem acima, incluindo seu nome. Use a sintaxe meuObjeto.chave. Valor esperado no console:

Bem-vinda, Margarida 
*/

console.log('Bem vinda,', info.personagem);

// Fim
console.log('______________________________________ Exercício 2 ______________________________________');
/* Insira no objeto uma nova propriedade com o nome de chave ‘recorrente’ e o valor ‘Sim’ e, em seguida, imprima o objeto no console. Use a sintaxe meuObjeto['chave'] = valor. Valor esperado no console: 
{
personagem: 'Margarida',
origem: 'Pato Donald',
nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
recorrente: 'Sim'
} 
*/

info['recorrente'] = 'Sim';
console.log(info);

// Fim
console.log('______________________________________ Exercício 3 ______________________________________');
/* Faça um for/in que mostre todas as chaves do objeto. Valor esperado no console:
personagem
origem
nota
recorrente
*/

for (let key in info) {
    console.log(key);
}

//Fim
console.log('______________________________________ Exercício 4 ______________________________________');
/* Faça um novo for/in, mas agora mostre todos os valores das chaves do objeto. Valor esperado no console:
Margarida
Pato Donald
Namorada do personagem principal nos quadrinhos do Pato Donald
Sim
*/

for (let key in info) {
    console.log(info[key]);
}

//Fim