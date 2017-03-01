function splitAmount(bill, status, split){
  if (status == 'good'){
    console.log(((bill * 1.2)/split).toFixed(2));
  }
  else if (status == 'fair'){
    console.log(((bill * 1.15)/split).toFixed(2));
  }
  else if (status == 'bad'){
    console.log(((bill * 0.1)/split).toFixed(2));
  }
  else{
    console.log("Invalid input");
  }
}

splitAmount(100.00, 'fair', 3)
