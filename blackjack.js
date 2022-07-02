
let cards = [];
let sum=0;
let hasBlackjack = false;
let isAlive = false;
let message = "";


let messageEl = document.getElementById('message-el');
console.log(messageEl);
let sumEl = document.querySelector('#sum-el');
let player = {
     Name : "Per",
     Chips : 200
};
let playerEl = document.getElementById('player-el');
let cardsEl = document.getElementById('cards-el');
playerEl.textContent = player.Name + ": $" + player.Chips;

function startGame(){
    isAlive = true;
    let firstcard = getRandomCard();
    let secondcard = getRandomCard();
    cards = [firstcard,secondcard];
    sum = firstcard+secondcard;
    renderGame();
}
function getRandomCard(){
    let random = Math.floor(Math.random()*13)+1;
    if(random>10){
        return 10;
    }else if(random === 1){
        return 11;
    }else{
        return random;
    }
}
function renderGame(){
    cardsEl.textContent = "Cards: "
    for(var i=0;i<cards.length;i++){
        cardsEl.textContent += cards[i] + " ";
    }
    sumEl.textContent = "Sum: " + sum;
    if(sum <= 20){
        message = "Do you want to draw another card?";
    }else if(sum===21){
        message = "You've  got Blackjack";
        hasBlackjack=true;
    }else{
        message = "You're out of the game!";
        isAlive=false;
    }
    // console.log(message);
    messageEl.textContent = message;
}
function newcard(){
    if(isAlive && !hasBlackjack){
        let card = getRandomCard();
        sum += card;
        cards.push(card);
        renderGame();
    }
    
}
