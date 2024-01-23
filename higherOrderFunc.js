

// Normal Higher Order Function ===========================

const radius = [10,3,8,7]
// the callback function (which func that hold the logic) that would be passed to a hof

const logicArray = 
    {
        area:(val)=> Math.PI * val * val,
        circumference:(val)=> 2 * Math.PI * val,
        diameter:(val)=> 2 * val
    }

    // console.log(logicArray["area"](6))

const calculateAny = (arr, logic)=>{
    const outputArray = [];
    for(let i = 0; i < arr.length; i++){
        outputArray.push(logicArray[logic](arr[i]))
    }
    return outputArray;
}

console.log("calculate area", calculateAny(radius, "area"))
console.log("calculate circumference", calculateAny(radius, "circumference"))
console.log("calculate diameter", calculateAny(radius, "diameter"))





// =============== How The Map Function work==================

let toCal = "area"
let chooseLogic = logicArray[toCal]
// console.log(chooseLogic)
console.log("by using Map Func",radius.map(chooseLogic))



// =============== Cloning the map =============


 Array.prototype.cloneMapCal = function(logic){
    
    const outputArray = [];
    for(let i = 0; i < this.length; i++){
        console.log("logic", logic)
        outputArray.push(logic(this[i]))
    }
    return outputArray;
 }

console.log("Clone Map", radius.cloneMapCal(chooseLogic))


const arr = new Array(4,"monir")
console.log(arr)
arr.forEach((v)=>console.log("for Each",v))
for(let i = 0; i < arr.length; i++){
    console.log(arr[i])
}
arr.map(val=>console.log("map",typeof(val)))
