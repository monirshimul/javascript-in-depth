
{

var a = 10
let b = 20
const c = 30
console.log(a)
console.log(b)
console.log(c)


}

console.log(a)
// console.log(b)
// Uncaught ReferenceError: b is not defined
// console.log(c)


// shadowing in var=================
var any = 1
any = 10
{
    var any = 100
    console.log(any)
}
console.log(any)

//  shadowing in let============

let forLet = 10
{
    let forLet = 11
    console.log(forLet)
    // put a debugger at 34 an see the deifference
}

console.log(forLet)


// illigal shadow=============

// let abc = 10
// {
//     var abc = 20
// }