import { useReducer } from "react"
function counterfun(val,str){
    switch(str)
    {
        case"increase": return (val+1);
        break
        case"decrease": return (val-1);
        break
        case"reset": return (0);
    }
}
export default function Counter(){
    const[Count,dispatchCount]=useReducer(counterfun,0)
    return<>
        <p>Counter:{Count}</p>
        <button onClick={()=>{
            dispatchCount("increase")
        }}>increase</button>
        <button onClick={()=>{
            dispatchCount("decrease")
        }}>decrease</button>
        <button onClick={()=>{
            dispatchCount("reset")
        }}>reset</button>
    </>
}