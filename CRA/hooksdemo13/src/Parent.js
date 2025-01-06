import React,{ useState } from "react"
import Child from "./Child";
export let empContext=React.createContext();

export default function Parent()
{
    const[data,setData]=useState({name:"Disha",id:101,sal:55000})
    
    return<>
        <h1>This is parent Component</h1>
        <hr/>
        <empContext.Provider value={data}>
            <Child/>
        </empContext.Provider>
    </>
}