import { useState } from "react"

export default function Greeting()
{
    const [fullName,setFullName]=useState({name:"",lastname:""});
    const handleFirstName=(event)=>{
        setFullName({name:event.target.value,lastname:fullName.lastname})
        console.log(fullName);
    }
    const handleLastName=(event)=>{
        setFullName({name:fullName.name,lastname:event.target.value})
        console.log(fullName);

    }

    return<div>
        First Name:<br/>
        <input type="text" value={fullName.name} onChange={handleFirstName}></input><br/>
        Last Name:<br/>
        <input type="text" value={fullName.lastname} onChange={handleLastName}></input><br/>
        {(fullName.name.length>0||fullName.lastname.length>0)&&<span>Hello {fullName.name} {fullName.lastname}</span>}
    </div>
}