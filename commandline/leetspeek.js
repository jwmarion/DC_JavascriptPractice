
function leet(word){
  var spl = word.split('');

  for (var x = 0; x<spl.length; x++){
    if (spl[x] == "a" ||spl[x] == 'A'){
      spl[x] = '4';
    }
    if (spl[x] == "e" ||spl[x] == 'E'){
      spl[x] = '3';
    }
    if (spl[x] == "g" ||spl[x] == 'G'){
      spl[x] = '6';
    }
    if (spl[x] == "l" ||spl[x] == 'L'){
      spl[x] = '1';
    }
    if (spl[x] == "o" ||spl[x] == 'O'){
      spl[x]='0';
    }
    if (spl[x] == "s" ||spl[x] == 'S'){
      spl[x]='5';
    }
    if (spl[x] == "t" ||spl[x] == 'T'){
      spl[x]='7';
    }
  }

  return spl;
}


console.log(leet("James Walter Marion the Third."));
