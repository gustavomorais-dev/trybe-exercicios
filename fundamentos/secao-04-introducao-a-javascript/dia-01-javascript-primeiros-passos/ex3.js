/* Utilize if/else para escrever um código que retorne o maior de três números. Defina, no começo do seu código, três constantes com os valores que serão comparados. */

const a = 12;
const b = 121;
const c = 21;

if (a > b && a > c){
    console.log("a (" + a + ") é maior que b (" + b + ") e c (" + c + ")");
} else if (b > a && b > c) {
    console.log("b (" + b + ") é maior que a (" + a + ") e c (" + c + ")");
} else if (c > a && c > b) {
    console.log("c (" + c + ") é maior que b (" + b + ") e a (" + a + ")");
}