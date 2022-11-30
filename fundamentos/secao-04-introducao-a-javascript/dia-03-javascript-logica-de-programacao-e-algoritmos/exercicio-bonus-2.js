/* Faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base. Por exemplo:
n = 5

*
**
***
****
*****                   

*/

const n = 5;
let line = '';

for (let indexLine = 1; indexLine <= n; indexLine += 1) {
    for (let indexColumn = 1; indexColumn <= indexLine; indexColumn += 1) {
        line += '*';
    }
    console.log(line);
    line = '';
}