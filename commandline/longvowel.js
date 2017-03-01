
function voweler(word){

  var t = word;

  t = t.replace('oo','ooooo');
  t = t.replace('ee','eeeee');

  return t;

}


console.log(voweler('cheese'));
