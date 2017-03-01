
function add(a,b){
  r = [];
  for (x = 0; x<2; x++){
    for (y=0; y<2; y++){
      r.push(a[x][y] + b[x][y]);
    }
  }
  return [[r[0],r[1]],[r[2],r[3]]];
}

j = [[1,2], [3,4]];
k = [[5,6],[7,8]];

console.log(add(j,k));
