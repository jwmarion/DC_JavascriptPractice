function rps(thr){
  rand = Math.floor(Math.random() * (4 - 1)) + 1;
  r = thr - rand;

  if (r === 0){
    return "Draw!";
  }
  else if (r === -1){
    return "Lose!";
  }
  else if (r === 1){
    return "Win!";
  }
  else if (r ===2){
    return "Lose!";
  }
  else if (r ===-2){
    return "Win!";
  }

}



// 1 = rock; 2 = paper; 3 = scissors
t = 1;
console.log(rps(t));
