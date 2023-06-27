///TESTING CODE
const assertArraysEqual = function(arg1, arg2) {
  const printOutput = (eqArrays(arg1, arg2)) ? "✅ Both arguments are the same" : "❌ Both arguments are not the same";
  console.log(printOutput);
  return printOutput;
};

const eqArrays = function(arg1, arg2) {
  let newArray1 = [];
  let newArray2 = [];

  //Check if the length of both arrays match
  if (arg1.length !== arg2.length) {
    return false;
  } else {
    //Loop through the arrays and compare each element
    for (let i = 0; i < arg1.length; i++) {
      arg1[i] === arg2[i] ? (newArray1[i] = arg1[i], newArray2[i] = arg2[i]) : false;
    }
  }
  //check if both arrays match
  return newArray1.toString() === newArray2.toString();
};

const letterPositions = function(sentence) {
  const results = {};

  for (const index in sentence) {
    let letter = sentence[index].toLowerCase();

    if (letter !== ' ' && letter > 'a' && letter < 'z') {
      !results[letter] ? results[letter] = [Number(index)] : results[letter].push(Number(index));
    }
  }
  // console.log(results);
  return results;
};

//RUN TEST
assertArraysEqual(letterPositions("hello").l, [2, 3]);
assertArraysEqual(letterPositions("lighthouse in the house").h, [3, 5, 15, 18]);