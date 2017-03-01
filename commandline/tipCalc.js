function totalAmount(bill, status){
  if (status == 'good'){
    console.log((bill * 0.2).toFixed(2));
  }
  else if (status == 'fair'){
    console.log((bill * 0.15).toFixed(2));
  }
  else if (status == 'bad'){
    console.log((bill * 0.1).toFixed(2));
  }
  else{
    console.log("Invalid input");
  }
}

totalAmount(100.00, 'good')
