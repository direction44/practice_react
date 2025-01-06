import { useContext } from "react"
import { emp } from "./Parent"
import SubChild from "./SubChild"
export default function Child()
{
   let empContext= useContext(emp)
    return<>
    <h1>This is Child Component</h1>
    <hr/>
    <p>Employee Name is:<b>{empContext.empData.name}</b></p>
    <p>Employee id is:<b>{empContext.empData.id}</b></p>
    <p>Employee salary is:<b>{empContext.empData.sal}</b></p>
    <hr/>
    <SubChild/>
    </>
}