function banner(message){
  row = '';
  mRow = '*' +message +'*';
  l = message.length;

  for(var x = 0; x < l +2; x++){
    row = row + '*';
  }

  console.log(row + '\n' + mRow +'\n' +row);


}

banner("James");
