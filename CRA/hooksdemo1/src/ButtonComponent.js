import { useState } from "react"
function ButtonComponent()
{
    const[text,setText]=useState("Click me")
    function changeText()
    {
        setText(new Date().toLocaleString())
    }
    return <button onClick={changeText}>{text}</button>
}
export default ButtonComponent