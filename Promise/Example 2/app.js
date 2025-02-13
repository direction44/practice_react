let resspan
function doTask()
{
    let inp=document.getElementById("userinp")
    let data=inp.value
    resspan=document.querySelector("#result")
    resspan.innerHTML="curr value "+data+"<br/>"
    calculateSquare(data,displayResult)
}

function calculateSquare(data,callback)
{
    setTimeout(() => {
        
        let num=Number(data)
        if(!isNaN(num)){
            callback(num*num)
        }
        else{
            callback("Error! cannot calculate sqaure of non numeric data")
            return
        }
    }, 2000);
}

function displayResult(result)
{
    if(typeof result==="number")
    {
        resspan.innerHTML+="it's square is "+result
    }
    else{
        resspan.innerHTML+=result
    }
}