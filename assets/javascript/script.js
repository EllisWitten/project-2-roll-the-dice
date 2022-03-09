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
}
function caluclatePlayerDiceValue(pnum1,pnum2) {

}
function caluclatePlayerDiceValue(cnum1,cnum2) {

}
function compareDiceValues() {

}
function incrementWins() {

}
function incrementLoses() {

}