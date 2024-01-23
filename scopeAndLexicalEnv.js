function b(){
    console.log("func one",a)
    var x = 12
    a = 27 
    c()
    // console.log("z",z)
    function c(){
        var z = 78
        console.log("func two", a,x)
    }
}

let a = 10
b()



// ==============================

function one(){
    let firstVar = 42
    two()
    function two(){
        console.log("First val", firstVar)
    }
}

one()


const example = 10
{
    const example = 20
    {
        const example = 30
        console.log(example)
    }
}
