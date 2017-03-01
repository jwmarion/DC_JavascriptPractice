function square(side){
  var row = '';

  for(var x = 0; x<side;x++){
    row = row + '*'
  }
  for(var y = 0; y<side;y++){
    console.log(row);
  }
}

square(5);
