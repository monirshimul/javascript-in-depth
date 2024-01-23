function parent(){
    var a = 5;
    function child(){
        console.log(a)
    }
    child();
}
parent()

let random = 70
random = 40

function x (func){
    let aVal = 25
    return function b (inner){
        let z = 15
        return (func + inner + aVal - z)
    }
}

// console.log(x(30)(10))
let calling = x(30)
console.log(calling(10))


//  closure with loop and setTimeout function
//======================================================

function another (n){
    setTimeout(()=>{
        console.log(`calling after ${n} seconds`)
    }, n * 1000)
}

for(var i = 1; i<=4; i++){
    // another(i)
}

// =======================

function anotherTwo(){
    for(var loopI = 1; loopI<=4; loopI++){
        setTimeout(()=>{
            console.log("the value of i", loopI)
        }, loopI * 1000)
    }
}

// anotherTwo()


// ===========================

function anotherThree(){
    for(let inc = 1; inc<=4; inc++){
        // function innerLoop(val){
        //     setTimeout(()=>{
        //         console.log("The value of Inc", val)
        //     }, val * 1000)
        // }
        // innerLoop(inc)
        setTimeout(()=>{
            console.log("The value of Inc", inc)
        }, inc * 1000)
    }
}

anotherThree()

// ========================

function anotherFour(b,c){
    for(var a = b; a<=c; a++){
        function beforeIte(x){
            setTimeout(()=>{
                console.log("the incremental value", x)
            }, x * 1000)
        }
        beforeIte(a)
    }
}

anotherFour(1,4)






