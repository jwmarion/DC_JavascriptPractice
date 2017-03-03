function cypher(text){
  list=[];
  text.forEach(function(a){
    list.push((a.charCodeAt(0))+13);
    if (list[list.length -1] > 122){
      list[list.length-1] = (list[list.length-1])-26;
    }
    list[list.length -1] = String.fromCharCode(list[list.length -1]);
  }

);
return list;
}

var t='secret';

var a = t.split('');

console.log(cypher(a).reduce(function(a,b){ return a+b;}));
