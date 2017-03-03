// Generate a Box
//
// Write a box function to return a string represent a box - but do not print it. The function should take two arguments:
//
// width
// height
// It should return a string, which if printed using console.log, would display the box in the terminal. For example:
//
// > box(3, 4)
// '***
// ***
// ***
// ***'
// > console.log(box(4, 4))
// ****
// ****
// ****
// ****
// You may use the following range function as is:
//




function box(x,y){
  a = range(1, x*y+1);

  return a.map(function(a){
    if (a % x === 0 && a != 1){
      return "*\n";
    }
    else{
      return '*';
    }
  });
}

console.log(box(3,4).reduce(function(a,b){return a + b;}));
