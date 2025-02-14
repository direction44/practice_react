let resspan
async function doTask()
{
    let inp=document.getElementById("userinp")
    let data=inp.value
    resspan=document.querySelector("#result")
    resspan.innerHTML="curr value "+data+"<br/>"
    try{
        let pr=await calculateSquare(data)
        resspan.innerHTML+="it's square is "+pr
    }
    catch(err){
        resspan.innerHTML+=err
    }      
}

function calculateSquare(data)
{
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            let num=Number(data)
            if(!isNaN(num)){
                resolve(num*num)
            }
            else{
                reject("Error! cannot calculate sqaure of non numeric data")
            }
        }, 2000);
    })
}

