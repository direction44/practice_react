import { useState } from "react"

function Counter()
{
    const[count,setCount]=useState(0)
    function changeCounter()
    {
        setCount(count+1)
    }
    return<div>
        <p>{count}</p>
        <button onClick={changeCounter}>Click Me</button>
    </div>
}

export default Counter