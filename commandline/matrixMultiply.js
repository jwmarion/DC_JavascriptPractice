// #list12.py
// max1 = [[1,2],[3,4]]
// max2 = [[5,6],[7,8]]
// maxr = [[0,0],[0,0] ]
//
// for x in xrange(0,2):
//     for y in xrange(0,2):
//         for z in xrange(0,2):
//             maxr[x][y] += max1[x][z] * max2[z][y]
// print maxr

function matrixMult(a,b){
  var r  = [[0,0],[0,0]];

  for (x = 0; x<2; x++){
    for (y=0; y<2; y++){
      for(z=0; z<2; z++){
        r[x][y] += a[x][z] * b[z][y];
      }
    }
  }
  return r;
}

j=[[1,2],[3,4]];
k=[[5,6],[7,8]];


console.log(matrixMult(j,k));
