function box(side){
  var row = '';
  var row2 = '';

  for(var x = 0; x<side;x++){
    row = row + '*';
  }

  for(var z=0;z<=side;z++){
    if (z===0 || z==side){
      row2 = row2 + ('*');
    }
    else{
      row2 = row2 + (' ');
    }
  }

  for(var y = 0; y<=side -1; y++){
    if (y === 0 || y == side-1){
      console.log(row);
    }
    else{
      console.log(row2);
    }
  }
}


box(10);
