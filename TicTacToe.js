const ticTacToe = {
    board: [
      ['   ', '   ', '   '],
      ['   ', '   ', '   '],
      ['   ', '   ', '   ']
    ],
  
    isUserTurn: false,
  
    userWinCount: 0,
    computerWinCount: 0,
    tieCount: 0,
    answers: ['X', 'O'],
  
    printBoard() {
      window.alert(
        `      ${this.board[0][0]}|${this.board[0][1]}|${this.board[0][2]}
      _______
      ${this.board[1][0]}|${this.board[1][1]}|${this.board[1][2]}
      _______
      ${this.board[2][0]}|${this.board[2][1]}|${this.board[2][2]}`);
  
    },
    
    isUserInputValid(row, collum) {
      return (row > 0 && row <= 3 && collum > 0 && collum <= 3);
    },
  
    
    clearBoard() {
  
      this.board = [
        ['   ', '   ', '   '],
        ['   ', '   ', '   '],
        ['   ', '   ', '   ']
      ];
  
    },
  
    computerTurn() {
      let randomRow, randomCollum;
  
      do {
        randomRow = Math.floor(Math.random() * 3);
        randomCollum = Math.floor(Math.random() * 3);
      } while (this.board[randomRow][randomCollum] !== '   ');
  
      this.board[randomRow][randomCollum] = 'X';
    },
  
    userTurn() {
      let uRow, uCollum;
      do {
        uRow = window.prompt("Please choose a row from 1-3");
        uCollum = window.prompt("Please choose a column from 1-3");
  
        if (!this.isUserInputValid(uRow, uCollum)) {
          window.alert("Please choose a column and row only between 1-3.");
        } else if (this.board[uRow - 1][uCollum - 1] !== '   ') {
          window.alert("please choose an empty space.");
        }
  
      } while (!this.isUserInputValid(uRow, uCollum) || (this.board[uRow - 1][uCollum - 1] !== '   '));
      this.board[uRow - 1][uCollum - 1] = 'O';
    },
  
    isBoardFull() {
      let fullCount = 0;
      this.board.forEach(row => {
        row.forEach(square => {
          if (square === 'X' || square === 'O') {
            fullCount++;
          }
        })
      });
  
      return (fullCount >= 9);
    },
    
    checkForWin() {

        for (let i=0, answers= ['X', 'O']; i< 2; i++){
            if ((this.board[0][0] === this.answers[i] && this.board[0][1] === this.answers[i] && this.board[0][2] === this.answers[i]) ||
                (this.board[1][0] === this.answers[i] && this.board[1][1] === this.answers[i] && this.board[1][2] === this.answers[i]) ||
                (this.board[2][0] === this.answers[i] && this.board[2][1] === this.answers[i] && this.board[2][2] === this.answers[i]) ||
                (this.board[0][0] === this.answers[i] && this.board[1][0] === this.answers[i] && this.board[2][0] === this.answers[i]) ||
                (this.board[0][1] === this.answers[i] && this.board[1][1] === this.answers[i] && this.board[2][1] === this.answers[i]) ||
                (this.board[0][2] === this.answers[i] && this.board[1][2] === this.answers[i] && this.board[2][2] === this.answers[i]) ||
                (this.board[0][0] === this.answers[i] && this.board[1][1] === this.answers[i] && this.board[2][2] === this.answers[i]) ||
                (this.board[2][0] === this.answers[i] && this.board[1][1] === this.answers[i] && this.board[0][2] === this.answers[i])) {
                if (i===0){
                    return 'computer';
                }
                else if (i===1){
                    return 'user'
                }
            }
            else if (this.isBoardFull()) {
                return 'tie';
            }
        }

    }
}
  
if (window.confirm("Bored? Want to play some tic tac toe?")) {
    do {
        do {
            if (ticTacToe.isUserTurn) {
            ticTacToe.userTurn();
            } else {
            ticTacToe.computerTurn();
            }
    
            ticTacToe.printBoard();
            ticTacToe.isUserTurn = !ticTacToe.isUserTurn;
    
        } while (!ticTacToe.checkForWin());


        let result = ticTacToe.checkForWin();
    
        switch (result) {
            case 'computer':
            window.alert('Good try! The computer is the winner');
            ticTacToe.computerWinCount++;
            break;
            case 'user':
            window.alert('Congrat! You have won');
            ticTacToe.userWinCount++;
            break;
            case 'tie':
            window.alert("Good effort! looks like its a draw.");
            ticTacToe.tieCount++;
            break;
            default:
            window.alert('cannot be determined');
        }
    
    
        window.alert(
            `    Your score: ${ticTacToe.userWinCount}
        computer's score: ${ticTacToe.computerWinCount}
        Draw: ${ticTacToe.tieCount}`)
    
        ticTacToe.clearBoard();
        ticTacToe.isUserTurn = false;
    
    
    } while (window.confirm("That was fun huh? Want to play again?"))

}