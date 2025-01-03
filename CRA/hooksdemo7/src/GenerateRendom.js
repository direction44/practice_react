import { useState } from "react"

export default function GenerateRandom()
{
    const[randomNum,setRandomNum]=useState([])
    const hanleGenerateNumIs=()=>
    {
        let ranNum=Math.floor(Math.random()*10)+1
        setRandomNum([...randomNum,ranNum])
    }
    return<div>
        <button onClick={hanleGenerateNumIs}>Generate Random</button>
        <ul>{randomNum.map((x)=>{
            return <li>{x}</li>
        })}</ul>
    </div>
}