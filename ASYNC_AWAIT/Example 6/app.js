let resspan
async function doTask()
{
    let inp=document.getElementById("userinp")
    let data=inp.value
    resspan=document.querySelector("#result")
    resspan.innerHTML="curr value "+data+"<br/>"
    calculateSquare(data).then((result)=>{
        resspan.innerHTML+="it's squaren is:"+result+"<br/>"
        calculateSquare(result).then((result)=>{
            resspan.innerHTML+="it's squaren is:"+result+"<br/>"
            calculateSquare(result).then((result)=>{
                resspan.innerHTML+="it's squaren is:"+result+"<br/>"
            })
        })
    }).catch((error)=>{
        resspan.innerHTML+=error
    })
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

