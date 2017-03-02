
function ttt(board){
  // variables for rows, columns, and each diagonal.
  var rx = 0;
  var ry = 0;
  var rz = 0;
  var rn = 0;
  // get x and y values for rows
  for (var x = 0; x<board.length; x++){
    for (var y = 0; y<board.length; y++){
      // check rows
        rx += checkResult(x,y,board);
        ry += checkResult(y,x, board);
      }
      
  //checks diags. This only needs to run in the outer loop.
  rz += checkResult(x,x,board);
  rn += checkResult(x,(board.length - 1) - x, board);

  // check if there is a win; this checks every iteration
  if(rx === board.length || ry === board.length || rz === board.length || rn === board.length){
    return "X wins!";
  }
  else if(rx === board.length * -1 || ry ===board.length * -1 || rz ===board.length * -1  || rn === board.length * -1){
    return "O wins!";
  }
  //resets variables
  rx=0;
  ry=0;
  }
  //only runs if loops are not broken, thus no winnders.
  return ("Draw!");
}
//returns a -1 if an O is in a spot, and 1 if X is in a spot
function checkResult(a,b,item){
  if (item[a][b] == 'O'){
    return -1;
  }
  if (item[a][b] == 'X'){
    return 1;
  }
}

//test inputs
var b = ([
  ['O', 'X', 'O','O', 'X', 'O'],
  ['O', 'X', null,'O', 'O', null],
  ['X', null, 'X','O', null, 'O'],
  ['O', 'X', 'O','X', 'X', null],
  ['X','O', 'X','O', 'X', 'X'],
  ['O', 'X', null,'O', 'X', 'X']
]);

var c = ([
  ['X', 'X', 'O'],
  [null, 'X', null],
  ['O', 'X', 'O']]);

//runs tictactoe tester
console.log(ttt(b));
console.log(ttt(c));
