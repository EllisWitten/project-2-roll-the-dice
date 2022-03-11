document.addEventListener('DOMContentLoaded', function () {
    let buttons = document.getElementsByTagName('img');

    for (let button of buttons) {
        button.addEventListener('click', function() {
            if (this.getAttribute('data-type') === 'player-roll') {
                let dataType = this.getAttribute('data-type');
                rollPlayersDice(dataType);
            } else if (this.getAttribute('data-type') === 'computer-roll' && (document.getElementById('command-text').innerHTML === 'Roll the Computers dice')){
                let dataType = this.getAttribute('data-type');
                rollComputersDice(dataType);
            } else{
                console.log('no values are met');
                console.log (this.getAttribute('data-type'));
                console.log(document.getElementById('command-text').innerHTML);
            }
        })
    }
})
function rollPlayersDice(dataType) {
    let pnum1 = Math.floor(Math.random() * 6 + 1);
    let pnum2 = Math.floor(Math.random() * 6 + 1);

    let commandText = document.getElementById('command-text').textContent;
    let playerRoll = (dataType === 'player-roll') && (commandText === 'Roll your dice!');

    if (playerRoll) {
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
}
function rollComputersDice(dataType){
    let cnum1 = Math.floor(Math.random() * 6 + 1);
    let cnum2 = Math.floor(Math.random() * 6 + 1);
    console.log(dataType);

    let commandText = document.getElementById('command-text').textContent;
    console.log(commandText);
    let computerRoll = (dataType === 'computer-roll') && (commandText === 'Roll the Computers dice');

    if (computerRoll) {
        changeComputerScore(cnum1, cnum2);
    } else{
        console.log('button clicked does not equal player roll or command text does not equal Roll your dice!')
    }
}
function changeComputerScore(num1, num2) {
    let csum = caluclateDiceValue(num1, num2);

    changeCommandText(`Computers first dice was ${num1} and Computers second dice was ${num2}`);
    changeComputerRoll(csum);
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