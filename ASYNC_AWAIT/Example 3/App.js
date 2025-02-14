async function doTask(){
    let respan=document.querySelector("#respan")
    let pr=await getEmoji()
    respan.innerHTML=pr
}

function getEmoji()
{
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve("😊😊")
        }, 3000);
    })
}