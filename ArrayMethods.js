// Array.map===============

// let arr = [1, 2, 3, 4, 5, 6];
// let res = arr.map((eachVal, eachInd, mainArray) => {
//   let c = mainArray[eachInd] + 1;
//   return c;
// });

// console.log("call", res);

// Array. find ==================

let arr = [1, 2, 3, 4, 5, 6];
let res = arr.find((eachVal, eachInd, mainArray) => {
  //   console.log(mainArray[(eachInd = 2)]);
  //   console.log(eachVal === 2);
  //   console.log(mainArray[eachInd] + eachVal * 2);
});

console.log("call", res);
