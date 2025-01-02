import { useState } from "react"
function ButtonComponent()
{
    const[text,setText]=useState("Click me")
    
    return <button onClick={()=>setText(new Date().toLocaleString())}>{text}</button>
}
export default ButtonComponent