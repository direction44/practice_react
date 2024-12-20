import { Component } from "react";

class Student extends Component{
    handleClick(name,roll,e)
    {
        console.log("Name",name,"Roll no is",roll);
    }
    render(){
        return <div>
            <p>Hello {this.props.name}, your roll no is {this.props.roll} <button onClick={(e)=>this.handleClick(this.props.name,this.props.roll,e)}>Click Me</button></p>
        </div>
    }
}

export default Student