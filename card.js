/*Generador de cartas*/
/*Generador de cartas*/
/*Generador de cartas*/

/*Variables que cotendran los simbolos*/
let cards = ['♥', '♣', '♦', '♠'];
/*            0    1    2    3*/
let numbers = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];

function displayCard(){
    let singleCard = cards[Math.floor(Math.random() * cards.length)];
    let singleNumber = numbers[Math.floor(Math.random() * numbers.length)];
    
    /*se llaman las variables para los id*/
    let SymbolHead = document.querySelector('#SymbolHead');
    console.log("esto aparece: " + singleCard);
    let SymbolFooter = document.querySelector('#SymbolFooter');
    /*Se crean en el HTML*/
    if( singleCard == '♥' || singleCard == '♦'){
        document.querySelector("#SymbolHead").style.color = "red";
        document.querySelector("#SymbolFooter").style.color = "red";
    }
    if( singleCard == '♣' || singleCard == '♠'){
        document.querySelector("#SymbolHead").style.color = "black";
        document.querySelector("#SymbolFooter").style.color = "black";
    }
    
    document.querySelector("#SymbolBody").innerHTML = singleNumber;
    document.querySelector("#SymbolHead").innerHTML = singleCard;
    document.querySelector("#SymbolFooter").innerHTML = singleCard;
}