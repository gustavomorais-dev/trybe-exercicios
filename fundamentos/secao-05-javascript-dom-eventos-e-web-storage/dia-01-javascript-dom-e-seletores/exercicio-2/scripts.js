// Adquire os elementos

const paragraphs = document.getElementsByTagName('p');
const mainContent = document.getElementsByClassName('main-content');
const centerContent = document.getElementsByClassName('center-content');
const title = document.getElementsByClassName('title');

// Cria as funções

const writeSecondTagP = (text) => paragraphs[1].innerText = text;

const changeYellowSquareColor = (color) => mainContent[0].style.backgroundColor = color;

const changeRedSquareColor = (color) => centerContent[0].style.backgroundColor = color;

const fixH1 = (text) => title[0].innerText = text;

const upperCaseFirstTagP = () => paragraphs[0].innerText = paragraphs[0].innerText.toUpperCase();

const showTagPContents = () => {
    for (p of paragraphs) {
        console.log(p.innerText);
    }
};

// Chama as funções 

writeSecondTagP("Quero estar trabalhando como dev pleno e à caminho de me tornar dev sênior!");

changeYellowSquareColor('rgb(76,164,109)');

changeRedSquareColor('white');

fixH1('Desafio - JavaScript');

upperCaseFirstTagP();

showTagPContents();

