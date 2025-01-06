import { useContext } from "react";
import { emp } from "./Parent";
export default function SubChild()
{

    let empContext= useContext(emp)
    function increaseSal(){
        let sal=empContext.empData.sal
        let newSalary=sal+(sal*0.1)
        empContext.changeEmpSal({...empContext.empData,sal:newSalary})
    }
    return<>
    <h1>This is Child Component</h1>
    <hr/>
    <p>Employee Name is:<b>{empContext.empData.name}</b></p>
    <p>Employee id is:<b>{empContext.empData.id}</b></p>
    <p>Employee salary is:<b>{empContext.empData.sal}</b></p>
    <button onClick={increaseSal}>increment salary</button>
    </>
}