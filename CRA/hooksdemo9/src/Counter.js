import { useEffect, useState } from "react";

export default function Counter()
{
    const[count,setCount]=useState(0)
    useEffect(()=>{
        document.title=count
    })
    const hadleCount=()=>{
        setCount((currCount)=>{
            return currCount+1
        })
    }
    return<div>
        <h1>Counter:{count}</h1>
        <button onClick={hadleCount}>increment count</button>
    </div>
}