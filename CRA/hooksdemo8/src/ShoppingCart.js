import { useState } from "react"

export default function ShoppingCart()
{
    const[item,setItem]=useState("")
    const[AllItem,setAllItem]=useState([])
    const addItem=(event)=>{
        setItem(event.target.value)
    }
    const addAllItem=()=>{
        setAllItem([...AllItem,item])
        setItem("")
    }
    return<div>
       <h1>Your Shopping Cart</h1>
       <input type="text" value={item} onChange={addItem}></input>
       <button onClick={addAllItem}>click me</button>
       <h3>Your Shopping Cart Is:{(AllItem.length>0?"":"Empty")}</h3>
       <ul>{AllItem.map((x)=>{
        return <li>{x}</li>
       })}</ul>
    </div>   
}