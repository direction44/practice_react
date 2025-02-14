async function doTask(){
    let respan=document.querySelector("#respan")
    try{
        let pr=await getEmoji()
        respan.innerHTML=pr
    }
    catch(err){
        respan.innerHTML=err
    }
}

function getEmoji()
{
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
        let num=Math.round(Math.random()*1)
        console.log(num,"nummmmm")
        if(num!=0)
        {
            resolve("😊😊")
        }
        else{
            
            reject("😒😒")
        }
        }, 3000);
    })
}