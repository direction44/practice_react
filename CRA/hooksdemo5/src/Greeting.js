import { useState } from "react"


export default function Greeting()
{
   const[firstName,setFirstName]=useState("")
   const[lastName,setLastName]=useState("")
   const handleFirstName=(evt)=>{
    setFirstName(evt.target.value)
   }
   const handleLastName=(evt)=>{
    setLastName(evt.target.value)
   }
    return<div>
        First Name:<br/>
        <input type="text" value={firstName} onChange={handleFirstName}></input> <br/>
        First Name:<br/>
        <input type="text" value={lastName} onChange={handleLastName}></input>
        {(firstName.length>0||lastName.length>0)&&<span>Hello {firstName} {lastName}</span>}
    </div>
}