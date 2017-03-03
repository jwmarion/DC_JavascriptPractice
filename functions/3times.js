function thrice(func){
  func();
  func();
  func();
}
function hi(){
  console.log("Heyoooooo");
}

thrice(hi);
