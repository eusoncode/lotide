// const input = process.argv.slice(2);
// // console.log(input);

// const countOnly = function(arg1) {
  
//   let newArr1 = [];

//   for (let i = 0; i < arg1.length; i++) {
//     if (!Number.isNaN(Number(arg1[i]))) {
//       if (Number(arg1[i]) >= 1) {
//         newArr1.push(Number(arg1[i]));
//         // console.log(integers);
//       } else if (Number(arg1[i]) < 0) {
//         newArr1.push(Number(arg1[i]));
//         // console.log(floats);
//       } else if (Number(arg1[i]) > 0 && Number(arg1[i]) < 1) {
//         newArr1.push(Number(arg1[i]));
//         // console.log(negatives);
//       }
//     } else {
//       newArr1.push(arg1[i]);
//       // console.log(strings);
//     }
//   }

//   return newArr1;

// };

// const reverse = function (func) {
//   let newReverse = [];

//   for (const item of func) {
//     if (!isNaN(item)) {
//       newReverse.push(Number(item));
//       // console.log(newReverse);
//     } else {
//       let newRev = '';
//       for (let i = item.length - 1; i >= 0; i--) {
//         newRev += item[i];
//       }
//       newReverse.push(newRev);
//     }
//   };
  
//   return newReverse;
// }

// console.log(reverse(countOnly(input)));


const input = process.argv.slice(2);

//Reverses the arguments passed in the CL

const reverse = function(arg1) {
  for (let i = 0; i < arg1.length; i++) {
    let reversedString = "";
    for (let j = arg1[i].length - 1; j >= 0; j--) {
      reversedString += arg1[i][j];
    }
    console.log(reversedString);
  }
};

reverse(input);