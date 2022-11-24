/* Utilize if/else para escrever um código que defina três números em constantes e retorne true se pelo menos uma das três for ímpar. Caso contrário, ele deve retornar false.
Bonus: use somente um if. */

const a = Math.round((Math.random() * 100));
const b = Math.round((Math.random() * 100));
const c = Math.round((Math.random() * 100));

console.log(a + " , " + b + " , " + c)

if (a % 2 != 0 || b % 2 != 0 || c % 2 != 0 ){
    console.log("true : Pelo menos um dos números é ímpar")
} else {
    console.log("false : Nenhum dos números é ímpar")
}