const input = process.argv.slice(2);

const pigLatinTranslator = function(arg1) {
  let firstGroup = '';
  let secondGroup = [];

  for (let g = 0; g < arg1.length; g++) {
    // return arg1[0];
    for (let i = 0; i < arg1[g].length; i++) {
      arg1[g][i] !== arg1[g][0] ? firstGroup += arg1[g][i] : secondGroup.push(arg1[g][i] + 'ay');
      // if (arg1[g][i] !== arg1[g][0]) {
      //   // return arg1[g][i];
      //   firstGroup += arg1[g][i];
      // } else {
      //   // return arg1[g][0];
      //   secondGroup.push(arg1[g][i] + 'ay');
      // }
    }
    
    firstGroup += secondGroup.splice(0, 1) + ', ';
  }

  console.log(firstGroup.replace(/,/g, ''));
};

pigLatinTranslator(input);