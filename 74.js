const factorial = (num) => {
  if (num <= 1) {
    return 1;
  }
  return num * factorial(num - 1); 
}

const digitsFactorialSum = (num) => {
  let sum = 0;
  let remainingDigits = num;

  while (remainingDigits >= 10) {
    let lastDigit = remainingDigits % 10;
    sum += factorial(lastDigit);
    remainingDigits = Math.floor(remainingDigits / 10);
  }

  sum += factorial(remainingDigits);
  return sum;
}


const chainLength = (num) => {
  let current = num;
  let arr = [];
  const dfsMap = new Map();

  while (!arr.includes(current)) {
    arr.push(current);
    if (!dfsMap.has(current)) {
      dfsMap.set(current, digitsFactorialSum(current))
    }
    current = dfsMap.get(current);
  }

  return arr.length;
}

const numberOfChainsWithExactLengthBetweenBounds = (target, lowerBound, upperBound) => {
  let count = 0;
  for (let i = lowerBound; i < upperBound; i++) {
    if (chainLength(i) === target) {
      count++
    }
  }
  return count;
}

console.log(numberOfChainsWithExactLengthBetweenBounds(60, 0, 1000000));