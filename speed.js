function calculate(speed) {
 if (speed<=0 || speed> 180 || isNaN(speed) ) {
    return 'Invalid Speed'
 }
  
    else if (speed <= 70) {
    return "OK";
  } else {
    points = Math.floor((speed - 70) / 5);

    if (points > 12) {
      return "Lisence Suspended";
    }
  }
}
console.log(calculate(400));
