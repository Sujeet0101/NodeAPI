//Find the pair with the given sum in an array.

const pair = (integerArray, target) => {
  let pairFound = false;

  for (let i = 0; i < integerArray.length; i++) {
    for (let j = i + 1; j < integerArray.length; j++) {
      if (integerArray[i] + integerArray[j] === target) {
        console.log(
          `Output: Pair found(${integerArray[i]},${integerArray[j]})`
        );
        pairFound = true;
        break;
      }
    }
    if (pairFound) {
      break;
    }
  }
  if (!pairFound) {
    console.log("Output: Pair not found.");
  }
};
