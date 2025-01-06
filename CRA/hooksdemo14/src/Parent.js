import React,{ useState } from "react"
import Child from "./Child"
export let emp=React.createContext()
export default function Parent(){
    const[data,setdata]=useState({name:"Amit",id:101,sal:33000})
    return<>
    <h1>This is Parent Component</h1>
    <hr/>
    <emp.Provider value={data}>
        <Child/>
    </emp.Provider>
    </>
}