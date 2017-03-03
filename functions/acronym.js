function strJoin(strs,sep){
  return strs.reduce(function(currentValue,name){
    return currentValue + sep + name[0];
  }, sep);

}

s = ['national', 'aeronautics', 'space', 'administration'];

console.log(strJoin(s, ""));
