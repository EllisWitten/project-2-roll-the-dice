document.addEventListener('DOMContentLoaded', function(){
    let buttons = document.getElementsByTagName('img');

    for (let button of buttons){
        button.addEventListener('click', function(){
            if (this.getAttribute('data-type') === 'player-roll'){
            console.log('correct')
            } else {
                console.log('incorrect')
            }
        })
    }
})
function playGame(){

}
function caluclateDiceValue() {

}
function compareDiceValues() {

}
function incrementWins() {

}
function incrementLoses() {

}