
function cypher2(text){
  list=[];
  for(var x = 0; x< text.length;x++){
    list.push((text[x].charCodeAt(0))-13);
    if (list[list.length -1] < 97){
      list[list.length-1] = (list[list.length-1])+26;
    }
    list[list.length -1] = String.fromCharCode(list[list.length -1]);
  }
  return list;
}

var text="abc";

console.log(cypher2(text));
