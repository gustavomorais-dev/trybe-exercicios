/* Usando o objeto abaixo, faça os exercícios a seguir: */

let leitor = {
    nome: 'Julia',
    sobrenome: 'Pessoa',
    idade: 21,
    livrosFavoritos: [
        {
            titulo: 'O Pior Dia de Todos',
            autor: 'Daniela Kopsch',
            editora: 'Tordesilhas',
        },
    ],
};
//Resoluções

console.log('______________________________________ Exercício 1 ______________________________________');
/* Acesse as chaves nome, sobrenome e titulo, que está dentro da chave livrosFavoritos, e faça um console.log no seguinte formato: “O livro favorito de Julia Pessoa se chama ‘O Pior Dia de Todos’”.
*/

console.log("O livro favorito de", leitor.nome, "se chama '" + leitor.livrosFavoritos[0].titulo + "'");

// Fim