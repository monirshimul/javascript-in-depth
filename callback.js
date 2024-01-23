// normal Button with call back
let count = 0
document.getElementById("buttonOne").addEventListener("click",(e)=>{
    console.log("The Button is clicked ",e, ++count)
})

const letAddClosure = ()=>{
    console.log("Always Calling---")
    let addMore = 0
    let btnId = document.getElementById("buttonTwo")
    btnId.addEventListener("click",()=>{
        console.log("The Button is Clicked ", ++addMore)
    })
}

letAddClosure()