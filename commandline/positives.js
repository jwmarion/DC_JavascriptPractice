
function pos(num){
  r=[];
  for (x = 1; x<num.length; x++){
    if (num[x] > 0){
      r.push(num[x]);
    }
  }
  return r;
}

a=[-1,2,-3,-4,5,6,7,-8,9,-10];
console.log(pos(a));
