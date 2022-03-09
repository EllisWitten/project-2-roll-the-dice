document.addEventListener('DOMContentLoaded', function(){
    let buttons = document.getElementsByTagName('img');

    for (let button of buttons){
        button.addEventListener('click', function(){
            if (this.getAttribute('data-type') === 'player-roll'){
            playGame();
            } else {
                console.log('incorrect')
            }
        })
    }
})
function playGame(){
    let pnum1 = Math.floor(Math.random()*6 + 1);
    let pnum2 = Math.floor(Math.random()*6 + 1);
    let cnum1 = Math.floor(Math.random()*6 + 1);
    let cnum2 = Math.floor(Math.random()*6 + 1);

    setTimeout(function(){changeCommandText(`Your first dice was ${pnum1} and your second dice was ${pnum2}`)}, 1000);

    let playerDiceValue = caluclateDiceValue(pnum1,pnum2); 
    let computerDiceValue = caluclateDiceValue(cnum1,cnum2);

    setTimeout(function(){changePlayerRoll(playerDiceValue)}, 1000);
    setTimeout(function(){changeCommandText('Lets see what the computer gets...')}, 5000);
    setTimeout(function(){changeCommandText(`Computers first dice was ${cnum1} and Computers second dice was ${cnum2}`)}, 1000);
    setTimeout(function(){changeComputerRoll(computerDiceValue)}, 1000);

}
function caluclateDiceValue(num1,num2) {
    let sum = num1 + num2;
    return sum;
}
function changeCommandText(string){
    document.getElementById('command-text').textContent = string;
}
function changePlayerRoll(num){
    document.getElementById('player-roll').textContent = num;
}
function changeComputerRoll(num){
    document.getElementById('computer-roll').textContent = num;
}
function compareDiceValues() {

}
function incrementWins() {

}
function incrementLoses() {

}