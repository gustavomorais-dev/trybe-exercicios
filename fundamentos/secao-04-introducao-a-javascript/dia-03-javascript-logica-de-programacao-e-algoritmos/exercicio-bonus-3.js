/* Agora inverta o lado do triângulo. Por exemplo:

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
        for (let indexSpace = 1; indexSpace <= n - indexLine; indexSpace += 1) {
            if (!line.includes('*')) {
            line += ' '
            }
        }
        line += '*';
    }
    console.log(line);
    line = '';
}