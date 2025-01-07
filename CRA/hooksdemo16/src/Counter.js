import { useReducer } from "react"
function increaseCounter(val,str){
switch(str){
    case"increase":return (val+1)
}
}
export default function Counter(){
    const[count,dispatchCounter]=useReducer(increaseCounter,0)
    function handleClick(){
        dispatchCounter("increase")
    }
    return<>
        <p>Counter:<b>{count}</b></p>   
        <button onClick={handleClick}>Increase</button> 
    </>
}