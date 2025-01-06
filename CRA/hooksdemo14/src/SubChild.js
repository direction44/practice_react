import { useContext } from "react"
import { emp } from "./Parent"
export default function SubChild()
{
    let empContext=useContext(emp)
    return<>
        <h1>This is Subchild Component</h1>
        <hr/>
        <p>Employee Name Is:{empContext.name}</p>
        <p>Employee id Is:{empContext.id}</p>
        <p>Employee salary Is:{empContext.sal}</p>
    </>
}