// How functions work in JS ❤️ & Variable Environment 

if(true){
    // var a = 1
    // const a = 1
    let a = 1
    a = 10
    console.log("first this a", a)
}
a = 21
ab();
ac();
console.log("outer a", a)

function ab(){
    a = 23
    console.log("this a", this)
    console.log("first func a",a)
}
function ac(){
    let a = 100
    a = 35
    console.log("second func a",a)
    
}

