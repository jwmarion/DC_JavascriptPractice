

function cypher(text){
  list=[];
  for(var x = 0; x< text.length;x++){
    list.push((text[x].charCodeAt(0))+13);
    if (list[list.length -1] > 122){
      list[list.length-1] = (list[list.length-1])-26;
    }
    list[list.length -1] = String.fromCharCode(list[list.length -1]);
  }
  return list;
}

var text='nop';

console.log(cypher(text));
