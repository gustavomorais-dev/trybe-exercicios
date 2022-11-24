/* Utilize if/else para escrever um código que defina três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false, caso contrário. Se algum ângulo for inválido, você deve retornar uma mensagem de erro.
Para os ângulos serem de um triângulo válido, a soma dos três deve ser 180 graus.

Um ângulo será considerado inválido se não tiver um valor positivo. */

const a = 60;
const b = 60;
const c = 60;

if (a + b + c == 180) {
    console.log("true : Os ângulos representam um triângulo.");
} else {
    console.log("false : Os ângulos  não representam um triângulo.");
}