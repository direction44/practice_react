let resspan
function doTask()
{
    let inp=document.getElementById("userinp")
    let data=inp.value
    resspan=document.querySelector("#result")
    resspan.innerHTML="curr value "+data+"<br/>"
    let pr=calculateSquare(data)
    pr.then((sqr)=>{
        resspan.innerHTML+="it's square is "+sqr

    }).catch((err)=>{
        resspan.innerHTML+=err
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

