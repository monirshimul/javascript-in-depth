//============ for primitive values
// let a = 32;
// let b = a;
// b = 14;
// console.log(a === b, a, b);

//================== for reference values ===
// let first = {
//   a: "monir",
//   b: 32,
// };

// let second = first;
// second.b = 20;

// console.log(second === first);
// console.log(first, second);

// ======== shallow copy with obj ==========

// let sourceObj = {
//   name: "monir",
//   age: 35,
//   hobbies: {
//     playing: ["cricket", "gaming"],
//   },
// };

// let shallowCopy = { ...sourceObj };
// console.log("are they same", shallowCopy === sourceObj);
// shallowCopy.name = "rakib";
// shallowCopy.hobbies.playing = "cricket";
// shallowCopy.gender = ["male"];
// console.log("there values", sourceObj, shallowCopy);

// ============= shallow copy with array =================

// ============== deep copy ===========

let deepSrc = {
  firstName: "habib",
  lastName: "Chowdhury",
  properties: {
    land: ["mirpur", "dhanmondi"],
  },
};

let deepSrcCopy = JSON.parse(JSON.stringify(deepSrc));
console.log("are they same", deepSrc === deepSrcCopy);
deepSrcCopy.lastName = "";
deepSrcCopy.properties.land.push("Uttara");
console.log("there values", deepSrc, deepSrcCopy);
