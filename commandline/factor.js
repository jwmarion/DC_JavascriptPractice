function factor(num){
  var res = [];

  for (var x = 1; x<= Math.sqrt(num); x++){
    if (num % x === 0){
      res.push(x);
      if (num/x != x){
        res.push(num / x);
      }
    }
  }
  console.log(res);
}

factor(10000);
