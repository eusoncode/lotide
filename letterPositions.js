const input = process.argv.slice(2);
const newSen = input.toString();

const countLetter = function(arg1) {
  const newSen2 = {};

  for (let i = 0; i < arg1.length; i++) {
    newSen2[arg1[i]] = i;
  }
  
  return newSen2;

};

console.log(countLetter(newSen));