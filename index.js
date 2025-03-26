
function distanceFromHqInBlocks(pickupLocation) {
  const hqLocation = 42;
  return Math.abs(pickupLocation - hqLocation);
}
console.log(distanceFromHqInBlocks(50)); 
console.log(distanceFromHqInBlocks(34));

function distanceFromHqInFeet(pickupLocation) {
  const feetPerBlock = 264;
  return distanceFromHqInBlocks(pickupLocation) * feetPerBlock;
}


console.log(distanceFromHqInFeet(50)); 
console.log(distanceFromHqInFeet(34)); 


function distanceTravelledInFeet(start, destination) {
  const feetPerBlock = 264;
  return Math.abs(destination - start) * feetPerBlock;
}


console.log(distanceTravelledInFeet(34, 38)); 
console.log(distanceTravelledInFeet(50, 42));
console.log(distanceTravelledInFeet(42, 50)); 


function calculatesFarePrice(start, destination) {
  const distance = distanceTravelledInFeet(start, destination);

  if (distance <= 400) {
      return 0; 
  } else if (distance > 400 && distance <= 2000) {
      return (distance - 400) * 0.02; 
  } else if (distance > 2000 && distance <= 2500) {
      return 25;
  } else {
      return "cannot travel that far"; 
  }
}


console.log(calculatesFarePrice(34, 32)); 
console.log(calculatesFarePrice(34, 38)); 
console.log(calculatesFarePrice(50, 58)); 
console.log(calculatesFarePrice(34, 60)); 



