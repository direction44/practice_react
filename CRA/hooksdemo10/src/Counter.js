import { useEffect, useState } from "react"

function Counter(){
   const[count,setCount]=useState(0)
   const handleCount=()=>{
    setCount((currCount)=>{
        return currCount+1
    })
   }
   useEffect(()=>{
    document.title=count
   },[])

//    useEffect(()=>{
//     document.title=count
//    },[count])
    return<div>
       <h1>Counter is:{count}</h1>
       <button onClick={handleCount}>increment count</button> 
    </div>
}

export default Counter