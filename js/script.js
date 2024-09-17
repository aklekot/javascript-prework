var argMoveId, argPlayerMove, argComputerMove, computerMove, playerMove, randomNumber, playerInput;
var playerResult = 0, computerResult = 0;
/* Funkcja zapisująca odpowiedni tekst w zależność o d wartości 1-3 */

function getMoveName(argMoveId) {
    console.log('wywołano funkcję getMoveName z argumentem: ' + argMoveId);
    if (argMoveId == 1) {
        return 'kamień';
    } else if (argMoveId == 2) {
        return 'papier';
    } else if (argMoveId == 3) {
        return 'nożyce';
    } 
}

/* Funkcja wyświetlające info kto wygrał  */
function displayResult(argPlayerMove, argComputerMove) {
    printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);
    // console.log('wywołano funkcję displayResults z argumentami: ' + argPlayerMove + ', ' + argComputerMove);
    if (argPlayerMove == 'papier' && argComputerMove == 'kamień') {
        printMessage('Wygrywasz!');
        playerResult += 1;
    } else if (argPlayerMove == 'kamień' && argComputerMove == 'nożyce') {
        printMessage('Wygrywasz!');
        playerResult += 1;
    } else if (argPlayerMove == 'nożyce' && argComputerMove == 'papier') {
        printMessage('Wygrywasz!');
        playerResult += 1;
    } else if (argPlayerMove == argComputerMove) {
        printMessage('Remis!');
    } else {
        printMessage('Przegrywasz :(');
        computerResult +=1;
    }
}

var argButtonName, buttonRock, buttonPaper, buttonScissors;

/* Uruchamiamy buttony.*/
function buttonClicked(argButtonName) {
    clearMessages();
    playerMove = argButtonName;
    console.log('ruch gracza to: ' + playerMove);
    randomNumber = Math.floor(Math.random() * 2 + 1);
    computerMove = getMoveName(randomNumber);
    console.log('ruch komputera to: ' + computerMove);
    displayResult(playerMove, computerMove);
    console.log('punkty gracza: ' +playerResult);
    console.log('punkty kompa: ' +computerResult);
    document.getElementById("result").innerHTML = playerResult + " - " + computerResult;
}
buttonRock = document.getElementById('button-rock');
buttonRock.addEventListener('click', function () { buttonClicked('kamień'); });
buttonPaper = document.getElementById('button-paper');
buttonPaper.addEventListener('click', function () { buttonClicked('papier'); });
buttonScissors = document.getElementById('button-scissors');
buttonScissors.addEventListener('click', function () { buttonClicked('nożyce'); });