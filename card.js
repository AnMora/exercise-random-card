/*Generador de cartas*/
/*Generador de cartas*/
/*Generador de cartas*/

/*Variables que cotendran los simbolos*/
let cards = ['♥', '♣', '♦', '♠'];
let numbers = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];

function displayCard() {
    let singleCard = cards[Math.floor(Math.random() * cards.length)];
    let singleNumber = numbers[Math.floor(Math.random() * numbers.length)];
    let showCard = `${singleNumber}`;
    let Icon1 = `${singleCard}`;

    let SymbolHead = document.querySelector('#SymbolHead');
    let SymbolFooter = document.querySelector('#SymbolFooter');
    document.querySelector("#SymbolBody").innerHTML = showCard;
    document.querySelector("#SymbolHead").innerHTML = Icon1;
    document.querySelector("#SymbolFooter").innerHTML = Icon1;
    
}