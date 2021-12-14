console.clear();
let turn = 0;
let board = [];
let winsPlayer1 = 0;
let winsPlayer2 = 0;
let matches = 0;

const btnPressed = (e, pos) => {
    turn ++;
    const btn = e.target;
    btn.className += turn % 2 ? ' ticButton' : ' tacButton';
    board[pos] = ((turn-1) % 2) + 1;
    if (winner()) { //Hay ganador
        //deshabilitamos botones
        dissableButtons();
        // Actualizamos marcadores
        if (board[pos] == 1) {
            winsPlayer1++;
            document.getElementById('score_1').innerText = winsPlayer1;
        } else {
            winsPlayer2++;
            document.getElementById('score_2').innerText = winsPlayer2;
        };
        matches++;
        document.getElementById('games').innerText = matches;

    } else if (!winner() && turn == 9) {  //Empate
        //deshabilitamos botones
        dissableButtons();
        // Actualizamos marcadores
        matches++;
        document.getElementById('games').innerText = matches;

    } else {//cambiamos de jugador
        if (board[pos] % 2 == 1) {
            document.getElementById('scorePlayer2').className = 'player active_player';
            document.getElementById('scorePlayer1').className = 'player';
        } else {
            document.getElementById('scorePlayer1').className = 'player active_player';
            document.getElementById('scorePlayer2').className = 'player';
        }
    };
};

const winner = () => {
    if (board[0] == board[1] && board[0] == board[2] && board[0]) {
        return true;
    } else if (board[3] == board[4] && board[3] == board[5] && board[3]) {
        return true;
    } else if (board[6] == board[7] && board[6] == board[8] && board[6]) {
        return true;
    } else if (board[0] == board[3] && board[0] == board[6] && board[0]) {
        return true;
    } else if (board[1] == board[4] && board[1] == board[7] && board[1]) {
        return true;
    } else if (board[2] == board[5] && board[2] == board[8] && board[2]) {
        return true;
    } else if (board[0] == board[4] && board[0] == board[8] && board[0]) {
        return true;
    } else if (board[2] == board[4] && board[2] == board[6] && board[2]) {
        return true;
    } else return false;
};

document.querySelectorAll('button.grid_button').forEach(
    (obj, i) => obj.addEventListener('click', (e) => btnPressed(e, i))
);

const dissableButtons = () => {
    document.querySelectorAll('button.grid_button').forEach(
        obj => obj.disabled = true
    );
};

function nextGame(){
    turn = 0;
    board = [];
    document.getElementById('cell0').className = 'grid_button cell0';
    document.getElementById('cell1').className = 'grid_button cell1';
    document.getElementById('cell2').className = 'grid_button cell2';
    document.getElementById('cell3').className = 'grid_button cell3',
    document.getElementById('cell4').className = 'grid_button cell4';
    document.getElementById('cell5').className = 'grid_button cell5';
    document.getElementById('cell6').className = 'grid_button cell6';
    document.getElementById('cell7').className = 'grid_button cell7';
    document.getElementById('cell8').className = 'grid_button cell8';
    document.getElementById('scorePlayer1').className = 'player active_player';
    document.getElementById('scorePlayer2').className = 'player';
    document.querySelectorAll('button.grid_button').forEach(
        obj => obj.disabled = false);
};
