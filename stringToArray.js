

let mixArray = [5, true, "Md.", 5, "Monirul", 45, "Islam"]
console.log(mixArray)
let doFilter = mixArray.filter(v=>typeof(v) === "string")
console.log(doFilter)
let fullName = doFilter.join(' ')
console.log("Full Name : ", fullName)