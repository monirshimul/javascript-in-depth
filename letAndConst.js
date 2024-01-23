 
 
 
    // console.log(a)
    // letAndConst.js:4 Uncaught ReferenceError: Cannot access 'a' before initialization
 let a = 10
//  let a = 100
// Uncaught SyntaxError: Identifier 'a' has already been declared
 console.log(a)
 const b = 100
 var c = 1

//   for var ========================

function forVar(){
    var xyz = "var is function scoped"
    console.log("yes", xyz)
}
// console.log("find var", xyz)
// Uncaught ReferenceError: xyz is not defined
forVar()

// for let =======================

if(true){
    let xyz = "Let is block (any curly braces) scoped"
    xyz = "it's value can be re assigned or modified"
    console.log("yes", xyz)
}

// console.log("find let", xyz)
// Uncaught ReferenceError: xyz is not defined



//  for const ============================

if(true){
    const constatnt = 20
    console.log(constatnt)
    access(constatnt)
    // constatnt = 32
    // value can not be reassigned
    // Uncaught TypeError: Assignment to constant variable.
    
    // const er moddhe jodi obj thake tahole tar 
    // vitorer property change / update korte parbo
    const Married = "Married"
    const demoObj = {
        name:"monir",
        age:35,
        [Married] : true
    }
    const gender = "Gender"
    demoObj.age = 36
    demoObj.hobbies = ["playing", "coding"]
    demoObj[gender] = "Male"

    console.log("demoObj", demoObj)
}
// console.log(constatnt)
// Uncaught ReferenceError: constatnt is not defined
constatnt = 21
// ey constant kintu uporer if block er vitorer constant na
// eytai main confusion
// console.log("constatnt but change after block",constatnt)

aaa = 10
// console.log(aaa)

function access(n){
    console.log("calling from access",n)
}
access(constatnt)