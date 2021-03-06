startGame();
let wins = 0;
let loses = 0;
let draws = 0;
function startGame(){
    changeCommandText('Roll your dice!');
    changeComputerRoll(0);
    changePlayerRoll(0);
document.addEventListener('DOMContentLoaded', function () {
    let buttons = document.getElementsByTagName('img');

    for (let button of buttons) {
        button.addEventListener('click', function() {
            if (this.getAttribute('data-type') === 'player-roll') {
                let dataType = this.getAttribute('data-type');
                playGame(dataType);
            } else {
                console.log('button clicked does not equal player roll')
            }
        })
    }
})
}

function playGame(dataType) {
    let pnum1 = Math.floor(Math.random() * 6 + 1);
    let pnum2 = Math.floor(Math.random() * 6 + 1);

    let commandText = document.getElementById('command-text').textContent;
    let playGame1 = (dataType === 'player-roll') && (commandText === 'Roll your dice!');


    console.log(playGame1);
    if (playGame1) {
        startPlayerRoll(pnum1, pnum2);
    } else{
        console.log('button clicked does not equal player roll or command text does not equal Roll your dice!')
    }

}

function startPlayerRoll(num1, num2) {
    let sum = caluclateDiceValue(num1, num2);

    changeCommandText(`your first dice was ${num1} and your second dice was ${num2}`);
    changeCommandText('Roll the Computers dice');
    changePlayerRoll(sum);
    waitForPlayerClick();
}

function waitForPlayerClick() {
    console.log('waitForPlayerClick has started');
    let buttons = document.getElementsByTagName('img');

    for (let button of buttons) {
        button.addEventListener('click', function () {
            if (this.getAttribute('data-type') == 'computer-roll') {
                let dataType = this.getAttribute('data-type');
                startComputerRoll(dataType);
            } else {
                console.log('button clciked does not equal to computer roll')
                waitForPlayerClick();
            }
        })
    }
}

function startComputerRoll(dataType) {
    console.log('computer roll has started')
    let cnum1 = Math.floor(Math.random() * 6 + 1);
    let cnum2 = Math.floor(Math.random() * 6 + 1);
    console.log('numbers have been created')
    let playerValue = parseInt(document.getElementById('player-roll').textContent);
    let playGame2 = (dataType === 'computer-roll');

    if (playGame2) {
        let computerSum = caluclateDiceValue(cnum1, cnum2);
        let playerSum = parseInt(document.getElementById('player-roll').textContent);

        changeCommandText(`Computers first dice was ${cnum1} and Computers second dice was ${cnum2}`);
        changeComputerRoll(computerSum);
        console.log(computerSum, playerSum);
        compareDiceValues(computerSum, playerSum);
    } else{
        console.log('data-type is not equal to computer roll and no games have been played')
    }
}

function caluclateDiceValue(num1, num2) {
    let sum = num1 + num2;
    return sum;
}

function changeCommandText(string) {
    document.getElementById('command-text').textContent = string;
}

function changePlayerRoll(num) {
    document.getElementById('player-roll').textContent = num;
}

function changeComputerRoll(num) {
    document.getElementById('computer-roll').textContent = num;
}

function compareDiceValues(csum, psum) {
    if (csum > psum) {
        incrementLoses();
    } else if (csum < psum) {
        incrementWins();
    } else {
        displayDraw();
    }
}

function incrementWins() {
    let score = parseInt(document.getElementById('wins').textContent);
    document.getElementById('wins').textContent = ++score;
    wins = wins ++;
    console.log('wins'+wins);
    changeCommandText('You win!');
    startGame();
}

function incrementLoses() {
    let loses = parseInt(document.getElementById('loses').textContent);
    document.getElementById('loses').textContent = ++loses;
    loses = loses++;
    console.log('loses'+loses);
    changeCommandText('You Lose!');
    startGame();
}

function displayDraw() {
    changeCommandText('Draw!');
    draws = draws++;
    startGame();
    console.log('draws'+draws);
}