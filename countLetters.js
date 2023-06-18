const input = process.argv.slice(2);
newSen = input.toString().toLowerCase();
console.log(newSen);

function countLetter(arg1) {
  const newSen2 = {};

  for (let i = 0; i < arg1.length; i++) {
    if (arg1[i] >= 'a' && arg1[i] <= 'z') {
      if (newSen2[arg1[i]]) {
        newSen2[arg1[i]]++;
      } else {
        newSen2[arg1[i]] = 1;
      }
    }
  };
  
  return newSen2;
};

console.log(countLetter(newSen));