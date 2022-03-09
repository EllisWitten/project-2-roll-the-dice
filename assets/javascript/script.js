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

    document.getElementById('command-text').textContent = `Your first dice was ${pnum1} and your second dice was ${pnum2}`;

    let playerDiceValue = caluclateDiceValue(pnum1,pnum2); 
    console.log(playerDiceValue);
    let computerDiceValue = caluclateDiceValue(cnum1,cnum2);
    console.log(computerDiceValue);
}
function caluclateDiceValue(num1,num2) {
    let sum = num1 + num2;
    return sum;
}
function compareDiceValues() {

}
function incrementWins() {

}
function incrementLoses() {

}