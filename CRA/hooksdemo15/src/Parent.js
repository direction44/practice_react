import React,{ useState } from "react"
import Child from "./Child"
export let emp=React.createContext()

export default function Parent()
{
    const[data,setData]=useState({name:"Disha",id:101,sal:20000})
    return<>
        <h1>This is Parent Component</h1>
        <p>Employee salary is:<b>{data.sal}</b></p>
        <hr/>

        <emp.Provider value={{empData:data,changeEmpSal:setData}}>
            <Child/>
        </emp.Provider>
    </>
}