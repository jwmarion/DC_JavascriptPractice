//word histogram

function wordHistogram(entry){
  var dict = {};
  var ldict = {};
  var sent = entry.split(" ");

  for (var i in sent){
    if(sent[i] in dict === false){
      dict[sent[i]] = 1;
    }
    else{
      dict[sent[i]]++;
    }
  }


  for (var char in entry){
    if(entry[char] in ldict === false){
      ldict[entry[char]] = 1;
    }
    else{
      ldict[entry[char]]++;
    }
  }

  var biggy;
  var smalls;
  for (var g in ldict){
    if (g != ' '){
      if (biggy === undefined){
        biggy = g;
        smalls = g;
      }
      if (ldict[g] > ldict[biggy]){
        smalls = biggy;
        biggy = g;
      }
      else if(ldict[g] > ldict[smalls]){
        smalls = g;
      }
    }
  }

console.log("Most used letter: " + biggy + " : " + ldict[biggy]);
console.log("Second most used letter: " + smalls + " : " + ldict[smalls]);
  for(var word in dict){
    console.log(word + ": " + dict[word]);
  }
}



wordHistogram('to be or not to be');
