
function ttt(board){
  for (var x = 0; x<3;x++){
    if(board[x][0] == board[x][1] && board[x][1] == board[x][2]){
      return (board[x][0] + " wins!");
    }
    if(board[0][x] == board[1][x] && board[1][x] == board[2][x]){
      return (board[0][x] + " wins!");
    }
  }

  if (board[0][0] == board[1][1] && board[0][0] == board[2][2]){
    return (board[0][0] + " wins!");
  }
  else if (board[0][2] == board[1][1] && board[0][0] == board[2][0]){
    return (board[0][0] + " wins!");
  }
  else{
    return "Draw!";
  }
}



b = ([
  ['O', 'X', 'O'],
  ['O', 'X', null],
  [null, 'X', 'O']
]);

console.log(ttt(b));
