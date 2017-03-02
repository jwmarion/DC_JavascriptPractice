function letterHistogram2(entry){
  dict = {};
  for (var char in entry){
    if(entry[char] in dict === false){
      dict[entry[char]] = 1;
    }
    else{
      dict[entry[char]] += 1;
    }
  }
  for(var word in dict){
    console.log(word + ": " + dict[word]);
  }
}

letterHistogram2('tobeornottobe');
