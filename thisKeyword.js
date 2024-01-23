console.log("global obj at browser known as window=======>",this === window)

var a = 10
function b(){
    var x = 20;
    return x;
}

console.log(window.a)
console.log(a)
console.log(this.a)