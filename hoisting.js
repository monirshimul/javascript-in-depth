


// Hoisting =======================================
// it is just behaviour or phenomenon in js, for whcih
// variable and function can be access even befor it initialized

amarName()
console.log("x",a)

var a = "Monir"
function amarName (){
    console.log(`Hello ${a}`)
}

// var amarName = ()=>{
//     console.log(`Hello ${a}`)
// }

function amarNameTwo (){
    console.log("amarNameTwo")
}

amarNameTwo()

// ===============================================

