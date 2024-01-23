



// Filter =============

const arr = [13,11,4,8,16]
const output = arr.filter((x)=>{
    // return x % 2
    return x % 2 === 0
})
console.log(output)

// Reduce =======================
const reduceArray = [13,110,45,8,16]
// the sum of array and the max number of the array

// sum  solution without reduce func

const sumSolution = (arr)=>{
    let total = 0
    for(let i  = 0; i < arr.length; i++){
        total += arr[i]
    }
    return total
}
console.log("sum",sumSolution(reduceArray))

// sum  solution with reduce func

let soluSumRed = reduceArray.reduce((prevVal, currVal)=>{
    return prevVal += currVal
},0)

console.log("sum with reduce", soluSumRed)





// Max Solution without reduce
const maxSolu = (arr)=>{
    let maxVal = 0
    for(let i=0; i<arr.length;i++){
        if(maxVal < arr[i]){
            maxVal = arr[i]
        }
    }
    return maxVal
}
console.log("Max", maxSolu(reduceArray))

// Max solution with reduce

let soluMaxRed = reduceArray.reduce((prevVal, currVal)=>{
    if(prevVal < currVal){
        prevVal = currVal
    }
    return prevVal
},0)

console.log("max with reduce", soluMaxRed)





// More Realistic Expample ===========================

let userData = [
    {firstName:"Monirul",lastName:"Islam", age:35},
    {firstName:"Josna",lastName:"Akter", age:45},
    {firstName:"Moyna",lastName:"Begum", age:53},
    {firstName:"Lutfor",lastName:"Ali", age:45},
    {firstName:"Jobbar",lastName:"Shek", age:45},
    {firstName:"Abdul",lastName:"Karim", age:84},
]


// simple map that returns all the name

let retFullName = userData.map((data)=>{
    return data.firstName + " " + data.lastName
})

console.log("Full Name", retFullName)

// Return the age below 50 by using Filter

let blewAge = userData.filter((data)=>{
    return data.age <= 50
}).map((newData)=> newData.firstName + ' ' + newData.age)

console.log("below age", blewAge)

// find out the duplicate age value by reduce
// {35: 1, 45: 3, 53: 1, 84: 1}
let dupliReduce = userData.reduce((a,c)=>{
    
    if(a[c.age]){
        ++a[c.age]
    }else{
        a[c.age] = 1
    }
    return a
},{})

// console.log("acc",dupliReduce)

let findAgeBelow = userData.reduce((acc, crr)=>{
    if(crr.age > 50){
        acc.push(crr.firstName + ' ' + crr.age)
    }
    return acc
},[])

console.log("findAgeBelow",findAgeBelow)




