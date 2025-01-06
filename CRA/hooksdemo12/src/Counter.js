import { useEffect, useState } from "react"

export default function Counter(){
    const[Count,setCounter]=useState(0)
    function handleCount(evt)
    {
        setCounter(Count+1)
    }
    useEffect((e)=>{
        document.title=Count
        return function cleanUp(){
            console.log("Counter is:",Count);
        }
    })
    return<div>
        <p>Counter:<b>{Count}</b></p>
        <button onClick={handleCount}>increment</button>
    </div>
}