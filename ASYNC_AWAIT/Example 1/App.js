async function doSomething(){
    return 23
}

let val=doSomething()
val.then((res)=>{
    console.log(res)
})
console.log(val)