const input = process.argv.slice(2);
// console.log(input);

const countOnly = function (arg1) {
  
  let newArr1 = [];
  let integers = [];
  let floats = [];
  let negatives = [];
  let strings = [];

  for (let i = 0; i < arg1.length; i++) {
    if (!Number.isNaN(Number(arg1[i]))) {
      if (Number(arg1[i]) >= 1) {
        integers.push(Number(arg1[i]));
        // console.log(integers);
      } else if (Number(arg1[i]) < 0) {
        floats.push(Number(arg1[i]));
        // console.log(floats);
      } else if (Number(arg1[i]) > 0 && Number(arg1[i]) < 1) {
        negatives.push(Number(arg1[i]));
        // console.log(negatives);
      };
    } else {
      strings.push(arg1[i]);
      // console.log(strings);
    }  
  };

  return newArr1 = [integers, floats, negatives, strings];
};


console.log(countOnly(input));