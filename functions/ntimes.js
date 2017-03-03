function nice(func, n){
  for (var x = 0; x <n; x++){
    func();
  }
}

function hi(){
  console.log("Heyoooooo");
}

n = 5;
nice(hi, 5);
