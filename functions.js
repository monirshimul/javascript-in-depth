//  Function Statement================
function a(){
    console.log("this is just function statement")
}

a()

// Function Expression======================

let b = function(){
    console.log("this is func expression")
}

b()

// difference between func statement & func expression is hoisting==============
// diffA()
// diffB()
// diffC()

function diffA(){
    console.log("Fist One")
}

let diffB = function(){
    // Uncaught ReferenceError: Cannot access 'diffB' before initialization
    console.log("Second One")
}
// for var

var diffC = function(){
    // Uncaught TypeError: diffC is not a function
    console.log("Second One")
}


// Function Declaration================

// function decla(){

// }

// Anonymous Function====================

let anno = function (){
    console.log("annonymous")
}

anno()


// Named Func Expression================

let namedFunc = function funcName (){
    console.log("Named Func")
}

namedFunc()

// Defference between PArameters & Arguments==================

function differ (param1, param2){
    console.log(param1, param2)
}

differ("arg1", "arg2")


// First Class Function=================

function arguOne (){
    return 45
}

let FirstClassFunc = function(param1){
    return (param2)=>{
         console.log(param1() * param2)
    }
}

let gotReturn = FirstClassFunc(arguOne)
gotReturn(3)



// Arrow Function===============