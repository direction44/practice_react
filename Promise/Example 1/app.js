let respan,icnspan

function makePromise(n)
{
    return new Promise(function(resolve,reject){
        setTimeout(() => {
            
            if(n%2==0)
            {
                resolve("Hurrayy! I Completed the Projet")
            }
            else{
                reject("Sorry! I couldn't Complett the Projet")
            }
        }, 3000);
    })
}

function suceess(msg)
{
    respan.innerHTML+=msg
    icnspan.innerHTML="😊😊"
}
function failure(msg)
{
    respan.innerHTML+=msg
    icnspan.innerHTML="😒😒"
}
function doTask()
{
    let date=new Date()
    let sec=date.getSeconds()
    respan=document.getElementById("result")
    icnspan=document.getElementById("icn")
    icnspan.innerHTML=""
    respan.innerHTML="curr value: "+sec+"<br>"
    let pr=makePromise(sec) 
    console.log(pr)
    pr.then(suceess,failure)


}

