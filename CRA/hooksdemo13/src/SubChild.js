import { empContext } from "./Parent"
export default function SubChild()
{
    return<>
    <h1>This is SubChild Component</h1>
    <hr/>
    <empContext.Consumer>
    {   
        function ConsumerSubchild(value){
            return<>
            <p>
                Employee Name Is:<b>{value.name}</b>
            </p>
            <p>
                Employee id Is:<b>{value.id}</b>
            </p>
            <p>
                Employee salary Is:<b>{value.sal}</b>
            </p>
            </>
        }
    }    
</empContext.Consumer>
    </>
}