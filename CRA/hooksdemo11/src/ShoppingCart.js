import { useEffect, useState } from "react"

export default function ShoppingCart()
{
    const[userData,serUserData]=useState({name:"",price:""})
    function handleNameChange(event)
    {
        serUserData({...userData,name:event.target.value})
    }

    function handlePriceChange(event)
    {
        serUserData({...userData,price:event.target.value})
    }
    const[allItem,setAllItem]=useState([])
    function addAllItem(e)
    {
        e.preventDefault()
        setAllItem([...allItem,userData])
        serUserData({name:"",price:""})
    }
    useEffect(()=>{
        let total=0
        allItem.map((item)=>{
            total+=Number(item.price)
        })
        document.querySelectorAll("b")[1].innerHTML=total
    })
    return<div>
        <form onSubmit={addAllItem}>
        <h1>Shopping Cart</h1>
         Type Item Name Is:<br/>
        <input type="text" value={userData.name} onChange={handleNameChange}></input><br/>
        Type Item Price Is:<br/>
        <input type="number" value={userData.price} onChange={handlePriceChange}></input>
        <br/>
        <button>AddItem</button>
        </form>
        <table border={2}>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>{
                
            allItem.map((item)=>{
                return<tr>
                    <td>{item.name}</td>
                    <td>{item.price}</td>
                </tr>
            })
                }
            </tbody>
        </table>
        <span>
            Total Item Is:<b>{allItem.length}</b>
        </span>
        &nbsp; &nbsp;
        <span>
        Cart Total Is:<b></b>    
        </span> 
       </div>
}