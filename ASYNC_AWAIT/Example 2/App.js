async function doSomething(){
    return 23
}
function doTask()
{

    let val=doSomething()
    val.then((res)=>{
        let respan=document.getElementById("respan")
        respan.innerHTML=res
        console.log(res)
    })
    console.log(val)
}